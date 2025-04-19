
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Building } from "lucide-react";
import { Link } from "react-router-dom";

export default function Clients() {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for clients
  const clients = [
    {
      id: 1,
      name: "Baraka Group LLC",
      contactName: "Alisher Karimov",
      avatar: "/placeholder.svg",
      industry: "Savdo",
      activeTasks: 2,
      completedTasks: 8
    },
    {
      id: 2,
      name: "Digital Solutions",
      contactName: "Nodira Azimova",
      avatar: "/placeholder.svg",
      industry: "IT",
      activeTasks: 1,
      completedTasks: 5
    },
    {
      id: 3,
      name: "Milliy Taomlar",
      contactName: "Ravshan Tohirov",
      avatar: "/placeholder.svg",
      industry: "Oziq-ovqat",
      activeTasks: 0,
      completedTasks: 12
    }
  ];

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.contactName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Mijozlarim</h1>
      
      <div className="mb-6">
        <Input
          placeholder="Kompaniya yoki kontakt nomi bo'yicha qidirish..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredClients.map(client => (
          <Card key={client.id} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="mr-4">
                  <Avatar className="h-16 w-16 border-2 border-accountblue-100">
                    <AvatarImage src={client.avatar} />
                    <AvatarFallback>
                      <Building className="h-8 w-8 text-accountblue-500" />
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{client.name}</h3>
                      <p className="text-sm text-gray-600">{client.contactName}</p>
                      
                      <div className="flex items-center mt-1">
                        <Badge variant="outline" className="bg-accountblue-50 text-accountblue-700 border-accountblue-200">
                          {client.industry}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex space-x-4">
                        <div>
                          <p className="text-sm text-gray-500">Faol topshiriqlar</p>
                          <p className="text-2xl font-bold text-center text-accountblue-600">{client.activeTasks}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Yakunlangan</p>
                          <p className="text-2xl font-bold text-center text-green-600">{client.completedTasks}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-end space-x-2">
                    <Link to={`/dashboard/clients/${client.id}`}>
                      <Button variant="outline">Batafsil ma'lumot</Button>
                    </Link>
                    <Link to={`/dashboard/chat/${client.id}`}>
                      <Button>
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Murojaat qilish
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
