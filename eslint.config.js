// ESLint 9 flat config for Next.js, TypeScript, and Prettier
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
    baseDirectory: import.meta.dirname,
});

// Convert compat output to only apply to src files
const nextAndPrettierForSrc = compat
    .config({ extends: ["next/core-web-vitals", "prettier"] })
    .map((cfg) => ({
        ...cfg,
        files: ["src/**/*.{js,jsx,ts,tsx}"],
    }));

export default [
    // Ignore generated and external files
    {
        ignores: [
            "**/.next/**",
            "node_modules/**",
            "dist/**",
            "out/**",
            "**/*.d.ts",
        ],
    },
    ...nextAndPrettierForSrc,
    // TypeScript-specific tweaks
    {
        files: ["src/**/*.{ts,tsx}"],
        rules: {
            // Handled by TypeScript; avoid false positives in TS types
            "no-undef": "off",
        },
    },
];
