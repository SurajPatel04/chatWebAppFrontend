import axios from "axios";
import { useState } from "react";
import {
  Button,
  Stack,
  TextField,
  Box,
  CircularProgress,
  Typography,
  Chip,
  Select,
  Alert,
  MenuItem,
  Snackbar,
  Toolbar,
  AppBar,
  IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import GitHubIcon from "@mui/icons-material/GitHub";
import HiteshSirIcon from "../assets/channels4_profile.jpg";
import PiyushSirIcon from "../assets/piyush.jpeg";
import AI from "../assets/AI.jpeg";
import ApiIcon from "@mui/icons-material/Api";

function ChatPage() {
  const [text, setText] = useState("");
  const [hold, setHold] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [personas, setPersonas] = useState("AI");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSubmit = async () => {
    if (!hold.trim()) return;

    setLoading(true);
    const currentInput = hold;
    setHold("");

    try {
      const response = await axios.post(
        "https://chat-web-app-five.vercel.app/chat",
        {
          user: currentInput,
          model_type: personas,
        },
      );

      const formattedOutput = response.data
        .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
        .replace(/\n/g, "<br />");

      // Add to chat history
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { question: currentInput, answer: formattedOutput },
      ]);
    } catch (error) {
      console.error("API Error:", error);
    }

    setLoading(false);
  };

  const handleChange = (event) => {
    setHold(event.target.value);
  };

  const handleCopy = (textToCopy) => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setOpenSnackbar(true);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handlePersonasChange = (event) => {
    setPersonas(event.target.value);
  };

  const suggestedPrompts = [
    "Explain Google transformer",
    "Tell Me all the HTTP methods",
    "Give me fastAPI all the method code",
  ];

  return (
    <>
      {/* Top Navbar with Persona & GitHub */}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#3f51b5",
          color: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            AI Chat
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography sx={{ mr: 1 }}>Select Persona:</Typography>
            <Select
              value={personas}
              onChange={handlePersonasChange}
              size="small"
              sx={{
                backgroundColor: "#fff",
                borderRadius: 1,
                minWidth: 150,
                color: "#333",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(0, 0, 0, 0.23)",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#3f51b5",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#3f51b5",
                },
              }}
            >
              <MenuItem value="Hitesh Sir">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={HiteshSirIcon}
                    alt="Hitesh Sir"
                    width={24}
                    height={24}
                    style={{ marginRight: 8, borderRadius: "50%" }}
                  />
                  Hitesh Sir
                </Box>
              </MenuItem>
              <MenuItem value="Piyush Sir">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={PiyushSirIcon}
                    alt="Piyush Sir"
                    width={24}
                    height={24}
                    style={{ marginRight: 8, borderRadius: "50%" }}
                  />
                  Piyush Sir
                </Box>
              </MenuItem>
              <MenuItem value="AI">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={AI}
                    alt="AI"
                    width={24}
                    height={24}
                    style={{ marginRight: 8, borderRadius: "50%" }}
                  />
                  Normal Chat
                </Box>
              </MenuItem>
            </Select>
            <IconButton
              color="inherit"
              onClick={() => window.open("https://github.com/", "_blank")}
            >
              <GitHubIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "linear-gradient(to bottom, #f5f2ff, #ffffff)",
          paddingTop: 8,
          paddingBottom: 6,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "900px",
            padding: 4,
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: "bold", mb: 3, color: "#333" }}
          >
            Ask our AI anything
          </Typography>

          <Box
            sx={{
              textAlign: "center",
              mb: 2,
              flexWrap: "wrap",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {suggestedPrompts.map((prompt, index) => (
              <Chip
                key={index}
                label={prompt}
                onClick={() => {
                  setHold(prompt);
                  setTimeout(handleSubmit, 200);
                }}
                sx={{
                  margin: 0.5,
                  backgroundColor: "#e0e0e0",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  color: "#333",
                  "&:hover": {
                    backgroundColor: "#d0d0d0",
                  },
                }}
              />
            ))}
          </Box>

          {chatHistory.map((chat, index) => (
            <Box
              key={index}
              sx={{
                padding: 2,
                borderRadius: 2,
                mb: 3,
                backgroundColor: "rgba(255,255,255,0.7)",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <Typography align="right" sx={{ color: "#555" }}>
                {chat.question}
              </Typography>
              <Typography align="right">
                <IconButton
                  size="small"
                  onClick={() => handleCopy(chat.question)}
                >
                  <ContentCopyIcon fontSize="small" />
                </IconButton>
              </Typography>
              <br />
              <Typography
                component="div"
                sx={{ fontSize: "1rem", color: "#333" }}
                dangerouslySetInnerHTML={{ __html: chat.answer }}
              />
              <Typography align="left">
                <IconButton
                  size="small"
                  onClick={() => handleCopy(chat.answer)}
                >
                  <ContentCopyIcon fontSize="small" />
                </IconButton>
              </Typography>
            </Box>
          ))}

          <Stack direction="row" spacing={2}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Ask me anything about your projects..."
              value={hold}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSubmit();
              }}
              sx={{
                backgroundColor: "#fff",
                borderRadius: 1,
                boxShadow: "inset 0 0 3px rgba(0,0,0,0.1)",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(0, 0, 0, 0.23)",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#3f51b5",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#3f51b5",
                },
              }}
            />
            <Button
              onClick={handleSubmit}
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
              sx={{
                paddingX: 3,
                borderRadius: 1,
                boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
              }}
            >
              SEND
            </Button>
          </Stack>
        </Box>

        {/* Snackbar */}
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={openSnackbar}
          autoHideDuration={2000}
          onClose={() => setOpenSnackbar(false)}
          message="Copied to clipboard!"
        />
      </Box>
    </>
  );
}

export default ChatPage;
