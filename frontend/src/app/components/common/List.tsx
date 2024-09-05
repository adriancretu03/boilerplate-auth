import React from "react";
import Spinner from "./Spinner";

type Config = {
  label: string;
  value: string | undefined;
};

type Props = {
  config: Config[];
};

const List = ({ config }: Props) => {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {config.map(({ label, value }) => (
        <li className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              {label}
            </p>
          </div>
          <div className="flex min-w-0 gap-x-4">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              {value || <Spinner sm />}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
