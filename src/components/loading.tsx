import React from "react";

type Props = {};

export const Loading = (props: Props) => {
  return (
    <span className='flex items-center justify-center'>
      <span className='loading loading-ring loading-lg'></span>
    </span>
  );
};
