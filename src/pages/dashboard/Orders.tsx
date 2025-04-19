
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FileText, Plus, Download, MessageSquare } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

// Define order type
interface Order {
  id: number;
  type: string;
  date: string;
  status: "Jarayonda" | "Tayyor" | "Tekshirilmoqda" | "Bekor qilingan";
  accountant: string;
  accountantId: number;
  price?: string;
  description?: string;
  files?: Array<{name: string, url: string}>;
}

export default function Orders() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");
  
  // Mock data for orders
  const orders: Order[] = [
    {
      id: 1,
      type: "Soliq hisoboti",
      date: "2025-03-15",
      status: "Jarayonda",
      accountant: "Bekzod Turaev",
      accountantId: 1,
      price: "150,000",
      description: "QQS deklaratsiyasini tayyorlash va topshirish"
    },
    {
      id: 2,
      type: "Moliyaviy balans",
      date: "2025-03-10",
      status: "Tayyor",
      accountant: "Nilufar Karimova",
      accountantId: 2,
      price: "200,000",
      description: "1-chorak uchun balans hisoboti",
      files: [
        {name: "balans_2025_q1.pdf", url: "#"},
        {name: "foyda_zarar_2025_q1.pdf", url: "#"}
      ]
    },
    {
      id: 3,
      type: "Ish haqi hisobi",
      date: "2025-02-28",
      status: "Tekshirilmoqda",
      accountant: "Jamshid Xakimov",
      accountantId: 3,
      price: "180,000",
      description: "Mart oyi uchun xodimlar ish haqi hisobi"
    },
    {
      id: 4,
      type: "Konsultatsiya",
      date: "2025-02-20",
      status: "Bekor qilingan",
      accountant: "Bekzod Turaev",
      accountantId: 1,
      price: "120,000",
      description: "Soliq optimizatsiyasi bo'yicha konsultatsiya"
    }
  ];
  
  // Filter orders based on active tab
  const filteredOrders = orders.filter(order => {
    if (activeTab === "all") return true;
    if (activeTab === "active") return order.status === "Jarayonda" || order.status === "Tekshirilmoqda";
    if (activeTab === "completed") return order.status === "Tayyor";
    if (activeTab === "canceled") return order.status === "Bekor qilingan";
    return true;
  });

  // Function to get badge color based on status
  const getStatusBadgeClass = (status: Order["status"]) => {
    switch (status) {
      case "Tayyor":
        return "bg-green-100 text-green-800";
      case "Jarayonda":
        return "bg-blue-100 text-blue-800";
      case "Tekshirilmoqda":
        return "bg-yellow-100 text-yellow-800";
      case "Bekor qilingan":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  
  // Function to contact the accountant
  const contactAccountant = (accountantId: number) => {
    navigate(`/dashboard/chat/${accountantId}`);
  };

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

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="all">Barcha buyurtmalar</TabsTrigger>
          <TabsTrigger value="active">Faol</TabsTrigger>
          <TabsTrigger value="completed">Yakunlangan</TabsTrigger>
          <TabsTrigger value="canceled">Bekor qilingan</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {filteredOrders.length > 0 ? (
            filteredOrders.map(order => (
              <Card key={order.id} className="hover:bg-gray-50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div className="flex items-center">
                      <div className="bg-accountblue-100 p-2 rounded-md mr-4">
                        <FileText className="text-accountblue-600 h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-medium">{order.type}</h3>
                        <p className="text-sm text-gray-500">Sana: {order.date}</p>
                        <p className="text-sm text-gray-600 mt-1">{order.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                      <div className="text-right">
                        <p className="text-sm font-medium">{order.accountant}</p>
                        <Badge className={getStatusBadgeClass(order.status)}>
                          {order.status}
                        </Badge>
                        {order.price && (
                          <p className="text-sm text-gray-600 mt-1">{order.price} so'm</p>
                        )}
                      </div>
                      <div className="flex flex-col gap-2">
                        <Link to={`/dashboard/orders/${order.id}`}>
                          <Button variant="outline" size="sm" className="w-full">
                            Ko'rish
                          </Button>
                        </Link>
                        {order.status === "Tayyor" && order.files && (
                          <Button variant="outline" size="sm" className="w-full">
                            <Download className="mr-2 h-3 w-3" />
                            Yuklab olish
                          </Button>
                        )}
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="w-full"
                          onClick={() => contactAccountant(order.accountantId)}
                        >
                          <MessageSquare className="mr-2 h-3 w-3" />
                          Xabar yozish
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-gray-500 mb-4">Bu kategoriyada buyurtmalar topilmadi.</p>
                <Link to="/dashboard/new-order">
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Yangi buyurtma yaratish
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="active" className="space-y-4">
          {filteredOrders.length > 0 ? (
            filteredOrders.map(order => (
              <Card key={order.id} className="hover:bg-gray-50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div className="flex items-center">
                      <div className="bg-accountblue-100 p-2 rounded-md mr-4">
                        <FileText className="text-accountblue-600 h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-medium">{order.type}</h3>
                        <p className="text-sm text-gray-500">Sana: {order.date}</p>
                        <p className="text-sm text-gray-600 mt-1">{order.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                      <div className="text-right">
                        <p className="text-sm font-medium">{order.accountant}</p>
                        <Badge className={getStatusBadgeClass(order.status)}>
                          {order.status}
                        </Badge>
                        {order.price && (
                          <p className="text-sm text-gray-600 mt-1">{order.price} so'm</p>
                        )}
                      </div>
                      <div className="flex flex-col gap-2">
                        <Link to={`/dashboard/orders/${order.id}`}>
                          <Button variant="outline" size="sm" className="w-full">
                            Ko'rish
                          </Button>
                        </Link>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="w-full"
                          onClick={() => contactAccountant(order.accountantId)}
                        >
                          <MessageSquare className="mr-2 h-3 w-3" />
                          Xabar yozish
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-gray-500">Faol buyurtmalar mavjud emas.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {filteredOrders.length > 0 ? (
            filteredOrders.map(order => (
              <Card key={order.id} className="hover:bg-gray-50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div className="flex items-center">
                      <div className="bg-accountblue-100 p-2 rounded-md mr-4">
                        <FileText className="text-accountblue-600 h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-medium">{order.type}</h3>
                        <p className="text-sm text-gray-500">Sana: {order.date}</p>
                        <p className="text-sm text-gray-600 mt-1">{order.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                      <div className="text-right">
                        <p className="text-sm font-medium">{order.accountant}</p>
                        <Badge className={getStatusBadgeClass(order.status)}>
                          {order.status}
                        </Badge>
                        {order.price && (
                          <p className="text-sm text-gray-600 mt-1">{order.price} so'm</p>
                        )}
                      </div>
                      <div className="flex flex-col gap-2">
                        <Link to={`/dashboard/orders/${order.id}`}>
                          <Button variant="outline" size="sm" className="w-full">
                            Ko'rish
                          </Button>
                        </Link>
                        {order.files && (
                          <Button variant="outline" size="sm" className="w-full">
                            <Download className="mr-2 h-3 w-3" />
                            Yuklab olish
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-gray-500">Yakunlangan buyurtmalar mavjud emas.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="canceled" className="space-y-4">
          {filteredOrders.length > 0 ? (
            filteredOrders.map(order => (
              <Card key={order.id} className="hover:bg-gray-50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div className="flex items-center">
                      <div className="bg-accountblue-100 p-2 rounded-md mr-4">
                        <FileText className="text-accountblue-600 h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-medium">{order.type}</h3>
                        <p className="text-sm text-gray-500">Sana: {order.date}</p>
                        <p className="text-sm text-gray-600 mt-1">{order.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                      <div className="text-right">
                        <p className="text-sm font-medium">{order.accountant}</p>
                        <Badge className={getStatusBadgeClass(order.status)}>
                          {order.status}
                        </Badge>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Link to={`/dashboard/orders/${order.id}`}>
                          <Button variant="outline" size="sm" className="w-full">
                            Ko'rish
                          </Button>
                        </Link>
                        <Link to="/dashboard/new-order">
                          <Button variant="ghost" size="sm" className="w-full">
                            <Plus className="mr-2 h-3 w-3" />
                            Qayta buyurtma
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-gray-500">Bekor qilingan buyurtmalar mavjud emas.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
