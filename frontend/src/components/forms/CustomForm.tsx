import { FormEvent } from "react";
import { Spinner } from "@/components/common";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type Config = {
  labelText: string;
  labelId: string;
  type: string;
  placeholder: string;
  link?: {
    linkText: string;
    linkURL: string;
  };
};

type Props = {
  config: Config[];
  isLoading: boolean;
  onSubmit: (values: any) => void;
  btnText: string;
  form: UseFormReturn<any>;
  canSubmit: boolean;
};

const CustomForm = ({
  form,
  canSubmit,
  config,
  isLoading,
  onSubmit,
  btnText,
}: Props) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        {config.map((input) => (
          <FormField
            key={input.labelId}
            control={form.control}
            name={input.labelId}
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between items-center">
                  <FormLabel htmlFor={input.labelId}>
                    {input.labelText}
                  </FormLabel>
                  {input.link && (
                    <Link
                      href="/password-reset"
                      className={buttonVariants({
                        variant: "link",
                      })}
                    >
                      {input.link.linkText}
                    </Link>
                  )}
                </div>

                <FormControl>
                  <Input
                    {...field}
                    placeholder={input.placeholder}
                    type={input.type}
                    id={input.labelId}
                    name={input.labelId}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button type="submit" disabled={!canSubmit || isLoading}>
          {isLoading ? <Spinner /> : `${btnText}`}
        </Button>
      </form>
    </Form>
  );
};

export default CustomForm;
