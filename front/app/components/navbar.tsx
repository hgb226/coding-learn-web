"use client";
import React from "react";
import { useRouter } from "next/navigation";
import DropdownMenu from "./dropdownMenu";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import SearchBox from "./search_box";

export default function Navbar() {
  const router = useRouter();

  function logo() {
    return (
      <div
        onClick={() => {
          router.push("/");
        }}
        className="h-full select-none place-content-center pl-8 font-sans text-3xl font-bold text-black hover:cursor-pointer"
      >
        pro<span className="text-blue-600">c</span>ode
      </div>
    );
  }

  return (
    <nav className="h-10vh z-10 flex w-full items-center justify-between space-x-8 border-b-2 bg-white py-4">
      <div className="flex items-center justify-start space-x-8">
        {logo()}
        <DropdownMenu />
        <SearchBox></SearchBox>
      </div>
      <div>
        <div className={"mx-4 flex justify-end space-x-8"}>
          <Link href="/register">
            <Button variant="contained">Sign up</Button>
          </Link>
          <Link href="/login">
            <Button variant="outlined" className={"bg-white"}>
              Log in
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
