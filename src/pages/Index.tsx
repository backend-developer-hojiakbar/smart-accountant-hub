
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Briefcase, Calculator, Clock, CheckCircle, User, Users, CreditCard, MessageSquare, Star } from "lucide-react";

export default function Index() {
  const services = [
    { 
      icon: <FileText className="h-8 w-8 text-accountblue-600" />, 
      title: "Soliq hisobotlari", 
      description: "Barcha turdagi soliq hisobotlarini o'z vaqtida va aniq tayyorlash", 
      link: "/services/tax-reports" 
    },
    { 
      icon: <Calculator className="h-8 w-8 text-accountblue-600" />, 
      title: "Buxgalteriya hisobi", 
      description: "To'liq buxgalteriya hisobi xizmatlari", 
      link: "/services/bookkeeping" 
    },
    { 
      icon: <Briefcase className="h-8 w-8 text-accountblue-600" />, 
      title: "Moliyaviy hisobotlar", 
      description: "Moliyaviy holatni aniq ko'rsatuvchi hisobotlar", 
      link: "/services/financial-statements" 
    },
    { 
      icon: <Users className="h-8 w-8 text-accountblue-600" />, 
      title: "Ish haqi hisobi", 
      description: "Xodimlar ish haqi va soliqlarini hisoblash", 
      link: "/services/payroll" 
    },
  ];

  const advantages = [
    { icon: <Clock className="h-6 w-6 text-accountblue-600" />, text: "Tezkor xizmat - Hisobotlaringiz o'z vaqtida tayyor" },
    { icon: <CheckCircle className="h-6 w-6 text-accountblue-600" />, text: "Ishonchli va malakali buxgalterlar" },
    { icon: <User className="h-6 w-6 text-accountblue-600" />, text: "Shaxsiy yondoshuv har bir mijoz uchun" },
    { icon: <CreditCard className="h-6 w-6 text-accountblue-600" />, text: "Qulay va shaffof narxlar" },
    { icon: <MessageSquare className="h-6 w-6 text-accountblue-600" />, text: "Doimiy aloqa va maslahatlar" },
    { icon: <Star className="h-6 w-6 text-accountblue-600" />, text: "Yuqori baholangan xizmat sifati" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-accountblue-800 to-accountblue-600 text-white pt-16 pb-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 md:text-5xl lg:text-6xl animate-fade-in">
              Biznesingiz uchun zamonaviy buxgalteriya xizmatlari
            </h1>
            <p className="text-lg mb-8 text-gray-100 md:text-xl animate-fade-in">
              Ishonchli buxgalterlar bilan onlayn platformada bog'laning va biznesingizni rivojlantirish uchun vaqtingizni tejang
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto bg-white text-accountblue-700 hover:bg-gray-100">
                  Ro'yxatdan o'tish
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-accountblue-700">
                  Xizmatlar bilan tanishish
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 -right-10 w-72 h-72 bg-accountblue-500 rounded-full opacity-20"></div>
          <div className="absolute bottom-0 -left-20 w-96 h-96 bg-accountblue-500 rounded-full opacity-20"></div>
          <div className="absolute top-1/4 left-1/3 w-48 h-48 bg-accountblue-500 rounded-full opacity-10"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Bizning xizmatlarimiz</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Biznesingiz uchun kerak bo'lgan barcha buxgalteriya xizmatlarini ishonchli buxgalterlar bilan amalga oshiring
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link key={index} to={service.link}>
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 p-3 bg-accountblue-50 rounded-lg">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline" className="border-accountblue-300 text-accountblue-700">
                Barcha xizmatlarni ko'rish
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Qanday ishlaydi</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              AccountHub platformasi buxgalteriya xizmatlarini olish jarayonini soddalashtirilgan va samarali qiladi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-accountblue-100 text-accountblue-700 text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Hisobot turini tanlang</h3>
              <p className="text-gray-600">
                Sizga kerak bo'lgan hisobot turini tanlang va buyurtma bering
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-accountblue-100 text-accountblue-700 text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Buxgalter tanlang</h3>
              <p className="text-gray-600">
                Ixtisoslashgan buxgalterlardan eng mos keluvchisini tanlang yoki avtomatik tanlansin
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-accountblue-100 text-accountblue-700 text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Natijani oling</h3>
              <p className="text-gray-600">
                Tayyor hisobotni shaxsiy kabinetingizdan yuklab oling
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/register">
              <Button className="bg-accountblue-600 hover:bg-accountblue-700">
                Boshlash
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nima uchun bizni tanlashadi</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              AccountHub platformasi buxgalteriya xizmatlarini olish va ko'rsatish uchun eng qulay va ishonchli yechim
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start p-4">
                <div className="flex-shrink-0 mr-4">{advantage.icon}</div>
                <p className="text-gray-800">{advantage.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Mijozlar fikrlari</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Platformamiz foydalanuvchilari tajribasi bilan tanishing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-accountblue-100">
              <CardContent className="pt-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-accountblue-500 text-accountblue-500" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">
                    "AccountHub orqali buxgalteriya hisobotlarimni yuritish juda qulay. Vaqtimni tejayapman va xizmat sifati a'lo darajada."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-accountblue-200 flex items-center justify-center">
                      <span className="font-semibold text-accountblue-700">AK</span>
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Azamat Karimov</p>
                      <p className="text-gray-500 text-sm">Biznes egasi</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-accountblue-100">
              <CardContent className="pt-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-accountblue-500 text-accountblue-500" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">
                    "Men buxgalter sifatida ishlashni boshlaganimda, AccountHub menga doimiy mijozlar topishimda juda katta yordam berdi."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-accountblue-200 flex items-center justify-center">
                      <span className="font-semibold text-accountblue-700">SS</span>
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Sabina Saidova</p>
                      <p className="text-gray-500 text-sm">Buxgalter</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-accountblue-100">
              <CardContent className="pt-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-accountblue-500 text-accountblue-500" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">
                    "Soliq hisobotlarini topshirish uchun doimo kech qolardim. Endi AccountHub bilan hammasini o'z vaqtida va to'g'ri bajarayapman."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-accountblue-200 flex items-center justify-center">
                      <span className="font-semibold text-accountblue-700">BA</span>
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Bahrom Ahmedov</p>
                      <p className="text-gray-500 text-sm">YaTT</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accountblue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Biznesingiz uchun professional buxgalteriya xizmati</h2>
            <p className="text-lg mb-8">
              AccountHub platformasiga hoziroq qo'shiling va buxgalteriya masalalarini ishonchli mutaxassislar bilan hal qiling
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto bg-white text-accountblue-700 hover:bg-gray-100">
                  Ro'yxatdan o'tish
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-accountblue-700">
                  Ko'proq ma'lumot
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
