
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FileText, Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function Orders() {
  // Mock data for orders
  const orders = [
    {
      id: 1,
      type: "Soliq hisoboti",
      date: "2025-03-15",
      status: "Jarayonda",
      accountant: "Bekzod Turaev"
    },
    {
      id: 2,
      type: "Moliyaviy balans",
      date: "2025-03-10",
      status: "Tayyor",
      accountant: "Nilufar Karimova"
    },
    {
      id: 3,
      type: "Ish haqi hisobi",
      date: "2025-02-28",
      status: "Tekshirilmoqda",
      accountant: "Jamshid Xakimov"
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Mening buyurtmalarim</h1>
        <Link to="/dashboard/new-order">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Yangi buyurtma
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">Barcha buyurtmalar</TabsTrigger>
          <TabsTrigger value="active">Faol</TabsTrigger>
          <TabsTrigger value="completed">Yakunlangan</TabsTrigger>
          <TabsTrigger value="canceled">Bekor qilingan</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {orders.map(order => (
            <Card key={order.id} className="hover:bg-gray-50 transition-colors">
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="bg-accountblue-100 p-2 rounded-md mr-4">
                      <FileText className="text-accountblue-600 h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">{order.type}</h3>
                      <p className="text-sm text-gray-500">Sana: {order.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm font-medium">{order.accountant}</p>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        order.status === "Tayyor" ? "bg-green-100 text-green-800" : 
                        order.status === "Jarayonda" ? "bg-blue-100 text-blue-800" : 
                        "bg-yellow-100 text-yellow-800"
                      }`}>
                        {order.status}
                      </span>
                    </div>
                    <Link to={`/dashboard/orders/${order.id}`}>
                      <Button variant="outline" size="sm">
                        Ko'rish
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="active">
          <Card>
            <CardHeader>
              <CardTitle>Faol buyurtmalar</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Bu yerda faqat faol holatdagi buyurtmalar ko'rsatiladi.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed">
          <Card>
            <CardHeader>
              <CardTitle>Yakunlangan buyurtmalar</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Bu yerda yakunlangan buyurtmalar ko'rsatiladi.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="canceled">
          <Card>
            <CardHeader>
              <CardTitle>Bekor qilingan buyurtmalar</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Bu yerda bekor qilingan buyurtmalar ko'rsatiladi.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
