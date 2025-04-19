
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Azamat Karimov",
      role: "Bosh direktor",
      image: "/placeholder.svg",
      bio: "10 yillik tajribaga ega buxgalter va moliyaviy maslahatchi. Xalqaro kompaniyalarda ishlagan."
    },
    {
      name: "Dilnoza Rahimova",
      role: "Bosh buxgalter",
      image: "/placeholder.svg",
      bio: "12 yillik tajribaga ega, yuqori malakali buxgalter. Katta korxonalar uchun moliyaviy hisobotlarni tayyorlashda ekspert."
    },
    {
      name: "Jahongir Mahmudov",
      role: "Soliq maslahatchisi",
      image: "/placeholder.svg",
      bio: "8 yillik tajribaga ega soliq maslahatchisi. Soliq optimizatsiyasi va hisobotlar bo'yicha mutaxassis."
    },
    {
      name: "Gulnora Abdullayeva",
      role: "Ish haqi hisobi bo'yicha mutaxassis",
      image: "/placeholder.svg",
      bio: "7 yillik tajribaga ega ish haqi hisobi va personal boshqaruvi bo'yicha mutaxassis."
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Biz haqimizda</h1>
      <p className="text-lg text-center text-gray-600 mb-12">
        Accountant.uz - biznesingiz uchun yuqori sifatli moliyaviy va buxgalterlik xizmatlari
      </p>

      <Tabs defaultValue="company" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="company">Kompaniya haqida</TabsTrigger>
          <TabsTrigger value="mission">Missiya va qadriyatlar</TabsTrigger>
          <TabsTrigger value="team">Bizning jamoa</TabsTrigger>
        </TabsList>
        
        <TabsContent value="company" className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Kompaniya tarixi</h2>
              <p className="text-gray-700 mb-4">
                Accountant.uz 2015-yilda O'zbekiston buxgalteriya va moliyaviy konsalting bozorida faoliyatini boshladi. Birinchi kundan boshlab, bizning maqsadimiz kichik va o'rta bizneslar uchun yuqori sifatli xizmatlar ko'rsatish bo'lgan.
              </p>
              <p className="text-gray-700 mb-4">
                Kompaniyamiz 7 yil davomida O'zbekistondagi eng ishonchli buxgalteriya va moliyaviy xizmatlar provayderiga aylandi. Biz doimo biznes egalari va buxgalterlar o'rtasidagi bo'shliqni to'ldirishga harakat qilamiz.
              </p>
              <p className="text-gray-700">
                Bugungi kunda Accountant.uz 500 dan ortiq mijozlarga xizmat ko'rsatmoqda va jamoamiz 50 dan ortiq yuqori malakali mutaxassislardan iborat.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500">Kompaniya rasmi</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-accountblue-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-accountblue-500">500+</span>
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">Mamnun mijozlar</h3>
                <p className="text-gray-600">
                  500 dan ortiq kompaniyalar bizning xizmatlarimizga ishonadi
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-accountblue-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-accountblue-500">50+</span>
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">Professional jamoa</h3>
                <p className="text-gray-600">
                  50 dan ortiq yuqori malakali mutaxassislar
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-accountblue-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-accountblue-500">7+</span>
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">Yillik tajriba</h3>
                <p className="text-gray-600">
                  7 yildan ortiq bozorda yuqori natijalarga erishmoqdamiz
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="mission" className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Bizning missiya</h2>
              <p className="text-gray-700 mb-6">
                Accountant.uz ning missiyasi - biznes egalari uchun moliyaviy hayotni soddalashtirish. Biz korxonalar o'z faoliyatlarining hisobini oson va samarali yuritishlariga yordam beramiz, bu esa ularga o'z bizneslari rivojlanishiga ko'proq vaqt ajratish imkonini beradi.
              </p>
              <p className="text-gray-700">
                Biz O'zbekistondagi bizneslar uchun eng ishonchli moliyaviy hamkor bo'lishga intilamiz. Bizning yondashuvimiz - har bir mijozga individual munosabatda bo'lish va uning ehtiyojlariga mos xizmatlarni taklif qilish.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Qadriyatlarimiz</h2>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-4 w-8 h-8 bg-accountblue-100 rounded-full flex items-center justify-center text-accountblue-500 font-bold">1</div>
                  <div>
                    <h3 className="font-semibold mb-1">Ishonch</h3>
                    <p className="text-gray-600">Mijozlarimiz bilan ishonch asosida munosabatlarni quramiz va har doim ularga eng yuqori standartlardagi xizmatlarni taqdim etamiz.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 w-8 h-8 bg-accountblue-100 rounded-full flex items-center justify-center text-accountblue-500 font-bold">2</div>
                  <div>
                    <h3 className="font-semibold mb-1">Sifat</h3>
                    <p className="text-gray-600">Biz har bir detalga e'tibor qaratamiz va har doim eng yuqori sifatli xizmatlarni ko'rsatishga intilamiz.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 w-8 h-8 bg-accountblue-100 rounded-full flex items-center justify-center text-accountblue-500 font-bold">3</div>
                  <div>
                    <h3 className="font-semibold mb-1">Innovatsiya</h3>
                    <p className="text-gray-600">Biz doimo o'z xizmatlarimizni takomillashtirish va yangi texnologiyalarni qo'llash ustida ishlaymiz.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 w-8 h-8 bg-accountblue-100 rounded-full flex items-center justify-center text-accountblue-500 font-bold">4</div>
                  <div>
                    <h3 className="font-semibold mb-1">Jamoa ishi</h3>
                    <p className="text-gray-600">Biz o'zaro hurmatga asoslangan jamoa bo'lib ishlaymiz va har bir xodimning rivojlanishiga e'tibor qaratamiz.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="team" className="p-4">
          <h2 className="text-2xl font-semibold mb-8 text-center">Bizning professional jamoa</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={member.image} />
                      <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-accountblue-500 mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Bizning jamoaga qo'shiling</h3>
            <p className="text-gray-600 mb-6">
              Accountant.uz jamoasi doimo o'z saflarini yangi va iqtidorli mutaxassislar bilan to'ldirishga tayyor. Agar siz professional buxgalter bo'lsangiz va bizning jamoaga qo'shilishni xohlasangiz, bizga rezyumengizni yuboring.
            </p>
            <div className="flex justify-center">
              <a href="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2">
                Bog'lanish
              </a>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
