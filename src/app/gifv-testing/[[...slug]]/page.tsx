import React from "react";

export const metadata = {
    metadataBase: new URL("https://devmwang.com"),
    openGraph: {
        title: "GIFV Testing",
        type: "video.other",
        url: "https://opencloud-api.devmwang.com/v1/files/get/clog6s2zz02az83a8z0xsn38u",
        images: [
            {
                url: "https://opencloud-api.devmwang.com/v1/files/get/clog6s2zz02az83a8z0xsn38u",
                secureUrl:
                    "https://opencloud-api.devmwang.com/v1/files/get/clog6s2zz02az83a8z0xsn38u",
                type: "image/gif",
                width: 845,
                height: 555,
            },
        ],
        videos: [
            {
                url: "https://opencloud-api.devmwang.com/v1/files/get/clog6s2zz02az83a8z0xsn38u",
                secureUrl:
                    "https://opencloud-api.devmwang.com/v1/files/get/clog6s2zz02az83a8z0xsn38u",
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
