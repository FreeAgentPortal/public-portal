import React from "react";

type Props = {
  children: React.ReactNode;
  title?: string;
  className?: string;
};

export const Section = (props: Props) => {
  return (
    <div>
      {props.title && (
        <h2 className='text-2xl font-bold mb-4'>{props.title}</h2>
      )}
      <div className={`${props.className}`}>{props.children}</div>
    </div>
  );
};
