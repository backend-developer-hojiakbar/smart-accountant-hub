
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Download, TrendingUp, ArrowUpRight } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function Income() {
  // Mock data for income chart
  const chartData = [
    { name: "Yan", income: 450000 },
    { name: "Fev", income: 520000 },
    { name: "Mar", income: 580000 },
    { name: "Apr", income: 620000 },
    { name: "May", income: 540000 },
    { name: "Iyun", income: 700000 },
    { name: "Iyul", income: 780000 },
    { name: "Avg", income: 820000 },
    { name: "Sen", income: 750000 },
    { name: "Okt", income: 800000 },
    { name: "Noy", income: 850000 },
    { name: "Dek", income: 900000 }
  ];

  // Mock data for income history
  const incomeHistory = [
    {
      id: 1,
      clientName: "Baraka Group LLC",
      description: "Soliq hisoboti",
      amount: "150,000",
      date: "2025-04-15",
      status: "To'langan"
    },
    {
      id: 2,
      clientName: "Digital Solutions",
      description: "Moliyaviy balans",
      amount: "200,000",
      date: "2025-03-20",
      status: "To'langan"
    },
    {
      id: 3,
      clientName: "Milliy Taomlar",
      description: "Ish haqi hisobi",
      amount: "120,000",
      date: "2025-02-25",
      status: "Kutilmoqda"
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Daromadlarim</h1>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Hisobotni yuklab olish
          </Button>
          <Button>
            <ArrowUpRight className="mr-2 h-4 w-4" />
            Pul yechib olish
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Oylik daromad
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">850,000 so'm</div>
            <div className="flex items-center text-green-600 text-sm mt-1">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>+12% o'tgan oyga nisbatan</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Yillik daromad
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7,810,000 so'm</div>
            <div className="flex items-center text-green-600 text-sm mt-1">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>+23% o'tgan yilga nisbatan</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Kutilayotgan daromad
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">120,000 so'm</div>
            <p className="text-xs text-gray-500 mt-1">
              1 ta to'lov kutilmoqda
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Daromad dinamikasi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={chartData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" stroke="#888888" />
                  <YAxis stroke="#888888" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="income"
                    stroke="#4f46e5"
                    activeDot={{ r: 8 }}
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">Barcha to'lovlar</TabsTrigger>
          <TabsTrigger value="received">Qabul qilingan</TabsTrigger>
          <TabsTrigger value="pending">Kutilayotgan</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>To'lovlar tarixi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 px-4 text-left font-medium">Mijoz</th>
                      <th className="py-3 px-4 text-left font-medium">Xizmat turi</th>
                      <th className="py-3 px-4 text-left font-medium">Sana</th>
                      <th className="py-3 px-4 text-left font-medium">Summa</th>
                      <th className="py-3 px-4 text-left font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {incomeHistory.map(item => (
                      <tr key={item.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">{item.clientName}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <div className="p-2 bg-accountblue-100 rounded-md mr-3">
                              <CreditCard className="h-5 w-5 text-accountblue-600" />
                            </div>
                            {item.description}
                          </div>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{item.date}</td>
                        <td className="py-3 px-4 font-medium">{item.amount} so'm</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            item.status === "To'langan" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-yellow-100 text-yellow-800"
                          }`}>
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="received">
          <Card>
            <CardHeader>
              <CardTitle>Qabul qilingan to'lovlar</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Bu yerda faqat qabul qilingan to'lovlar ko'rsatiladi.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="pending">
          <Card>
            <CardHeader>
              <CardTitle>Kutilayotgan to'lovlar</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Bu yerda faqat kutilayotgan to'lovlar ko'rsatiladi.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
