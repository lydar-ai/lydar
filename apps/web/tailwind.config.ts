import type { Config } from "tailwindcss";
import baseConfig from "@repo/ui/tailwind.config";

const config: Config = {
    content: [
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "../../packages/ui/components/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    presets: [baseConfig]
};
export default config;
