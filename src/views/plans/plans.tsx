// app/pricing/page.tsx

import { PlanCard } from "@/components/plan-card";
import { SubscriptionPlan } from "@/types/plan";
import Link from "next/link";

type Plan = {
  plans: SubscriptionPlan[];
};
export default function PlansView({ plans }: Plan) {
  return (
    <div className='max-w-7xl mx-auto px-4 py-12'>
      <h2 className='text-5xl font-bold text-center mb-6'>Choose Your Plan</h2>
      <p className='text-lg text-center mb-10'>Going pro for the first time?</p>
      <p className='text-lg text-center mb-10'>In between teams?</p>
      <p className='text-lg text-center mb-10'>Declaring your free agent availability?</p>
      <p className='text-lg text-center mb-10'>Choose the plan that fits you.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {plans
          .filter((p) => p.isActive)
          .map((plan) => (
            <PlanCard key={plan._id} plan={plan} billingCycle={"monthly"} />
          ))}
      </div>
      <div className='mt-12 flex justify-center items-center'>
        <Link
          href='https://auth.thefreeagentportal.com/auth/register'
          className='btn btn-primary w-full btn-lg'
        >
          Register now!
        </Link>
      </div>
    </div>
  );
}
