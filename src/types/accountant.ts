
export interface Accountant {
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
  hourly?: string;
  monthly?: string;
  about?: string;
  education?: string;
  certificates?: string[];
  languages?: string[];
  availabilityHours?: string;
  completedProjects?: number;
  reviews?: AccountantReview[];
  orders?: Order[];
}

export interface AccountantReview {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Order {
  id: number;
  type: string;
  clientId: number;
  clientName: string;
  accountantId: number;
  date: string;
  dueDate?: string;
  status: "Yangi" | "Jarayonda" | "Tekshirilmoqda" | "Tayyor" | "Bekor qilingan";
  price: string;
  description: string;
  comments?: string;
  files?: OrderFile[];
}

export interface OrderFile {
  id: number;
  name: string;
  url: string;
  date: string;
  size?: string;
}
