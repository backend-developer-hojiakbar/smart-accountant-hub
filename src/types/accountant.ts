
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
}

export interface AccountantReview {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}
