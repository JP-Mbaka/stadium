"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import Link from "next/link";
import { AuthFormSchema } from "../types";
import AuthCustomInput from "./ui/customInput";

function AuthFormCard({ type }: { type: string }) {
  // useState
  const formSchema = AuthFormSchema(type);
  const formS = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", password: "" },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("GGGHHGHH:", data);
  }
  return (
    <section className="flex-center shadow-2xl w-96 rounded-sm px-10 pb-10 pt-5">
      <Link href={"/"}>
        <div className="flex items-center justify-center gap-2  p-4 ">
          <div className="dark:bg-emerald-800 rounded-full p-1  w-auto">
            <Image src="/stadium.png" alt="logo" height={45} width={40} />
          </div>
          <h1 className="font-mochiyPopOne font-bold dark:text-slate-300 text-emerald-800 text-2xl pt-1 px-2">
            Stadium
          </h1>
        </div>
      </Link>
      <h2 className="flex items-center justify-center p-4 font-mochiyPopOne  font-bold text-xl">
        {type === "Login" ? "Sign-In" : "Sign-Up"}
      </h2>
      <>
        <Form {...formS}>
          <form
            onSubmit={formS.handleSubmit(onSubmit)}
            className="flex  flex-col gap-4"
          >
            <AuthCustomInput
              name="email"
              control={formS.control}
              placeholder="Email"
            />
            <AuthCustomInput
              name="password"
              control={formS.control}
              placeholder="Password"
            />
            {type !== "Sign-Up" && (
              <>
                <AuthCustomInput
                  name="confirmPassword"
                  control={formS.control}
                  placeholder="Confirm Password"
                />
                <div className="flex">
                  <AuthCustomInput
                    name="firstName"
                    control={formS.control}
                    placeholder="Firstname"
                  />
                  <AuthCustomInput
                    name="lastName"
                    control={formS.control}
                    placeholder="Lastname"
                  />
                </div>
                <AuthCustomInput
                  name="state"
                  control={formS.control}
                  placeholder="State/Region"
                />
                <AuthCustomInput
                  name="country"
                  control={formS.control}
                  placeholder="Country"
                />
              </>
            )}
            <button
              type="submit"
              className="consolas border rounded-md p-1.5 text-slate-100 bg-emerald-800"
            >
              {type}
            </button>
            <div className="flex justify-evenly items-center">
              <div className="bg-black h-0.5 w-20"></div>
              <div>OR</div>
              <div className="bg-black h-0.5 w-20"></div>
            </div>
            <div className="flex   justify-center gap-5 ">
              <div>G</div>
              <div>F</div>
              <div>A</div>
            </div>
            <div className="flex justify-center gap-2">
              <span className="text-gray-500  font-normal">
                {type === "Login"
                  ? `Don't have an account?`
                  : `Already, an existing user?`}
              </span>
              <Link
                href={type === "Login" ? "/signup" : "/login"}
                className="text-emerald-800 font-semibold font-mochiyPopOne"
              >
                {type === "Login" ? "Sign-up" : "Sign-in"}
              </Link>
            </div>
          </form>
        </Form>
      </>
    </section>
  );
}

export default AuthFormCard;
