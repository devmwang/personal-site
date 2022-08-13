import { Html, Head, Main, NextScript } from "next/document";

const GOOGLE_ANALYTICS_ID = process.env.GOOGLE_ANALYTICS_ID

const isProd = process.env.NODE_ENV === "production";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Enable analytics for production only */}
                {isProd &&
                    <>
                        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`} />
                    
                        <script dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${GOOGLE_ANALYTICS_ID}', { page_path: window.location.pathname });
                            `,
                            }} />
                    </>
                }
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}