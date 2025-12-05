"use client";

import { useSignings } from "@/state/useSignings";
import { SigningCarousel } from "@/components/signing-carousel";
import { Loading } from "@/components/loading";
import Link from "next/link";

export const RecentSignings = () => {
  const { data, isLoading, error } = useSignings(10);

  if (isLoading) {
    return (
      <div className="py-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">Recent Signings</h2>
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">Recent Signings</h2>
        <p className="text-center text-gray-400">Unable to load recent signings at this time.</p>
      </div>
    );
  }

  const signings = data?.payload || [];

  if (signings.length === 0) {
    return (
      <div className="py-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">Recent Signings</h2>
        <p className="text-center text-gray-400">No signings to display yet. Check back soon!</p>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white">From Free Agent to Signed Athlete</h2>
        <p className="text-lg text-gray-300">Athletes who've made the jump through The Free Agent Portal</p>
      </div>

      <SigningCarousel signings={signings} showNotes={false} autoPlay={true} interval={5000} />

      {/* <div className="text-center mt-12">
        <Link
          href="/signings"
          className="inline-block bg-secondary hover:bg-secondary/80 text-primary px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-lg"
        >
          View All Signings
        </Link>
      </div> */}
    </div>
  );
};
