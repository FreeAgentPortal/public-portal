"use client";
import { useTeamLeagues } from "@/state/useTeamLeagues";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react"; // Import useMemo

type Props = {};

const TeamsLeagueScroll = (props: Props) => {
  const { data: teams } = useTeamLeagues();

  // --- FIX: useMemo prevents the logos array from being recreated on every render ---
  const logos = useMemo(
    () =>
      teams?.payload.map((team) => ({
        logo: team.logoUrl,
        id: team._id,
      })) || [],
    [teams]
  );
  // -----------------------------------------------------------------------------------

  const contentRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);

  const factor = 4;
  const multipliedLogos =
    logos.length > 0 ? Array(factor).fill(logos).flat() : [];

  const speed = -0.7;

  useEffect(() => {
    // Now this effect will only run when the memoized 'logos' array actually changes
    const setInitialPosition = () => {
      if (contentRef.current) {
        const contentWidth = contentRef.current.scrollWidth;
        const singleSetWidth = contentWidth / factor;
        x.set(-singleSetWidth);
      }
    };

    const timer = setTimeout(setInitialPosition, 50);

    return () => clearTimeout(timer);
  }, [logos, x, factor]);

  useAnimationFrame((time, delta) => {
    if (!contentRef.current) return;

    const contentWidth = contentRef.current.scrollWidth;
    const singleSetWidth = contentWidth / factor;

    if (!isPaused) {
      const moveBy = speed * (delta / 16.66);
      x.set(x.get() + moveBy);
    }

    const currentX = x.get();

    if (currentX <= -2 * singleSetWidth) {
      x.set(currentX + singleSetWidth);
    } else if (currentX > 0) {
      x.set(currentX - singleSetWidth);
    }
  });

  if (logos.length === 0) {
    return null;
  }

  return (
    <div
      className='relative overflow-hidden mask-x-from-90% mask-x-to-100%'
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        ref={contentRef}
        className='flex gap-12 items-center cursor-grab'
        style={{ x }}
        drag='x'
        dragMomentum={false}
        dragElastic={0} // Corrected typo from dragElastic to dragElasticity
        onDragStart={() => setIsPaused(true)}
        onDragEnd={() => setIsPaused(false)}
      >
        {multipliedLogos.map((team, i) =>
          team ? (
            <div
              key={i}
              className='flex-shrink-0'
              onDoubleClick={() => {
                window.location.href = `/teams/${team.id}`;
              }}
            >
              <Image
                src={team.logo}
                alt={`Team logo ${i}`}
                width={120}
                height={60}
                className='object-contain select-none'
                draggable={false}
              />
            </div>
          ) : null
        )}
      </motion.div>
    </div>
  );
};

export default TeamsLeagueScroll;
