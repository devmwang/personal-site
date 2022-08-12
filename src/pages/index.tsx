import type { NextPage } from "next";
import Head from "next/head";

import React, { useState,  useEffect } from "react";
import { GitHub, Linkedin, Mail } from "react-feather";

type LinkDetails = {
    description: string;
    link: string;
    iconComponent: any;
}

interface FixedLinksProps {
    linkList: LinkDetails[];
    revealDelay: number;
    inBetweenDelay: number;
}

const links = [
    { description: "GitHub", link: "https://github.com/devmwang/", iconComponent: <GitHub /> },
    { description: "LinkedIn", link: "https://linkedin.com/in/devmwang/", iconComponent: <Linkedin /> },
    { description: "Email", link: "mailto:devmwang@icloud.com", iconComponent: <Mail /> },
];

const Home: NextPage = () => (
    <>
        <Head>
            <title>Michael Wang</title>
            <meta name="description" content="Michael Wang's Personal Site" />
            <link rel="icon" href="/favicon.svg" />
        </Head>

        <main className="min-h-screen flex flex-col font-sans">
            {/* Fixed Links */}
            <FixedLinks linkList={links} revealDelay={100} inBetweenDelay={200} />

            {/* Main Content */}
            <div className="h-screen bg-background justify-center items-center flex flex-col text-center">
                <h1 className="text-5xl md:text-8xl leading-normal font-semibold text-white align-middle">
                    {"Hi, I'm Michael"}
                </h1>
                <p className="text-lg md:text-4xl pt-1 md:pt-8 leading-normal font-normal text-white align-middle">
                    {"I'm a student pursuing Computer Science."}
                </p>
            </div>
            <div className="h-screen bg-dark justify-center items-center flex flex-col text-center">
                <h1 className="text-5xl md:text-8xl leading-normal font-semibold text-white align-middle">
                    {"Hi, I'm Michael"}
                </h1>
                <p className="text-lg md:text-4xl pt-1 md:pt-8 leading-normal font-normal text-white align-middle">
                    {"I'm a student pursuing Computer Science."}
                </p>
            </div>
        </main>
    </>
);

const FixedLinks = ({
    linkList,
    revealDelay,
    inBetweenDelay,
}: FixedLinksProps) => {
    const [isSideLinksVisible, setSideLinksVisible] = useState(new Array(linkList.length).fill(false));

    // Runs on component mount
    useEffect(() => {
        // For each link, reveal after specified delay
        for (let i=0; i<linkList.length; i++) {
            const linkRevealDelay = revealDelay + (i * inBetweenDelay);

            setTimeout(() => {
                setSideLinksVisible((currentValues: any) => {
                    return currentValues.map((value: boolean, index: number) => {
                        return index == i ? true : value;
                    })
                })
            }, linkRevealDelay)
        }
    }, []);

    // Link List Items
    const sideLinkItems = linkList.map((linkItem, index) => {
        const { description, link, iconComponent } = linkItem;
        
        // Pass size prop to icon component
        const sizedIconComponent = React.cloneElement(iconComponent, { size: '2rem' });

        return (
            <li key={link} className={isSideLinksVisible[index] ? "py-3 transition-all ease-in-out duration-500 delay-[0ms] opacity-100 translate-y-0" : "py-2.5 opacity-0 translate-y-8"} >
                <a href={link} target="_blank" rel="noopener noreferrer" aria-label={description} className="text-bright h-8 opacity-60">
                    {sizedIconComponent}
                </a>
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

export default Home;
