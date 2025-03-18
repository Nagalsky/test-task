import { cn } from "@/lib/utils";
import { FC } from "react";

type Props = {
  status: "success" | "failed" | "pending" | "refunded";
};

const statusClasses: Record<Props["status"], string> = {
  success: "bg-[#11b174]",
  failed: "bg-destructive",
  pending: "bg-yellow-500",
  refunded: "bg-blue-500",
};

export const OrderStatus: FC<Props> = ({ status }) => {
  return <div className={cn("size-3 rounded-full", statusClasses[status])} />;
};
