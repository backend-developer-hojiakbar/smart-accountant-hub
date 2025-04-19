
import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, FileText, CheckCircle, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Accountant } from "@/types/accountant";
import { Service } from "@/types/service";

export default function NewOrder() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const preselectedAccountantId = searchParams.get("accountantId");
  
  const [selectedService, setSelectedService] = useState("");
  const [selectedAccountant, setSelectedAccountant] = useState(preselectedAccountantId || "");
  const [comments, setComments] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);

  // Mock data for services
  const services = [
    { value: "tax-qqs", label: "QQS hisoboti" },
    { value: "tax-profit", label: "Foyda solig'i hisoboti" },
    { value: "tax-yst", label: "Yagona soliq to'lovi hisoboti" },
    { value: "fin-balance", label: "Balans hisoboti" },
    { value: "fin-income", label: "Daromad va xarajatlar hisoboti" },
    { value: "fin-cashflow", label: "Pul oqimlari hisoboti" },
    { value: "pay-salary", label: "Ish haqi hisoblash" },
    { value: "pay-inps", label: "INPS hisoboti" },
  ];

  // Mock data for accountants
  const accountants: Accountant[] = [
    {
      id: 1,
      name: "Bekzod Turaev",
      avatar: "/placeholder.svg",
      rating: 4.8,
      reviewCount: 56,
      experience: 5,
      specializations: ["Soliq hisobotlari", "Moliyaviy hisobotlar"],
      price: "150,000",
      description: "Yuqori malakali buxgalter. 5 yillik tajriba.",
      available: true,
      verified: true,
    },
    {
      id: 2,
      name: "Nilufar Karimova",
      avatar: "/placeholder.svg",
      rating: 4.6,
      reviewCount: 42,
      experience: 4,
      specializations: ["Soliq hisobotlari", "Ish haqi hisoblash"],
      price: "140,000",
      description: "MHXS bo'yicha sertifikatiga ega.",
      available: true,
      verified: true,
    },
    {
      id: 3,
      name: "Jamshid Xakimov",
      avatar: "/placeholder.svg",
      rating: 4.5,
      reviewCount: 38,
      experience: 6,
      specializations: ["Moliyaviy hisobotlar", "Konsultatsiya"],
      price: "160,000",
      description: "Xalqaro darajadagi tajribaga ega buxgalter.",
      available: false,
      verified: true,
    },
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedService) {
      toast({
        title: "Xatolik!",
        description: "Iltimos, xizmat turini tanlang",
        variant: "destructive",
      });
      return;
    }
    
    if (!selectedAccountant) {
      toast({
        title: "Xatolik!",
        description: "Iltimos, buxgalterni tanlang",
        variant: "destructive",
      });
      return;
    }
    
    // Here we would normally send the data to an API
    console.log({
      service: selectedService,
      accountant: selectedAccountant,
      comments,
      files,
    });
    
    // Show success message
    toast({
      title: "Buyurtma yuborildi",
      description: "Sizning buyurtmangiz muvaffaqiyatli yuborildi",
    });
    
    // Redirect to orders page
    setTimeout(() => {
      navigate("/dashboard/orders");
    }, 1000);
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Yangi buyurtma yaratish</h1>
        <Link to="/dashboard/orders">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Orqaga
          </Button>
        </Link>
      </div>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Buyurtma ma'lumotlari</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="service">Xizmat turini tanlang</Label>
              <Select value={selectedService} onValueChange={setSelectedService} required>
                <SelectTrigger id="service">
                  <SelectValue placeholder="Xizmatni tanlang" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.value} value={service.value}>
                      {service.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="accountant">Buxgalterni tanlang</Label>
              <Select 
                value={selectedAccountant} 
                onValueChange={setSelectedAccountant} 
                required
              >
                <SelectTrigger id="accountant">
                  <SelectValue placeholder="Buxgalterni tanlang" />
                </SelectTrigger>
                <SelectContent>
                  {accountants.map((accountant) => (
                    <SelectItem 
                      key={accountant.id.toString()} 
                      value={accountant.id.toString()}
                      disabled={!accountant.available}
                    >
                      {accountant.name} {!accountant.available && "(Band)"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="text-right mt-1">
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-accountblue-600"
                  type="button"
                  onClick={() => navigate("/accountants")}
                >
                  Buxgalterlar ro'yxatini ko'rish
                </Button>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="comments">Qo'shimcha ma'lumotlar</Label>
              <Textarea 
                id="comments" 
                placeholder="Qo'shimcha ma'lumotlar yoki ko'rsatmalar..." 
                value={comments} 
                onChange={(e) => setComments(e.target.value)}
                rows={5}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="files">Hujjatlarni yuklash (ixtiyoriy)</Label>
              <Input 
                id="files" 
                type="file" 
                multiple 
                onChange={(e) => setFiles(e.target.files)} 
                className="cursor-pointer"
              />
              <p className="text-sm text-gray-500">
                CSV, Excel, PDF yoki rasm fayllarini yuklashingiz mumkin
              </p>
            </div>
            
            <Button type="submit" className="w-full">Buyurtmani tasdiqlash</Button>
          </form>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Buyurtma jarayoni</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-accountblue-100 p-2 rounded-full mr-4">
                <CheckCircle className="h-5 w-5 text-accountblue-600" />
              </div>
              <div>
                <h3 className="font-medium">1. Buyurtma berish</h3>
                <p className="text-sm text-gray-600">
                  Kerakli xizmatni tanlang va buyurtma bering
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-gray-100 p-2 rounded-full mr-4">
                <FileText className="h-5 w-5 text-gray-500" />
              </div>
              <div>
                <h3 className="font-medium">2. Ko'rib chiqish</h3>
                <p className="text-sm text-gray-600">
                  Buxgalter sizning buyurtmangizni ko'rib chiqadi va qabul qiladi
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-gray-100 p-2 rounded-full mr-4">
                <FileText className="h-5 w-5 text-gray-500" />
              </div>
              <div>
                <h3 className="font-medium">3. Hisobot tayyorlash</h3>
                <p className="text-sm text-gray-600">
                  Buxgalter buyurtmangiz bo'yicha ishlaydi va hisobotni tayyorlaydi
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-gray-100 p-2 rounded-full mr-4">
                <FileText className="h-5 w-5 text-gray-500" />
              </div>
              <div>
                <h3 className="font-medium">4. Tasdiqlash va natijani olish</h3>
                <p className="text-sm text-gray-600">
                  Buyurtma yakunlangach, siz natijani ko'rishingiz va yuklab olishingiz mumkin
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
