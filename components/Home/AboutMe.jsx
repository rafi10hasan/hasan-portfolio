import * as motion from "motion/react-client";
import { H5 } from "../_components/Heading";
import { P } from "../_components/Paragraph";
export default function AboutMe() {
  return (
    <>
      <section id="about" className="bg-slate-950 h-auto py-4 ">
        <motion.div
          className="flex justify-center items-center py-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }} // Animate up and fade in when in view
          viewport={{ once: false, amount: 0.2 }}
          // animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-40 h-[4px] bg-slate-800 flex justify-center items-center">
            <H5 className="rounded-sm text-white bg-slate-800 backdrop-blur-2xl backdrop-opacity-10 px-2 py-1">
              About Me
            </H5>
          </div>
        </motion.div>

        <div className="grid w-[90vw] sm:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto gap-6 md:gap-12 lg:gap-8 py-0 md:py-8 md:grid-cols-12">

                 <motion.div
                      className="block mt-6 md:mt-0 md:col-span-5 md:flex"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }} // Animate up and fade in when in view
                      viewport={{ once: false, amount: 0.2 }} 
                      // animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <img src="/rafi1.png" alt="" className="w-full object-cover rounded-xl" />
                    </motion.div>
          

          <motion.div
            className="mr-auto place-self-center space-y-2 lg:space-y-4 md:col-span-7"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }} // Animate up and fade in when in view
            viewport={{ once: false, amount: 0.2 }}
            // animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="hidden lg:flex justify-center items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }} // Animate up and fade in when in view
              viewport={{ once: false, amount: 0.2 }}
              // animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full h-[4px] bg-slate-800 flex justify-start items-center">
                <div className="rounded-full w-[30px] h-[30px] text-white bg-slate-800 backdrop-blur-2xl backdrop-opacity-10 px-2 py-1">
            
                </div>
              </div>
            </motion.div>

            <motion.div className="space-y-4"
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }} // Animate up and fade in when in view
               viewport={{ once: false, amount: 0.1 }}
              //  animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
            >
              <P className="text-justify">
                Hi, I'm a passionate Junior MERN Stack Web Developer with a strong foundation in
                building dynamic and responsive web applications. I specialize in creating seamless
                user experiences by combining my skills in{" "}
                <span className="text-yellow-500">
                  React.js, Redux, Next.js, MongoDB, Mongoose, Express.js, and Node.js
                </span>{" "}
                .
              </P>

              <P className="text-justify hidden md:block">
                I have a keen interest in crafting efficient, scalable, and maintainable code. My
                journey as a developer has been driven by a love for problem-solving and learning
                new technologies. I am proficient in building RESTful APIs, implementing CRUD
                operations, and integrating third-party services to enhance application
                functionality..
              </P>

              {/* <P className="text-justify">
                Currently, I am seeking opportunities to grow as a developer by tackling challenging
                projects and contributing to innovative teams. Outside of coding, I enjoy exploring
                tech trends, working on side projects, and sharpening my problem-solving skills. I'm
                excited to bring my enthusiasm and expertise to make a meaningful impact.
              </P> */}
            </motion.div>
            <motion.div
              className="hidden lg:flex justify-center items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }} // Animate up and fade in when in view
              viewport={{ once: false, amount: 0.1 }}
              // animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full h-[4px] bg-slate-800 flex justify-end items-center">
                <div className="rounded-full w-[30px] h-[30px] text-white bg-slate-800 backdrop-blur-2xl backdrop-opacity-10 px-2 py-1">
            
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
