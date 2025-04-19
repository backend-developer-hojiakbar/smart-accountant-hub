
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Star, MessageSquare, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Accountants() {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for accountants
  const accountants = [
    {
      id: 1,
      name: "Bekzod Turaev",
      avatar: "/placeholder.svg",
      rating: 4.8,
      reviewCount: 56,
      experience: 5,
      specializations: ["Soliq hisobotlari", "Moliyaviy hisobotlar"],
      available: true,
      verified: true
    },
    {
      id: 2,
      name: "Nilufar Karimova",
      avatar: "/placeholder.svg",
      rating: 4.9,
      reviewCount: 87,
      experience: 7,
      specializations: ["Moliyaviy hisobotlar", "Buxgalteriya hisobi"],
      available: true,
      verified: true
    },
    {
      id: 3,
      name: "Jamshid Xakimov",
      avatar: "/placeholder.svg",
      rating: 4.5,
      reviewCount: 32,
      experience: 3,
      specializations: ["Soliq hisobotlari", "Ish haqi hisobi"],
      available: false,
      verified: true
    }
  ];

  const filteredAccountants = accountants.filter(accountant =>
    accountant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Buxgalterlar</h1>
      
      <div className="mb-6">
        <Input
          placeholder="Ism bo'yicha qidirish..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredAccountants.map(accountant => (
          <Card key={accountant.id} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="relative mr-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-accountblue-100">
                    <Avatar className="w-full h-full">
                      <AvatarImage src={accountant.avatar} alt={accountant.name} />
                      <AvatarFallback>{accountant.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                  </div>
                  {accountant.verified && (
                    <div className="absolute -bottom-1 -right-1 bg-accountblue-500 rounded-full p-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{accountant.name}</h3>
                    <Badge className={accountant.available ? "bg-green-500" : "bg-gray-400"}>
                      {accountant.available ? "Bo'sh" : "Band"}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center mt-1">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium">{accountant.rating}</span>
                    </div>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{accountant.reviewCount} ta baho</span>
                  </div>
                  
                  <div className="mt-1 text-sm text-gray-600">
                    Tajriba: {accountant.experience} yil
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-2">
                    {accountant.specializations.map(spec => (
                      <Badge key={spec} variant="outline" className="bg-accountblue-50 text-accountblue-700 border-accountblue-200">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="mt-4 flex justify-end space-x-2">
                    <Link to={`/dashboard/accountants/${accountant.id}`}>
                      <Button variant="outline">Ko'proq ma'lumot</Button>
                    </Link>
                    <Link to={`/dashboard/chat/${accountant.id}`}>
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
