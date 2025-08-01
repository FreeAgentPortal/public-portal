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
      <ul className='list-disc list-inside space-y-1'>
        {athelte.highlightVideos.map((url, index) => (
          <li key={index}>
            <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className='font-black underline hover:mb-4'
            >
              Video {index + 1}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
