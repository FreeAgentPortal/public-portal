import { Athlete } from "@/types/athlete";

type Props = {
  athelte: Athlete;
};

export default function ProfileVideos({ athelte }: Props) {
  if (!athelte.highlightVideos.length) {
    return null;
  }
  return (
    <div className='mt-6'>
      <h2 className='text-lg font-semibold mb-2 text-white/90'>Videos</h2>
      {athelte.highlightVideos.map((video, i) => (
        <div
          key={i}
          className='bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl shadow-inner'
        >
          <p className='font-bold text-white drop-shadow-sm'>{video.title}</p>
          <p className='text-sm text-white/70'>{video.description}</p>
          <p className='text-xs text-white/50'>Platform: {video.platform}</p>
        </div>
      ))}
    </div>
  );
}
