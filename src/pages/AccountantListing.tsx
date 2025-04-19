
import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, CheckCircle, MessageSquare } from "lucide-react";

export default function AccountantListing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [ratingFilter, setRatingFilter] = useState([3]); // min rating
  const [experienceFilter, setExperienceFilter] = useState<string | null>(null);
  const [specializationFilters, setSpecializationFilters] = useState<string[]>([]);
  
  // Mock data for accountants
  const accountants = [
    {
      id: 1,
      name: "Bekzod Turaev",
      avatar: "/placeholder.svg",
      rating: 4.8,
      reviewCount: 56,
      experience: 5,
      specializations: ["Soliq hisobotlari", "Moliyaviy hisobotlar"],
      price: "150,000",
      description: "Yuqori malakali buxgalter. 5 yillik tajriba. Soliq inspeksiyasida ishlagan.",
      available: true,
      verified: true
    },
    {
      id: 2,
      name: "Nilufar Karimova",
      avatar: "/placeholder.svg",
      rating: 4.9,
      reviewCount: 87,
      experience: 7,
      specializations: ["Moliyaviy hisobotlar", "Buxgalteriya hisobi"],
      price: "180,000",
      description: "Xalqaro standartlar bo'yicha mutaxassis. Audit kompaniyalarida tajriba.",
      available: true,
      verified: true
    },
    {
      id: 3,
      name: "Jamshid Xakimov",
      avatar: "/placeholder.svg",
      rating: 4.5,
      reviewCount: 32,
      experience: 3,
      specializations: ["Soliq hisobotlari", "Ish haqi hisobi"],
      price: "120,000",
      description: "Soliq va ish haqi hisobi bo'yicha mutaxassis.",
      available: false,
      verified: true
    },
    {
      id: 4,
      name: "Mohira Azimova",
      avatar: "/placeholder.svg",
      rating: 5.0,
      reviewCount: 45,
      experience: 10,
      specializations: ["Moliyaviy hisobotlar", "Konsultatsiyalar"],
      price: "250,000",
      description: "10 yillik tajriba. Yuqori malakali moliyaviy maslahatchi.",
      available: true,
      verified: true
    },
    {
      id: 5,
      name: "Rustam Aliyev",
      avatar: "/placeholder.svg",
      rating: 4.2,
      reviewCount: 18,
      experience: 2,
      specializations: ["Soliq hisobotlari", "Ish haqi hisobi"],
      price: "100,000",
      description: "Yangi buxgalterlik firmasi asoschisi. Innovatsion yondashuvlar.",
      available: true,
      verified: false
    },
    {
      id: 6,
      name: "Malika Umarova",
      avatar: "/placeholder.svg",
      rating: 4.7,
      reviewCount: 63,
      experience: 6,
      specializations: ["Buxgalteriya hisobi", "Konsultatsiyalar"],
      price: "170,000",
      description: "Xalqaro kompaniyalarda tajriba. Ingliz tilida erkin muloqot.",
      available: true,
      verified: true
    }
  ];
  
  const specializations = [
    "Soliq hisobotlari",
    "Moliyaviy hisobotlar",
    "Ish haqi hisobi",
    "Buxgalteriya hisobi",
    "Konsultatsiyalar"
  ];
  
  // Apply filters
  const filteredAccountants = accountants.filter((accountant) => {
    // Search filter
    if (searchTerm && !accountant.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Rating filter
    if (accountant.rating < ratingFilter[0]) {
      return false;
    }
    
    // Experience filter
    if (experienceFilter) {
      const [min, max] = experienceFilter.split("-").map(Number);
      if (max) {
        if (accountant.experience < min || accountant.experience > max) {
          return false;
        }
      } else {
        if (accountant.experience < min) {
          return false;
        }
      }
    }
    
    // Specialization filter
    if (specializationFilters.length > 0) {
      const hasSpecialization = accountant.specializations.some((spec) => 
        specializationFilters.includes(spec)
      );
      if (!hasSpecialization) {
        return false;
      }
    }
    
    return true;
  });
  
  const handleSpecializationChange = (specialization: string) => {
    setSpecializationFilters((prev) => {
      if (prev.includes(specialization)) {
        return prev.filter((s) => s !== specialization);
      } else {
        return [...prev, specialization];
      }
    });
  };
  
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Buxgalterlar katalogi</h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        Biznesingiz uchun eng mos keluvchi malakali buxgalterni tanlang
      </p>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold mb-4">Filterlar</h2>
            
            <div className="mb-6">
              <Label htmlFor="search" className="mb-2 block">Qidirish</Label>
              <Input
                id="search"
                placeholder="Ism bo'yicha qidirish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="mb-6">
              <Label className="mb-2 block">Minimal reyting</Label>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500">3</span>
                <span className="text-sm text-gray-500">5</span>
              </div>
              <Slider
                defaultValue={[3]}
                min={3}
                max={5}
                step={0.5}
                onValueChange={setRatingFilter}
              />
              <div className="mt-2 text-sm text-center">{ratingFilter[0]} yulduz va yuqori</div>
            </div>
            
            <div className="mb-6">
              <Label className="mb-2 block">Tajriba</Label>
              <Select value={experienceFilter || ""} onValueChange={setExperienceFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Tanlang" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Barchasi</SelectItem>
                  <SelectItem value="0-2">0-2 yil</SelectItem>
                  <SelectItem value="3-5">3-5 yil</SelectItem>
                  <SelectItem value="6-10">6-10 yil</SelectItem>
                  <SelectItem value="10-">10+ yil</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="mb-6">
              <Label className="mb-2 block">Ixtisosliklar</Label>
              <div className="space-y-2">
                {specializations.map((spec) => (
                  <div key={spec} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`spec-${spec}`} 
                      checked={specializationFilters.includes(spec)}
                      onCheckedChange={() => handleSpecializationChange(spec)}
                    />
                    <label
                      htmlFor={`spec-${spec}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {spec}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => {
                setSearchTerm("");
                setRatingFilter([3]);
                setExperienceFilter(null);
                setSpecializationFilters([]);
              }}
            >
              Filterni tozalash
            </Button>
          </div>
        </div>
        
        {/* Accountant list */}
        <div className="lg:w-3/4">
          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">Barchasi</TabsTrigger>
              <TabsTrigger value="available">Hozir bo'sh</TabsTrigger>
              <TabsTrigger value="verified">Tasdiqlangan</TabsTrigger>
              <TabsTrigger value="top">Yuqori reytingli</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <AccountantGrid accountants={filteredAccountants} />
            </TabsContent>
            
            <TabsContent value="available">
              <AccountantGrid accountants={filteredAccountants.filter((a) => a.available)} />
            </TabsContent>
            
            <TabsContent value="verified">
              <AccountantGrid accountants={filteredAccountants.filter((a) => a.verified)} />
            </TabsContent>
            
            <TabsContent value="top">
              <AccountantGrid accountants={filteredAccountants.filter((a) => a.rating >= 4.5)} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

interface AccountantGridProps {
  accountants: Array<{
    id: number;
    name: string;
    avatar: string;
    rating: number;
    reviewCount: number;
    experience: number;
    specializations: string[];
    price: string;
    description: string;
    available: boolean;
    verified: boolean;
  }>;
}

function AccountantGrid({ accountants }: AccountantGridProps) {
  if (accountants.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-lg text-gray-500">Hech qanday buxgalter topilmadi.</p>
        <p className="text-gray-500">Iltimos, boshqa filterlarni sinab ko'ring.</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {accountants.map((accountant) => (
        <Card key={accountant.id} className="overflow-hidden">
          <CardHeader className="p-0">
            <div className="flex items-start p-6">
              <div className="relative mr-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-accountblue-100">
                  <img 
                    src={accountant.avatar} 
                    alt={accountant.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                {accountant.verified && (
                  <div className="absolute -bottom-1 -right-1 bg-accountblue-500 rounded-full p-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{accountant.name}</h3>
                  <Badge className={accountant.available ? "bg-green-500" : "bg-gray-400"}>
                    {accountant.available ? "Bo'sh" : "Band"}
                  </Badge>
                </div>
                <div className="flex items-center mt-1">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm font-medium">{accountant.rating}</span>
                  </div>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-sm text-gray-500">{accountant.reviewCount} ta baho</span>
                </div>
                <div className="mt-1 text-sm text-gray-600">
                  Tajriba: {accountant.experience} yil
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="px-6 py-2">
            <p className="text-sm text-gray-600 mb-3">
              {accountant.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {accountant.specializations.map((spec) => (
                <Badge key={spec} variant="outline" className="bg-accountblue-50 text-accountblue-700 border-accountblue-200">
                  {spec}
                </Badge>
              ))}
            </div>
            
            <div className="mt-3 font-semibold">
              {accountant.price} so'm<span className="font-normal text-sm text-gray-600"> / soat</span>
            </div>
          </CardContent>
          
          <CardFooter className="px-6 py-4 flex justify-between border-t border-gray-100">
            <Link to={`/accountants/${accountant.id}`}>
              <Button variant="outline">Ko'proq ma'lumot</Button>
            </Link>
            <Link to={`/dashboard/chat/${accountant.id}`}>
              <Button>
                <MessageSquare className="mr-2 h-4 w-4" />
                Murojaat qilish
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
