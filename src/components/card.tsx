import React from "react";

type Props = {};

export const Card = (props: Props) => {
  return (
    <div className='card bg-card-background container border-[1px] border-subtle-border hover:shadow-xl hover:scale-[101%] transition-all duration-300 ease-in-out'>
      <div className='card-body'>
        <h1 className='card-title'>Card Title</h1>
        <p>This is a card EXAMPLE</p>
      </div>
    </div>
  );
};
