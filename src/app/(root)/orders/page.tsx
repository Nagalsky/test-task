import { getOrders } from "@/actions/orders.actions";
import { Orders } from "@/components/common/orders";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default async function OrdersPage() {
  const orders = await getOrders();
  return (
    <section className="py-4 md:py-12">
      <div className="container">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-4 text-xl font-bold">
            <ChevronLeft />
            Orders
          </Link>

          <Orders orders={orders} />
        </div>
      </div>
    </section>
  );
}
