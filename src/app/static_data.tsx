import Image from "next/image";
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
    ReactOriginalIcon,
    TailwindcssPlainIcon,
    NodejsOriginalIcon,
    AngularjsOriginalIcon,
    GithubOriginalIcon,
} from "react-devicons";

import NextjsIcon from "@src/public/SkillsIcons/Nextjs.svg";
import FastifyIcon from "@src/public/SkillsIcons/Fastify.svg";
import PrismaIcon from "@src/public/SkillsIcons/Prisma.svg";
import tRPCIcon from "@src/public/SkillsIcons/tRPC.svg";

import TurborepoIcon from "@src/public/SkillsIcons/Turborepo.svg";

// Links
export const links = [
    {
        description: "GitHub",
        link: "https://github.com/devmwang/",
        iconComponent: <GitHub />,
    },
    {
        description: "LinkedIn",
        link: "https://linkedin.com/in/devmwang/",
        iconComponent: <Linkedin />,
    },
    {
        description: "Twitter",
        link: "https://twitter.com/devmwang",
        iconComponent: <Twitter />,
    },
    {
        description: "Email",
        link: "mailto:michael@devmwang.com",
        iconComponent: <Mail />,
    },
];

// Skills Section
export const languages = [
    {
        description: "Python",
        iconComponent: <PythonOriginalIcon size="6rem" />,
    },
    {
        description: "TypeScript",
        iconComponent: <TypescriptOriginalIcon size="6rem" />,
    },
    {
        description: "JavaScript",
        iconComponent: <JavascriptOriginalIcon size="6rem" />,
    },
    { description: "C#", iconComponent: <CsharpOriginalIcon size="6rem" /> },
    { description: "Java", iconComponent: <JavaOriginalIcon size="6rem" /> },
    { description: "Swift", iconComponent: <SwiftOriginalIcon size="6rem" /> },
    { description: "HTML", iconComponent: <Html5OriginalIcon size="6rem" /> },
    { description: "CSS", iconComponent: <Css3OriginalIcon size="6rem" /> },
    { description: "Sass", iconComponent: <SassOriginalIcon size="6rem" /> },
];

export const technologies = [
    // {
    //     description: "Next.js",
    //     iconComponent: <NextjsOriginalWordmarkIcon size="6rem" color="white" />,
    // },
    {
        description: "Next.js",
        iconComponent: <Image src={NextjsIcon} height="32" alt="" />,
    },
    { description: "React", iconComponent: <ReactOriginalIcon size="6rem" /> },
    {
        description: "Tailwind",
        iconComponent: <TailwindcssPlainIcon size="6rem" />,
    },
    {
        description: "Fastify",
        iconComponent: <Image src={FastifyIcon} width="96" alt="" />,
    },
    {
        description: "Prisma",
        iconComponent: <Image src={PrismaIcon} width="96" alt="" />,
    },
    {
        description: "tRPC",
        iconComponent: <Image src={tRPCIcon} width="96" alt="" />,
    },
    {
        description: "Node.js",
        iconComponent: <NodejsOriginalIcon size="6rem" />,
    },
    {
        description: "Angular",
        iconComponent: <AngularjsOriginalIcon size="6rem" />,
    },
];

export const tools = [
    {
        description: "Git/GitHub",
        iconComponent: <GithubOriginalIcon size="6rem" color="white" />,
    },
    {
        description: "Turborepo",
        iconComponent: <Image src={TurborepoIcon} height="96" alt="" />,
    },
];
