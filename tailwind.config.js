module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#000033" ,
          secondary: "#330033",
          accent: "#000066",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "winter"
    ],
  },
  plugins: [require("daisyui")],
}