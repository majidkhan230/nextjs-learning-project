"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex justify-between items-center h-[60px]  px-20">
      <div className="logo">Logo</div>
      <ul className="flex gap-10">
        <Link
          className={`${
            pathname === "/about" ? "bg-red-500" : "bg-blue-700"
          } px-5 py-2 rounded-md`}
          href="/about"
        >
          About
        </Link>
        <Link className={`${pathname === "/projects" ? "bg-red-500" : "bg-blue-700"} px-4 py-2 rounded-md`} href="/projects">
          Projects
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
