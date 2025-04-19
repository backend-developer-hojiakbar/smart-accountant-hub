
export interface Service {
  id: number;
  title: string;
  category: string;
  description: string;
  price: string;
  popular?: boolean;
  perEmployee?: boolean;
  custom?: boolean;
  hourly?: boolean;
  features: string[];
  slug?: string; // For URL-friendly names
  detailUrl?: string; // For linking to detail pages
  fullDescription?: string;
  estimatedHours?: number;
  requirements?: string[];
  relatedServices?: number[]; // Related service IDs
  available?: boolean;
}
