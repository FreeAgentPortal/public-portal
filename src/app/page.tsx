import Hero from "@/views/home/hero";
import { News } from "@/views/home/news";

export default function Home() {
  return (
    <div className='flex flex-col gap-9 mt-16'>
      <Hero />
      <News />
    </div>
  );
}
