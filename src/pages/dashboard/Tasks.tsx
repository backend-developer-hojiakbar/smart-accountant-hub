
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FileText, CheckCircle, Clock, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Tasks() {
  // Mock data for tasks
  const tasks = [
    {
      id: 1,
      title: "QQS hisoboti - Baraka Group LLC",
      clientName: "Baraka Group LLC",
      deadline: "2025-04-20",
      status: "Jarayonda",
      priority: "O'rta"
    },
    {
      id: 2,
      title: "Choraklik hisobot - Digital Solutions",
      clientName: "Digital Solutions",
      deadline: "2025-04-25",
      status: "Jarayonda",
      priority: "Yuqori"
    },
    {
      id: 3,
      title: "Yillik audit - Baraka Group LLC",
      clientName: "Baraka Group LLC",
      deadline: "2025-05-15",
      status: "Kutilmoqda",
      priority: "Past"
    },
    {
      id: 4,
      title: "Ish haqi hisobi - Milliy Taomlar",
      clientName: "Milliy Taomlar",
      deadline: "2025-04-10",
      status: "Yakunlangan",
      priority: "O'rta"
    }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Topshiriqlarim</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Barcha topshiriqlar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Faol</CardTitle>
          </CardHeader>
          <CardContent className="flex items-baseline space-x-2">
            <div className="text-2xl font-bold">2</div>
            <div className="text-sm text-blue-600">Jarayonda</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Yakunlangan</CardTitle>
          </CardHeader>
          <CardContent className="flex items-baseline space-x-2">
            <div className="text-2xl font-bold">1</div>
            <div className="text-sm text-green-600">Ushbu oyda</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Muddati yaqin</CardTitle>
          </CardHeader>
          <CardContent className="flex items-baseline space-x-2">
            <div className="text-2xl font-bold">1</div>
            <div className="text-sm text-amber-600">1 kun qoldi</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">Barchasi</TabsTrigger>
          <TabsTrigger value="active">Faol</TabsTrigger>
          <TabsTrigger value="waiting">Kutilmoqda</TabsTrigger>
          <TabsTrigger value="completed">Yakunlangan</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <div className="space-y-4">
            {tasks.map(task => (
              <Card key={task.id} className="overflow-hidden hover:bg-gray-50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-md mr-4 ${
                        task.status === "Yakunlangan" ? "bg-green-100" :
                        task.status === "Jarayonda" ? "bg-blue-100" :
                        "bg-gray-100"
                      }`}>
                        <FileText className={`h-6 w-6 ${
                          task.status === "Yakunlangan" ? "text-green-600" :
                          task.status === "Jarayonda" ? "text-blue-600" :
                          "text-gray-600"
                        }`} />
                      </div>
                      <div>
                        <h3 className="font-medium">{task.title}</h3>
                        <p className="text-sm text-gray-500">Mijoz: {task.clientName}</p>
                        <div className="flex items-center mt-1">
                          <Clock className="h-3 w-3 text-gray-400 mr-1" />
                          <span className="text-xs text-gray-500">Muddat: {task.deadline}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div>
                        <Badge className={`${
                          task.priority === "Yuqori" ? "bg-red-100 text-red-800 hover:bg-red-100" :
                          task.priority === "O'rta" ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100" :
                          "bg-green-100 text-green-800 hover:bg-green-100"
                        }`}>
                          {task.priority}
                        </Badge>
                        <span className={`ml-2 text-sm px-2 py-1 rounded-full ${
                          task.status === "Yakunlangan" ? "bg-green-100 text-green-800" :
                          task.status === "Jarayonda" ? "bg-blue-100 text-blue-800" :
                          "bg-gray-100 text-gray-800"
                        }`}>
                          {task.status}
                        </span>
                      </div>
                      <Button variant="outline" size="sm">
                        Ko'rish
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="active">
          <div className="space-y-4">
            {tasks.filter(task => task.status === "Jarayonda").map(task => (
              <Card key={task.id} className="overflow-hidden hover:bg-gray-50 transition-colors">
                {/* Same content structure as above */}
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-2 rounded-md mr-4">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">{task.title}</h3>
                        <p className="text-sm text-gray-500">Mijoz: {task.clientName}</p>
                        <div className="flex items-center mt-1">
                          <Clock className="h-3 w-3 text-gray-400 mr-1" />
                          <span className="text-xs text-gray-500">Muddat: {task.deadline}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div>
                        <Badge className={`${
                          task.priority === "Yuqori" ? "bg-red-100 text-red-800 hover:bg-red-100" :
                          task.priority === "O'rta" ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100" :
                          "bg-green-100 text-green-800 hover:bg-green-100"
                        }`}>
                          {task.priority}
                        </Badge>
                        <span className="ml-2 text-sm px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                          {task.status}
                        </span>
                      </div>
                      <Button variant="outline" size="sm">
                        Ko'rish
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="waiting">
          <div className="space-y-4">
            {tasks.filter(task => task.status === "Kutilmoqda").map(task => (
              <Card key={task.id} className="overflow-hidden hover:bg-gray-50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-gray-100 p-2 rounded-md mr-4">
                        <FileText className="h-6 w-6 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">{task.title}</h3>
                        <p className="text-sm text-gray-500">Mijoz: {task.clientName}</p>
                        <div className="flex items-center mt-1">
                          <Clock className="h-3 w-3 text-gray-400 mr-1" />
                          <span className="text-xs text-gray-500">Muddat: {task.deadline}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div>
                        <Badge className={`${
                          task.priority === "Yuqori" ? "bg-red-100 text-red-800 hover:bg-red-100" :
                          task.priority === "O'rta" ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100" :
                          "bg-green-100 text-green-800 hover:bg-green-100"
                        }`}>
                          {task.priority}
                        </Badge>
                        <span className="ml-2 text-sm px-2 py-1 rounded-full bg-gray-100 text-gray-800">
                          {task.status}
                        </span>
                      </div>
                      <Button variant="outline" size="sm">
                        Ko'rish
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="completed">
          <div className="space-y-4">
            {tasks.filter(task => task.status === "Yakunlangan").map(task => (
              <Card key={task.id} className="overflow-hidden hover:bg-gray-50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-green-100 p-2 rounded-md mr-4">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">{task.title}</h3>
                        <p className="text-sm text-gray-500">Mijoz: {task.clientName}</p>
                        <div className="flex items-center mt-1">
                          <Clock className="h-3 w-3 text-gray-400 mr-1" />
                          <span className="text-xs text-gray-500">Muddat: {task.deadline}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div>
                        <Badge className={`${
                          task.priority === "Yuqori" ? "bg-red-100 text-red-800 hover:bg-red-100" :
                          task.priority === "O'rta" ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100" :
                          "bg-green-100 text-green-800 hover:bg-green-100"
                        }`}>
                          {task.priority}
                        </Badge>
                        <span className="ml-2 text-sm px-2 py-1 rounded-full bg-green-100 text-green-800">
                          {task.status}
                        </span>
                      </div>
                      <Button variant="outline" size="sm">
                        Ko'rish
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
