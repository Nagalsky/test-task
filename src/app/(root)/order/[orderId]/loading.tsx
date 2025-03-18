import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { X } from "lucide-react";
import Link from "next/link";

const Loading = () => {
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
            <Skeleton className="h-5 w-32" />
          </div>

          <Card>
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
        </div>
      </div>
    </section>
  );
};

export default Loading;
