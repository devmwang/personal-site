import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    return Response.json({
        title: "oEmbed Test Video",
        type: "photo",
        width: 1920,
        height: 1080,
        url: "https://opencloud-api.devmwang.com/v1/files/get/clog6s4sz02b083a8kx5q1e3t",
        provider_name: "OpenCloud",
        provider_url: "https://opencloud.devmwang.com/",
    });
}
