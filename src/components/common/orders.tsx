"use client";
import { cn } from "@/lib/utils";
import { Order as OrderType } from "@/types/order.type";
import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
import { Order } from "./order";

type Props = {
  orders: OrderType[];
  className?: string;
};

export const Orders: FC<Props> = ({ orders, className }) => {
  return (
    <div className={cn("grid gap-3 xl:grid-cols-3", className)}>
      {orders.map((order, index) => (
        <motion.div
          key={order.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{
            duration: 0.1,
            delay: index * 0.05,
          }}
        >
          <Link href={`/order/${order.id}`} className="block">
            <Order
              order={order}
              className="md:transition md:duration-400 md:hover:scale-[103%]"
            />
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
