import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";

import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import * as analytics from '@src/lib/analytics';

const isProd = process.env.NODE_ENV === "production";

const MyApp: AppType = ({ Component, pageProps }) => {
    const router = useRouter();
    
    const handleRouteChange = (url: URL) => {
        /* Invoke analytics function for production only */
        if (isProd) analytics.pageview(url, document.title);
    };

    useEffect(() => {
        router.events.on("routeChangeComplete", handleRouteChange);
        router.events.on('hashChangeComplete', handleRouteChange)
        
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
            router.events.off('hashChangeComplete', handleRouteChange)
        };
    }, [router.events]);

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${analytics.GOOGLE_ANALYTICS_ID}`}
            />

            <Script
                id="analytics-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${analytics.GOOGLE_ANALYTICS_ID}', {
                    page_path: window.location.pathname,
                    });
                `,
                }}
            />

            <Component {...pageProps} />;
        </>
    );
};

export default MyApp;
