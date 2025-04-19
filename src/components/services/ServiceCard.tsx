
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

interface ServiceProps {
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
}

export function ServiceCard({ service }: { service: ServiceProps }) {
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
