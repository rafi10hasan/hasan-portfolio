'use client'
import * as motion from "motion/react-client";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { H1, H4 } from "../_components/Heading";
import { P } from "../_components/Paragraph";
import { Button } from "../ui/button";

export default function Banner() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Rafi Hasan Resume.pdf'; 
    link.download = 'rafihasan_resume.pdf'; 
    link.click();
  };
  return (
    <section className="bg-[#0F0715] h-auto py-2 md:py-4">
      <div className="grid w-[90vw] sm:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto gap-6 md:gap-12 lg:gap-8 py-2 md:py-8 md:grid-cols-12">
        <motion.div
          className="mr-auto place-self-cneter self-center space-y-2 lg:space-y-4 md:col-span-7"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <H4 className="text-white">I'm Rafi Hasan</H4>
          <H1 className="bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
            Mern Stack Web Devloper
          </H1>

          <div className="flex gap-4">
            <Link href="https://www.linkedin.com/in/rafi-hasan-rh786/" target="_blank">
              {" "}
              <FaLinkedin className="size-8 px-2 py-2 rounded-full text-white bg-slate-900 hover:bg-slate-800 backdrop-blur-md" />
            </Link>
            <Link href="https://github.com/rafi10hasan?tab=repositories" target="_blank">
              <FaGithub className="size-8 p-2 text-white rounded-full bg-slate-900 hover:bg-slate-800 backdrop-blur-md" />
            </Link>
            <Link href="https://leetcode.com/u/rafayet12837/" target="_blank">
              <SiLeetcode className="size-8 p-2 text-white rounded-full bg-slate-900 hover:bg-slate-800 backdrop-blur-md" />
            </Link>
            <Link href="https://www.facebook.com/rafi.hasan.3975" target="_blank">
              <FaFacebook className="size-8 p-2 text-white rounded-full bg-slate-900 hover:bg-slate-800 backdrop-blur-md" />
            </Link>
          </div>
          <P className="w-full md:w-[85%]">
            Eager to contribute to innovative projects, enhance skills, and grow in a collaborative
            environment as a Junior MERN Stack Developer.
          </P>
          <Button onClick={handleDownload} className="bg-gradient-to-r from-pink-500 to-orange-500  hover:from-teal-400 hover:to-blue-500">
            Download CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </Button>
        </motion.div>
        <motion.div
          className="block md:mt-0 md:col-span-5 md:flex"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0c0e19]">
            <div className="flex flex-row">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
              <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
            </div>
            <div className="px-4 lg:px-8 py-5">
              <div className="flex flex-row space-x-2">
                <div className="h-3 w-3 rounded-full bg-pink-600"></div>
                <div className="h-3 w-3 rounded-full bg-teal-600"></div>
                <div className="h-3 w-3 rounded-full bg-purple-600"></div>
              </div>
            </div>
            <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
              <code className="font-mono text-xs md:text-sm lg:text-base">
                <div className="blink">
                  <span className="mr-2 text-pink-500">const</span>
                  <span className="mr-2 text-white">programmer</span>
                  <span className="mr-2 text-pink-500">=</span>
                  <span className="text-gray-400">{"{"}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                  <span className="text-gray-400">{`'`}</span>
                  <span className="text-teal-400">Rafi Hasan</span>
                  <span className="text-gray-400">{`',`}</span>
                </div>
                <div className="ml-4 lg:ml-8 mr-2">
                  <span className=" text-white">skills:</span>
                  <span className="text-gray-400">{`['`}</span>
                  <span className="text-amber-300">Javascript</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">React</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Next.js</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Redux</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Express.js</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Node.js</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">MongoDB</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Mongoose</span>
                  <span className="text-gray-400">{"'],"}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                  <span className="text-pink-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>

                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                  <span className="text-pink-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-teal-400">hireable:</span>
                  <span className="text-orange-400">function</span>
                  <span className="text-gray-400">{"() {"}</span>
                </div>
                <div>
                  <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                  <span className="text-gray-400">{`(`}</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">hardWorker</span>
                  <span className="text-amber-300">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">problemSolver</span>
                  <span className="text-amber-300">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">skills.length</span>
                  <span className="mr-2 text-amber-300">&gt;=</span>
                  <span className="text-orange-400">5</span>
                </div>
                <div>
                  <span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
                </div>
                <div>
                  <span className="text-gray-400">{`};`}</span>
                </div>
              </code>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
