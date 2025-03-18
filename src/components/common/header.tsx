import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import { CurrencySelect } from "./currency-select";
import { LanguageSelect } from "./language-select";
import { UserAvatar } from "./user-avatar";

type Props = {
  className?: string;
};

export const Header: FC<Props> = ({ className }) => {
  return (
    <header className={cn("bg-[#0b1019] py-2 backdrop-blur-2xl", className)}>
      <div className="container flex items-center justify-between gap-3">
        <Link
          href={"/"}
          className="block h-[36px] w-[80px] rounded-[24px] bg-[#232830]"
        />
        <div className="flex flex-wrap items-center gap-2">
          <CurrencySelect />
          <LanguageSelect />
          <UserAvatar />
        </div>
      </div>
    </header>
  );
};
