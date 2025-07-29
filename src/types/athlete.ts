export interface Athlete {
  _id: string;
  espnid?: string;
  userId: string;
  fullName: string;
  contactNumber?: string;
  email?: string;
  birthPlace?: {
    city: string;
    state: string;
    country: string;
  };
  links?: {
    text: string;
    shortText: string;
    href: string;
    rel: string[];
    isExternal: boolean;
  }[];
  draft?: {
    year: number;
    round: number;
    pick: number;
    team: string;
  };
  birthdate?: Date;
  measurements?: Record<string, string | number>;
  metrics?: Record<string, number>;
  college?: string;
  positions?: [
    {
      name: string;
      abbreviation: string;
    }
  ];
  graduationYear?: number;
  bio?: string;
  highSchool?: string;
  awards?: string[];
  strengths?: string;
  weaknesses?: string;
  experienceYears?: number;
  testimony?: string;
  profileImageUrl?: string;
  highlightVideos?: string[];
  diamondRating?: number;
  createdAt: Date;
  updatedAt: Date;
}
