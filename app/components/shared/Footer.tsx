import { ReactElement, FunctionComponent } from "react";
import Layout from "../Layout";
import Link from "next/link";

interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = (): ReactElement => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
            <Layout className="py-8 flex items-center justify-between">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
                <div className="flex items-center">
                    Built with <span className="text-primary text-2xl px-1">&hearts;</span>
                    by&nbsp;
                    <Link
                        href="/"
                        target="_blank"
                        className="underline underline-offset-2">
                        Simlex
                    </Link>
                </div>
                <Link
                    href="/"
                    target="_blank"
                    className="underline underline-offset-2">
                    Say Hello
                </Link>
            </Layout>
        </footer>
    );
}

export default Footer;