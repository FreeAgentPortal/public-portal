import { ChevronLeft } from "lucide-react";
import React from "react";

type Props = {};

export const BackButton = (props: Props) => {
  return (
    <button className='btn btn-sm' onClick={() => history.back()}>
      <ChevronLeft height={16} width={16} />
      Back
    </button>
  );
};
