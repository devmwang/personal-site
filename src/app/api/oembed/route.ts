import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    return Response.json({
        title: "oEmbed Test Video",
        type: "photo",
        width: 1920,
        height: 1080,
        url: "https://opencloud-api.devmwang.com/v1/files/get/clog6s2zz02az83a8z0xsn38u.gif",
        provider_name: "OpenCloud",
        provider_url: "https://opencloud.devmwang.com/",
    });
}
