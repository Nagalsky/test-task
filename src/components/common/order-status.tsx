import { cn } from "@/lib/utils";
import { FC } from "react";

type Props = {
  status: "success" | "failed" | "pending" | "refunded";
};

export const OrderStatus: FC<Props> = ({ status }) => {
  return (
    <div
      className={cn(
        "size-3 rounded-full",
        status === "success" && "bg-[#11b174]",
        status === "failed" && "bg-destructive",
        status === "pending" && "bg-yellow-500",
        status === "refunded" && "bg-blue-500",
      )}
    />
  );
};
