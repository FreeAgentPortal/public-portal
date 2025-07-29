import { Athlete } from "@/types/athlete";

type Props = {
  athlete: Athlete;
};
export default function ProfileMetrics({ athlete }: Props) {
  const performanceMetrics = [
    { name: "40 Yard Dash", value: athlete.metrics?.fortyYardDash },
    { name: "Vertical Jump", value: athlete.metrics?.verticalJump },
    { name: "Bench Press", value: athlete.metrics?.benchPressReps },
    { name: "Cone Drill 3", value: athlete.metrics?.threeConeDrill },
    { name: "Broad Jump", value: athlete.metrics?.broadJump },
    { name: "Max Bench", value: athlete.metrics?.maxBench },
    { name: "Max Squat", value: athlete.metrics?.maxSquat },
    { name: "Max Power Clean", value: athlete.metrics?.maxPowerClean },
    { name: "Grip Strength", value: athlete.metrics?.gripStrength },
    { name: "Sprint Speed", value: athlete.metrics?.sprintSpeed },
    { name: "Top End Speed", value: athlete.metrics?.topEndSpeed },
    {
      name: "Shuttle Agility",
      value: athlete.metrics?.shuttleAgility,
    },
    {
      name: "Explosiveness",
      value: athlete.metrics?.explosivenessScore,
    },
  ];

  if (performanceMetrics.every((metric) => !metric.value)) {
    return <p className='text-gray-500'>No performance metrics available.</p>;
  }

  return (
    <div className='grid grid-cols-2 gap-4 text-sm text-white/80'>
      {performanceMetrics.map((metric, i) => {
        if (!metric.value) {
          return null;
        } else {
          return (
            <div key={i}>
              <p className='font-semibold'>{metric.name}</p>
              <p>{metric.value}</p>
            </div>
          );
        }
      })}
    </div>
  );
}
