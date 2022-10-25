/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
            "3xl": "1792px",
            "4xl": "2048px",
        },
        extend: {
            colors: {
                white: "#FFFEFD",
                bright: "#C9C5BD",
                accent: "#00C3D8",
                gray: "#545454",
                dark: "#303030",
                background: "#0B0B0C",
            },
            transitionDelay: {
                0: "0ms",
            },
        },
    },
    plugins: [],
};
