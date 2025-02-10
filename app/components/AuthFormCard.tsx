"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import Link from "next/link";
import { AuthFormSchema } from "../../types";
import AuthCustomInput from "./ui/customInput";
import { signIn, Signup } from "@/lib/actions/user/auth.action";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";

function AuthFormCard({ type }: { type: string }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  // useState
  const formSchema = AuthFormSchema(type);
  const formS = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", password: "" },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const { email, password } = data;
    setIsLoading(true);

    if (type === "Login") {
      console.log("signing DATA:", data);
      const response = await signIn({ email, password });

      if (!response) return;

      setIsLoading(false);

      console.log("Final Login Response DATA:", response);

      if (response) router.push("/home");
    } else {
      console.log("Signup Data:", data);
      const userData = {
        firstName: data.firstName!,
        lastName: data.lastName!,
        state: data.state!,
        country: data.country!,
        email: data.email,
        password: data.password,
      };

      const response = await Signup(userData);

      if (!response) return;

      setIsLoading(false);

      console.log("Final Signup Response DATA:", response);

      if (response) router.push("/home");
    }
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
          {type === "Sign-Up" && (
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
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex justify-center items-center">
                <Loader2 size={20} className="animate-spin" />
                &nbsp;Loading
              </div>
            ) : (
              type
            )}
          </button>
          <div className="flex justify-evenly items-center">
            <div className="bg-black h-0.5 w-20"></div>
            <div>OR</div>
            <div className="bg-black h-0.5 w-20"></div>
          </div>
          <div className="flex   justify-center gap-5 ">
            {[
              { name: "Google", img: "/google.png" },
              { name: "Facebook", img: "/facebook.svg" },
              { name: "Apple", img: "/apple-logo.png" },
            ].map((item, index) => (
              <div key={index}>
                <Image
                  src={item.img}
                  alt={item.name}
                  width={28}
                  height={25}
                ></Image>
              </div>
            ))}
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
    </section>
  );
}

export default AuthFormCard;
