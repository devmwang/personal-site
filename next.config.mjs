import { env } from "./src/env/server.mjs";

/**
* Don't be scared of the generics here.
* All they do is to give us autocompletion when using this.
*
* @template {import('next').NextConfig} T
* @param {T} config - A generic parameter that flows through to the return type
* @constraint {{import('next').NextConfig}}
*/
function defineNextConfig(config) {
    return config;
}

export default defineNextConfig({
    reactStrictMode: true,
    swcMinify: true,
    headers: async () => {
        return [{
            source: "/(.*)",
            headers: [
                {
                    key: "Content-Security-Policy",
                    value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self'; font-src 'self'; connect-src 'self' www.googletagmanager.com vitals.vercel-insights.com",
                },
                {
                    key: "X-Frame-Options",
                    value: "DENY"
                },
                {
                    key: 'X-Content-Type-Options',
                    value: 'nosniff',
                },
                {
                    key: 'Referrer-Policy',
                    value: 'same-origin',
                },
                {
                    key: "Permissions-Policy",
                    value: "camera=(), microphone=(), geolocation=()"
                }
            ]
        }]
    }
});
