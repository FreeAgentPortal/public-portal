import Hero from "@/views/home/hero";
import { News } from "@/views/home/news";
import TeamsLeagueScroll from "@/views/home/teams-league-scroll";

export default function Home() {
  return (
    <div className='flex flex-col gap-9 mt-16'>
      <Hero />
      <TeamsLeagueScroll />
      <News />
    </div>
  );
}
