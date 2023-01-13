module.exports = {
  content: [
    './src/**/*.njk'
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require("daisyui")],
  daisyui: {themes: ["garden"]}
}
