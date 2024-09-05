import React, { ChangeEvent } from "react";

import { FormEvent } from "react";
import { Input } from "@/app/components/forms";
import { Spinner } from "@/app/components/common";

type Config = {
  labelText: string;
  labelId: string;
  type: string;
  value: string;
  required?: boolean;
  link?: {
    linkText: string;
    linkURL: string;
  };
};

type Props = {
  config: Config[];
  isLoading: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  btnText: string;
};

const Form = ({ config, isLoading, onSubmit, onChange, btnText }: Props) => {
  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      {config.map((input) => (
        <Input
          key={input.labelId}
          labelId={input.labelId}
          type={input.type}
          onChange={onChange}
          value={input.value}
          required={input.required}
          link={input.link}
        >
          {input.labelText}
        </Input>
      ))}

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          disabled={isLoading}
        >
          {isLoading ? <Spinner /> : `${btnText}`}
        </button>
      </div>
    </form>
  );
};

export default Form;