import { ReactElement, FunctionComponent } from "react";
import { CircularTextIcon } from "../icons";
import Link from "next/link";

interface HireMeButtonProps {

}

const HireMeButton: FunctionComponent<HireMeButtonProps> = (): ReactElement => {
    return (
        <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
            <div className="w-48 h-auto flex items-center justify-center relative">
                <CircularTextIcon className="fill-dark animate-spin-slow" />
                <Link
                    className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark"
                    href="mailto:similoluwaafolabi@gmail.com">
                    Hire Me
                </Link>
            </div>
        </div>
    );
}

export default HireMeButton;