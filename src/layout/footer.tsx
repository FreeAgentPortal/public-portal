import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className='mt-auto'>
      <footer className='text-center p-4 flex sm:flex-row items-center sm:justify-between border-t-[0.5px] border-gray-300 flex-col justify-center mt-5 gap-4 sm:gap-0'>
        <div className='flex flex-col items-center sm:items-start'>
          <Image src='/logo.png' alt='Logo' width={150} height={150} />
          <p className='text-sm text-gray-500 mt-2'>
            &copy; 2025 The Free Agent Portal
          </p>
          <p className='text-xs text-gray-500 mt-1'>
            "The Free Agent Portal" is a joint venture service of Sterling Haven LLC and
            Draft Diamonds LLC.
          </p>
        </div>
        <div className='flex flex-col sm:items-end items-center text-sm text-gray-500'>
          <a href='/legal/terms' className='hover:underline mb-1'>
            Terms of Use
          </a>
          <a href='/legal/privacy' className='hover:underline mb-1'>
            Privacy Policy
          </a>
          <a href='/legal' className='hover:underline mb-1'>
            Other Legal Information
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
