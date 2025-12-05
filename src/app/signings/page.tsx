"use client";

import { useSignings } from "@/state/useSignings";
import { SigningCard } from "@/components/signing-card";
import { Loading } from "@/components/loading";

export default function SigningsPage() {
  const { data, isLoading, error } = useSignings();

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-8">All Signings</h1>
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-8">All Signings</h1>
        <p className="text-center text-gray-500">Unable to load signings at this time. Please try again later.</p>
      </div>
    );
  }

  const signings = data?.payload || [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">All Signings</h1>
        <p className="text-lg text-gray-600">
          Every athlete who's made the jump from free agent to signed athlete through The Free Agent Portal
        </p>
        <p className="text-sm text-gray-500 mt-2">Total Signings: {signings.length}</p>
      </div>

      {signings.length === 0 ? (
        <p className="text-center text-gray-500 py-12">No signings to display yet. Check back soon!</p>
      ) : (
        <div className="space-y-4">
          {signings.map((signing: any) => (
            <SigningCard key={signing._id} signing={signing} />
          ))}
        </div>
      )}
    </div>
  );
}
