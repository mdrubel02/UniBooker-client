/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
    //custom theme 
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#a991f7",
            secondary: "#f6d860",
            accent: "#FF7533",
            neutral: "#3d4451",
            "base-100": "#ffffff",
            nav: "#43A047"
          },
        },
        "dark",
      ],
    },
}

