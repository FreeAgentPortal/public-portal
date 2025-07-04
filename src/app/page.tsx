import Hero from "@/views/home/hero";
import { News } from "@/views/home/news";
import { RecentCommitments } from "@/views/home/recent-commitments";

export default function Home() {
  return (
    <div className='flex flex-col gap-9 mt-16'>
      <Hero />
      <News />
      <RecentCommitments />
    </div>
  );
}
