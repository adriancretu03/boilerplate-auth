import { RequireAuth } from "@/app/components/utils";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return <RequireAuth>{children}</RequireAuth>;
};

export default layout;
