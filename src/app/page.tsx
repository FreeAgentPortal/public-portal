import Hero from "@/views/home/hero";
import { News } from "@/views/home/news";
import TeamsLeagueScroll from "@/views/home/teams-league-scroll";

export default function Home() {
  return (
    <div className='flex flex-col gap-9 mt-16'>
      <Hero />
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
      <TeamsLeagueScroll />
      <News />
    </div>
  );
}
