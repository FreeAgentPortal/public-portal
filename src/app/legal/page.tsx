"use client";
import { Loading } from "@/components/loading";
import { useAllLegal } from "@/state/useLegal";
import React from "react";

type Props = {};

const Legal = (props: Props) => {
  const { data, isLoading } = useAllLegal("terms");
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>Legal Information</h1>
      <p className='mb-2 normal-case'>
        This page contains important legal information regarding the use of our
        services. Please read carefully.
      </p>
      <ul className='list-disc pl-5'>
        {data?.payload.map((doc) => (
          <li key={doc.title} className='mb-2'>
            <a href={`/legal/${doc.type}`} className='hover:underline'>
              {doc.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Legal;
