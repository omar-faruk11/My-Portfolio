module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui:{
    themes: [{
        light: {
          "primary": "#4CA5FF",
          "secondary": "#B374F8",
          "accent": "#37CDBE",
          "neutral": "#3D4451",
          "base-100": "#F5F9FF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
      {
        dark: {
          "primary": "#54A1FE",
          "secondary": "#B475F8",
          "accent": "#4B5563",
          "neutral": "#0D1117",
          "base-100": "#1F2937",
          "info": "#98A8DD",
          "success": "#1BBB70",
          "warning": "#F59E0B",
          "error": "#FB7185",
        },
      },
    ],
  },
  plugins: [require("daisyui")],

}