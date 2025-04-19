import { FileText, Briefcase, Users, Calculator, HelpCircle } from "lucide-react";

export const categories = [
  { id: "tax", label: "Soliq hisobotlari", icon: FileText },
  { id: "financial", label: "Moliyaviy hisobotlar", icon: Briefcase },
  { id: "payroll", label: "Ish haqi hisobi", icon: Users },
  { id: "bookkeeping", label: "Buxgalteriya hisobi", icon: Calculator },
  { id: "consultation", label: "Konsultatsiyalar", icon: HelpCircle },
];

export const services = [
  {
    id: 1,
    title: "QQS hisoboti",
    category: "tax",
    description: "Qo'shilgan qiymat solig'i bo'yicha hisobotlar",
    price: "150,000",
    popular: true,
    features: [
      "QQS deklaratsiyasi",
      "QQS hisob-kitobi",
      "Elektron taqdim etish"
    ]
  },
  {
    id: 2,
    title: "Foyda solig'i hisoboti",
    category: "tax",
    description: "Yuridik shaxslar uchun foyda solig'i hisoboti",
    price: "200,000",
    popular: false,
    features: [
      "Foyda solig'i deklaratsiyasi",
      "Soliq hisob-kitobi",
      "Kerakli ilovalar"
    ]
  },
  {
    id: 3,
    title: "Yagona soliq to'lovi",
    category: "tax",
    description: "Kichik biznes subyektlari uchun yagona soliq",
    price: "120,000",
    popular: false,
    features: [
      "YST deklaratsiyasi",
      "Soliq hisob-kitobi",
      "Elektron taqdim etish"
    ]
  },
  {
    id: 4,
    title: "Balans hisoboti",
    category: "financial",
    description: "Tashkilot moliyaviy holati to'g'risidagi asosiy hisobot",
    price: "250,000",
    popular: true,
    features: [
      "Balans tuzish",
      "Batafsil izohlar",
      "Moliyaviy tahlil"
    ]
  },
  {
    id: 5,
    title: "Daromad va xarajatlar hisoboti",
    category: "financial",
    description: "Kompaniya faoliyati natijalarini aks ettiruvchi hisobot",
    price: "200,000",
    popular: false,
    features: [
      "Daromadlar tahlili",
      "Xarajatlar tahlili",
      "Foyda ko'rsatkichlari"
    ]
  },
  {
    id: 6,
    title: "Pul oqimlari hisoboti",
    category: "financial",
    description: "Naqd pul harakati haqida hisobot",
    price: "180,000",
    popular: false,
    features: [
      "Operatsion faoliyat",
      "Investitsion faoliyat",
      "Moliyaviy faoliyat"
    ]
  },
  {
    id: 7,
    title: "Ish haqi hisoblash",
    category: "payroll",
    description: "Xodimlar ish haqi va soliqlarini hisoblash",
    price: "15,000",
    perEmployee: true,
    popular: true,
    features: [
      "Ish haqi hisoblash",
      "JShDS hisoblash",
      "INPS hisoblash"
    ]
  },
  {
    id: 8,
    title: "INPS hisoboti",
    category: "payroll",
    description: "Ijtimoiy soliqlar hisoboti",
    price: "100,000",
    popular: false,
    features: [
      "INPS deklaratsiyasi",
      "To'lov hisob-kitobi",
      "Elektron taqdim etish"
    ]
  },
  {
    id: 9,
    title: "To'liq buxgalteriya xizmati",
    category: "bookkeeping",
    description: "Biznesni to'liq buxgalteriya hisobi bilan ta'minlash",
    price: "Kelishilgan",
    custom: true,
    popular: true,
    features: [
      "Barcha operatsiyalarni yuritish",
      "Hisobotlarni tayyorlash",
      "Soliqlarni hisoblash"
    ]
  },
  {
    id: 10,
    title: "Birlamchi hujjatlarni rasmiylashtirish",
    category: "bookkeeping",
    description: "Xarid, sotuv va boshqa operatsiyalar uchun hujjatlar",
    price: "80,000",
    popular: false,
    features: [
      "Schet-fakturalar",
      "Shartnomalar",
      "TTN va boshqalar"
    ]
  },
  {
    id: 11,
    title: "Soliq maslahati",
    category: "consultation",
    description: "Soliq optimizatsiyasi bo'yicha professional maslahatlar",
    price: "300,000",
    hourly: true,
    popular: false,
    features: [
      "Individual maslahat",
      "Soliqlarni optimallashtirish",
      "Xatarlarni kamaytirish"
    ]
  },
  {
    id: 12,
    title: "Biznesni ro'yxatdan o'tkazish maslahati",
    category: "consultation",
    description: "Yangi biznesni ro'yxatdan o'tkazish bo'yicha yordam",
    price: "500,000",
    popular: false,
    features: [
      "Biznes shakli tanlash",
      "Hujjatlarni tayyorlash",
      "Soliq rejimini tanlash"
    ]
  }
];
