
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Plus, Download } from "lucide-react";

export default function Payments() {
  // Mock data for payments
  const payments = [
    {
      id: 1,
      description: "Soliq hisoboti",
      amount: "150,000",
      date: "2025-04-15",
      status: "To'langan",
      method: "Uzcard"
    },
    {
      id: 2,
      description: "Moliyaviy balans",
      amount: "200,000",
      date: "2025-03-20",
      status: "To'langan",
      method: "Humo"
    },
    {
      id: 3,
      description: "Ish haqi hisobi",
      amount: "120,000",
      date: "2025-02-25",
      status: "To'lanmagan",
      method: "-"
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">To'lovlar</h1>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Hisobotni yuklab olish
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Balansni to'ldirish
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Umumiy to'lovlar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">470,000 so'm</div>
            <p className="text-xs text-gray-500 mt-1">
              Oxirgi to'lov: 15.04.2025
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Joriy balans
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85,000 so'm</div>
            <p className="text-xs text-gray-500 mt-1">
              Buyurtmalar uchun mavjud
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              To'lanmagan to'lovlar
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

      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">Barcha to'lovlar</TabsTrigger>
          <TabsTrigger value="paid">To'langan</TabsTrigger>
          <TabsTrigger value="unpaid">To'lanmagan</TabsTrigger>
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
                      <th className="py-3 px-4 text-left font-medium">Tavsif</th>
                      <th className="py-3 px-4 text-left font-medium">Sana</th>
                      <th className="py-3 px-4 text-left font-medium">Summa</th>
                      <th className="py-3 px-4 text-left font-medium">To'lov usuli</th>
                      <th className="py-3 px-4 text-left font-medium">Status</th>
                      <th className="py-3 px-4 text-right font-medium"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map(payment => (
                      <tr key={payment.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <div className="p-2 bg-accountblue-100 rounded-md mr-3">
                              <CreditCard className="h-5 w-5 text-accountblue-600" />
                            </div>
                            {payment.description}
                          </div>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{payment.date}</td>
                        <td className="py-3 px-4 font-medium">{payment.amount} so'm</td>
                        <td className="py-3 px-4 text-gray-600">{payment.method}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            payment.status === "To'langan" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-red-100 text-red-800"
                          }`}>
                            {payment.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          {payment.status === "To'lanmagan" ? (
                            <Button size="sm">To'lash</Button>
                          ) : (
                            <Button variant="ghost" size="sm">Kvitansiya</Button>
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
        
        <TabsContent value="paid">
          <Card>
            <CardHeader>
              <CardTitle>To'langan to'lovlar</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Bu yerda faqat to'langan to'lovlar ko'rsatiladi.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="unpaid">
          <Card>
            <CardHeader>
              <CardTitle>To'lanmagan to'lovlar</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Bu yerda faqat to'lanmagan to'lovlar ko'rsatiladi.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
