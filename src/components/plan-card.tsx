// components/PlanCard.tsx
import { CheckCircle } from "lucide-react";
import clsx from "clsx";
import { SubscriptionPlan } from "@/types/plan";

type Props = {
  plan: SubscriptionPlan;
  billingCycle: "monthly" | "yearly";
};

export const PlanCard = ({ plan, billingCycle }: Props) => {
  const isYearly = billingCycle === "yearly";
  const price = isYearly
    ? plan.price * 12 * ((100 - plan.yearlyDiscount) / 100)
    : plan.price;

  const tierColorMap: Record<string, string> = {
    silver: "border-gray-300 bg-white text-gray-800",
    gold: "border-yellow-400 bg-yellow-50 text-yellow-900",
    platnium: "border-indigo-500 bg-indigo-50 text-indigo-900",
  };

  return (
    <div
      className={clsx(
        "relative p-6 rounded-xl shadow-md border-1 transition-transform",
        tierColorMap[plan.tier ?? "silver"],
        {
          "ring-2 ring-primary scale-105": plan.mostPopular,
          "lg:col-span-3": plan.price === 0,
        }
      )}
    >
      {plan.mostPopular && (
        <div className='absolute top-3 right-3 badge badge-primary'>
          Most Popular
        </div>
      )}

      <h3 className='text-2xl font-bold mb-2'>{plan.name}</h3>
      <p className='mb-4 text-sm opacity-80'>{plan.description}</p>

      <div className='mb-6'>
        <span className='text-4xl font-extrabold'>${price.toFixed(0)}</span>
        <span className='text-sm ml-1 text-muted'>
          /{isYearly ? "year" : "month"}
        </span>
        {isYearly && plan.yearlyDiscount > 0 && (
          <div className='text-sm text-green-600 font-semibold mt-1'>
            Save {plan.yearlyDiscount}% annually
          </div>
        )}
      </div>

      <ul className='space-y-2 mb-4'>
        {plan.features.map((feature, i) => (
          <li key={i} className='flex items-center gap-2'>
            <CheckCircle className='w-4 h-4 text-success' />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className='mt-auto'>
        <button className='btn btn-primary w-full'>Choose Plan</button>
      </div>
    </div>
  );
};
