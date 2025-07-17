"use client";
import { usePlans } from "@/state/usePlans";
import PlansView from "@/views/plans/plans";

type Props = {};

const Pricing = (props: Props) => {
  const { data, isLoading } = usePlans();
  if (isLoading || !data) {
    return <p>Loading...</p>;
  }

  const filteredPlans = data.payload
    .filter((p) => p.isActive && p.availableTo.includes("athlete"))
    .sort((a, b) => a.price - b.price);
  return <PlansView plans={filteredPlans} />;
};

export default Pricing;
