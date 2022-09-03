import type { NextPage } from "next";
import Head from "next/head";

import React, { useState,  useEffect } from "react";
import { GitHub, Linkedin, Twitter, Mail } from "react-feather";

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

interface AnimatedSubtextProps {
    staticText: string;
    animatedText: string[];
}

interface SkillsSectionProps {
    languages: string[];
    frameworks: string[];
    tools: string[];
}

const links = [
    { description: "GitHub", link: "https://github.com/devmwang/", iconComponent: <GitHub /> },
    { description: "LinkedIn", link: "https://linkedin.com/in/devmwang/", iconComponent: <Linkedin /> },
    { description: "Twitter", link: "https://twitter.com/devmwang", iconComponent: <Twitter /> },
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
            <title>Michael Wang | Personal Site</title>
            <link rel="icon" href="/favicon.svg" />

            {/* Meta Tags */}
            <meta name="description" content="Michael Wang's Personal Site, built on Next.js." />
            <meta name="theme-color" content="#00C8C7"></meta>

            <meta name="og:title" content="Michael Wang | Personal Site" />
            <meta name="og:description" content="Michael Wang's Personal Site, built on Next.js." />
            <meta property="og:image" content="https://www.devmwang.com/SiteLogo.png" />
            <meta property="og:url" content="https://www.devmwang.com/" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@devmwang" />
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
                <AnimatedSubtext staticText={"I'm a"} animatedText={["student pursuing Computer Science.", "software developer."]} />
            </section>

            <section id="about" className="min-h-screen h-max pb-40 bg-dark justify-center flex-col text-center">
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

    // * Runs on component mount
    useEffect(() => {
        // Reveal after delay
        const timeout = setTimeout(() => {
            setSideLinksVisible(true);
        }, revealDelay)

        return () => clearTimeout(timeout);
    });

    // * Link List Items
    const sideLinkItems = linkList.map((linkItem, index) => {
        const { description, link, iconComponent } = linkItem;
        
        // * Pass size prop to icon component
        const sizedIconComponent = React.cloneElement(iconComponent, { size: '2rem' });

        return (
            <li key={link} 
                className={isSideLinksVisible ? `transition-all ease-in-out duration-500 opacity-100 translate-y-0` : `opacity-0 translate-y-8`} 
                style={{transitionDelay: `${(inBetweenDelay * index)}ms`}}>
                <div className="py-3.5 transition-transform ease-in-out duration-300 hover:-translate-y-2">
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

const AnimatedSubtext = ({
    staticText,
    animatedText
}: AnimatedSubtextProps) => {
    const [staticTextComplete, setStaticTextComplete] = useState(false);
    const [staticIndex, setStaticIndex] = useState(0);
    const [arrayIndex, setArrayIndex] = useState(0);
    const [stringIndex, setStringIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [lineVisible, setLineVisible] = useState(true);

    // * Typewriter Effect
    useEffect(() => {
        // * Static Text
        if (staticIndex == staticText.length) {
            setStaticTextComplete(true);
        }

        // * Animated Text
        // End of word, reverse
        if (stringIndex === animatedText[arrayIndex]!.length + 5 && !reverse) {
            setReverse(true);
            return;
        }

        // End of reverse (not last word in array), set next word and reset reverse
        if (stringIndex === -3 && arrayIndex !== animatedText.length - 1 && reverse) {
            setArrayIndex((currVal) => currVal + 1);
            setReverse(false);
            return;
        }

        // End of reverse (last word in array), set first word and reset reverse
        if (stringIndex === -3 && arrayIndex == animatedText.length - 1 && reverse) {
            setArrayIndex(0);
            setReverse(false);
            return;
        }

        const timeout = reverse ? 60 : 100;

        const textTimeout = setTimeout(() => {
            if (staticTextComplete) {
                setStringIndex((currVal) => currVal + (reverse ? -1 : 1));
            } else {
                setStaticIndex((currVal) => currVal + 1);
            }

        }, timeout);

        return () => clearTimeout(textTimeout);
    }, [staticTextComplete, staticIndex, staticText, arrayIndex, stringIndex, reverse, animatedText]);

    // * Blinking Line Effect
    useEffect(() => {
        const lineTimeout = setTimeout(() => {
            setLineVisible((currValue) => !currValue);
        }, 500);

        return () => clearTimeout(lineTimeout);
    }, [lineVisible]);

    return (
        <div className="text-lg md:text-4xl pt-1 md:pt-8 leading-normal font-normal text-white align-middle">
            <span>{`${staticText.substring(0, staticIndex)} ${animatedText[arrayIndex]!.substring(0, stringIndex)}`}</span>
            <div className="relative inline-block left-2"><span className={lineVisible ? "opacity-100" : "opacity-0"}>&#95;</span></div>
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
                    {/* <div className="border-l-4 border-accent"> */}
                    <div className={activePanel == "languages" ? "border-l-4 border-accent transition-colors" : "border-l-4 border-accent/25 transition-colors"}>
                        <button className="flex relative w-full px-1 md:px-6 py-3 hover:bg-white/10" onClick={() => setActivePanel("languages")}>
                            <span className="text-accent text-xl font-medium">Languages</span>
                        </button>
                    </div>

                    <div className={activePanel == "frameworks" ? "border-l-4 border-accent transition-colors" : "border-l-4 border-accent/25 transition-colors"}>
                        <button className="flex relative w-full px-1 md:px-6 py-3 hover:bg-white/10" onClick={() => setActivePanel("frameworks")}>
                            <span className="text-accent text-xl font-medium">Frameworks</span>
                        </button>
                    </div>

                    <div className={activePanel == "tools" ? "border-l-4 border-accent transition-colors" : "border-l-4 border-accent/25 transition-colors"}>
                        <button className="flex relative w-full px-1 md:px-6 py-3 hover:bg-white/10" onClick={() => setActivePanel("tools")}>
                            <span className="text-accent text-xl font-medium">Tools</span>
                        </button>
                    </div>
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
