export type SubscriptionPlan = {
  _id: string;
  name: string;
  description: string;
  price: number;
  billingCycle: "monthly" | "yearly";
  availableTo: ("athlete" | "team")[];
  features: string[];
  tier?: "silver" | "gold" | "platnium"; // optional since not all have it
  isActive: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
  yearlyDiscount: number;
  mostPopular?: boolean;
};
