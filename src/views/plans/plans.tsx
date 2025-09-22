// app/pricing/page.tsx

import { PlanCard } from "@/components/plan-card";
import { SubscriptionPlan } from "@/types/plan";
import Link from "next/link";

type Plan = {
  plans: SubscriptionPlan[];
};
export default function PlansView({ plans }: Plan) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-5xl font-bold text-center mb-6">Choose Your Plan</h2>
      <p className="text-lg text-center mb-10">
        Going pro for the first time? In between teams? Declaring your free agent availability? Choose the plan that
        fits you.
      </p>
      {/* September Special Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-6 mb-8 text-center shadow-lg border-2 border-blue-300">
        <div className="flex items-center justify-center mb-2">
          <span className="text-2xl mr-2">⚡</span>
          <h3 className="text-xl font-bold">September Special!</h3>
          <span className="text-2xl ml-2">⚡</span>
        </div>
        <p className="text-lg font-semibold">Signup now to avoid a $50 setup fee! September only!</p>
        <p className="text-sm mt-2 opacity-90">
          Don't wait - starting October 1st, all new registrations will include a $50 setup fee.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans
          .filter((p) => p.isActive)
          .map((plan) => (
            <PlanCard key={plan._id} plan={plan} billingCycle={"monthly"} />
          ))}
      </div>
      <div className="mt-12 flex justify-center items-center">
        <Link href="https://auth.thefreeagentportal.com/auth/register" className="btn btn-primary w-full btn-lg">
          Register now!
        </Link>
      </div>
    </div>
  );
}
