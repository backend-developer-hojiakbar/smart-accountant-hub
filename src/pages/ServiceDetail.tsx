
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle } from "lucide-react";

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  
  // This is mock data for the service details
  // In a real application, you'd fetch this from an API based on the id
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
      ],
      fullDescription: "Qo'shilgan qiymat solig'i bo'yicha to'liq hisobotlar tayyorlash xizmati. Bu xizmat orqali siz QQS bo'yicha barcha hisobotlarni o'z vaqtida va to'g'ri shaklda tayyorlashingiz mumkin. Bizning tajribali mutaxassislarimiz sizning biznesingizga mos keladigan QQS hisobotini tayyorlaydi."
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
      ],
      fullDescription: "Yuridik shaxslar uchun foyda solig'i hisobotlarini tayyorlash xizmati. Bu xizmat orqali siz foyda solig'i bo'yicha barcha hisobotlarni o'z vaqtida va to'g'ri shaklda tayyorlashingiz mumkin."
    }
  ];
  
  // Find the service with the matching id
  const service = services.find(s => s.id === Number(id)) || {
    id: Number(id),
    title: "Xizmat",
    category: "other",
    description: "Bu xizmat haqida ma'lumot topilmadi",
    price: "Narxi belgilanmagan",
    features: [],
    fullDescription: "Bu xizmat haqida to'liq ma'lumot topilmadi. Iltimos, biz bilan bog'laning."
  };
  
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/services">
            <Button variant="ghost" className="pl-0">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Barcha xizmatlarga qaytish
            </Button>
          </Link>
        </div>
        
        <Card className="border-accountblue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">{service.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-gray-600 mb-6">{service.fullDescription}</p>
                <div className="mb-4">
                  <p className="font-semibold text-xl text-accountblue-700">
                    {service.price} so'm
                    {service.category === "payroll" && <span className="text-sm font-normal"> / xodim</span>}
                  </p>
                </div>
                <Button className="mt-4 bg-accountblue-600 hover:bg-accountblue-700">
                  Buyurtma berish
                </Button>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Xizmat tarkibi</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accountblue-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="bg-accountblue-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-4">Bu xizmat haqida savol bormi?</h3>
          <p className="text-gray-600 mb-4">
            Bizning mutaxassislarimiz sizga yordam berishga tayyor.
          </p>
          <div className="flex gap-4">
            <Button variant="outline" className="border-accountblue-300 text-accountblue-700">
              +998 71 123 45 67
            </Button>
            <Button className="bg-accountblue-600 hover:bg-accountblue-700">
              Savol yuborish
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
