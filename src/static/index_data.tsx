import Image from "next/future/image";

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
    JetbrainsOriginalIcon,
} from "react-devicons";

import FastifyIcon from "@src/public/SkillsIcons/Fastify.svg";
import PrismaIcon from "@src/public/SkillsIcons/Prisma.svg";
import tRPCIcon from "@src/public/SkillsIcons/tRPC.svg";
import ViteIcon from "@src/public/SkillsIcons/Vite.svg";

import VisualStudioIcon from "@src/public/SkillsIcons/VisualStudio.svg";
import TurborepoIcon from "@src/public/SkillsIcons/Turborepo.svg";

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
    { description: "SCSS", iconComponent: <SassOriginalIcon size="6rem" /> },
];

export const technologies = [
    {
        description: "Next.js",
        iconComponent: <NextjsOriginalWordmarkIcon size="6rem" color="white" />,
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
    {
        description: "Vite.js",
        iconComponent: <Image src={ViteIcon} width="96" alt="" />,
    },
];

export const tools = [
    {
        description: "Git/GitHub",
        iconComponent: <GithubOriginalIcon size="6rem" color="white" />,
    },
    {
        description: "VS Code",
        iconComponent: <VscodeOriginalIcon size="6rem" />,
    },
    {
        description: "Visual Studio",
        iconComponent: <Image src={VisualStudioIcon} width="96" alt="" />,
    },
    {
        description: "JetBrains Tools",
        iconComponent: <JetbrainsOriginalIcon size="6rem" />,
    },
    {
        description: "Turborepo",
        iconComponent: <Image src={TurborepoIcon} height="96" alt="" />,
    },
];
