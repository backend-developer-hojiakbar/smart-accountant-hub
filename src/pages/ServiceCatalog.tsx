
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SearchBar } from "@/components/services/SearchBar";
import { ServiceList } from "@/components/services/ServiceList";
import { categories, services } from "@/data/serviceCategories";

export default function ServiceCatalog() {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter services based on search term
  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Bizning xizmatlar</h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Biznesingiz uchun zarur bo'lgan barcha buxgalteriya xizmatlari bir joyda
        </p>
        
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        
        <Tabs defaultValue="all">
          <TabsList className="grid grid-cols-3 sm:grid-cols-6 mb-8">
            <TabsTrigger value="all">Barchasi</TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                <span className="hidden sm:inline">{category.label}</span>
                <span className="sm:hidden">
                  <category.icon className="h-5 w-5" />
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="all">
            <ServiceList services={filteredServices} />
          </TabsContent>
          
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <ServiceList services={filteredServices} category={category.id} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
