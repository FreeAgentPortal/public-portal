import { HighlightVideo } from "@/types/highlight-video";

type Props = {
  videos: HighlightVideo[];
};

export default function ProfileVideos(props: Props) {
  return (
    <div className='mt-6'>
      <h2 className='text-lg font-semibold mb-2 text-white/90'>Videos</h2>
      {props.videos.map((video, i) => (
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
