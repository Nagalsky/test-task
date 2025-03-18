"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { SignInSchema } from "@/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../../ui/button";
import { SocialNetworks } from "../social-networks";

type Props = {
  className?: string;
};

export const SignInForm: FC<Props> = ({ className }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SignInSchema>) {
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success(
      <>
        <p>Login successfully.</p>
        <pre>{JSON.stringify(values, null, 2)}</pre>
      </>,
    );
    router.push("/");
    form.reset();
    setIsLoading(false);
  }

  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex items-start justify-between gap-5">
        <div className="flex grow gap-2 rounded-lg bg-[#3b3e44] p-1">
          <Button className="grow">Login</Button>
          <Button variant={"ghost"} className="grow" asChild>
            <Link href="/sign-up">Registration</Link>
          </Button>
        </div>
        <Button size="icon" className="size-6 p-0" asChild>
          <Link href="/">
            <X />
          </Link>
        </Button>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="min-h-[44px] w-full"
            disabled={isLoading}
          >
            {isLoading ? "Logging in…" : "Login"}
          </Button>
        </form>
      </Form>
      <SocialNetworks />
      <p className="text-center underline opacity-50">Forgot password?</p>
    </div>
  );
};
