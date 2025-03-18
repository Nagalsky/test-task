import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex grow items-center py-8 md:py-12">
      <div className="container">
        <div className="mx-auto space-y-10 md:max-w-3xl">
          <div className="space-y-5 px-4">
            <Button className="min-h-[44px] w-full" asChild>
              <Link href={"/sign-up"}>Registration</Link>
            </Button>
            <Button className="min-h-[44px] w-full" asChild>
              <Link href={"/sign-in"}>Login</Link>
            </Button>
          </div>
          <Button className="w-full font-bold" asChild>
            <Link href={"/orders"} prefetch={false}>
              Orders
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
