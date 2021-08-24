module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "default-orange": "#ff9361",
        "dark-blue": "#3b64bf", //i nadpisy u vyberu
        "darker-blue": "#132a5c",
        "text-color": "#214ba6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
