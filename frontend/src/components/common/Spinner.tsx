import React from "react";
import { ImSpinner3 } from "react-icons/im";
import cn from "classnames";

type Props = {
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
};

const Spinner = ({ sm, md, lg, xl }: Props) => {
  const className = cn("animate-spin text-white-300 fill-white-300 mr-2", {
    "w-4 h-4": sm,
    "w-6 h-6": md,
    "w-8 h-8": lg,
    "w-16 h-16": xl,
  });

  return (
    <div role="status">
      <ImSpinner3 className={className} />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
