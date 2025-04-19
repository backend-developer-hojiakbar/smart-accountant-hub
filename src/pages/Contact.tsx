
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Home } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Xabar yuborildi",
      description: "Sizning xabaringiz muvaffaqiyatli yuborildi. Tez orada siz bilan bog'lanamiz.",
    });
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Biz bilan bog'laning</h1>
      <p className="text-lg text-center text-gray-600 mb-12">
        Savollaringiz bormi? Bizga xabar yuboring va biz tez orada siz bilan bog'lanamiz.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Bizga yozing</h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Ismingiz
                  </label>
                  <Input
                    id="name"
                    placeholder="Ismingizni kiriting"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email manzilingizni kiriting"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Mavzu
                </label>
                <Input
                  id="subject"
                  placeholder="Xabar mavzusini kiriting"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Xabar matni
                </label>
                <Textarea
                  id="message"
                  placeholder="Xabar matnini kiriting"
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Yuborish
              </Button>
            </div>
          </form>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-6">Kontakt ma'lumotlari</h2>
          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-accountblue-100 mr-4">
                    <Mail className="h-6 w-6 text-accountblue-500" />
                  </div>
                  <div>
                    <CardTitle className="text-lg mb-1">Email</CardTitle>
                    <CardDescription>info@accountant.uz</CardDescription>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-accountblue-100 mr-4">
                    <Phone className="h-6 w-6 text-accountblue-500" />
                  </div>
                  <div>
                    <CardTitle className="text-lg mb-1">Telefon</CardTitle>
                    <CardDescription>+998 90 123 45 67</CardDescription>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-accountblue-100 mr-4">
                    <Home className="h-6 w-6 text-accountblue-500" />
                  </div>
                  <div>
                    <CardTitle className="text-lg mb-1">Manzil</CardTitle>
                    <CardDescription>Toshkent sh., Shayxontohur tumani, Navoiy ko'chasi, 30-uy</CardDescription>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Ish vaqtlari</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Dushanba - Juma:</span>
                <span>9:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Shanba:</span>
                <span>10:00 - 15:00</span>
              </div>
              <div className="flex justify-between">
                <span>Yakshanba:</span>
                <span>Dam olish kuni</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Bizning joylashuv</h2>
        <div className="h-96 bg-gray-200 rounded-lg">
          {/* Here you would integrate a real map using a library like Google Maps */}
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Xarita joylashuvi</p>
          </div>
        </div>
      </div>
    </div>
  );
}
