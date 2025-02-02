import Image from "next/image";
import Layout from "./components/Layout";
import profilePic from "@/public/images/profile/developer-pic-1.png";
import AnimatedText from "./components/animations/AnimatedText";
import Link from "next/link";
import { ExternalLinkIcon } from "./components/icons";
import HireMeButton from "./components/elements/HireMeButton";
import lightBulb from "@/public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
    return (
        <main className="bg-white flex items-center text-dark w-full min-h-screen">
            <Layout className="pt-0">
                <div className="flex items-center justify-between w-full">
                    <div className="w-1/2">
                        <Image src={profilePic} alt="Simlex" className="w-full h-auto" />
                    </div>
                    <div className="w-1/2 flex flex-col items-center self-center">
                        <AnimatedText
                            text="Turning Vision Into Reality With Code And Design."
                            className="!text-5xl !text-left"
                        />
                        <p className="my-4 text-base font-medium">
                            As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                            Explore my latest projects and articles, showcasing my expertise in React.js and web development.
                        </p>
                        <div className="flex items-center self-start mt-2">
                            <Link
                                className="flex items-center bg-dark text-light p-2 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                                href="/dummy.pdf"
                                download={true}
                                target="_blank">
                                Resume <ExternalLinkIcon className="w-6 ml-1" />
                            </Link>
                            <Link
                                className="ml-4 text-dark text-lg font-medium capitalize underline"
                                href="/mailto:similoluwaafolabi@gmail.com">
                                Contact me
                            </Link>
                        </div>
                    </div>
                </div>
            </Layout>

            <HireMeButton />

            <div className="absolute right-8 bottom-8 inline-block w-24">
                <Image src={lightBulb} alt="Simlex" className="w-full h-auto" />
            </div>
        </main>
    );
}
