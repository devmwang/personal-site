import Link from "next/link";

import styles from "@src/styles/index.module.scss";
import * as static_data from "@app/static_data";
import {
    SideLinks,
    AnimatedSubtext,
    SkillsSection,
    ProjectsSection,
} from "@app/interactive";

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
                    <div className="container mx-auto px-28">
                        <h1 className="text-5xl md:text-6xl leading-normal font-semibold text-white align-middle underline decoration-accent underline-offset-4 decoration-[5px]">
                            {"About"}
                        </h1>
                        <p className="text-lg md:text-2xl pt-1 md:pt-8 leading-normal font-normal text-white align-middle">
                            {
                                "I'm currently a student at the University of British Columbia and Sauder School of Business, pursuing a Honours Bachelor of Computer Science and a Master of Management."
                            }
                        </p>
                        <p className="text-lg md:text-2xl pt-1 md:pt-8 leading-normal font-normal text-white align-middle">
                            {"I'm also a Software Engineering Manager at "}
                            <Link
                                href="https://globalspark.world"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Global Spark"
                                className="text-accent hover:underline"
                            >
                                Global Spark
                            </Link>
                            {
                                ", where I lead a team working on our main website and our custom in-house application portal, Polaris, for our big events like Hack the Globe."
                            }
                        </p>
                        <p className="text-lg md:text-2xl pt-1 md:pt-8 leading-normal font-normal text-white align-middle">
                            {
                                "I enjoy learning new technologies and growing my knowledge on modern frameworks. My experience creating programs spans a wide variety of platforms, ranging from interactive web and mobile apps, to native desktop software, to interactive virtual reality experiences, to complex AI and ML systems."
                            }
                        </p>
                    </div>
                </section>

                {/* Technical Skills */}
                <section
                    id="skills"
                    className="pt-40 bg-dark justify-center flex-col text-center"
                >
                    <div className="container mx-auto px-28">
                        <SkillsSection baseDelay={200} inBetweenDelay={50} />
                    </div>
                </section>

                {/* Projects */}
                <section
                    id="projects"
                    className="pt-40 bg-dark justify-center flex-col text-center"
                >
                    <div className="container mx-auto px-28">
                        <ProjectsSection />
                    </div>
                </section>
            </main>
        </>
    );
}
