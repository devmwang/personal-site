import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    return Response.json({
        provider_name: "OpenCloud",
        provider_url: "https://opencloud.devmwang.com/",
        title: "GIFV Testing",
        type: "photo",
        width: 845,
        height: 555,
        url: "https://opencloud-api.devmwang.com/v1/files/get/clog6s2zz02az83a8z0xsn38u.gif",
    });
}
