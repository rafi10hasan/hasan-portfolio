"use client";

import * as motion from "motion/react-client";
import Link from "next/link";

export default function MobileNavbar() {
  return (
    <motion.div
      className="block min-[920px]:hidden absolute top-16 left-0 z-10 w-full font-semibold shadow-lg bg-slate-950 p-8"
      initial={{ opacity: 0, x: -150 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.nav
        className="mt-2 w-full text-white"
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col gap-6 text-gray-300">
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
          <Link
            href="/#contact"
            className="bg-yellow-400 px-4 py-2 rounded-md text-black text-center hover:bg-teal-700 hover:text-white"
          >
            contact me
          </Link>
        </div>
      </motion.nav>
    </motion.div>
  );
}
