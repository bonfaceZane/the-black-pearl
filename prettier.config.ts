import { type Config } from "prettier";

const config: Config = {
    trailingComma: "es5",
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    plugins: ["prettier-plugin-tailwindcss"],
    tailwindFunctions: ["tva"],
};

export default config;
