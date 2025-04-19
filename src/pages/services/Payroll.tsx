
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, ArrowLeft } from "lucide-react";

export default function Payroll() {
  // Mock data for payroll services
  const services = [
    {
      id: 7,
      title: "Ish haqi hisoblash",
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
      description: "Ijtimoiy soliqlar hisoboti",
      price: "100,000",
      features: [
        "INPS deklaratsiyasi",
        "To'lov hisob-kitobi",
        "Elektron taqdim etish"
      ]
    },
    {
      id: 14,
      title: "Xodimlarni rasmiylashtirish",
      description: "Yangi xodimlarni ishga qabul qilish hujjatlarini tayyorlash",
      price: "50,000",
      perEmployee: true,
      features: [
        "Mehnat shartnomasi",
        "Buyruqlar",
        "Boshqa hujjatlar"
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
          <h1 className="text-3xl font-bold mb-4">Ish haqi hisobi</h1>
          <p className="text-lg text-gray-600">
            Xodimlar ish haqi va soliqlarini hisoblash xizmatlari
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="flex flex-col h-full border-accountblue-100 hover:border-accountblue-300 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-center">
                  <div className="bg-accountblue-50 p-2 rounded-md">
                    <Users className="text-accountblue-600 h-5 w-5" />
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
                    {service.perEmployee && <span className="text-sm font-normal"> / xodim</span>}
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
