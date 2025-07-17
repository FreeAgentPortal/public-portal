import React from "react";

type Props = {};

const NewsSkeleton = (props: Props) => {
  return (
    <div className='flex w-full flex-row gap-4'>
      <div className='skeleton h-80 w-full'> </div>
      <div className='skeleton h-80 w-full'></div>
      <div className='skeleton h-80 w-full'></div>
    </div>
  );
};

export default NewsSkeleton;
