import { Card, CardContent } from "@/components/ui/card";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex grow items-center py-8 md:py-12">
      <div className="container">
        <div className="mx-auto md:max-w-xl">
          <Card>
            <CardContent>{children}</CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
