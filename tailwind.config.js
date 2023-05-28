/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "2440px"
      }
    },
    container: {
      center: true,
      padding: "20px"
    }
  },
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/line-clamp")
  ]
};
