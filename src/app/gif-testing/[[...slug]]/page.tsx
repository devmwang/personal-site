import React from "react";
import Image from "next/image";

export const metadata = {
    metadataBase: new URL("https://devmwang.com"),
    openGraph: {
        // title: "GIF Testing",
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
    // alternates: {
    //     types: {
    //         "application/json+oembed": "/api/oembed-gif",
    //     },
    // },
};

export default function Page() {
    return (
        <div>
            <meta property="og:type" content="image"></meta>

            <Image
                src="https://opencloud-api.devmwang.com/v1/files/get/clog6s2zz02az83a8z0xsn38u.gif"
                width={845}
                height={555}
                alt={""}
            />
        </div>
    );
}
