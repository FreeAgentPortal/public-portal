import React, { useMemo } from "react";

type Props = {
  min: number;
  max: number;
  step: number;
  value: string | undefined;
  onChange: (value: string) => void;
};

export const DualRangeSlider = ({ min, max, step, value, onChange }: Props) => {
  const { currentMin, currentMax } = useMemo(() => {
    try {
      if (value) {
        const parsed = JSON.parse(value);
        return {
          currentMin: Number(parsed.$gte ?? min),
          currentMax: Number(parsed.$lt ?? max),
        };
      }
    } catch (error) {
      console.error("Failed to parse range value:", error);
    }
    return { currentMin: min, currentMax: max };
  }, [value, min, max]);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMinVal = Math.min(Number(e.target.value), currentMax - step);
    const output = JSON.stringify({ $gte: newMinVal, $lt: currentMax });
    onChange(output);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxVal = Math.max(Number(e.target.value), currentMin + step);
    const output = JSON.stringify({ $gte: currentMin, $lt: newMaxVal });
    onChange(output);
  };

  return (
    <div className='relative w-full'>
      <style>{`
        #min-slider, #max-slider {
          -webkit-appearance: none;
          appearance: none;
          background: transparent;
          pointer-events: none; /* Make track non-interactive */
        }
        #min-slider::-webkit-slider-thumb,
        #max-slider::-webkit-slider-thumb {
          pointer-events: all; /* But make the thumb interactive */
        }
        #min-slider::-moz-range-thumb,
        #max-slider::-moz-range-thumb {
          pointer-events: all;
        }
      `}</style>

      <input
        id='min-slider'
        type='range'
        min={min}
        max={max}
        step={step}
        value={currentMin}
        onChange={handleMinChange}
        className='absolute w-full h-2 z-20'
      />
      <input
        id='max-slider'
        type='range'
        min={min}
        max={max}
        step={step}
        value={currentMax}
        onChange={handleMaxChange}
        className='absolute w-full h-2 z-20'
      />

      <div className='relative h-2'>
        <div className='absolute w-full h-2 bg-gray-200 rounded-md top-0 z-0' />
        <div
          className='absolute h-2 bg-primary rounded-md top-0 z-10'
          style={{
            left: `${((currentMin - min) / (max - min)) * 100}%`,
            width: `${((currentMax - currentMin) / (max - min)) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};
