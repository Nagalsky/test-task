"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC, Fragment, useState } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

type Props = {
  className?: string;
};

const LANGUAGES = [
  {
    value: "en",
    image: "/flag-uk.png",
  },
  {
    value: "ua",
    image: "/flag-ua.png",
  },
];

export const LanguageSelect: FC<Props> = ({ className }) => {
  const [selectedLanguage, setSelectedLanguage] = useState({
    language: "en",
    image: "/flag-uk.png",
  });
  return (
    <div className={cn(className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="p-2 uppercase">
            <Image
              src={selectedLanguage.image}
              width={20}
              height={20}
              alt="currency"
            />
            {selectedLanguage.language}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {LANGUAGES.map((language, index) => (
            <Fragment key={language.value}>
              {index > 0 && <DropdownMenuSeparator />}
              <DropdownMenuItem
                className="uppercase"
                onClick={() =>
                  setSelectedLanguage({
                    language: language.value,
                    image: language.image,
                  })
                }
              >
                <Image
                  src={language.image}
                  width={20}
                  height={20}
                  alt="currency"
                />
                {language.value}
              </DropdownMenuItem>
            </Fragment>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
