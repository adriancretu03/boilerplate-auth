import { PasswordResetConfirmForm } from "@/components/forms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BP AUTH | Password Reset Confirm",
  description: "BP Auth password reset confirm page",
};

type Props = {
  params: {
    uid: string;
    token: string;
  };
};

export default function Page({ params: { uid, token } }: Props) {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Reset your password</h1>
          <p className="text-balance text-muted-foreground">
            Provide a strong new password
          </p>
        </div>
        <div className="grid gap-4">
          <PasswordResetConfirmForm uid={uid} token={token} />
        </div>
      </div>
    </div>
  );
}
