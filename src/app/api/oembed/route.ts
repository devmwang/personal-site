import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    return Response.json({
        title: "oEmbed Test Video",
        type: "video",
        height: 1440,
        width: 2560,
        version: 1.0,
        html: '<iframe src="https://opencloud-api.devmwang.com/v1/files/get/clmuw5rg401bf83a8u6wi30jb.mp4" width="2560" height="1440" frameborder="0" title="My video" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    });
}
