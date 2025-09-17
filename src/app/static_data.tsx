import Image from "next/image";
import { GitHub, Linkedin, Twitter, Mail } from "react-feather";

import TwitterOriginal from "devicons-react/icons/TwitterOriginal";
import PythonOriginal from "devicons-react/icons/PythonOriginal";
import TypescriptOriginal from "devicons-react/icons/TypescriptOriginal";
import JavascriptOriginal from "devicons-react/icons/JavascriptOriginal";
import CsharpOriginal from "devicons-react/icons/CsharpOriginal";
import JavaOriginal from "devicons-react/icons/JavaOriginal";
import Html5Original from "devicons-react/icons/Html5Original";
import Css3Original from "devicons-react/icons/Css3Original";
import SassOriginal from "devicons-react/icons/SassOriginal";
import ReactOriginal from "devicons-react/icons/ReactOriginal";
import TailwindcssOriginal from "devicons-react/icons/TailwindcssOriginal";
import NodejsOriginal from "devicons-react/icons/NodejsOriginal";
import GithubOriginal from "devicons-react/icons/GithubOriginal";
import SwiftOriginal from "devicons-react/icons/SwiftOriginal";
import AzuresqldatabasePlain from "devicons-react/icons/AzuresqldatabasePlain";
import AzuredevopsOriginal from "devicons-react/icons/AzuredevopsOriginal";
import AmazonwebservicesPlainWordmark from "devicons-react/icons/AmazonwebservicesPlainWordmark";

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
        iconComponent: <GitHub className="h-10 w-10" />,
    },
    {
        description: "LinkedIn",
        link: "https://linkedin.com/in/devmwang/",
        iconComponent: <Linkedin className="h-10 w-10" />,
    },
    {
        description: "X",
        link: "https://x.com/devmwang",
        iconComponent: (
            <TwitterOriginal className="icon-currentColor" size="2.5rem" />
        ),
    },
    {
        description: "Email",
        link: "mailto:michael@devmwang.com",
        iconComponent: <Mail className="h-10 w-10" />,
    },
];

// Skills Section
export const languages = [
    {
        description: "Python",
        iconComponent: <PythonOriginal size="6rem" />,
    },
    { description: "C#", iconComponent: <CsharpOriginal size="6rem" /> },
    {
        description: "TypeScript",
        iconComponent: <TypescriptOriginal size="6rem" />,
    },
    {
        description: "JavaScript",
        iconComponent: <JavascriptOriginal size="6rem" />,
    },
    { description: "Java", iconComponent: <JavaOriginal size="6rem" /> },
    { description: "HTML", iconComponent: <Html5Original size="6rem" /> },
    { description: "CSS", iconComponent: <Css3Original size="6rem" /> },
    { description: "Sass", iconComponent: <SassOriginal size="6rem" /> },
    { description: "Swift", iconComponent: <SwiftOriginal size="6rem" /> },
    {
        description: "SQL",
        iconComponent: <AzuresqldatabasePlain size="6rem" />,
    },
];

export const technologies = [
    {
        description: "Next.js",
        iconComponent: <Image src={NextjsIcon} height="32" alt="" />,
    },
    { description: "React", iconComponent: <ReactOriginal size="6rem" /> },
    {
        description: "Tailwind",
        iconComponent: <TailwindcssOriginal size="6rem" />,
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
        iconComponent: <NodejsOriginal size="6rem" />,
    },
];

export const tools = [
    {
        description: "Git/GitHub",
        iconComponent: (
            <GithubOriginal
                size="6rem"
                color="white"
                className="icon-currentColor"
            />
        ),
    },
    {
        description: "Turborepo",
        iconComponent: <Image src={TurborepoIcon} height="96" alt="" />,
    },
    {
        description: "Azure DevOps",
        iconComponent: <AzuredevopsOriginal size="6rem" />,
    },
    {
        description: "AWS",
        iconComponent: <AmazonwebservicesPlainWordmark size="6rem" />,
    },
];
