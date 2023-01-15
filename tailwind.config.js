module.exports = {
  content: [
    './src/**/*.njk'
  ],
  plugins: [require('@tailwindcss/typography'), require("daisyui")],
  daisyui: {themes: ["garden"]}
}
