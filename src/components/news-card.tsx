import Image from "next/image";
import Link from "next/link";
import React from "react";
import parse from "html-react-parser";

type Props = {
  title?: string;
  description?: string;
  image?: string; // URL of the image
  link: string;
  category?: string; // New category badge text
};

export const NewsCard = ({
  title = "Card Title",
  description = "Card Description",
  image,
  link,
  category,
}: Props) => {
  return (
    <Link
      href={link || "/"}
      className='card bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl shadow-inner hover:shadow-xl hover:scale-[101%] transition-all duration-300 ease-in-out overflow-hidden relative'
    >
      {image && (
        <div className='relative w-full h-64 mb-4 rounded-lg overflow-hidden shadow-lg'>
          {category && (
            <span className='absolute top-3 left-3 z-10 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-xs font-semibold uppercase px-3 py-1 rounded-full shadow-md select-none pointer-events-none'>
              {category}
            </span>
          )}
          <Image
            src={image}
            alt={title}
            fill
            className='object-cover hover:scale-105 transition-transform duration-300 ease-in-out'
            sizes='(max-width: 768px) 100vw, 400px'
            priority={false}
          />
        </div>
      )}
      {!image && category && (
        <span className='inline-block mb-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-xs font-semibold uppercase px-3 py-1 rounded-full shadow-md select-none pointer-events-none'>
          {category}
        </span>
      )}
      <div className='card-body text-white space-y-2'>
        <h1 className='card-title text-lg font-semibold'>{title}</h1>
        <div className='text-sm opacity-80 normal-case'>
          {parse(description)}
        </div>
      </div>
    </Link>
  );
};
