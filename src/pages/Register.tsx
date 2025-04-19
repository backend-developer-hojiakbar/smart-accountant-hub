
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, UserPlus, User, UserRound } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userType, setUserType] = useState("client");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would typically handle registration logic
    console.log("Registration attempt:", { ...formData, userType });
  };

  return (
    <div className="container mx-auto py-16 px-4 flex justify-center">
      <div className="w-full max-w-md">
        <Card className="shadow-lg border-accountblue-100">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center font-bold">Ro'yxatdan o'tish</CardTitle>
            <CardDescription className="text-center">
              AccountHub platformasiga xush kelibsiz
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Tabs defaultValue="client" onValueChange={setUserType} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="client">
                  <User className="mr-2 h-4 w-4" />
                  Mijoz sifatida
                </TabsTrigger>
                <TabsTrigger value="accountant">
                  <UserRound className="mr-2 h-4 w-4" />
                  Buxgalter sifatida
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="client" className="mt-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">To'liq ism-familiya</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="Ism Familiya"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email manzil</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon raqam</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+998 90 123 45 67"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Parol</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="pr-10"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Parolni tasdiqlang</Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="pr-10"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="agreeTerms" 
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) => 
                        setFormData({...formData, agreeTerms: checked as boolean})
                      }
                      required
                    />
                    <label
                      htmlFor="agreeTerms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      <span>
                        Men <Link to="/terms" className="text-accountblue-600 hover:underline">Foydalanish shartlari</Link> va{" "}
                        <Link to="/privacy" className="text-accountblue-600 hover:underline">Maxfiylik siyosati</Link> bilan tanishib chiqdim va roziman
                      </span>
                    </label>
                  </div>
                  <Button type="submit" className="w-full bg-accountblue-600 hover:bg-accountblue-700">
                    <UserPlus className="mr-2 h-4 w-4" /> Ro'yxatdan o'tish
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="accountant" className="mt-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">To'liq ism-familiya</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="Ism Familiya"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email manzil</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon raqam</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+998 90 123 45 67"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Ixtisoslik (bir nechta tanlash mumkin)</Label>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="tax" />
                        <label
                          htmlFor="tax"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Soliq hisobotlari
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="financialStatements" />
                        <label
                          htmlFor="financialStatements"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Moliyaviy hisobotlar
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="payroll" />
                        <label
                          htmlFor="payroll"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Ish haqi hisobi
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Tajriba</Label>
                    <RadioGroup defaultValue="1-3">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="0-1" id="exp-0-1" />
                        <Label htmlFor="exp-0-1">1 yilgacha</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1-3" id="exp-1-3" />
                        <Label htmlFor="exp-1-3">1-3 yil</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3-5" id="exp-3-5" />
                        <Label htmlFor="exp-3-5">3-5 yil</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="5+" id="exp-5+" />
                        <Label htmlFor="exp-5+">5+ yil</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Parol</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="pr-10"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Parolni tasdiqlang</Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="pr-10"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="agreeTerms" 
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) => 
                        setFormData({...formData, agreeTerms: checked as boolean})
                      }
                      required
                    />
                    <label
                      htmlFor="agreeTerms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      <span>
                        Men <Link to="/terms" className="text-accountblue-600 hover:underline">Foydalanish shartlari</Link> va{" "}
                        <Link to="/privacy" className="text-accountblue-600 hover:underline">Maxfiylik siyosati</Link> bilan tanishib chiqdim va roziman
                      </span>
                    </label>
                  </div>
                  <Button type="submit" className="w-full bg-accountblue-600 hover:bg-accountblue-700">
                    <UserPlus className="mr-2 h-4 w-4" /> Ro'yxatdan o'tish
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-center text-gray-500">
              Hisobingiz bormi?{" "}
              <Link to="/login" className="text-accountblue-600 hover:underline">
                Kirish
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
