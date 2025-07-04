"use client";

import React, { useState, useEffect, useRef } from "react";
import useInView from "@src/hooks/useInView";
import { GitHub } from "react-feather";

import styles from "@src/styles/index.module.scss";
import * as static_data from "@app/static_data";

type LinkDetails = {
    description: string;
    link: string;
    iconComponent: any;
};

type IconDetails = {
    description: string;
    iconComponent: any;
};

interface SideLinksProps {
    linkList: LinkDetails[];
    revealDelay: number;
    inBetweenDelay: number;
}

interface AnimatedSubtextProps {
    staticText: string;
    animatedText: string[];
}

export default function Home() {
    return (
        <>
            <main className="min-h-screen flex flex-col font-sans">
                {/* Side Links */}
                <SideLinks
                    linkList={static_data.links}
                    revealDelay={200}
                    inBetweenDelay={200}
                />

                {/* Main Content */}
                <section className="h-screen bg-background justify-center items-center flex flex-col text-center">
                    <h1 className="text-5xl sm:text-7xl md:text-8xl leading-normal font-semibold text-white align-middle">
                        {"Hi, I'm "}
                        {/* <span className="text-accent">{"Michael"}</span> */}
                        <span className={styles.animatedGradientText}>
                            {"Michael"}
                        </span>
                        {"."}
                    </h1>
                    <AnimatedSubtext
                        staticText={"I'm a"}
                        animatedText={[
                            "student pursuing Computer Science.",
                            "software developer.",
                        ]}
                    />
                </section>

                {/* About */}
                <section
                    id="about"
                    className="pt-40 bg-dark justify-center flex-col text-center"
                >
                    <div className="container mx-auto px-20">
                        <h1 className="text-5xl md:text-6xl leading-normal font-semibold text-white align-middle underline decoration-accent underline-offset-4 decoration-[5px]">
                            {"About"}
                        </h1>
                        <p className="text-lg md:text-2xl pt-1 md:pt-8 leading-normal font-normal text-white align-middle">
                            {
                                "I'm currently a student at the University of British Columbia and Sauder School of Business, pursuing a Bachelor of Computer Science and a Master of Management."
                            }
                        </p>
                        <p className="text-lg md:text-2xl pt-1 md:pt-8 leading-normal font-normal text-white align-middle">
                            {
                                "I enjoy learning new technologies and growing my knowledge on modern frameworks. My experience creating programs spans a wide variety of platforms, ranging from interactive web and mobile apps, to native desktop software, and cutting-edge virtual reality experiences."
                            }
                        </p>
                    </div>
                </section>

                {/* Technical Skills */}
                <section
                    id="skills"
                    className="pt-40 bg-dark justify-center flex-col text-center"
                >
                    <div className="container mx-auto px-20">
                        <SkillsSection baseDelay={200} inBetweenDelay={50} />
                    </div>
                </section>

                {/* Projects */}
                <section
                    id="projects"
                    className="pt-40 bg-dark justify-center flex-col text-center"
                >
                    <div className="container mx-auto px-20">
                        <ProjectsSection />
                    </div>
                </section>
            </main>
        </>
    );
}

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
        }, revealDelay);

        return () => clearTimeout(timeout);
    }, [revealDelay]);

    // * Link List Items
    const sideLinkItems = linkList.map((linkItem, index) => {
        const { description, link, iconComponent } = linkItem;

        // * Pass size prop to icon component
        const sizedIconComponent = React.cloneElement(iconComponent, {
            size: "2rem",
        });

        return (
            <li
                key={link}
                className={
                    isSideLinksVisible
                        ? `transition-all ease-in-out duration-500 opacity-100 translate-y-0`
                        : `opacity-0 translate-y-8`
                }
                style={{ transitionDelay: `${inBetweenDelay * index}ms` }}
            >
                <div className="py-3.5 transition-transform ease-in-out duration-300 hover:-translate-y-2">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={description}
                        className="text-bright h-8 opacity-60"
                    >
                        {sizedIconComponent}
                    </a>
                </div>
            </li>
        );
    });

    return (
        <div className="fixed w-8 bottom-4 sm:bottom-10 left-4 sm:left-12">
            <ul className="list-none">{sideLinkItems}</ul>
        </div>
    );
};

const AnimatedSubtext = ({
    staticText,
    animatedText,
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
    }, [
        staticTextComplete,
        staticIndex,
        staticText,
        arrayIndex,
        stringIndex,
        reverse,
        animatedText,
    ]);

    // * Blinking Line Effect
    useEffect(() => {
        const lineTimeout = setTimeout(() => {
            setLineVisible((currValue) => !currValue);
        }, 500);

        return () => clearTimeout(lineTimeout);
    }, [lineVisible]);

    return (
        <div className="text-lg sm:text-3xl md:text-4xl pt-1 md:pt-8 leading-normal font-normal text-white align-middle">
            <span>{`${staticText.substring(0, staticIndex)} ${animatedText[
                arrayIndex
            ]!.substring(0, stringIndex)}`}</span>
            <div className="relative inline-block left-2">
                <span className={lineVisible ? "opacity-100" : "opacity-0"}>
                    &#95;
                </span>
            </div>
        </div>
    );
};

const SkillsSection = ({
    baseDelay,
    inBetweenDelay,
}: {
    baseDelay: number;
    inBetweenDelay: number;
}) => {
    const sectionTitle = useRef(null);
    const languagesTitle = useRef(null);
    const languagesContainer = useRef(null);
    const technologiesTitle = useRef(null);
    const technologiesContainer = useRef(null);
    const toolsTitle = useRef(null);
    const toolsContainer = useRef(null);

    const isSectionTitleVisible = useInView(sectionTitle);
    const isLanguagesTitleVisible = useInView(languagesTitle);
    const isLanguagesVisible = useInView(languagesContainer);
    const isTechnologiesTitleVisible = useInView(technologiesTitle);
    const isTechnologiesVisible = useInView(technologiesContainer);
    const isToolsTitleVisible = useInView(toolsTitle);
    const isToolsVisible = useInView(toolsContainer);

    const displayFormatter = (item: IconDetails) => {
        const { description, iconComponent } = item;

        return (
            <div className="group px-4 py-2 hover:scale-110 hover:-translate-y-2 transition-transform align-middle">
                {iconComponent}
                <div className="relative flex justify-center">
                    <span className="absolute opacity-0 group-hover:opacity-100 -bottom-3 translate-y-full px-3 py-1.5 bg-gray rounded-xl text-center text-white text-md transition-opacity duration-200">
                        {description}
                    </span>
                </div>
            </div>
        );
    };

    const visibleInvisibleClassNames =
        "inline-block transition-all align-middle";
    const visibleClassNames = "opacity-100 translate-x-0";
    const invisibleClassNames = "opacity-0 -translate-x-2";

    const languagesDisplay = static_data.languages.map((item, index) => {
        return (
            <div
                key={item.description}
                className={visibleInvisibleClassNames.concat(
                    " ",
                    isLanguagesVisible
                        ? visibleClassNames
                        : invisibleClassNames,
                )}
                style={{
                    transitionDelay: `${baseDelay + inBetweenDelay * index}ms`,
                }}
            >
                {displayFormatter(item)}
            </div>
        );
    });

    const technologiesDisplay = static_data.technologies.map((item, index) => {
        return (
            <div
                key={item.description}
                className={visibleInvisibleClassNames.concat(
                    " ",
                    isTechnologiesVisible
                        ? visibleClassNames
                        : invisibleClassNames,
                )}
                style={{
                    transitionDelay: `${baseDelay + inBetweenDelay * index}ms`,
                }}
            >
                {displayFormatter(item)}
            </div>
        );
    });

    const toolsDisplay = static_data.tools.map((item, index) => {
        return (
            <div
                key={item.description}
                className={visibleInvisibleClassNames.concat(
                    " ",
                    isToolsVisible ? visibleClassNames : invisibleClassNames,
                )}
                style={{
                    transitionDelay: `${baseDelay + inBetweenDelay * index}ms`,
                }}
            >
                {displayFormatter(item)}
            </div>
        );
    });

    return (
        <>
            <h1
                ref={sectionTitle}
                className={visibleInvisibleClassNames.concat(
                    isSectionTitleVisible
                        ? visibleClassNames
                        : invisibleClassNames,
                )}
                style={{ transitionDelay: `${baseDelay}ms` }}
            >
                <span className="text-5xl md:text-6xl leading-normal font-semibold text-white align-middle underline decoration-accent underline-offset-4 decoration-[5px]">
                    {"Technical Skills"}
                </span>
            </h1>
            <div>
                <h1
                    ref={languagesTitle}
                    className={visibleInvisibleClassNames.concat(
                        " mt-10 ",
                        isLanguagesTitleVisible
                            ? visibleClassNames
                            : invisibleClassNames,
                    )}
                    style={{ transitionDelay: `${baseDelay}ms` }}
                >
                    <span className="text-4xl md:text-5xl leading-normal font-medium text-white align-middle">
                        {"Languages"}
                    </span>
                </h1>
                <div ref={languagesContainer} className="mt-8">
                    {languagesDisplay}
                </div>
            </div>
            <div>
                <h1
                    ref={technologiesTitle}
                    className={visibleInvisibleClassNames.concat(
                        " mt-9 ",
                        isTechnologiesTitleVisible
                            ? visibleClassNames
                            : invisibleClassNames,
                    )}
                    style={{ transitionDelay: `${baseDelay}ms` }}
                >
                    <span className="text-4xl md:text-5xl leading-normal font-medium text-white align-middle">
                        {"Technologies"}
                    </span>
                </h1>
                <div ref={technologiesContainer} className="mt-8">
                    {technologiesDisplay}
                </div>
            </div>
            <div>
                <h1
                    ref={toolsTitle}
                    className={visibleInvisibleClassNames.concat(
                        " mt-9 ",
                        isToolsTitleVisible
                            ? visibleClassNames
                            : invisibleClassNames,
                    )}
                    style={{ transitionDelay: `${baseDelay}ms` }}
                >
                    <span className="text-4xl md:text-5xl leading-normal font-medium text-white align-middle">
                        {"Tools"}
                    </span>
                </h1>
                <div ref={toolsContainer} className="mt-8">
                    {toolsDisplay}
                </div>
            </div>
        </>
    );
};

const ProjectsSection = () => {
    const projects = [
        {
            name: "OpenCloud File Cloud Server",
            description:
                "OpenCloud is a free, open-source, and self-hosted cloud file server and management system.",
            gh_link: "https://github.com/Controllyx/OpenCloud",
            skills: [
                "Node.js",
                "TypeScript",
                "Fastify",
                "Prisma",
                "PostgreSQL",
                "Zod",
                "argon2",
                "Next.js",
                "React",
                "React Server Components",
                "Tailwind CSS",
                "Framer Motion",
            ],
        },
        {
            name: "Personal Site and Portfolio",
            description:
                "My personal site and portfolio, built on Next.js and Tailwind CSS!",
            gh_link: "https://github.com/devmwang/personal-site",
            skills: [
                "TypeScript",
                "Next.js",
                "React",
                "Tailwind CSS",
                "Intersection Observer API",
            ],
        },
        {
            name: "Personal Discord Bot",
            description:
                "Discord Bot designed for use in private servers. Feature set based on user demands and changes often.",
            gh_link: "https://github.com/devmwang/DiscordBotPy",
            skills: ["Python", "discord.py", "requests"],
        },
        {
            name: "Cryptocurrency Price Discord Bots",
            description:
                "Cluster of Discord Bots designed to display current crypto prices with alert system.",
            gh_link: "https://github.com/devmwang/CryptoPriceBots",
            skills: ["Python", "discord.py", "requests", "WebSockets"],
        },
        {
            name: "Carbon Inspector",
            description:
                "HackCamp 2022 Project. A web app that allows users to calculate their carbon footprint.",
            gh_link: "https://github.com/devmwang-HackCamp2022/hackcamp2022",
            skills: [
                "TypeScript",
                "Next.js",
                "React",
                "Vercel Serverless Functions",
                "Tailwind CSS",
            ],
        },
        {
            name: "Track:GO",
            description:
                "Basic Java desktop application built using Java Swing with app state save/load capabilities.",
            gh_link: "https://github.com/devmwang/TrackGO",
            skills: [
                "Java",
                "Java Swing",
                "JUnit",
            ],
        },
    ];

    const projectsDisplay = projects.map((project) => {
        const { name, description, gh_link, skills } = project;

        const skillsList = skills.map((skill) => {
            return (
                <li key={skill} className="inline-block pr-4">
                    {skill}
                </li>
            );
        });

        return (
            <li
                key={name}
                className="relative bg-gray rounded-2xl hover:scale-105 transition-transform"
            >
                <div className="flex flex-col justify-between p-6 text-white text-left h-full">
                    <div className="block grow">
                        <div className="flex justify-between items-center">
                            <div className="text-lg font-medium">{name}</div>
                            {!!gh_link && (
                                <a
                                    href={gh_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={name}
                                    className="inline-block"
                                >
                                    <GitHub />
                                </a>
                            )}
                        </div>
                        <div className="my-2">
                            <p className="text-md">{description}</p>
                        </div>
                    </div>
                    <ul className="list-none text-sm text-neutral-100 mt-2">
                        {skillsList}
                    </ul>
                </div>
            </li>
        );
    });

    return (
        <div className="pb-16">
            <h1 className="text-5xl md:text-6xl leading-normal font-semibold text-white align-middle underline decoration-accent underline-offset-4 decoration-[5px]">
                {"My Projects"}
            </h1>
            <ul className="grid relative gap-5 lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 list-none mt-10">
                {projectsDisplay}
            </ul>
        </div>
    );
};
