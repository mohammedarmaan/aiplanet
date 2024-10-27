import React, { useState, useRef, useEffect } from "react";
import Header from "./components/Header";
import { Input } from "./components/ui/input";
import { Send } from "lucide-react";
import { Avatar } from "./components/ui/avatar";
import { Button } from "./components/ui/button";
import Chat from "./components/Chat";

function App() {
  const [messages, setMessages] = useState([
  
  ]);

  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    const newUserMessage = {
      id: messages.length + 1,
      sender: "user",
      content: inputMessage.trim(),
    };

    const newAiMessage = {
      id: messages.length + 2,
      sender: "ai",
      content:
        "Thank you for your message. As an AI assistant, I'm here to help answer your questions and provide information about AI Planet and our Large Language Model technology.",
    };

    setMessages([...messages, newUserMessage, newAiMessage]);
    setInputMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };
  

  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <Chat messages={messages} messagesEndRef= {messagesEndRef}/>
      <div className="px-4 sm:px-6 lg:px-20 py-4 border-t">
        <div className="relative max-w-full mx-auto">
          <Input
            className="w-full pr-10 py-3"
            placeholder="Send a message..."
            aria-label="Message input"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <Button
            size="icon"
            className="absolute right-1 top-1/2 flex justify-center items-center h-8 w-8 -translate-y-1/2"
            aria-label="Send message"
            onClick={handleSendMessage}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
