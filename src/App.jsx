import React, { useState, useRef, useEffect } from "react";
import Header from "./components/Header";
import { Input } from "./components/ui/input";
import { Send } from "lucide-react";
import { Avatar } from "./components/ui/avatar";
import { Button } from "./components/ui/button";

function App() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "user", content: "explain like im 5" },
    {
      id: 2,
      sender: "ai",
      content:
        "Our own Large Language Model (LLM) is a type of AI that can learn from data. We have trained it on 7 billion parameters which makes it better than other LLMs. We are featured on aiplanet.com and work with leading enterprises to help them use AI securely and privately. We have a Generative AI Stack which helps reduce the hallucinations in LLMs and allows enterprises to use AI in their applications.",
    },
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
      <main className="flex-grow flex flex-col p-4 px-4 sm:px-6 lg:px-20 overflow-auto">
        <div className="flex-grow space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex items-start space-x-2 max-w-full ${
                  message.sender === "user"
                    ? "flex-row-reverse space-x-reverse"
                    : ""
                }`}
              >
                <Avatar
                  className={
                    message.sender === "user"
                      ? "bg-blue-500 flex items-center justify-center"
                      : "flex items-center justify-center bg-green-500"
                  }
                >
                  {message.sender === "user" ? "U" : "AI"}
                </Avatar>
                <div
                  className={`p-3 rounded-lg break-words max-w-[75%] ${
                    message.sender === "user" ? "bg-blue-100" : ""
                  }`}
                  style={{ overflowWrap: "break-word" }}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </main>
      <div className="px-4 sm:px-6 lg:px-8 py-4 border-t">
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
