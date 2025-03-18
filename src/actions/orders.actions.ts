"use server";

import { Order } from "@/types/order.type";
import fs from "fs/promises";
import path from "path";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getOrders(): Promise<Order[]> {
  "use cache";
  const filePath = path.join(process.cwd(), "src/data", "orders.json");

  try {
    await delay(1500);
    const data = await fs.readFile(filePath, "utf-8");
    const parsedData = JSON.parse(data);
    return parsedData.orders as Order[];
  } catch (error) {
    throw new Error(`Failed to read orders: ${error}`);
  }
}

export async function getOrderById(orderId: string): Promise<Order | null> {
  "use cache";
  const filePath = path.join(process.cwd(), "src/data", "orders.json");

  try {
    await delay(1500);
    const data = await fs.readFile(filePath, "utf-8");
    const parsedData = JSON.parse(data);

    const order = parsedData.orders.find(
      (order: Order) => order.id === orderId,
    );

    return order || null;
  } catch (error) {
    throw new Error(`Failed to read orders or find order by ID: ${error}`);
  }
}
