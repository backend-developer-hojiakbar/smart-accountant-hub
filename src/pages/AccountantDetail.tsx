
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, MessageSquare, CheckCircle, Calendar } from "lucide-react";

export default function AccountantDetail() {
  const { id } = useParams<{ id: string }>();
  const accountantId = id ? parseInt(id) : 1;
  
  // Mock data for the accountant details
  const accountant = {
    id: accountantId,
    name: "Bekzod Turaev",
    avatar: "/placeholder.svg",
    rating: 4.8,
    reviewCount: 56,
    experience: 5,
    specializations: ["Soliq hisobotlari", "Moliyaviy hisobotlar"],
    price: "150,000",
    hourly: "150,000",
    monthly: "2,500,000",
    description: "Yuqori malakali buxgalter. 5 yillik tajriba. Soliq inspeksiyasida ishlagan.",
    about: "Men 5 yillik tajribaga ega buxgalterman. O'z faoliyatimni soliq inspeksiyasida boshlaganman, so'ngra xususiy kompaniyalarda ishlashni davom ettirganman. Hozirgi kunda mustaqil mutaxassis sifatida turli kompaniyalarga buxgalterlik va moliyaviy hisobot xizmatlarini taqdim etaman.",
    education: "Toshkent Moliya Instituti, Buxgalteriya hisobi va audit (2015)",
    certificates: [
      "Moliyaviy hisobotning xalqaro standartlari (MHXS) bo'yicha sertifikat",
      "1C: Buxgalteriya dasturi bo'yicha sertifikat"
    ],
    languages: ["O'zbek", "Rus", "Ingliz"],
    available: true,
    availabilityHours: "Du-Ju: 9:00-18:00, Sha: 10:00-14:00",
    verified: true,
    reviews: [
      {
        id: 1,
        name: "Aziz Karimov",
        avatar: "/placeholder.svg",
        rating: 5,
        date: "2023-09-15",
        comment: "Juda yaxshi buxgalter. O'z ishining ustasi. Biznesingizni rivojlantirishga yordam beradi."
      },
      {
        id: 2,
        name: "Malika Abdullayeva",
        avatar: "/placeholder.svg",
        rating: 4.5,
        date: "2023-08-22",
        comment: "Professional xizmat. Barcha savollarimga javob olish imkoniyatiga ega bo'ldim."
      },
      {
        id: 3,
        name: "Rustam Nazarov",
        avatar: "/placeholder.svg",
        rating: 5,
        date: "2023-07-10",
        comment: "Bekzod janob biznesingiz uchun zarur bo'lgan barcha hisobotlarni o'z vaqtida va sifatli taqdim etadi."
      }
    ],
    completedProjects: 48
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column - Profile info */}
        <div className="lg:col-span-1">
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src={accountant.avatar} alt={accountant.name} />
                    <AvatarFallback>{accountant.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  {accountant.verified && (
                    <div className="absolute bottom-0 right-0 bg-accountblue-500 rounded-full p-1">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                  )}
                </div>
                
                <h1 className="text-2xl font-semibold mb-1">{accountant.name}</h1>
                
                <div className="flex items-center justify-center mb-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-medium">{accountant.rating}</span>
                  </div>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-gray-600">{accountant.reviewCount} ta baho</span>
                </div>
                
                <Badge className={accountant.available ? "bg-green-500 mb-4" : "bg-gray-400 mb-4"}>
                  {accountant.available ? "Bo'sh" : "Band"}
                </Badge>
                
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{accountant.availabilityHours}</span>
                </div>
                
                <div className="space-y-2 w-full">
                  <Link to={`/dashboard/chat/${accountant.id}`} className="w-full">
                    <Button className="w-full">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Murojaat qilish
                    </Button>
                  </Link>
                  <Link to={`/dashboard/new-order?accountant=${accountant.id}`} className="w-full">
                    <Button variant="outline" className="w-full">
                      Buyurtma berish
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">Narxlar</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Soatlik narx:</span>
                  <span className="font-medium">{accountant.hourly} so'm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Oylik narx:</span>
                  <span className="font-medium">{accountant.monthly} so'm</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">Ma'lumotlar</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Tajriba:</span>
                  <span className="font-medium">{accountant.experience} yil</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bajarilgan loyihalar:</span>
                  <span className="font-medium">{accountant.completedProjects}</span>
                </div>
                <div>
                  <h3 className="text-gray-600 mb-1">Ixtisosliklar:</h3>
                  <div className="flex flex-wrap gap-2">
                    {accountant.specializations.map((spec, index) => (
                      <Badge key={index} variant="outline" className="bg-accountblue-50 text-accountblue-700 border-accountblue-200">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-gray-600 mb-1">Bildirilgan tillar:</h3>
                  <div className="flex flex-wrap gap-2">
                    {accountant.languages.map((lang, index) => (
                      <span key={index} className="text-sm">{lang}{index < accountant.languages.length - 1 ? ", " : ""}</span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Right column - Tabs */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="about">
            <TabsList className="mb-6 w-full">
              <TabsTrigger value="about" className="flex-1">Ma'lumotlar</TabsTrigger>
              <TabsTrigger value="reviews" className="flex-1">Baholar</TabsTrigger>
              <TabsTrigger value="services" className="flex-1">Xizmatlar</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="p-4">
              <h2 className="text-xl font-semibold mb-4">Men haqimda</h2>
              <p className="text-gray-700 mb-6">
                {accountant.about}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Ta'lim</h3>
                  <p className="text-gray-700 mb-4">
                    {accountant.education}
                  </p>
                  
                  <h3 className="text-lg font-semibold mb-3">Sertifikatlar</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    {accountant.certificates.map((cert, index) => (
                      <li key={index}>{cert}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Xizmat ko'rsatish joylari</h3>
                  <p className="text-gray-700 mb-2">
                    • Masofaviy xizmatlar (onlayn)
                  </p>
                  <p className="text-gray-700 mb-4">
                    • Toshkent shahri doirasida ofisga tashrif
                  </p>
                  
                  <h3 className="text-lg font-semibold mb-3">Murojaat qilish vaqti</h3>
                  <p className="text-gray-700">
                    {accountant.availabilityHours}
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Mijozlar baholari</h2>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-medium text-lg">{accountant.rating}</span>
                    <span className="text-gray-600 ml-2">({accountant.reviewCount} ta baho)</span>
                  </div>
                </div>
                
                {accountant.reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Avatar>
                          <AvatarImage src={review.avatar} alt={review.name} />
                          <AvatarFallback>{review.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">{review.name}</h3>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <div className="flex items-center mt-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i}
                                className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="services">
              <h2 className="text-xl font-semibold mb-6">Taklif qilinadigan xizmatlar</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Soliq hisobotlari</h3>
                    <p className="text-gray-600 mb-4">
                      Soliq deklaratsiyalarini tayyorlash va topshirish. Soliq tekshiruvlari uchun hujjatlarni tayyorlash.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">150,000 so'm / soat</span>
                      <Link to={`/dashboard/new-order?accountant=${accountant.id}&service=tax-reports`}>
                        <Button variant="outline" size="sm">Buyurtma berish</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Moliyaviy hisobotlar</h3>
                    <p className="text-gray-600 mb-4">
                      Moliyaviy hisobotlarni tayyorlash. Balans, foyda va zarar to'g'risidagi hisobotlar.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">180,000 so'm / soat</span>
                      <Link to={`/dashboard/new-order?accountant=${accountant.id}&service=financial-statements`}>
                        <Button variant="outline" size="sm">Buyurtma berish</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Konsultatsiya xizmatlari</h3>
                    <p className="text-gray-600 mb-4">
                      Moliyaviy va soliq masalalari bo'yicha maslahatlar. Biznesni rivojlantirish strategiyalari.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">200,000 so'm / soat</span>
                      <Link to={`/dashboard/new-order?accountant=${accountant.id}&service=consultation`}>
                        <Button variant="outline" size="sm">Buyurtma berish</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
