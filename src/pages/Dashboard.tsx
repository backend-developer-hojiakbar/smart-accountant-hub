
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Plus, CheckCircle2, Clock, AlertCircle, PlusCircle, MessageSquare, CreditCard, User } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function Dashboard() {
  // Mock data for the dashboard
  const recentOrders = [
    { id: "ORD-1234", type: "Soliq hisoboti (QQS)", date: "2023-04-15", status: "completed", accountant: "Bekzod Turaev" },
    { id: "ORD-1235", type: "Moliyaviy balans", date: "2023-04-10", status: "in-progress", accountant: "Nilufar Karimova" },
    { id: "ORD-1236", type: "Ish haqi hisobi", date: "2023-04-05", status: "pending", accountant: "Assigning..." }
  ];
  
  const statusLabels: {[key: string]: { label: string, icon: JSX.Element, color: string }} = {
    "completed": { 
      label: "Tugallangan", 
      icon: <CheckCircle2 className="h-4 w-4 text-green-500" />,
      color: "text-green-500"
    },
    "in-progress": { 
      label: "Jarayonda", 
      icon: <Clock className="h-4 w-4 text-amber-500" />,
      color: "text-amber-500"
    },
    "pending": { 
      label: "Kutilmoqda", 
      icon: <AlertCircle className="h-4 w-4 text-blue-500" />,
      color: "text-blue-500"
    }
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Asosiy panel</h2>
        <p className="text-muted-foreground">
          Xush kelibsiz! Bu sizning shaxsiy kabinetingiz.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Faol buyurtmalar</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              Oxirgi 30 kunda +1
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Jami tayyor hisobotlar</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              Oxirgi 30 kunda +3
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">O'qilmagan xabarlar</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">
              2ta buxgalterdan
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Balans</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">120,000 so'm</div>
            <p className="text-xs text-muted-foreground">
              Keyingi hisobotlarga
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>Oxirgi buyurtmalar</CardTitle>
            <CardDescription>
              Joriy buyurtmalaringiz holati
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 border rounded-md">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{order.id}</span>
                      {statusLabels[order.status].icon}
                      <span className={`text-xs ${statusLabels[order.status].color}`}>
                        {statusLabels[order.status].label}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">{order.type}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {order.accountant}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">{order.date}</div>
                </div>
              ))}

              <div className="text-center mt-4">
                <Link to="/dashboard/orders">
                  <Button variant="outline" size="sm">
                    Barcha buyurtmalarni ko'rish
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Yangi buyurtma</CardTitle>
            <CardDescription>
              Yangi hisobot buyurtma qiling
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center h-[240px] space-y-4">
            <div className="rounded-full bg-accountblue-100 p-6">
              <PlusCircle className="h-10 w-10 text-accountblue-600" />
            </div>
            <Link to="/dashboard/new-order">
              <Button className="bg-accountblue-600 hover:bg-accountblue-700">
                <Plus className="mr-2 h-4 w-4" />
                Yangi buyurtma
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Obuna statusingiz</CardTitle>
            <CardDescription>
              Joriy tarif rejangiz
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Standart tarif</span>
                <span className="text-sm text-green-500 font-medium">Faol</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Buyurtmalar</span>
                  <span className="font-medium">3/5 oylik</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              
              <div className="text-sm text-muted-foreground">
                Amal qilish muddati: 15.06.2023 gacha
              </div>
              
              <Button variant="outline" className="w-full">
                Tarifni yangilash
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Oxirgi xabarlar</CardTitle>
            <CardDescription>
              Buxgalterlar bilan muloqot
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border rounded-md p-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-full bg-accountblue-200 flex items-center justify-center">
                    <span className="font-semibold text-accountblue-700 text-xs">NT</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium">Nilufar Toshpulatova</span>
                    <span className="text-xs text-muted-foreground ml-2">12:30</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Salom, balans hisobotida bir nechta savollar paydo bo'ldi. Qachon gaplashsak bo'ladi?</p>
              </div>
              
              <div className="border rounded-md p-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-full bg-accountblue-200 flex items-center justify-center">
                    <span className="font-semibold text-accountblue-700 text-xs">BT</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium">Bekzod Turaev</span>
                    <span className="text-xs text-muted-foreground ml-2">Kecha</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">QQS hisobotingiz tayyor bo'ldi. Iltimos, tekshirib ko'ring.</p>
              </div>
              
              <div className="text-center">
                <Link to="/dashboard/chat">
                  <Button variant="outline" size="sm">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Barcha xabarlarni ko'rish
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
