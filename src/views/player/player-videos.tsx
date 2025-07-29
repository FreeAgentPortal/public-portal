import { Athlete } from "@/types/athlete";

type Props = {
  athelte: Athlete;
};

export default function ProfileVideos({ athelte }: Props) {
  if (!athelte.highlightVideos || athelte.highlightVideos.length === 0) {
    return <p className='text-gray-500'>No highlight videos available.</p>;
  }

  return (
    <div className='space-y-2'>
      <h2 className='text-lg font-semibold text-gray-800'>Highlight Videos</h2>
      <ul className='list-disc list-inside space-y-1'>
        {athelte.highlightVideos.map((url, index) => (
          <li key={index}>
            <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 hover:underline'
            >
              Video {index + 1}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
