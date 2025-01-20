import * as motion from "motion/react-client";
import Marquee from "react-fast-marquee";
import { H5 } from "../_components/Heading";
const skills = [
  {
    name: "Html",
    iconPath: "/assets/html.svg",
  },
  {
    name: "Css",
    iconPath: "/assets/css.svg",
  },
  {
    name: "Bootstrap",
    iconPath: "/assets/bootstrap.svg",
  },
  {
    name: "Tailwind",
    iconPath: "/assets/tailwind.svg",
  },
  {
    name: "Javascript",
    iconPath: "/assets/javascript.svg",
  },
  {
    name: "React Js",
    iconPath: "/assets/react.svg",
  },
  {
    name: "Next Js",
    iconPath: "/assets/next.svg",
  },
  {
    name: "Redux",
    iconPath: "/assets/redux.svg",
  },

  {
    name: "MongoDb",
    iconPath: "/assets/MongoDb.svg",
  },

  {
    name: "Node js",
    iconPath: "/assets/node.svg",
  },
  {
    name: "Express.js",
    iconPath: "/assets/express.svg",
  },

  {
    name: "git",
    iconPath: "/assets/git.svg",
  },
];
export default function Skills() {
  return (
    <>
      <section id="skills" className="bg-slate-950 h-auto py-4">
        <motion.div
          className="flex justify-center items-center py-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }} // Animate up and fade in when in view
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-40 h-[4px] bg-slate-800 flex justify-center items-center">
            <H5 className="rounded-sm text-white bg-slate-800 backdrop-blur-2xl backdrop-opacity-10 px-2 py-1">
              Skills
            </H5>
          </div>
        </motion.div>

        <motion.div
          className="w-full my-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }} // Animate up and fade in when in view
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skills.map((skill, index) => (
              <div
                className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                key={index}
              >
                <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-yellow-500 transition-all duration-500">
                  <div className="flex -translate-y-[2px] justify-center">
                    <div className="w-3/4">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 p-6">
                    <div className="h-8 sm:h-10">
                      <img
                        src={skill.iconPath}
                        alt={skill.name}
                        width={40}
                        height={40}
                        className="h-full w-auto rounded-lg"
                      />
                    </div>
                    <p className="text-white text-sm sm:text-lg">{skill.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </motion.div>
      </section>
    </>
  );
}
