import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    // return Response.json({
    //     title: "oEmbed Test Video",
    //     type: "video",
    //     height: 1080,
    //     width: 1920,
    //     version: 1.0,
    //     html: '<iframe src="https://opencloud-api.devmwang.com/v1/files/get/clog52boi02af83a8azobspza.mp4" width="2560" height="1440" frameborder="0" title="My video" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    // });

    return Response.json({
        title: "oEmbed Test Video",
        type: "photo",
        width: 1920,
        height: 1080,
        url: "https://opencloud-api.devmwang.com/v1/files/get/clog52boi02af83a8azobspza.mp4",
        provider_name: "OpenCloud",
        provider_url: "https://opencloud.devmwang.com/",
    });
}
