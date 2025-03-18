import { getOrderById } from "@/actions/orders.actions";
import { Order } from "@/components/common/order";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ orderId: string }>;
};

export default async function OrderPage({ params }: Props) {
  const orderId = (await params).orderId;
  const order = await getOrderById(orderId);

  if (!order) {
    return notFound();
  }

  return (
    <section className="py-4 md:py-12">
      <div className="container">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Button size="icon" className="size-6 p-0" asChild>
              <Link href="/orders">
                <X />
              </Link>
            </Button>
            <p className="text-xl font-bold">#{order?.id}</p>
          </div>

          <Order data={order} />

          <div className="flex items-center justify-between gap-3">
            <h2 className="text-base">Your Goods:</h2>
            <p className="text-lg font-bold">1 - 279,99$</p>
          </div>

          <Card>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-center gap-2">
                <p className="text-base font-bold">40,500</p>
                <span className="rounded-lg bg-[#3a3e44] p-2 font-bold">
                  +1,500
                </span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <p className="sm-only:text-sm font-bold">279,99$</p>
                <span className="font-bold text-[#8d8f93] line-through">
                  749.99$
                </span>
              </div>
            </CardContent>
          </Card>

          <Button className="min-h-[44px] w-full">Ask?</Button>
        </div>
      </div>
    </section>
  );
}
