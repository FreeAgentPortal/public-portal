"use client";
import { NewsCard } from "@/components/news-card";
import { Section } from "@/layout/section";
import { useNews } from "@/state/useNews";
import React from "react";
import NewsSkeleton from "./news-skeleton";

type Props = {};

export const News = (props: Props) => {
  const { data, isLoading } = useNews();

  if (isLoading || !data) {
    return <NewsSkeleton />;
  }

  return (
    <Section title='News' className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
      {data.payload.map((item) => (
        <NewsCard
          key={item.link}
          title={item.title.rendered}
          description={item.excerpt.rendered}
          image={(() => {
            const imgRegex = /<img[^>]+src="([^"]+)"/;
            const match = imgRegex.exec(item.content.rendered);
            return match ? match[1] : undefined;
          })()}
          link={item.link}
          category={item.categories[0].toString()}
        />
      ))}
    </Section>
  );
};
