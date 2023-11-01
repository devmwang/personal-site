import React from "react";

export const metadata = {
    metadataBase: new URL("https://devmwang.com"),
    openGraph: {
        title: "GIFV Testing",
        type: "video.other",
        images: [
            {
                url: "https://opencloud-api.devmwang.com/v1/files/get/clog6s2zz02az83a8z0xsn38u.mp4",
                secureUrl:
                    "https://opencloud-api.devmwang.com/v1/files/get/clog6s2zz02az83a8z0xsn38u.mp4",
                type: "image/gif",
                width: 845,
                height: 555,
            },
        ],
        videos: [
            {
                url: "https://opencloud-api.devmwang.com/v1/files/get/clog52boi02af83a8azobspza.mp4",
                secureUrl:
                    "https://opencloud-api.devmwang.com/v1/files/get/clog52boi02af83a8azobspza.mp4",
                type: "video/mp4",
                width: 845,
                height: 555,
            },
        ],
    },
    // alternates: {
    //     types: {
    //         "application/json+oembed": "/api/oembed",
    //     },
    // },
    robots: {
        index: false,
    },
};

export default function Page() {
    return <div></div>;
}
