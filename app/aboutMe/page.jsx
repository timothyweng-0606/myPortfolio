"use client"

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs,
} from "react-icons/fa"

import { SiTailwindcss, 
         SiNextdotjs, 
         SiExpress, 
         SiMongodb,
         SiPython,
         SiPostgresql,
         SiDjango,
         SiJava,
         SiTypescript,
         SiMysql,
} from "react-icons/si"

const education = {
    icon: '',
    title: "My experience",
    description: "",
    items: [
        {
            school: "DePaul University",
            degree:"MS in Computer Science",
            duration: "Present",
            country: "Chicago, Illinois"
        },
        {
            school: "General Assembly",
            degree:"Software Engineer Bootcamp",
            duration: "2024 June - 2024 September",
            country: "Boston, MA"
        },
        {
            school: "University of Sussex",
            degree:"BS in Marketing and Management",
            duration: "2018-2021",
            country: "Brighton, United Kingdom"
        },
    ],
}

const skills = {
    title: "My skills",
    database: "DataBase",
    languages: "Languages & Frameworks",
    description: "dfnwejfnewnfkjnew.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: 'html 5',
        },
        {
            icon: <FaCss3 />,
            name: 'Css3',
        },
        {
            icon: <SiTailwindcss />,
            name: 'Tailwind',
        },
        {
            icon: <FaJs />,
            name: 'JavaScript',
        },
        {
            icon: <FaReact />,
            name: 'React',
        },
        {
            icon: <SiNextdotjs />,
            name: 'Next Js',
        },
        {
            icon: <FaNodeJs />,
            name: 'Node Js',
        },
        {
            icon: <SiExpress />,
            name: 'Express',
        },
        {
            icon: <SiPython />,
            name: 'Python',
        },
        {
            icon: <SiDjango />,
            name: 'Django',
        },
        {
            icon: <SiTypescript />,
            name: 'TypeScript',
        },
    ],
    databases:[
        {
            icon:<SiMongodb />,
            name: 'MongoDb'
        },
        {
            icon:<SiPostgresql />,
            name: 'Postgresql'
        },
        {
            icon:<SiMysql />,
            name: 'Mysql'
        },
    ]
}


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

const aboutMe = () => {
  return (
    <motion.div
        initial={{ opacity: 0}}
        animate={{
            opacity: 1,
            transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
        <div className="container mx-auto">
            <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="experience">Why Coding ?</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                </TabsList>
                <div className="min-h-[70vh] w-full">
                    <TabsContent value="experience" className="w-full">
                    <h3 className="text-4xl font-bold text-center">My Journey</h3>
                    <p className="m-4">Code became my canvas... <br/><br/>

I always imagined my dream job would be something in the creative field, perhaps working in marketing or designing visually stunning websites. My bachelor’s degree in Marketing seemed to support this vision, and I enjoyed crafting user-friendly websites and diving into the world of web design. But deep down, I felt there was something more, something different that I yearned to discover.

<br/><br/>And that’s when it happened; the spark I was missing ignited the moment I started exploring the world of fullstack development. The thrill of building something from nothing, of solving complex problems, and of continuously learning new technologies hooked me instantly. <br/>Since then, I can’t get enough. Fullstack development calls to all my passions; it combines creativity and problem-solving, allowing me to break down and improve code to create efficient and elegant solutions.

I love bringing my ideas to life through code, turning concepts into functional, visually appealing applications. The process of translating creative thoughts into reality is incredibly fulfilling.

<br/><br/>As an M.S. CS student, my journey has been both challenging and rewarding. The rigurous course work has equipped me with the problem-solving skills necessary to tackle real-world problems. 

<br/><br/>I excel at creating intuitive designs and efficient solutions using my skills in multiple programming languages and frameworks, such as MERN stack. I am always eager to tackle new challenges and innovate. Driven by my passion for coding and creating impactful, user-friendly solutions, I continuously seek to expand my knowledge and push the boundaries of what’s possible.</p>
</TabsContent>
                    <TabsContent value="education" className="w-full">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{education.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                {education.description}
                            </p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {education.items.map((item, index) => {
                                        return (
                                            <li key={index}
                                                className="bg-[#232329] w-full h-auto py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl text-center lg:text-left">{item.school}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60 whitespace-nowrap">{item.degree}</p>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.country}</p>
                                                </div>
                                            </li>               
                                        )
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    <TabsContent value="skills" className="w-full h-full">
                     <div className="flex flex-col gap-[30px]">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{skills.languages}</h3>
                        </div>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                            {skills.skillList.map((skill, index) => {
                                return( 
                                <li key={index}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                    {skill.icon}
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="capitalize">{skill.name}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </li>
                                )
                            })}
                        </ul>
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{skills.database}</h3>
                        </div>
                        
                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] mb-16">
                            {skills.databases.map((database, index) => {
                                return( 
                                <li key={index}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                    {database.icon}
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="capitalize">{database.name}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </li>
                                )
                            })}
                        </ul>
                     </div>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    </motion.div>
  )
}

export default aboutMe
