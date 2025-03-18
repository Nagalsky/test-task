export type Order = {
  id: string;
  date: string;
  status: "success" | "failed" | "pending" | "refunded";
  gameName: string;
  gameId: string;
  amount: string;
};
