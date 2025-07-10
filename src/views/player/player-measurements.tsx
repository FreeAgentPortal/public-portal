import { Athlete } from "@/types/athlete";

type Props = {
  athlete: Athlete;
};
export default function ProfileMeasurements({ athlete }: Props) {
  const measurements = [
    { name: "Height", value: athlete.measurements?.height },
    { name: "Weight", value: athlete.measurements?.weight },
    { name: "Arm Length", value: athlete.measurements?.armLength },
    { name: "Hand Size", value: athlete.measurements?.handSize },
    { name: "Wingspan", value: athlete.measurements?.wingspan },
    { name: "Neck Size", value: athlete.measurements?.neckSize },
    { name: "Chest Size", value: athlete.measurements?.chestSize },
    {
      name: "Thigh Circumference",
      value: athlete.measurements?.thighCircumference,
    },
    {
      name: "Calf Circumference",
      value: athlete.measurements?.calfCircumference,
    },
    {
      name: "Body Fat Percentage",
      value: athlete.measurements?.bodyFatPercentage,
    },
    { name: "BMI", value: athlete.measurements?.bmi },
  ];

  return (
    <div className='mt-6'>
      <h2 className='text-lg font-semibold mb-2 text-white/90'>Measurements</h2>
      <div className='grid grid-cols-2 gap-4 text-sm text-white/80'>
        {measurements.map((metric, i) => {
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
    </div>
  );
}
