import * as motion from "motion/react-client";
import { AiOutlineAntDesign } from "react-icons/ai";
import { GrSupport } from "react-icons/gr";
import { MdApi, MdDataUsage, MdOutlineContactPage } from "react-icons/md";
import { SiGooglecontaineroptimizedos, SiSemanticweb, SiThirdweb } from "react-icons/si";
import { H5 } from "../_components/Heading";
const services = [
  {
    icon: <SiSemanticweb className="size-6" />,
    title: "Web Development",
    description: "Crafting fully responsive, fast-loading websites tailored to your specific needs",
  },

  {
    icon: <AiOutlineAntDesign className="size-6" />,
    title: "UI/UX Design",
    description:
      "Designing intuitive and visually appealing user interfaces to enhance user experience.",
  },

  {
    icon: <MdOutlineContactPage className="size-6" />,
    title: "Single Page Application",
    description:
      "Creating dynamic, single-page applications with frameworks like React.js, next.js",
  },

  {
    icon: <MdApi className="size-6" />,
    title: "API Integration",
    description: "integrating third-party services to enhance your application’s functionality.",
  },

  {
    icon: <GrSupport className="size-6" />,
    title: "Maintenance and Support",
    description:
      "Providing ongoing updates, troubleshooting and support to keep your site running smoothly.",
  },

  {
    icon: <SiThirdweb className="size-6" />,
    title: "Third-Party Tool Integration",
    description: "Connecting your app with tools like Stripe, next-auth, firebase or npm package.",
  },

  {
    icon: <MdDataUsage className="size-6" />,
    title: "Data Visualization",
    description:
      "Implementing dashboards and charts for interactive data insights using tools like chart.js",
  },

  {
    icon: <SiGooglecontaineroptimizedos className="size-6" />,
    title: "Performance Optimization",
    description: "Enhancing website speed and performance to ensure a smooth user experience.",
  },
];
export default function Services() {
  return (
    <>
      <section id="services" className=" bg-[#0F0715] h-auto py-4">
        <motion.div
          className="flex justify-center items-center py-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }} // Animate up and fade in when in view
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-40 h-[4px] bg-slate-800 flex justify-center items-center">
            <H5 className="rounded-sm tracking-wider text-white bg-slate-800 backdrop-blur-2xl backdrop-opacity-10 px-2 py-1">
              Services
            </H5>
          </div>
        </motion.div>
        <motion.div
          className="w-[90vw] sm:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto py-8 text-gray-400"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }} // Animate up and fade in when in view
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-12 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="col-span-12 md:col-span-6 lg:col-span-3"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }} // Animate up and fade in when in view
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-gradient-to-l from-[#121217] to-[#10101d] backdrop-blur-2xl backdrop-opacity-20 px-3 py-2 shadow-xl border border-[#1f223c] bg-[#11152c] rounded-md space-y-2">
                  <div className="">
                    <span className="text-yellow-400 size-8">{service.icon}</span>
                  </div>
                  <h4 className="font-medium text-lg">{service.title}</h4>
                  <p className="opacity-80 text-pretty">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
