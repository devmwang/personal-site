import type { NextPage } from "next";
import Head from "next/head";

type TechnologyCardProps = {
    name: string;
    description: string;
    documentation: string;
};

const Home: NextPage = () => (
    <>
        <Head>
            <title>Michael Wang</title>
            <meta name="description" content="Michael Wang's Personal Site" />
            <link rel="icon" href="/favicon.svg" />
        </Head>

        <main className="min-h-screen bg-background flex flex-col font-sans">
            <div className="h-screen justify-center items-center flex flex-col text-center">
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

const TechnologyCard = ({
    name,
    description,
    documentation,
}: TechnologyCardProps) => {
    return (
        <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
            <h2 className="text-lg text-gray-700">{name}</h2>
            <p className="text-sm text-gray-600">{description}</p>
            <a
            className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
            href={documentation}
            target="_blank"
            rel="noreferrer"
            >
                Documentation
            </a>
        </section>
    );
};

export default Home;
