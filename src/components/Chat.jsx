import React from 'react'
// import { useState, useRef, useEffect } from "react";
import { Avatar } from "../components/ui/avatar";

const Chat = ({messages, messagesEndRef}) => {
    

  return (
    <main className="flex-grow flex flex-col py-4 px-4 sm:px-6 lg:px-20 overflow-auto">
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
  )
}

export default Chat