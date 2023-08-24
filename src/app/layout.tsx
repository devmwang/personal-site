/* eslint-disable @next/next/no-head-element */
import "@styles/globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            {/* <head>
                <link rel="icon" href="/favicon.svg" />

                <meta name="theme-color" content="#00C8C7"></meta>
                <meta
                    property="og:image"
                    content="https://www.devmwang.com/SiteLogo.png"
                />
                <meta property="og:url" content="https://www.devmwang.com/" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@devmwang" />
            </head> */}

            <body>{children}</body>
        </html>
    );
}
