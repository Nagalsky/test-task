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

const CURRENCY_LIST = [
  {
    value: "usd",
    image: "/currency.png",
  },
  {
    value: "uah",
    image: "/currency.png",
  },
  {
    value: "eur",
    image: "/currency.png",
  },
];

export const CurrencySelect: FC<Props> = ({ className }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("usd");
  return (
    <div className={cn(className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="p-2 uppercase">
            <Image src="/currency.png" width={20} height={20} alt="currency" />
            {selectedCurrency}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {CURRENCY_LIST.map((currency, index) => (
            <Fragment key={currency.value}>
              {index > 0 && <DropdownMenuSeparator />}
              <DropdownMenuItem
                className="uppercase"
                onClick={() => setSelectedCurrency(currency.value)}
              >
                <Image
                  src={currency.image}
                  width={20}
                  height={20}
                  alt="currency"
                />
                {currency.value}
              </DropdownMenuItem>
            </Fragment>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
