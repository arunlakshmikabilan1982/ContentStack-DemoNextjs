"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import LoginForm from "./loginForm";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [logIN, setLogIn]: any = useState("false");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log(name, email, password);
    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    console.log(name);
    console.log(email);
    console.log(password);

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();
      console.log(user);
      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      console.log(res);
      if (res.ok) {
        const form = e.target;
        form.reset();
        setLogIn(!logIN);
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <>
      {!logIN ? (
        <LoginForm />
      ) : (
        <div className="grid place-items-center h-screen ">
          <div className="  rounded-lg border-t-4 border-green-400 RegistrationDiv">
            <h1 className="text-xl font-bold my-4">Register</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Full Name"
              />
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
              {error && (
                <div className="errorMessage text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                  {error}
                </div>
              )}
              <button className="bg-green-600 p-4 text-white font-bold cursor-pointer px-6 py-2">
                Register
              </button>

              <a
                className="text-sm mt-3 text-right"
                href="#"
                onClick={() => setLogIn(!logIN)}
              >
                Already have an account?{" "}
                <span className="underline">Login</span>
              </a>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
