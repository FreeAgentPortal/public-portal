import { Athlete } from "@/types/athlete";
import clsx from "clsx";
import Link from "next/link";

type Props = {
  athlete: Athlete;
};
export default function ProfileActions({ athlete }: Props) {
  const actions = [
    {
      name: "Claim",
      link: "https://auth.thefreeagentportal.com/claim/" + athlete?.espnid,
      should: athlete?._id === undefined,
      style: "bg-primary",
    },
    {
      name: "View Full Profile",
      link: "https://athlete.thefreeagentportal.com/athletes/" + athlete?._id,
      should: athlete?._id !== undefined,
      style: "bg-primary",
    },
    {
      name: "View ESPN Profile",
      link: "https://www.espn.com/nfl/player?athleteId=" + athlete?.espnid,
      should: athlete?.espnid !== undefined,
      style: "bg-white/10",
    },
  ];
  return (
    <div className='mt-4 flex gap-4'>
      {actions
        .filter((a) => a.should)
        .map((action, i) => (
          <Link key={i} href={action.link} className='hidden md:flex'>
            <button
              className={clsx(
                `cursor-pointer px-4 py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 ease-in-out`,
                action.style
              )}
            >
              {action.name}
            </button>
          </Link>
        ))}
    </div>
  );
}
