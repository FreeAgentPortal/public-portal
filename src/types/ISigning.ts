import { Athlete } from "./athlete";
import { Team } from "./team";

/**
 * Interface for Signing document
 * Tracks verified athlete signings to teams
 */
export default interface ISigning {
  athlete: Athlete;
  team: Team;
  signedDate: Date;
  admin: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}
