"use client";
import { cn } from "@/lib/utils";
import { Order as OrderType } from "@/types/order.type";
import Link from "next/link";
import { FC } from "react";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
import { OrderStatus } from "./order-status";

type Props = {
  data: OrderType;
  className?: string;
};

export const Order: FC<Props> = ({ data, className }) => {
  return (
    <Link href={`/order/${data.id}`} className={cn("block", className)}>
      <Card>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="opacity-50">Transaction ID</p>
              <p>#{data.id}</p>
            </div>
            <div>
              <p className="opacity-50">Date</p>
              <p>{data.date}</p>
            </div>
            <div>
              <p className="opacity-50">Status</p>
              <div className="flex items-center gap-1">
                <OrderStatus status={data.status} />
                <p className="capitalize">{data.status}</p>
              </div>
            </div>
          </div>
          <Separator className="my-3" />
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="opacity-50">Game Name</p>
              <p>{data.gameName}</p>
            </div>
            <div>
              <p className="opacity-50">Game ID</p>
              <p>{data.gameId}</p>
            </div>
            <div>
              <p className="opacity-50">Ammount</p>
              <p>{data.amount}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
