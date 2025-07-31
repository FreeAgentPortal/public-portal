"use client";
import React from "react";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-6xl font-bold text-foreground'>404</h1>
      <p className='text-2xl text-foreground mt-4'>Page Not Found</p>
      <p className='text-lg text-foreground mt-2'>
        The page you are looking for does not exist.
      </p>
      <a href='/' className='mt-6 text-primary hover:underline'>
        Go back to Home
      </a>
    </div>
  );
};

export default NotFound;
