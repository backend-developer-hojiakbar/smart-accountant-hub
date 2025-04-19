
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";

export default function Settings() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Sozlamalar</h1>
      
      <Tabs defaultValue="profile">
        <TabsList className="mb-6">
          <TabsTrigger value="profile">Profil</TabsTrigger>
          <TabsTrigger value="company">Kompaniya ma'lumotlari</TabsTrigger>
          <TabsTrigger value="notifications">Bildirishnomalar</TabsTrigger>
          <TabsTrigger value="security">Xavfsizlik</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profil ma'lumotlari</CardTitle>
              <CardDescription>
                Shaxsiy ma'lumotlaringizni yangilang
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ism</Label>
                  <Input id="name" defaultValue="Aziz" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="surname">Familiya</Label>
                  <Input id="surname" defaultValue="Ismoilov" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" defaultValue="aziz@example.com" type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input id="phone" defaultValue="+998 90 123 4567" />
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button>Saqlash</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="company">
          <Card>
            <CardHeader>
              <CardTitle>Kompaniya ma'lumotlari</CardTitle>
              <CardDescription>
                Kompaniyangiz haqidagi ma'lumotlarni yangilang
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Kompaniya nomi</Label>
                  <Input id="company-name" defaultValue="Example LLC" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stir">STIR</Label>
                  <Input id="stir" defaultValue="123456789" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Manzil</Label>
                  <Input id="address" defaultValue="Toshkent sh., Mirzo Ulug'bek tumani" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bank-account">Bank hisobi</Label>
                  <Input id="bank-account" defaultValue="12345678901234567890" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mfo">MFO</Label>
                  <Input id="mfo" defaultValue="00123" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bank-name">Bank nomi</Label>
                  <Input id="bank-name" defaultValue="Ipoteka Bank" />
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button>Saqlash</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Bildirishnomalar</CardTitle>
              <CardDescription>
                Bildirishnomalar sozlamalarini boshqaring
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Email bildirishnomalari</h4>
                    <p className="text-sm text-gray-500">Muhim yangiliklar va statuslar haqida</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">SMS bildirishnomalari</h4>
                    <p className="text-sm text-gray-500">Shoshilinch va muhim ma'lumotlar uchun</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Hisobot tayyor bo'lganida</h4>
                    <p className="text-sm text-gray-500">Hisobotingiz tayyor bo'lganda xabar bering</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Yangi xabar kelganida</h4>
                    <p className="text-sm text-gray-500">Buxgalterdan yangi xabar kelganida xabar bering</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Marketing xabarlari</h4>
                    <p className="text-sm text-gray-500">Yangiliklar va maxsus takliflar</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Xavfsizlik</CardTitle>
              <CardDescription>
                Hisobingiz xavfsizlik sozlamalarini boshqaring
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Parolni o'zgartirish</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Joriy parol</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">Yangi parol</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Yangi parolni tasdiqlang</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">Ikki faktorli autentifikatsiya</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Hisobingizga kirishda qo'shimcha xavfsizlik qatlami</p>
                  </div>
                  <Switch />
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button>Saqlash</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
