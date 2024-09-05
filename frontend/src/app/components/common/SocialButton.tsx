import cn from "classnames";

type Props = {
  provider: "google" | "facebook" | "github";
  children: React.ReactNode;
  [rest: string]: any;
};

const SocialButton = ({ provider, children, ...rest }: Props) => {
  const className = cn(
    "flex-1 text-white rounded-md px-3 mt-3 py-2 font-medium",
    {
      "bg-red-500 hover:bg-red-400": provider === "google",
      "bg-blue-500 hover:bg-blue-400": provider === "facebook",
      "bg-gray-500 hover:bg-gray-400": provider === "github",
    }
  );
  return (
    <button className={className} {...rest}>
      <span className="flex justify-start items-center">{children}</span>
    </button>
  );
};

export default SocialButton;
