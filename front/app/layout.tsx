import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: "ProCode: Code like a pro",
    description:
        "Want to learn how to code like a professional? Check out our websites",
};

const RootLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    );
};

export default RootLayout;
