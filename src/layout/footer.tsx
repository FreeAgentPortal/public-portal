import Image from "next/image";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className='mt-auto'>
      <footer className='text-center p-4 flex sm:flex-row items-center sm:justify-between border-t-[0.5px] border-gray-300 flex-col justify-center mt-5'>
        <Image src='/logo.png' alt='Logo' width={150} height={150} />
        <p className='text-sm text-gray-500'>
          &copy; {new Date().getFullYear()} Free Agent Portal. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
