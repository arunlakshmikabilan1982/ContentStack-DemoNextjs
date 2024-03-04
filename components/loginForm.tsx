"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import RegisterForm from "./registerForm";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [register, setRegister]: any = useState("false");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res: any = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
      });
      console.log(res);
      if (res.error) {
        setError("Invalid Credentials");
        return;
      }
      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!register ? (
        <RegisterForm />
      ) : (
        <div className="grid place-items-center h-screen ">
          <div className="rounded-lg border-t-4 border-green-400 LoginDIV">
            <h1 className="text-xl font-bold my-4">Login</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
              <button className="p-4 text-white font-bold cursor-pointer px-6 py-2">
                Login
              </button>
              {error && (
                <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                  {error}
                </div>
              )}

              <a
                className="text-sm mt-4 text-right"
                href="#"
                onClick={() => setRegister(!register)}
              >
                have an account? <span className="underline">Register</span>
              </a>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
