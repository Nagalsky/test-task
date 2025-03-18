import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const Loading = () => {
  return (
    <section className="py-4 md:py-12">
      <div className="container">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-4 text-xl font-bold">
            <ChevronLeft />
            Orders
          </Link>

          <div className="grid gap-3 xl:grid-cols-3">
            {Array.from({ length: 9 }).map((_, index) => (
              <Card key={index}>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2.5">
                      <Skeleton className="h-5" />
                      <Skeleton className="h-5" />
                    </div>
                    <div className="space-y-2.5">
                      <Skeleton className="h-5" />
                      <Skeleton className="h-5" />
                    </div>
                    <div className="space-y-2.5">
                      <Skeleton className="h-5" />
                      <Skeleton className="h-5" />
                    </div>
                  </div>
                  <Separator className="my-3" />
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2.5">
                      <Skeleton className="h-5" />
                      <Skeleton className="h-5" />
                    </div>
                    <div className="space-y-2.5">
                      <Skeleton className="h-5" />
                      <Skeleton className="h-5" />
                    </div>
                    <div className="space-y-2.5">
                      <Skeleton className="h-5" />
                      <Skeleton className="h-5" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
