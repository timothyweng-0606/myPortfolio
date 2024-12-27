"use client"

import { motion } from "framer-motion"
import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "@/components/WorkSliderBtns"

// Projects data
const projectData = [
  {
    num: "01",
    category: "BattleShip",
    description: "A classic Battleship game project showcasing advanced JavaScript integration.",
    stack: [{ name: "Html5" }, { name: "CSS" }, { name: "JavaScript" }],
    image: "/assets/projects/battleship.png",
    live: "",
    github: "https://github.com/timothyweng-0606/battle-ship?tab=readme-ov-file",
  },
  {
    num: "02",
    category: "Movie Rating App (Stinky Tofu)",
    description: "A full stack Movie Rating app with CRUD functionality and session authentication.",
    stack: [{ name: "EJS" }, { name: "NodeJs" }, { name: "Express" },{ name: "MongoDb" } ],
    image: '/assets/projects/movie.png',
    live: "",
    github: "https://github.com/timothyweng-0606/movie-review?tab=readme-ov-file",
  },
  {
    num: "03",
    category: "MERN Stack School App",
    description: "This is a collab project designed to support teachers in making their referrals for their students, record particularly meaty interactions and actions taken, so that schools can better manage all the busy-ness that is education.",
    stack: [{ name: "React" }, { name: "MongoDb" }, { name: "Express" }, { name: "NodeJs" }],
    image: '/assets/projects/school.png',
    live: "",
    github: "https://github.com/timothyweng-0606/react-school-connect-front-end",
  },
  {
    num: "04",
    category: "Real-Estate Website",
    description: "A frontend project showcasing advanced React skills and intuitive UI/UX design, highlighting seamless user experiences and interactive interfaces.",
    stack: [{ name: "React" }, { name: "TailwindCss" }],
    image: '/assets/projects/inProgess.jpg',
    live: "",
    github: "",
  },
]

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(projectData[0])

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setCurrentProject(projectData[currentIndex])
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Left Section */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline text-white">
                {currentProject.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {currentProject.category}
              </h2>
              <p className="text-white/60">{currentProject.description}</p>
              
              <ul className="flex gap-4">
                {currentProject.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== currentProject.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              
              <div className="border border-white/20"></div>

              {/* Links */}
              <div className="flex items-center gap-4">
                <Link href={currentProject.live || "#"}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={currentProject.github || "#"}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section - Swiper */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projectData.map((item, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[450px] relative flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={item.image}
                        fill
                        className="object-cover"
                        alt="Project image"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns 
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Projects
