import { HighlightVideo } from "./highlight-video";

export type Athlete = {
  _id: string;
  userId: string;
  fullName: string;
  contactNumber: string;
  email: string;
  bio: string;
  birthdate: string; // ISO string
  measurements: Record<string, any>;
  metrics: Record<string, any>;
  college: string;
  positions: string[];
  awards: string[];
  highlightVideos: HighlightVideo[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  subscriptions: any[]; // Replace with more specific type if known
};
