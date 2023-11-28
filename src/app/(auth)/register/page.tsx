"use client";

import { Icons } from "@/components/Icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  AuthCredentialValidator,
  TAuthCredentialValidator,
} from "@/lib/validators/accounts-credential-validator";
import { trpc } from "@/trpc/client";

const RegisterationPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialValidator>({
    resolver: zodResolver(AuthCredentialValidator),
  });

  const { mutate, isLoading } = trpc.auth.createPayloadUser.useMutation({});

  const onSubmit = ({ email, password }: TAuthCredentialValidator) => {
    // send data to server
    mutate({ email, password });
  };

  return (
    <>
      <div className="container flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.logo className="h-20 w-20" />
            <h1 className="">Create an account</h1>

            <Link
              className={buttonVariants({
                variant: "link",
                className: "mini:text-xl text-base font-medium gap-1.5",
              })}
              href={"/login"}
            >
              Already have an account? Sign in
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Sign up section */}

          <div className="grid gap-2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                {/* Email */}
                <div className="grid gap-1 py-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    {...register("email")}
                    className={cn({
                      "focus-visible:ring-red-500": errors.email,
                    })}
                    placeholder="your@example.com"
                  />
                </div>
                {/* Password */}
                <div className="grid gap-1 py-2">
                  <Label htmlFor="email">Password</Label>
                  <Input
                    {...register("password")}
                    className={cn({
                      "focus-visible:ring-red-500": errors.password,
                    })}
                    placeholder="Password"
                    type="password"
                  />
                </div>
                {/* Sign up button */}
                <Button>Sign Up</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterationPage;
