import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";

import { useEffect } from "react";
import { useRouter } from "next/router";
import * as analytics from '@src/lib/analytics';
const isProd = process.env.NODE_ENV === "production";

const MyApp: AppType = ({ Component, pageProps }) => {
    const router = useRouter();
    
    useEffect(() => {
        const handleRouteChange = (url: URL) => {
            /* Invoke analytics function for production only */
            if (isProd) analytics.pageview(url, document.title);
        };
        
        router.events.on("routeChangeComplete", handleRouteChange);
        
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);
    
    return <Component {...pageProps} />;
};

export default MyApp;
