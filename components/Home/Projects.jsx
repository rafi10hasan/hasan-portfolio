import * as motion from "motion/react-client";
import Link from "next/link";
import { FaEye, FaGithub } from "react-icons/fa";
import { H5 } from "../_components/Heading";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
export default function Projects() {
  return (
    <section id="projects" className="bg-[#0f0715] h-auto py-4">
      <motion.div
        className="flex justify-center items-center py-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }} // Animate up and fade in when in view
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-40 h-[4px] bg-slate-800 flex justify-center items-center">
          <H5 className="rounded-sm text-white bg-slate-800 backdrop-blur-2xl backdrop-opacity-10 px-2 py-1">
            Projects
          </H5>
        </div>
      </motion.div>
      <div className="w-[90vw] sm:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto grid grid-cols-12 gap-6 mb-6 mt-6 shadow-md">
        <motion.div
          className="col-span-12 md:col-span-6 space-y-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }} // Animate up and fade in when in view
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <img src="/bookify-demo.png" className="w-full object-cover rounded-md" alt="" />
          <div className="text-center">
            <Badge className="tracking-wider bg-yellow-500 text-black hover:text-white">
              Bookify | Mern Stack
            </Badge>
          </div>

          <div className="flex gap-4 flex-wrap justify-center tracking-wide">
            <Link href="https://github.com/rafi10hasan/bookify-client-next.js" target="_blank">
              <Button className="hover:bg-yellow-600">
                <FaGithub /> Github Client
              </Button>
            </Link>

            <Link href="https://github.com/rafi10hasan/bookify-server-express.js" target="_blank">
              <Button className="hover:bg-yellow-600">
                <FaGithub /> Github Server
              </Button>
            </Link>

            <Link href="https://bookify-lac.vercel.app/" target="_blank">
              <Button className="bg-pink-700 hover:bg-yellow-600">
                <FaEye /> Live Demo
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="col-span-12 md:col-span-6 space-y-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }} // Animate up and fade in when in view
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <img src="/e-learning.png" className="w-full object-cover rounded-md" alt="" />
          <div className="text-center">
            <Badge className="tracking-wider bg-yellow-500 text-black hover:text-white">
              Bootstrap Landing Page
            </Badge>
          </div>

          <div className="flex gap-4 flex-wrap justify-center tracking-wide">
            <Link href="https://github.com/rafi10hasan/e-learning-platform-design" target="_blank">
              <Button className="hover:bg-yellow-600">
                <FaGithub /> Github{" "}
              </Button>
            </Link>

            <Link href="https://eduhublearning.netlify.app/" target="_blank">
              <Button className="bg-pink-700 hover:bg-yellow-600">
                <FaEye /> Live Demo
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
