import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";


import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
  delay,
  isModal = false,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", delay ?? index * 0.5, 0.75)}>
      <Tilt
  tiltMaxAngleX={45}
  tiltMaxAngleY={45}
  scale={1}
  transitionSpeed={450}
  className={`bg-tertiary p-5 rounded-2xl ${
    isModal ? "w-full" : "sm:w-[360px] w-full"
  }`}
>
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
          

          <div className="absolute inset-0 flex justify-end gap-2 m-3 card-img_hover">
  {/* GitHub */}
  <div
    onClick={() => window.open(source_code_link, "_blank")}
    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
  >
    <img
      src={github}
      alt="source code"
      className="w-1/2 h-1/2 object-contain"
    />
  </div>

  {/* Live Demo */}
  {live_link && (
    <div
      onClick={() => window.open(live_link, "_blank")}
      className="
  relative
  overflow-hidden
  w-35
  h-10
  px-3
  rounded-lg
  flex
  justify-center
  items-center
  cursor-pointer
  text-white
  animated-gradient
"
    >
      <h1>Live Link</h1>
    </div>
  )}
</div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

     <div className="mt-20 flex flex-wrap gap-7 justify-center">
  {projects.slice(0, 3).map((project, index) => (
    <ProjectCard
      key={`project-${index}`}
      index={index}
      {...project}
    />
  ))}
</div>

<div className="flex justify-center mt-12">
  <button
    onClick={() => setIsModalOpen(true)}
    className="
      px-8 py-3
      bg-[#915EFF]
      text-white
      font-semibold
      rounded-xl
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-lg
      hover:shadow-[#915EFF]/30
    "
  >
    View All Projects
  </button>
</div>



      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-x-0 top-18 bottom-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
              <motion.div
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="projects-modal-title"
                aria-describedby="projects-modal-description"
                initial={{ y: 20, opacity: 0, scale: 0.98 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 20, opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="bg-tertiary w-full max-w-7xl max-h-[calc(100vh-5rem)] rounded-3xl overflow-hidden relative shadow-2xl"
              >
                <div className="sticky top-0 bg-tertiary border-b border-gray-700 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h2 id="projects-modal-title" className="text-white text-3xl font-bold">
                      All Projects
                    </h2>
                    <p id="projects-modal-description" className="text-secondary text-sm mt-1 max-w-2xl">
                      Browse every projects I have made
                    </p>
                  </div>

                  <button
                    onClick={() => setIsModalOpen(false)}
                    aria-label="Close projects modal"
                    className="text-white text-3xl font-bold hover:text-red-400 transition-colors"
                  >
                    ×
                  </button>
                </div>

                <div className="p-6 overflow-y-auto max-h-[calc(100vh-12rem)]">
                  <motion.div
  initial="hidden"
  animate="show"
  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
>
                    {projects.map((project, index) => (
                     <ProjectCard
  key={`modal-project-${index}`}
  index={index}
  delay={0.1 + index * 0.05}
  isModal={true}
  {...project}
/>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </>
    
  );
};



export default SectionWrapper(Works, "");
