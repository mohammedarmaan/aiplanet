# AI Planet Frontend 🌍🤖

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)

AI Planet is a React-based frontend application that provides a chat interface for interacting with an AI, along with PDF file upload and preview functionality.

## 📋 Table of Contents
- [Features](#-features)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#-project-structure)
- [Components](#-components)
- [Usage](#-usage)
- [API Integration](#-api-integration)

## ✨ Features

- 💬 Chat interface for interacting with AI
- 📤 PDF file upload and preview
- 🔄 Real-time chat updates
- 🎨 Responsive design using Tailwind CSS

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd <repository-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── avatar.js
│   │   ├── button.js
│   │   ├── input.js
│   │   └── hover-card.js
│   ├── Chat.jsx
│   └── Header.jsx
├── assets/
│   └── gb-notebook.gif
├── App.jsx
└── index.js
```

## 🧩 Components

- **App**: Main component that orchestrates the application flow
- **Header**: Handles file upload and preview functionality
- **Chat**: Renders the chat interface and messages
- **UI Components**: Reusable UI components (Avatar, Button, Input, HoverCard)

## 🖥 Usage

1. **File Upload**: 
   - Click on the "Upload PDF" button in the header
   - Select a PDF file from your device
   - The file will be uploaded and processed

2. **Chat Interface**:
   - Type your message in the input field at the bottom
   - Press Enter or click the send button to submit your message
   - The AI will respond, and the chat will update in real-time

3. **File Preview**:
   - After uploading a file, hover over the file name in the header
   - Click "Preview" to view the PDF in a modal

## 🔌 API Integration

The application integrates with a backend API:

- **File Upload**: POST request to `http://localhost:8000/extract-text`
- **Chat**: POST request to `http://localhost:8000/search` for AI responses

Ensure that the backend server is running and accessible at the specified URL.

## 🎨 Styling

This project uses Tailwind CSS for styling. Custom styles can be added in the respective component files or in a separate CSS file if needed.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/yourusername/your-repo-name/issues) if you want to contribute.

## 📝 License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

---

Made with ❤️ by [Your Name]
