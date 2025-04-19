
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Briefcase, ArrowLeft } from "lucide-react";

export default function FinancialStatements() {
  // Mock data for financial statements services
  const services = [
    {
      id: 4,
      title: "Balans hisoboti",
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
      description: "Kompaniya faoliyati natijalarini aks ettiruvchi hisobot",
      price: "200,000",
      features: [
        "Daromadlar tahlili",
        "Xarajatlar tahlili",
        "Foyda ko'rsatkichlari"
      ]
    },
    {
      id: 6,
      title: "Pul oqimlari hisoboti",
      description: "Naqd pul harakati haqida hisobot",
      price: "180,000",
      features: [
        "Operatsion faoliyat",
        "Investitsion faoliyat",
        "Moliyaviy faoliyat"
      ]
    }
  ];

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
        
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-4">Moliyaviy hisobotlar</h1>
          <p className="text-lg text-gray-600">
            Biznesingiz uchun barcha turdagi moliyaviy hisobotlarni tayyorlash xizmatlari
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="flex flex-col h-full border-accountblue-100 hover:border-accountblue-300 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-center">
                  <div className="bg-accountblue-50 p-2 rounded-md">
                    <Briefcase className="text-accountblue-600 h-5 w-5" />
                  </div>
                  {service.popular && (
                    <div className="bg-accountblue-500 text-white text-xs px-2 py-1 rounded-full">
                      Mashhur
                    </div>
                  )}
                </div>
                <CardTitle className="text-lg mt-4">{service.title}</CardTitle>
                <p className="text-sm text-gray-500 mt-2">{service.description}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4">
                  <p className="font-semibold text-xl text-accountblue-700">
                    {service.price} so'm
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
          ))}
        </div>
      </div>
    </div>
  );
}
