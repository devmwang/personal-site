import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    return Response.json({
        title: "oEmbed Test",
        type: "photo",
        height: 1440,
        width: 2560,
        version: 1.0,
    });
}
