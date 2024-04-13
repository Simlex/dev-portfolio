import { FunctionComponent, ReactElement, ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
    className?: string;
}

const Layout: FunctionComponent<LayoutProps> = ({ children, className }): ReactElement => {
    return (
        <div className={`font-mont w-full h-full inline-block z-0 bg-light p-32 ${className}`}>
            {children}
        </div>
    );
}

export default Layout;