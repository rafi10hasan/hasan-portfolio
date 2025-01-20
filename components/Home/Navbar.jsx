"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { H4 } from "../_components/Heading";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div className="bg-[#0F0715] w-full h-20">
      <nav className="flex justify-between items-center w-[90vw] sm:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto h-full">
        <div>
          <H4 className="font-bold tracking-wider bg-gradient-to-r from-teal-400 to-blue-300  hover:from-yellow-400 hover:to-orange-500 bg-clip-text text-transparent cursor-pointer">
            Rafi Hasan
          </H4>
        </div>
        <div className="text-gray-300  tracking-wider hidden min-[920px]:flex items-center space-x-8">
          <Link href="/" className="hover:text-yellow-400">
            home
          </Link>
          <Link href="/#about" className="hover:text-yellow-400">
            about me
          </Link>
          <Link href="/#projects" className="hover:text-yellow-400">
            projects
          </Link>
          <Link href="/#packages" className="hover:text-yellow-400">
            packages
          </Link>
          <Link href="/#services" className="hover:text-yellow-400">
            services
          </Link>
          <Link href="/#skills" className="hover:text-yellow-400">
            skills
          </Link>
          <Link href="/#contact" className="hover:text-yellow-400">
            contact me
          </Link>
        </div>
        {showMobileMenu && <MobileNavbar />}
        <div className="flex gap-2 min-[920px]:hidden">
          <button
            className="flex items-center space-x-2 min-[920px]:hidden"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? (
              <X className="text-white size-8" />
            ) : (
              <Menu className="text-white size-8" />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
}
