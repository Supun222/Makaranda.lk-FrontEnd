module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DC8C73",
        secondary: "#FCF1E5",
        tertary: "#FFE3C5",
        quatery: "#F0F2F5",
        primaryText: "#4C4C4C",
        secondaryText: "#828282",
      },
      fontFamily: {
        Montserrat: "asdasd",
        Lato: "Lato",
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require("tw-elements/dist/plugin"), require("flowbite/plugin")],
};
