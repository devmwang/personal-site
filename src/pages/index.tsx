import React, { useState,  useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import { GitHub, Linkedin, Twitter, Mail } from "react-feather";
import {
    PythonOriginalIcon,
    TypescriptOriginalIcon,
    JavascriptOriginalIcon,
    CsharpOriginalIcon,
    JavaOriginalIcon,
    SwiftOriginalIcon,
    Html5OriginalIcon,
    Css3OriginalIcon,
    SassOriginalIcon,

    NextjsOriginalWordmarkIcon,
    ReactOriginalIcon,
    TailwindcssPlainIcon,
    NodejsOriginalIcon,
    AngularjsOriginalIcon,

    GithubOriginalIcon,
    VscodeOriginalIcon,
    JetbrainsOriginalIcon
} from "react-devicons";

import FastifyIcon from "@src/public/SkillsIcons/Fastify.svg";
import PrismaIcon from "@src/public/SkillsIcons/Prisma.svg";
import tRPCIcon from "@src/public/SkillsIcons/tRPC.svg";
import ViteIcon from "@src/public/SkillsIcons/Vite.svg";
import SwiftUIIcon from "@src/public/SkillsIcons/SwiftUI.png";

import VisualStudioIcon from "@src/public/SkillsIcons/VisualStudio.svg";
import TurborepoIcon from "@src/public/SkillsIcons/Turborepo.svg";

import styles from "@src/styles/index.module.scss";

type LinkDetails = {
    description: string;
    link: string;
    iconComponent: any;
}

type IconDetails = {
    description: string;
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

const links = [
    { description: "GitHub", link: "https://github.com/devmwang/", iconComponent: <GitHub /> },
    { description: "LinkedIn", link: "https://linkedin.com/in/devmwang/", iconComponent: <Linkedin /> },
    { description: "Twitter", link: "https://twitter.com/devmwang", iconComponent: <Twitter /> },
    { description: "Email", link: "mailto:devmwang@icloud.com", iconComponent: <Mail /> },
];


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
                <h1 className="text-5xl sm:text-7xl md:text-8xl leading-normal font-semibold text-white align-middle">
                    {"Hi, I'm "}
                    {/* <span className="text-accent">{"Michael"}</span> */}
                    <span className={styles.animatedGradientText}>{"Michael"}</span>
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
                    <p className="text-lg md:text-2xl pt-1 md:pt-8 leading-normal font-normal text-white align-middle">
                        {"I'm currently a student at the University of British Columbia and Sauder School of Business, pursuing a Bachelor of Computer Science and a Master of Management."}
                    </p>
                    <p className="text-lg md:text-2xl pt-1 md:pt-8 leading-normal font-normal text-white align-middle">
                        {"I enjoy learning new technologies and growing my knowledge on modern frameworks. My experience creating programs spans a wide variety of platforms, ranging from interactive web and mobile apps, to native desktop software, and cutting-edge virtual reality experiences."}
                    </p>
                </div>

                {/* Skills/Knowledge */}
                <div className="container mx-auto pt-40 px-10">
                    <SkillsSection />
                </div>

                {/* Projects */}
                <div className="container mx-auto pt-40 px-28">
                    <ProjectsSection />
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
        <div className="fixed w-8 bottom-4 sm:bottom-10 left-4 sm:left-12">
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
        if (stringIndex === animatedText[arrayIndex]!.length + 10 && !reverse) {
            setReverse(true);
            return;
        }

        // End of reverse, set next word and reset reverse
        if (stringIndex === -5 && reverse) {
            // If last text in array, reset to first, otherwise increment array index
            if (arrayIndex == animatedText.length - 1) {
                setArrayIndex(0);
            } else {
                setArrayIndex((currVal) => currVal + 1);
            }

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
        <div className="text-lg sm:text-3xl md:text-4xl pt-1 md:pt-8 leading-normal font-normal text-white align-middle">
            <span>{`${staticText.substring(0, staticIndex)} ${animatedText[arrayIndex]!.substring(0, stringIndex)}`}</span>
            <div className="relative inline-block left-2"><span className={lineVisible ? "opacity-100" : "opacity-0"}>&#95;</span></div>
        </div>
    )
}

const SkillsSection = () => {
    const languages = [
        { description: "Python", iconComponent: <PythonOriginalIcon size="6rem" />},
        { description: "TypeScript", iconComponent: <TypescriptOriginalIcon size="6rem" />},
        { description: "JavaScript", iconComponent: <JavascriptOriginalIcon size="6rem" />},
        { description: "C#", iconComponent: <CsharpOriginalIcon size="6rem" />},
        { description: "Java", iconComponent: <JavaOriginalIcon size="6rem" />},
        { description: "Swift", iconComponent: <SwiftOriginalIcon size="6rem" />},
        { description: "HTML", iconComponent: <Html5OriginalIcon size="6rem" />},
        { description: "CSS", iconComponent: <Css3OriginalIcon size="6rem" />},
        { description: "SCSS", iconComponent: <SassOriginalIcon size="6rem" />},
    ];

    const technologies = [
        { description: "Next.js", iconComponent: <NextjsOriginalWordmarkIcon size="6rem" color="white" />},
        { description: "React", iconComponent: <ReactOriginalIcon size="6rem" />},
        { description: "Tailwind", iconComponent: <TailwindcssPlainIcon size="6rem" />},
        { description: "Fastify", iconComponent: <Image src={FastifyIcon} width="96" alt="" />},
        { description: "Prisma", iconComponent: <Image src={PrismaIcon} width="96" alt="" />},
        { description: "tRPC", iconComponent: <Image src={tRPCIcon} width="96" alt="" />},
        { description: "Node.js", iconComponent: <NodejsOriginalIcon size="6rem" />},
        { description: "Angular", iconComponent: <AngularjsOriginalIcon size="6rem" />},
        { description: "Vite.js", iconComponent: <Image src={ViteIcon} width="96" alt="" />},
    ]

    const tools = [
        { description: "Git/GitHub", iconComponent: <GithubOriginalIcon size="6rem" color="white" />},
        { description: "VS Code", iconComponent: <VscodeOriginalIcon size="6rem" />},
        { description: "Visual Studio", iconComponent: <Image src={VisualStudioIcon} width="96" alt="" />},
        { description: "JetBrains Tools", iconComponent: <JetbrainsOriginalIcon size="6rem" />},
        { description: "Turborepo", iconComponent: <Image src={TurborepoIcon} height="96" alt="" />},
    ]

    const displayFormatter = (itemArray: IconDetails[]) => {
        return itemArray.map((item) => {
            const { description, iconComponent } = item;

            return (
                <div key={description} className="group inline-block px-4 py-2 hover:scale-110 hover:-translate-y-2 transition-transform">
                    {iconComponent}
                    <div className="relative flex justify-center">
                        <span className="absolute opacity-0 group-hover:opacity-100 -bottom-3 translate-y-full px-3 py-1.5 bg-gray rounded-xl text-center text-white text-md transition-opacity duration-200">
                            {description}
                        </span>
                    </div>
                </div>
            )
        })
    }

    const languagesDisplay = displayFormatter(languages);
    const technologiesDisplay = displayFormatter(technologies);
    const toolsDisplay = displayFormatter(tools);

    return (
        <>
            <h1 className="text-5xl md:text-6xl leading-normal font-semibold text-white align-middle underline decoration-accent underline-offset-4 decoration-[5px]">
                {"Technical Skills"}
            </h1>
            <h1 className="text-4xl md:text-5xl mt-10 leading-normal font-medium text-white align-middle">
                {"Languages"}
            </h1>
            <div className="mt-8">
                {languagesDisplay}
            </div>
            <h1 className="text-4xl md:text-5xl mt-9 leading-normal font-medium text-white align-middle">
                {"Technologies"}
            </h1>
            <div className="mt-8">
                {technologiesDisplay}
            </div>
            <h1 className="text-4xl md:text-5xl mt-9 leading-normal font-medium text-white align-middle">
                {"Tools"}
            </h1>
            <div className="mt-8">
                {toolsDisplay}
            </div>
        </>   
    );
}

const ProjectsSection = () => {
    const projects = [
        { name: "Personal Site and Portfolio", status: "Stable", color: "LawnGreen", description: "My personal site and portfolio, built on Next.js and Tailwind CSS!", gh_link: "https://github.com/devmwang/personal-site", skills: [
            "TypeScript",
            "Next.js",
            "React",
            "Tailwind CSS",
            "Node.js",
        ] },
        { name: "Personal Discord Bot", status: "Stable", color: "LawnGreen", description: "Discord Bots designed for use in private servers. Feature set based on user demands and changes often.", gh_link: "https://github.com/devmwang/DiscordBotPy", skills: [
            "Python",
            "discord.py",
            "requests",
        ] },
        { name: "Cryptocurrency Price Discord Bots", status: "Stable", color: "LawnGreen", description: "Cluster of Discord Bots designed to display current crypto prices with alert system.", gh_link: "https://github.com/devmwang/CryptoPriceBots", skills: [
            "Python",
            "discord.py",
            "requests",
            "WebSockets",
        ] },
        { name: "Snow Cloud - Cloud Storage", status: "Early Planning/Development", color: "orange", description: "Snow Cloud is a full stack web app designed to function similarly to Google Drive, OneDrive, or iCloud.", gh_link: "https://github.com/SnowTechnologies/snow-cloud", skills: [
            "TypeScript",
            "Next.js",
            "React",
            "Tailwind CSS",
            "tRPC",
            "TanStack Query",
            "Fastify",
            "Prisma",
            "Node.js",
        ] },
        { name: "Asset Price Display", status: "Early Development", color: "orange", description: "iOS app designed to display asset prices (stock market and cryptocurrency). Planned features include widgets and Live Activities through the WidgetKit API.", gh_link: "https://github.com/devmwang/AssetPriceDisplay", skills: [
            "Swift",
            "SwiftUI",
        ] },
        { name: "Engage Network Web App", status: "End-of-Life", color: "red", description: "Engage Network was a digital learning platform that helped connect tutors with students. The project was shelved in mid-2022.", gh_link: "https://github.com/EngageNetwork", skills: [
            "TypeScript",
            "JavaScript",
            "Angular",
            "Bootstrap 5",
            "Express.js",
            "MongoDB",
            "Node.js",
        ] },
        { name: "File Share", status: "End-of-Life", color: "red", description: "File Share is a simple P2P application for sharing files over open and forwarded network ports. The project was shelved in late-2021.", gh_link: "https://github.com/devmwang/FileShare", skills: [
            "C#",
            ".NET Framework",
            "WPF",
        ] },
    ]

    const projectsDisplay = projects.map((project) => {
        const { name, status, color, description, gh_link, skills } = project;

        const skillsList = skills.map((skill) => {
            return (
                <li key={skill} className="inline-block pr-4">
                    {skill}
                </li>
            )
        });

        return (
            <li key={name} className="relative bg-gray rounded-2xl hover:scale-105 transition-transform">
                <div className="flex flex-col justify-between p-6 text-white text-left h-full">
                    <div className="block grow">
                        <div className="flex justify-between items-center">
                            <div className="text-lg font-medium">{name}</div>
                            <a href={gh_link} target="_blank" rel="noopener noreferrer" aria-label={name} className="inline-block" >
                                <GitHub />
                            </a>
                        </div>
                        <div>Status: <span style={{color: color}}>{status}</span></div>
                        <div className="my-2">
                            <p className="text-md">{description}</p>
                        </div>
                    </div>
                    <ul className="list-none text-sm text-neutral-100 mt-2">
                        {skillsList}
                    </ul>
                </div>
            </li>
        )
    })

    return (
        <>
            <h1 className="text-5xl md:text-6xl leading-normal font-semibold text-white align-middle underline decoration-accent underline-offset-4 decoration-[5px]">
                {"My Projects"}
            </h1>
            <ul className="grid relative gap-5 lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 list-none mt-10">
                {projectsDisplay}
            </ul>
        </>
    )
}

export default Home;
