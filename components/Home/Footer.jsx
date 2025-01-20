import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="bg-slate-950 w-full h-12 flex items-center justify-evenly">
      <p className="text-[12px] md:text-sm text-gray-600">
        &copy; 2025 Developed By{" "}
        <Link href="https://www.linkedin.com/in/rafi-hasan-rh786" target="_blank" className="text-orange-400">
          Rafi hasan
        </Link>
      </p>
      <div className="flex gap-3">
        <Link href="https://www.linkedin.com/in/rafi-hasan-rh786/" target="_blank">
          {" "}
          <FaLinkedin className="size-8 px-2 py-2 rounded-full text-white bg-slate-900 hover:bg-slate-800 backdrop-blur-md" />
        </Link>
        <Link href="https://github.com/rafi10hasan?tab=repositories" target="_blank">
          <FaGithub className="size-8 p-2 text-white rounded-full bg-slate-900 hover:bg-slate-800 backdrop-blur-md" />
        </Link>
        <Link href="https://www.facebook.com/rafi.hasan.3975" target="_blank">
          <FaFacebook className="size-8 p-2 text-white rounded-full bg-slate-900 hover:bg-slate-800 backdrop-blur-md" />
        </Link>
      </div>
    </section>
  );
}
