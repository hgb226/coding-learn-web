/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";

const LoginForm = () => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  return (
    <form
      className="flex h-fit w-2/3 flex-col items-center justify-center"
      onSubmit={() => {}}
    >
      <div className="mb-8 h-fit select-none py-4 font-sans text-6xl font-bold text-black">
        pro<span className="text-blue-600">c</span>ode
      </div>
      {/*  */}
      <div className="mb-4 w-full space-y-4">
        <label className="flex w-full justify-start font-semibold">Email</label>
        <input
          type="email"
          className="h-12 w-full rounded-md pl-4 outline outline-2"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          required
        ></input>
      </div>
      {/*  */}
      <div className="mb-4 w-full space-y-4">
        <label className="flex w-full justify-start font-semibold">
          Password
        </label>
        <input
          type="password"
          className="h-12 w-full rounded-md pl-4 outline outline-2"
          placeholder="Input your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          required
        ></input>
      </div>
      {/*  */}
      <div className="mb-4 flex w-full flex-row justify-end">
        <a
          className="font-bold text-blue-500 hover:cursor-pointer hover:text-blue-700"
          href="forgot"
        >
          Forgot password?
        </a>
      </div>
      {/*  */}
      <input
        type="submit"
        className="h-10 w-full rounded-full bg-blue-500 font-bold text-white transition-all hover:bg-blue-700"
        value="Log in"
      ></input>
      {/*  */}
      <div className="mt-2 flex h-full w-full flex-row justify-start">
        <div>Doesn't have an account?</div>
        <a
          className="ml-2 font-bold text-blue-500 hover:cursor-pointer hover:text-blue-700"
          href="register"
        >
          Register
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
