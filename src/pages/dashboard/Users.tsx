
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { User, Users, CheckCircle, X } from "lucide-react";

export default function UsersAdmin() {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for users
  const users = [
    {
      id: 1,
      name: "Aziz Ismoilov",
      email: "aziz@example.com",
      role: "client",
      avatar: "/placeholder.svg",
      status: "active",
      joinDate: "2025-01-15",
      verified: true
    },
    {
      id: 2,
      name: "Bekzod Turaev",
      email: "bekzod@example.com",
      role: "accountant",
      avatar: "/placeholder.svg",
      status: "active",
      joinDate: "2025-02-10",
      verified: true
    },
    {
      id: 3,
      name: "Nodira Azimova",
      email: "nodira@example.com",
      role: "client",
      avatar: "/placeholder.svg",
      status: "inactive",
      joinDate: "2025-03-05",
      verified: false
    },
    {
      id: 4,
      name: "Jamshid Xakimov",
      email: "jamshid@example.com",
      role: "accountant",
      avatar: "/placeholder.svg",
      status: "pending",
      joinDate: "2025-04-01",
      verified: false
    }
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const translateRole = (role: string) => {
    switch(role) {
      case "client": return "Mijoz";
      case "accountant": return "Buxgalter";
      case "admin": return "Administrator";
      default: return role;
    }
  };

  const translateStatus = (status: string) => {
    switch(status) {
      case "active": return "Faol";
      case "inactive": return "Faol emas";
      case "pending": return "Kutilmoqda";
      default: return status;
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Foydalanuvchilar boshqaruvi</h1>
      
      <div className="flex justify-between mb-6">
        <Input
          placeholder="Ism yoki email bo'yicha qidirish..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
        <Button>
          <User className="mr-2 h-4 w-4" />
          Yangi foydalanuvchi qo'shish
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Mijozlar</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-accountblue-600" />
            <div className="text-2xl font-bold">
              {users.filter(u => u.role === "client").length}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Buxgalterlar</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-accountblue-600" />
            <div className="text-2xl font-bold">
              {users.filter(u => u.role === "accountant").length}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Yangi foydalanuvchilar</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-accountblue-600" />
            <div className="text-2xl font-bold">
              {users.filter(u => u.status === "pending").length}
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">Barchasi</TabsTrigger>
          <TabsTrigger value="clients">Mijozlar</TabsTrigger>
          <TabsTrigger value="accountants">Buxgalterlar</TabsTrigger>
          <TabsTrigger value="pending">Tasdiqlash kutilmoqda</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 px-4 text-left font-medium">Foydalanuvchi</th>
                      <th className="py-3 px-4 text-left font-medium">Email</th>
                      <th className="py-3 px-4 text-left font-medium">Rol</th>
                      <th className="py-3 px-4 text-left font-medium">Status</th>
                      <th className="py-3 px-4 text-left font-medium">Qo'shilgan sana</th>
                      <th className="py-3 px-4 text-right font-medium">Amallar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map(user => (
                      <tr key={user.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <Avatar className="h-8 w-8 mr-3">
                              <AvatarImage src={user.avatar} />
                              <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{user.name}</div>
                              <div className="flex items-center text-xs">
                                {user.verified ? (
                                  <div className="flex items-center text-green-600">
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    Tasdiqlangan
                                  </div>
                                ) : (
                                  <div className="flex items-center text-gray-500">
                                    <X className="h-3 w-3 mr-1" />
                                    Tasdiqlanmagan
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{user.email}</td>
                        <td className="py-3 px-4">
                          <Badge className={`${
                            user.role === "admin" ? "bg-purple-100 text-purple-800 hover:bg-purple-100" :
                            user.role === "accountant" ? "bg-blue-100 text-blue-800 hover:bg-blue-100" :
                            "bg-gray-100 text-gray-800 hover:bg-gray-100"
                          }`}>
                            {translateRole(user.role)}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            user.status === "active" 
                              ? "bg-green-100 text-green-800" :
                            user.status === "inactive"
                              ? "bg-red-100 text-red-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}>
                            {translateStatus(user.status)}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{user.joinDate}</td>
                        <td className="py-3 px-4 text-right">
                          {user.status === "pending" ? (
                            <div className="space-x-2">
                              <Button variant="outline" size="sm">Rad etish</Button>
                              <Button size="sm">Tasdiqlash</Button>
                            </div>
                          ) : (
                            <Button variant="outline" size="sm">Tahrirlash</Button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="clients">
          <Card>
            <CardHeader>
              <CardTitle>Mijozlar</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Bu yerda faqat mijozlar ko'rsatiladi.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="accountants">
          <Card>
            <CardHeader>
              <CardTitle>Buxgalterlar</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Bu yerda faqat buxgalterlar ko'rsatiladi.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="pending">
          <Card>
            <CardHeader>
              <CardTitle>Tasdiqlash kutilayotgan foydalanuvchilar</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Bu yerda faqat tasdiqlash kutilayotgan foydalanuvchilar ko'rsatiladi.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
