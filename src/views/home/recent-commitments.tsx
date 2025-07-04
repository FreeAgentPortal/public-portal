import { Card } from "@/components/card";
import { Section } from "@/layout/section";
import React from "react";

type Props = {};

export const RecentCommitments = (props: Props) => {
  return (
    <Section title='Featured Opportunities' className='grid grid-cols-3 gap-4'>
      <Card />
      <Card />
      <Card />
    </Section>
  );
};
