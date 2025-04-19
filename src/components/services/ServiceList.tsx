
import { TabsContent } from "@/components/ui/tabs";
import { ServiceCard } from "./ServiceCard";
import type { Service } from "../../types/service";

interface ServiceListProps {
  services: Service[];
  category?: string;
}

export function ServiceList({ services, category }: ServiceListProps) {
  const filteredServices = category && category !== 'all' 
    ? services.filter(service => service.category === category)
    : services;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredServices.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
