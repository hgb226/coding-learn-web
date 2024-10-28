"use client";
import React from "react";
import {useRouter} from "next/navigation";
import DropdownMenu from "../components/dropdownMenuNavbar";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import SearchComponent from "./search_box";

export default function Navbar() {
    const router = useRouter();

    return (
        <nav className="flex h-10vh w-full items-center justify-between space-x-8 bg-main-color fixed z-10">
            <div className="flex items-center space-x-8">
                {/* logo */}
                <div
                    onClick={() => {
                        router.push("/");
                    }}
                    className="h-full select-none place-content-center pl-8 font-sans text-3xl font-bold text-black hover:cursor-pointer"
                >
                    pro<span className="text-blue-600">c</span>ode
                </div>
                {/* category dropdown menu */}
                <DropdownMenu/>

                {/* search box */}
                {/* <div className="flex grow items-center space-x-4 rounded-md bg-white p-2.5">
          <MagnifyingGlassIcon className="h-5" />
          <input type="text" placeholder="Search" className="outline-none" />
        </div> */}
                <SearchComponent></SearchComponent>
            </div>
            {/*user logo, sign up, log in*/}
            <div>
                <div className={"mx-4 flex justify-end space-x-8"}>
                    <Link href="/register"><Button variant="contained">Sign up</Button></Link>
                    <Link href="/login"><Button variant="outlined">Log in</Button></Link>
                </div>
            </div>
        </nav>
    );
}
