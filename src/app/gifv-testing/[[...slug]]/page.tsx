import React from "react";

export const metadata = {
    metadataBase: new URL("https://devmwang.com"),
    openGraph: {
        videos: [
            "https://opencloud-api.devmwang.com/v1/files/get/clog52boi02af83a8azobspza.mp4",
        ],
    },
    alternates: {
        types: {
            "application/json+oembed": "/api/oembed",
        },
    },
    robots: {
        index: false,
    },
};

export default function Page() {
    return <div></div>;
}
