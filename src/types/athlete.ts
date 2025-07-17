import { HighlightVideo } from "./highlight-video";

export type BirthPlace = {
  city?: string;
  state?: string;
  country?: string;
};

export type Measurements = {
  height: number;
  weight: number;
  armLength: number;
  handSize: number;
  wingspan: number;
  neckSize: number;
  chestSize: number;
  thighCircumference: number;
  calfCircumference: number;
  bodyFatPercentage: number;
  bmi: number;
};

export type Metrics = {
  fortyYardDash: number;
  tenYardSplit: number;
  twentyYardShuttle: number;
  threeConeDrill: number;
  verticalJump: number;
  broadJump: number;
  benchPressReps: number;

  maxBench: number;
  maxSquat: number;
  maxPowerClean: number;
  gripStrength: number;

  sprintSpeed: number;
  topEndSpeed: number;
  shuttleAgility: number;
  explosivenessScore: number;
};

export type Position = {
  _id: string;
  name: string;
  abbreviation: string;
};

export type Link = {
  _id: string;
  text: string;
  shortText: string;
  href: string;
  rel: string[];
  isExternal: boolean;
};

export type DraftInfo = {
  year: number;
  round: number;
};

export type Athlete = {
  _id: string;
  espnid: string;
  fullName: string;
  birthdate: string;
  birthPlace: BirthPlace;
  profileImageUrl: string;
  experienceYears: number;
  draft?: DraftInfo;
  measurements: Measurements;
  metrics: Metrics;
  positions: Position[];
  links: Link[];
  highlightVideos: HighlightVideo[];
  rating?: number;
  college: string;
};
