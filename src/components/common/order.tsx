"use client";
import { cn } from "@/lib/utils";
import { Order as OrderType } from "@/types/order.type";
import { FC } from "react";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
import { OrderStatus } from "./order-status";

type Props = {
  order: OrderType;
  className?: string;
};

export const Order: FC<Props> = ({ order, className }) => {
  return (
    <Card className={cn(className)}>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="opacity-50">Transaction ID</p>
            <p>#{order.id}</p>
          </div>
          <div>
            <p className="opacity-50">Date</p>
            <p>{order.date}</p>
          </div>
          <div>
            <p className="opacity-50">Status</p>
            <div className="flex items-center gap-1">
              <OrderStatus status={order.status} />
              <p className="capitalize">{order.status}</p>
            </div>
          </div>
        </div>
        <Separator className="my-3" />
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="opacity-50">Game Name</p>
            <p>{order.gameName}</p>
          </div>
          <div>
            <p className="opacity-50">Game ID</p>
            <p>{order.gameId}</p>
          </div>
          <div>
            <p className="opacity-50">Ammount</p>
            <p>{order.amount}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
