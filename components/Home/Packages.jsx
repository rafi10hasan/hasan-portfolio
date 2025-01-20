"use client";
import * as motion from "motion/react-client";
import { useState } from "react";
import { IoCopy } from "react-icons/io5";
import { H5 } from "../_components/Heading";
import { Badge } from "../ui/badge";
export default function Packages() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm i aesthetic-accordion");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset the copied state after 2 seconds
  };
  return (
    <section id="packages" className="bg-slate-950 h-auto py-4">
      <motion.div
        className="flex justify-center items-center py-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }} // Animate up and fade in when in view
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-40 h-[4px] bg-slate-800 flex justify-center items-center">
          <H5 className="rounded-sm text-white bg-slate-800 backdrop-blur-2xl backdrop-opacity-10 px-2 py-1">
            Packages
          </H5>
        </div>
      </motion.div>
      <div className="w-[90vw] sm:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto grid grid-cols-12 gap-6 mb-6 mt-6 shadow-md ">
        <motion.div
          className="col-span-12 min-[1100px]:col-span-6 space-y-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }} // Animate up and fade in when in view
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <img src="/accordion.png" className="w-full object-cover rounded-md" alt="" />
          <div className="text-center">
            <Badge className="tracking-wider bg-yellow-500 text-black hover:text-white">
              accordion package
            </Badge>
          </div>
          <div className="bg-slate-900 h-12 w-full flex items-center justify-between px-4 rounded-sm text-white">
            <h6 className="tracking-wider text-[14px]">npm i aesthetic-accordion</h6>
            <button onClick={handleCopy}>
              <IoCopy />
            </button>
          </div>
          {isCopied && <span className="text-teal-500">Copied!</span>}
        </motion.div>

        <motion.div
          className="col-span-12 min-[1100px]:col-span-6 space-y-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }} // Animate up and fade in when in view
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-4 bg-gray-900 rounded-lg shadow-lg">
            <code className="block font-mono text-[8px] md:text-sm lg:text-base text-gray-200">
              <div>
                <span className="mr-2 text-pink-500">import</span>
                <span className="mr-2 text-white">{`{ Accordion, AccordionItem, AccordionTitle, AccordionContent }`}</span>
                <span className="mr-2 text-pink-500">from</span>
                <span className="text-teal-400">'aesthetic-accordion'</span>
                <span className="text-gray-400">;</span>
              </div>
              <div className="mt-4">
                <span className="text-pink-500">function</span>
                <span className="ml-2 text-white">App</span>
                <span className="text-gray-400">{"() {"}</span>
              </div>
              <div>
                <span className="ml-4 text-orange-400">return</span>
                <span className="text-gray-400">{" ("}</span>
              </div>
              <div>
                <span className="ml-6 text-gray-400">{"<"}</span>
                <span className="text-teal-400">Accordion</span>
                <span className="text-amber-300"> allowMultiple</span>
                <span className="text-gray-400">={"{"}</span>
                <span className="text-pink-400">false</span>
                <span className="text-gray-400">{"}"}&gt;</span>
              </div>
              <div>
                <span className="ml-12 text-gray-400">
                  &lt;<span className="text-teal-400">AccordionItem</span> accIndex={"{"}0{"}"}&gt;
                </span>
              </div>
              <div>
                <span className="ml-16 text-gray-400">
                  &lt;<span className="text-teal-400">AccordionTitle</span>&gt;title1&lt;/
                  <span className="text-teal-400">AccordionTitle</span>&gt;
                </span>
              </div>
              <div>
                <span className="ml-16 text-gray-400">
                  &lt;<span className="text-teal-400">AccordionContent</span>&gt;content1&lt;/
                  <span className="text-teal-400">AccordionContent</span>&gt;
                </span>
              </div>
              <div>
                <span className="ml-12 text-gray-400">
                  &lt;/<span className="text-teal-400">AccordionItem</span>&gt;
                </span>
              </div>
              <div>
                <span className="ml-12 text-gray-400">
                  &lt;<span className="text-teal-400">AccordionItem</span> accIndex={"{"}1{"}"}&gt;
                </span>
              </div>
              <div>
                <span className="ml-16 text-gray-400">
                  &lt;<span className="text-teal-400">AccordionTitle</span>&gt;title2&lt;/
                  <span className="text-teal-400">AccordionTitle</span>&gt;
                </span>
              </div>
              <div>
                <span className="ml-16 text-gray-400">
                  &lt;<span className="text-teal-400">AccordionContent</span>&gt;content2&lt;/
                  <span className="text-teal-400">AccordionContent</span>&gt;
                </span>
              </div>
              <div>
                <span className="ml-12 text-gray-400">
                  &lt;/<span className="text-teal-400">AccordionItem</span>&gt;
                </span>
              </div>
              <div>
                <span className="ml-6 text-gray-400">
                  &lt;/<span className="text-teal-400">Accordion</span>&gt;
                </span>
              </div>
              <div>
                <span className="text-gray-400">{");"}</span>
              </div>
              <div>
                <span className="text-gray-400">{"}"}</span>
              </div>
            </code>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
