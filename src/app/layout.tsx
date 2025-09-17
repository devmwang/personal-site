import "@styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Michael Wang | Personal Site",
    description: "Michael Wang's Personal Site, built on Next.js.",
    openGraph: {
        title: "Michael Wang | Personal Site",
        description: "Michael Wang's Personal Site, built on Next.js.",
        type: "website",
    },
    icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
