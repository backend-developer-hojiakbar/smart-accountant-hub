
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Send, Paperclip } from "lucide-react";

export default function Chat() {
  const [message, setMessage] = useState("");
  
  // Mock data for chats
  const chats = [
    {
      id: 1,
      name: "Bekzod Turaev",
      avatar: "/placeholder.svg",
      unread: 2,
      lastMessage: "Hisobotingiz tayyor bo'ldi",
      time: "12:30"
    },
    {
      id: 2,
      name: "Nilufar Karimova",
      avatar: "/placeholder.svg",
      unread: 0,
      lastMessage: "Xarajatlar haqida ma'lumot kerak",
      time: "Kecha"
    },
    {
      id: 3,
      name: "Jamshid Xakimov",
      avatar: "/placeholder.svg",
      unread: 0,
      lastMessage: "Rahmat, hujjatlarni oldim",
      time: "28/03"
    }
  ];
  
  // Mock data for current chat messages
  const currentChatMessages = [
    {
      id: 1,
      sender: "accountant",
      text: "Salom, qanday yordam bera olaman?",
      time: "11:30"
    },
    {
      id: 2,
      sender: "me",
      text: "Salom, soliq hisobotim haqida so'ramoqchi edim",
      time: "11:32"
    },
    {
      id: 3,
      sender: "accountant",
      text: "Albatta, qaysi oy uchun hisobot kerak?",
      time: "11:33"
    },
    {
      id: 4,
      sender: "me",
      text: "Mart oyi uchun, QQS to'lovchiman",
      time: "11:35"
    },
    {
      id: 5,
      sender: "accountant",
      text: "Tushundim. Mart oyi uchun hisobotni tayyorlash uchun menga quyidagi ma'lumotlar kerak bo'ladi: sotuvlar va xaridlar haqida ma'lumot, bank ko'chirmasi va oylik xarajatlar ro'yxati.",
      time: "11:40"
    }
  ];
  
  const handleSendMessage = () => {
    if (message.trim() === "") return;
    console.log("Sending message:", message);
    setMessage("");
    // Here you would typically add the message to the chat
  };

  return (
    <div className="h-[calc(100vh-140px)]">
      <h1 className="text-2xl font-bold mb-4">Chat</h1>
      
      <div className="grid grid-cols-4 gap-6 h-full">
        {/* Chat list */}
        <div className="col-span-1 border rounded-lg overflow-hidden">
          <div className="p-4 border-b">
            <Input placeholder="Qidirish..." />
          </div>
          <div className="overflow-y-auto h-[calc(100%-65px)]">
            {chats.map(chat => (
              <div key={chat.id} className={`p-4 border-b hover:bg-gray-50 cursor-pointer ${chat.id === 1 ? 'bg-gray-50' : ''}`}>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={chat.avatar} />
                    <AvatarFallback>{chat.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-sm">{chat.name}</h3>
                      <span className="text-xs text-gray-500">{chat.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                  </div>
                </div>
                {chat.unread > 0 && (
                  <div className="flex justify-end mt-1">
                    <span className="bg-accountblue-600 text-white text-xs px-2 py-1 rounded-full">
                      {chat.unread}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Chat content */}
        <div className="col-span-3 border rounded-lg flex flex-col overflow-hidden">
          <div className="p-4 border-b bg-white flex items-center justify-between">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>BT</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">Bekzod Turaev</h3>
                <p className="text-xs text-gray-500">Online</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            <div className="space-y-4">
              {currentChatMessages.map(msg => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[70%] p-3 rounded-lg ${
                      msg.sender === 'me' 
                        ? 'bg-accountblue-600 text-white rounded-tr-none' 
                        : 'bg-white rounded-tl-none'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className={`text-xs mt-1 text-right ${msg.sender === 'me' ? 'text-accountblue-200' : 'text-gray-400'}`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-4 bg-white border-t">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Paperclip className="h-5 w-5" />
              </Button>
              <Input
                placeholder="Xabar yozing..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mx-2"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSendMessage();
                }}
              />
              <Button 
                onClick={handleSendMessage} 
                size="icon" 
                className="rounded-full"
                disabled={message.trim() === ""}
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
