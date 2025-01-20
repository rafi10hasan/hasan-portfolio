"use client";
import { useToast } from "@/hooks/use-toast";
import { CircleCheck, Mail, PhoneCall, SquareX } from "lucide-react";
import * as motion from "motion/react-client";
import Link from "next/link";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "../ui/button";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setFormData({ userName: "", email: "", message: "" }); // Clear form data
        toast({
          variant: "success",
          description: (
            <div className="flex items-center">
              <CircleCheck className="mr-2" aria-label="Success" />
              <span>Email sent successfully</span>
            </div>
          ),
        });
      } else {
        toast({
          variant: "error",
          description: (
            <div className="flex items-center">
              <SquareX className="mr-2" />
              <span>Email send failed!</span>
            </div>
          ),
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: "error",
        description: (
          <div className="flex items-center">
            <SquareX className="mr-2" />
            <span>An error occurred!</span>
          </div>
        ),
      });
    }
  };

  return (
    <section id="contact" className="py-8 bg-[#0F0715] text-gray-400 overflow-hidden">
      <motion.div
        className="w-[90vw] sm:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-12 lg:gap-8">
          <div className="col-span-12 lg:col-span-5 mb-12 lg:mb-0 justify-items-center lg:justify-items-start">
            <h2 className="text-2xl leading-none md:text-[45px] font-bold mt-10 mb-6">
              How can I help you?
            </h2>
            <p className="text-lg text-center lg:text-start">
              "Got a question or want to collaborate? Feel free to reach out! I'm always open to
              discussing new projects, creative ideas, or opportunities to bring your vision to
              life."
            </p>

            <motion.div
              className="mt-12 md:pt-6"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-slate-900 max-w-[450px] mt-6 flex items-center rounded-xl p-5">
                <Mail />
                <Link
                  className="text-sm lg:text-lg font-medium ml-4"
                  href="mailto:rafayet12837@gmail.com"
                >
                  rafihasan0075@gmail.com
                </Link>
              </div>

              <div className="bg-slate-900 max-w-[450px] mt-6 flex items-center rounded-xl p-5">
                <PhoneCall />
                <Link className="text-sm lg:text-lg font-medium ml-4" href="tel:+8801734504597">
                  +8801734504597 | +8801868626647
                </Link>
              </div>

              <div className="bg-slate-900 shadow max-w-[450px] mt-6 flex items-center rounded-xl p-5">
                <FaLinkedin />
                <Link
                  className="text-sm lg:text-lg font-medium ml-4"
                  href="https://www.linkedin.com/in/rafi-hasan-rh786/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="col-span-12 lg:col-span-5 py-8 lg:col-start-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-slate-950 shadow-xl rounded-2xl px-4 py-10">
              <h2 className="text-2xl md:text-[45px] leading-none font-bold mb-6">Contact Me</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="">
                  <input
                    required
                    type="text"
                    value={formData.userName}
                    onChange={handleChange}
                    name="userName"
                    className="min-h-[48px] leading-[48px] bg-slate-800 border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="">
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                    className="min-h-[48px] leading-[48px] bg-slate-800 border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="">
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[48px] leading-[48px] bg-slate-800 border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
                    placeholder="Enter Message"
                    rows="4"
                  ></textarea>
                </div>
                <div className="text-start">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-pink-500 to-orange-500  hover:from-teal-400 hover:to-blue-500"
                  >
                    Send Message
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                      />
                    </svg>
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
