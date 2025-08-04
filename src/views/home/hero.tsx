"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div className='text-white mb-10 relative'>
      <div className='pt-32 pb-24 w-full rounded-lg overflow-hidden mask-y-from-70% '>
        <div className='absolute inset-0 bg-gradient-to-r from-[#000000] via-[#1212120a] to-black opacity-100 z-100' />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='relative z-200 max-w-3xl flex flex-col justify-end gap-3 h-full '
        >
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-3xl '>
            Your Path to the <br className='hidden sm:inline' />
            <span className='text-secondary'>Next Level</span> Starts Here
          </h1>

          <p className='text-lg sm:text-xl'>
            Join the Free Agent Portal to discover new opportunities, showcase
            your talent, and connect with teams across the world.
          </p>
        </motion.div>

        <Image
          src='/stadium-night.jpg'
          alt='Stadium Lights'
          fill
          className='object-cover object-bottom absolute'
        />
      </div>
    </div>
  );
}
