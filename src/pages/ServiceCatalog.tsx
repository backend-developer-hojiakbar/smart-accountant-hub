
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, FileText, Calculator, Briefcase, Users, HelpCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function ServiceCatalog() {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Mock data for service categories
  const categories = [
    { id: "tax", label: "Soliq hisobotlari" },
    { id: "financial", label: "Moliyaviy hisobotlar" },
    { id: "payroll", label: "Ish haqi hisobi" },
    { id: "bookkeeping", label: "Buxgalteriya hisobi" },
    { id: "consultation", label: "Konsultatsiyalar" },
  ];
  
  // Mock data for services
  const services = [
    {
      id: 1,
      title: "QQS hisoboti",
      category: "tax",
      description: "Qo'shilgan qiymat solig'i bo'yicha hisobotlar",
      price: "150,000",
      popular: true,
      features: [
        "QQS deklaratsiyasi",
        "QQS hisob-kitobi",
        "Elektron taqdim etish"
      ]
    },
    {
      id: 2,
      title: "Foyda solig'i hisoboti",
      category: "tax",
      description: "Yuridik shaxslar uchun foyda solig'i hisoboti",
      price: "200,000",
      popular: false,
      features: [
        "Foyda solig'i deklaratsiyasi",
        "Soliq hisob-kitobi",
        "Kerakli ilovalar"
      ]
    },
    {
      id: 3,
      title: "Yagona soliq to'lovi",
      category: "tax",
      description: "Kichik biznes subyektlari uchun yagona soliq",
      price: "120,000",
      popular: false,
      features: [
        "YST deklaratsiyasi",
        "Soliq hisob-kitobi",
        "Elektron taqdim etish"
      ]
    },
    {
      id: 4,
      title: "Balans hisoboti",
      category: "financial",
      description: "Tashkilot moliyaviy holati to'g'risidagi asosiy hisobot",
      price: "250,000",
      popular: true,
      features: [
        "Balans tuzish",
        "Batafsil izohlar",
        "Moliyaviy tahlil"
      ]
    },
    {
      id: 5,
      title: "Daromad va xarajatlar hisoboti",
      category: "financial",
      description: "Kompaniya faoliyati natijalarini aks ettiruvchi hisobot",
      price: "200,000",
      popular: false,
      features: [
        "Daromadlar tahlili",
        "Xarajatlar tahlili",
        "Foyda ko'rsatkichlari"
      ]
    },
    {
      id: 6,
      title: "Pul oqimlari hisoboti",
      category: "financial",
      description: "Naqd pul harakati haqida hisobot",
      price: "180,000",
      popular: false,
      features: [
        "Operatsion faoliyat",
        "Investitsion faoliyat",
        "Moliyaviy faoliyat"
      ]
    },
    {
      id: 7,
      title: "Ish haqi hisoblash",
      category: "payroll",
      description: "Xodimlar ish haqi va soliqlarini hisoblash",
      price: "15,000",
      perEmployee: true,
      popular: true,
      features: [
        "Ish haqi hisoblash",
        "JShDS hisoblash",
        "INPS hisoblash"
      ]
    },
    {
      id: 8,
      title: "INPS hisoboti",
      category: "payroll",
      description: "Ijtimoiy soliqlar hisoboti",
      price: "100,000",
      popular: false,
      features: [
        "INPS deklaratsiyasi",
        "To'lov hisob-kitobi",
        "Elektron taqdim etish"
      ]
    },
    {
      id: 9,
      title: "To'liq buxgalteriya xizmati",
      category: "bookkeeping",
      description: "Biznesni to'liq buxgalteriya hisobi bilan ta'minlash",
      price: "Kelishilgan",
      custom: true,
      popular: true,
      features: [
        "Barcha operatsiyalarni yuritish",
        "Hisobotlarni tayyorlash",
        "Soliqlarni hisoblash"
      ]
    },
    {
      id: 10,
      title: "Birlamchi hujjatlarni rasmiylashtirish",
      category: "bookkeeping",
      description: "Xarid, sotuv va boshqa operatsiyalar uchun hujjatlar",
      price: "80,000",
      popular: false,
      features: [
        "Schet-fakturalar",
        "Shartnomalar",
        "TTN va boshqalar"
      ]
    },
    {
      id: 11,
      title: "Soliq maslahati",
      category: "consultation",
      description: "Soliq optimizatsiyasi bo'yicha professional maslahatlar",
      price: "300,000",
      hourly: true,
      popular: false,
      features: [
        "Individual maslahat",
        "Soliqlarni optimallashtirish",
        "Xatarlarni kamaytirish"
      ]
    },
    {
      id: 12,
      title: "Biznesni ro'yxatdan o'tkazish maslahati",
      category: "consultation",
      description: "Yangi biznesni ro'yxatdan o'tkazish bo'yicha yordam",
      price: "500,000",
      popular: false,
      features: [
        "Biznes shakli tanlash",
        "Hujjatlarni tayyorlash",
        "Soliq rejimini tanlash"
      ]
    }
  ];
  
  // Filter services based on search term
  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Function to get icon based on category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "tax":
        return <FileText className="h-5 w-5" />;
      case "financial":
        return <Briefcase className="h-5 w-5" />;
      case "payroll":
        return <Users className="h-5 w-5" />;
      case "bookkeeping":
        return <Calculator className="h-5 w-5" />;
      default:
        return <HelpCircle className="h-5 w-5" />;
    }
  };
  
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Bizning xizmatlar</h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Biznesingiz uchun zarur bo'lgan barcha buxgalteriya xizmatlari bir joyda
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Input
            placeholder="Xizmat nomini qidirish..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
          />
          <Button variant="outline" onClick={() => setSearchTerm("")}>
            Tozalash
          </Button>
        </div>
        
        <Tabs defaultValue="all">
          <TabsList className="grid grid-cols-3 sm:grid-cols-6 mb-8">
            <TabsTrigger value="all">Barchasi</TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                <span className="hidden sm:inline">{category.label}</span>
                <span className="sm:hidden">{getCategoryIcon(category.id)}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>
          
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices
                  .filter((service) => service.category === category.id)
                  .map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    category: string;
    description: string;
    price: string;
    popular?: boolean;
    perEmployee?: boolean;
    custom?: boolean;
    hourly?: boolean;
    features: string[];
  };
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="flex flex-col h-full border-accountblue-100 hover:border-accountblue-300 transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{service.title}</CardTitle>
          {service.popular && (
            <Badge className="bg-accountblue-500 hover:bg-accountblue-600">Mashhur</Badge>
          )}
        </div>
        <p className="text-sm text-gray-500 mt-2">{service.description}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-4">
          <p className="font-semibold text-xl text-accountblue-700">
            {service.price} so'm
            {service.perEmployee && <span className="text-sm font-normal"> / xodim</span>}
            {service.hourly && <span className="text-sm font-normal"> / soat</span>}
            {service.custom && <span className="text-sm font-normal"> dan boshlab</span>}
          </p>
        </div>
        <ul className="space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-4 w-4 text-accountblue-500 mt-0.5 mr-2 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-0">
        <Link to={`/services/${service.id}`} className="w-full">
          <Button variant="outline" className="w-full border-accountblue-300 text-accountblue-700 hover:bg-accountblue-50">
            Batafsil
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
