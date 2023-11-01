import React from "react";

export const metadata = {
    metadataBase: new URL("https://devmwang.com"),
    openGraph: {
        title: "GIF Testing",
        type: "image" as any,
        url: "https://opencloud-api.devmwang.com/v1/files/get/clog6s2zz02az83a8z0xsn38u.gif",
        images: [
            {
                url: "https://opencloud-api.devmwang.com/v1/files/get/clog6s2zz02az83a8z0xsn38u.gif",
                secureUrl:
                    "https://opencloud-api.devmwang.com/v1/files/get/clog6s2zz02az83a8z0xsn38u.gif",
                type: "image/gif",
                width: 845,
                height: 555,
            },
        ],
    },
    alternates: {
        types: {
            "application/json+oembed": "/api/oembed-gif",
        },
    },
    robots: {
        index: false,
    },
};

export default function Page() {
    return <div></div>;
}
