import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

type Props = {
  className?: string;
};

export const UserAvatar: FC<Props> = ({ className }) => {
  return (
    <div className={cn("bg-accent rounded-full p-2", className)}>
      <Image src="/flag-uk.png" width={20} height={20} alt="Avatar" />
    </div>
  );
};
