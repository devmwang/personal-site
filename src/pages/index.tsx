import type { NextPage } from "next";
import Head from "next/head";

import React, { useState,  useEffect } from "react";
import { GitHub, Linkedin, Mail } from "react-feather";

type LinkDetails = {
    description: string;
    link: string;
    iconComponent: any;
}

interface SideLinksProps {
    linkList: LinkDetails[];
    revealDelay: number;
    inBetweenDelay: number;
}

interface SkillsSectionProps {
    languages: string[];
    frameworks: string[];
    tools: string[];
}

const links = [
    { description: "GitHub", link: "https://github.com/devmwang/", iconComponent: <GitHub /> },
    { description: "LinkedIn", link: "https://linkedin.com/in/devmwang/", iconComponent: <Linkedin /> },
    { description: "Email", link: "mailto:devmwang@icloud.com", iconComponent: <Mail /> },
];

const skillsLanguages = [
    "Python",
    "TypeScript",
    "JavaScript",
    "C#",
    "Java",
    "Swift",
    "HTML",
    "CSS/Sass",
  ];
  
  const skillsFrameworks = [
      "Next.js",
      "React",
      "Node.js",
      "SwiftUI",
  ];
  
  const skillsTools = [
      "Git/GitHub",
      "Vite",
      "Vercel",
      "Chrome DevTools",
      "Figma",
  ]

const Home: NextPage = () => (
    <>
        <Head>
            <title>Michael Wang</title>
            <meta name="description" content="Michael Wang's Personal Site" />
            <link rel="icon" href="/favicon.svg" />
        </Head>

        <main className="min-h-screen flex flex-col font-sans">
            {/* Side Links */}
            <SideLinks linkList={links} revealDelay={200} inBetweenDelay={200} />

            {/* Main Content */}
            <section className="h-screen bg-background justify-center items-center flex flex-col text-center">
                <h1 className="text-5xl md:text-8xl leading-normal font-semibold text-white align-middle">
                    {"Hi, I'm "}
                    <span className="text-accent">{"Michael"}</span>
                    {"."}
                </h1>
                <p className="text-lg md:text-4xl pt-1 md:pt-8 leading-normal font-normal text-white align-middle">
                    {"I'm a student pursuing Computer Science."}
                </p>
            </section>

            <section id="about" className="h-screen bg-dark justify-center flex-col text-center">
                {/* About */}
                <div className="container mx-auto pt-28 px-10">
                    <h1 className="text-5xl md:text-6xl leading-normal font-semibold text-white align-middle underline decoration-accent underline-offset-4 decoration-[5px]">
                        {"About"}
                    </h1>
                    <p className="text-lg md:text-xl pt-1 md:pt-8 leading-normal font-normal text-white align-middle">
                        {"I'm currently a student at the University of British Columbia and Sauder School of Business, pursuing a Bachelor of Computer Science and a Master of Management."}
                    </p>
                    <p className="text-lg md:text-xl pt-1 md:pt-8 leading-normal font-normal text-white align-middle">
                        {"I enjoy learning new technologies and growing my knowledge on modern frameworks. My experience creating programs spans a wide variety of platforms, ranging from interactive web and mobile apps, to native desktop software, and cutting-edge virtual reality experiences."}
                    </p>
                </div>

                {/* Skills/Knowledge */}
                <div className="container mx-auto pt-28 px-10">
                    <SkillsSection languages={skillsLanguages} frameworks={skillsFrameworks} tools={skillsTools}  />
                </div>
            </section>

            {/* Bottom Links (Mobile) */}
        </main>
    </>
);

const SideLinks = ({
    linkList,
    revealDelay,
    inBetweenDelay,
}: SideLinksProps) => {
    const [isSideLinksVisible, setSideLinksVisible] = useState(false);

    // Runs on component mount
    useEffect(() => {
        // Reveal after delay
        const timeout = setTimeout(() => {
            setSideLinksVisible(true);
        }, revealDelay)

        return () => clearTimeout(timeout);
    });

    // Link List Items
    const sideLinkItems = linkList.map((linkItem, index) => {
        const { description, link, iconComponent } = linkItem;
        
        // Pass size prop to icon component
        const sizedIconComponent = React.cloneElement(iconComponent, { size: '2rem' });

        return (
            <li key={link} 
                className={isSideLinksVisible ? `transition-all ease-in-out duration-500 opacity-100 translate-y-0` : `opacity-0 translate-y-8`} 
                style={{transitionDelay: `${(inBetweenDelay * index)}ms`}}>
                <div className="py-3">
                    <a href={link} target="_blank" rel="noopener noreferrer" aria-label={description} className="text-bright h-8 opacity-60">
                        {sizedIconComponent}
                    </a>
                </div>
            </li>
        )
    })

    return (
        <div className="fixed w-8 bottom-10 left-12">
            <ul className="list-none">
                {sideLinkItems}
            </ul>
        </div>
    )
}

const SkillsSection = ({
    languages,
    frameworks,
    tools,
}: SkillsSectionProps) => {
    const [activePanel, setActivePanel] = useState("languages");

    const languageItems = languages.map((language) => {        
        return (
            <li key={language} className="list-none mr-6">
                <div className="py-1.5">
                    <span className="text-gray-400 font-medium">
                        {language}
                    </span>
                </div>
            </li>
        )
    });

    const frameworkItems = frameworks.map((framework) => {        
        return (
            <li key={framework} className="list-none mr-6">
                <div className="py-1.5">
                    <span className="text-gray-400 font-medium">
                        {framework}
                    </span>
                </div>
            </li>
        )
    });

    const toolItems = tools.map((tool) => {        
        return (
            <li key={tool} className="list-none mr-6">
                <div className="py-1.5">
                    <span className="text-gray-400 font-medium">
                        {tool}
                    </span>
                </div>
            </li>
        )
    });

    return (
        <div className="w-[258px] md:w-[414px] mx-auto">
            <div className="flex">
                <div className="w-max relative">
                    <button className="flex relative w-full border-l-4 border-accent px-1 md:px-6 py-3 transition-colors hover:bg-white/10" onClick={() => setActivePanel("languages")}>
                        <span className="text-accent text-xl font-medium">Languages</span>
                    </button>
                    <button className="flex relative w-full border-l-4 border-accent px-1 md:px-6 py-3 transition-colors hover:bg-white/10" onClick={() => setActivePanel("frameworks")}>
                        <span className="text-accent text-xl font-medium">Frameworks</span>
                    </button>
                    <button className="flex relative w-full border-l-4 border-accent px-1 md:px-6 py-3 transition-colors hover:bg-white/10" onClick={() => setActivePanel("tools")}>
                        <span className="text-accent text-xl font-medium">Tools</span>
                    </button>
                </div>
                <div className="w-full ml-5 mt-1 block">
                    <div className={activePanel == "languages" ? "static opacity-100 transition-all ease-in-out duration-300 delay-75" : "absolute opacity-0 transition-all ease-in-out duration-200 delay-0"}>
                        <div className="p-2 text-left md:columns-2">
                            {languageItems}
                        </div>
                    </div>
                    <div className={activePanel == "frameworks" ? "static opacity-100 transition-all ease-in-out duration-300 delay-75" : "absolute opacity-0 transition-all ease-in-out duration-200 delay-0"}>
                        <div className="p-2 text-left md:columns-2">
                            {frameworkItems}
                        </div>
                    </div>
                    <div className={activePanel == "tools" ? "static opacity-100 transition-all ease-in-out duration-300 delay-75" : "absolute opacity-0 transition-all ease-in-out duration-200 delay-0"}>
                        <div className="p-2 text-left md:columns-2">
                            {toolItems}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
