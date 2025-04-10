# 💬 AI Chat Web App

An intelligent chat interface built with **React** and **Material UI**, allowing users to interact with different AI personas. This app connects to a backend API that returns AI-generated responses based on user input.

---

## 🚀 Features

- 🧠 **AI Chat Interface** — Ask questions and receive real-time responses.
- 🎭 **Persona Selection** — Choose between:
  - Hitesh Sir
  - Piyush Sir
  - Normal AI
- ✨ **Prompt Suggestions** — Click to auto-fill common queries.
- 📋 **Copy to Clipboard** — Easily copy both questions and answers.
- 💬 **Markdown Support** — Bold text, line breaks, and formatting handled cleanly.

---

## 🌐 API Endpoint

The app sends requests to the following API:

```
https://chat-web-app-five.vercel.app/chat
```

Github Link

```
https://github.com/SurajPatel04/chatWebAppBackend
```

**POST Payload Example:**

```json
{
  "user": "Your question here",
  "model_type": "AI" // or "Hitesh Sir", "Piyush Sir"
}
```

---

## 🖼️ Preview

---

## 🧩 Built With

- [React](https://reactjs.org/)
- [Material UI](https://mui.com/)
- [Axios](https://axios-http.com/)

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ai-chat-app.git
cd ai-chat-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm start
```

The app will open in your browser at [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
src/
│
├── assets/                 # Persona images
│   ├── channels4_profile.jpg
│   ├── piyush.jpeg
│   └── AI.jpeg
│
├── components/
│   └── ChatPage.jsx        # Main chat UI
│
└── App.jsx
```

## 🔗 Links

- 🔗 [GitHub Repository](https://github.com/SurajPatel04/chatWebAppFrontend) _(Update with your repo link)_
- 🌍 [Live Demo] (https://persona-link.vercel.app/)

---

## 📌 Future Enhancements

- Save chat history
- Dark mode
- Login system
- Model switching with explanation

---

## 👨‍💻 Author

Built with by **[Suraj Patel]**

---
