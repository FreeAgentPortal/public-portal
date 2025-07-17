"use client";

import { useState, useEffect, useRef } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { DualRangeSlider } from "@/components/range"; // Adjust path as needed

type Props = {
  search: string;
  filters: Record<string, string>;
  updateQuery: (updates: Record<string, string>) => void;
};

// Static filter definitions
const filters = [
  {
    name: "positions.abbreviation",
    Label: "Position",
    options: [
      { label: "All", value: "" },
      { label: "QB", value: '{"$in":"QB"}' },
      { label: "RB", value: '{"$in":"RB"}' },
      { label: "FB", value: '{"$in":"FB"}' },
      { label: "WR", value: '{"$in":"WR"}' },
      { label: "TE", value: '{"$in":"TE"}' },
      { label: "OT", value: '{"$in":"OT"}' },
      { label: "OG", value: '{"$in":"OG"}' },
      { label: "C", value: '{"$in":"C"}' },
      { label: "DE", value: '{"$in":"DE"}' },
      { label: "DT", value: '{"$in":"DT"}' },
      { label: "LB", value: '{"$in":"LB"}' },
      { label: "CB", value: '{"$in":"CB"}' },
      { label: "S", value: '{"$in":"S"}' },
      { label: "K", value: '{"$in":"K"}' },
      { label: "P", value: '{"$in":"P"}' },
      { label: "LS", value: '{"$in":"LS"}' },
      { label: "KR", value: '{"$in":"KR"}' },
      { label: "PR", value: '{"$in":"PR"}' },
    ],
  },

  //TODO: FAB REPRESENTED ATHLETES, and USER ID
  //CLAIM BUTTON ON PUBLIC PORTAL FOR PEOPLE THAT DON'T HAVE A USER ID. If THERE IS NO LINKED USERS, SHOW THE CLAIM BUTTON
];

const SearchControls = (props: Props) => {
  const [formState, setFormState] = useState<Record<string, any>>({
    search: props.search,
    ...props.filters,
  });

  const debouncedFormState = useDebounce(formState, 500);

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    props.updateQuery({ ...debouncedFormState, page: "1" });
  }, [debouncedFormState]);

  const handleInputChange = (key: string, value: any) => {
    setFormState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <div className='flex flex-col gap-4'>
      <input
        type='text'
        placeholder='Search for athletes'
        value={formState.search || ""}
        onChange={(e) => handleInputChange("search", e.target.value)}
        className='input input-bordered w-full'
      />
      <div className='flex flex-col md:flex-row gap-4'>
        {filters.map((filter) => {
          if (filter.options) {
            return (
              <label key={filter.name} className='w-full md:max-w-md'>
                {filter.Label}
                <select
                  value={formState[filter.name] || ""}
                  onChange={(e) =>
                    handleInputChange(filter.name, e.target.value)
                  }
                  className='select select-bordered w-full'
                >
                  {filter.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            );
          } else {
            return (
              <label key={filter.name} className='w-full md:max-w-md'>
                {filter.Label}
                <input
                  type='text'
                  value={formState[filter.name] || ""}
                  placeholder={filter.Label}
                  onChange={(e) =>
                    handleInputChange(filter.name, e.target.value)
                  }
                  className='input input-bordered w-full'
                />
              </label>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SearchControls;
