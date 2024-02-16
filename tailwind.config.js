/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        headerbg: "url(/src/assets/images/webp/headerbg.webp)",
        buttonbg: "url(/src/assets//images/webp/button.webp)",
        section1bg: "url(/src/assets/images/webp/section1bg.webp)",
        section2bg: "url(/src/assets/images/webp/section2bg.webp)",
        section4bg: "url(/src/assets/images/webp/section4bg.webp)",
        footerbg: "url(/src/assets/images/webp/footerbg.webp)",
      },
      keyframes: {
        cycleright: {
          "0%": { left: "50%", rotate: "y 0deg" },
          "50%": {
            left: "80%",
            rotate: "y 0deg",
          },
          "60%": { left: "80%", rotate: "y 180deg" },

          "100%": { left: "50%", rotate: "y 180deg" },
        },
        cycleright2: {
          "0%": { left: "0", rotate: "y 0deg" },
          "50%": {
            left: "80%",
            rotate: "y 0deg",
          },
          "60%": { left: "80%", rotate: "y 180deg" },

          "100%": { left: "0", rotate: "y 180deg" },
        },
        cycleright3: {
          "0%": { left: "0", rotate: "y 0deg" },
          "50%": {
            left: "65%",
            rotate: "y 0deg",
          },
          "60%": { left: "65%", rotate: "y 180deg" },

          "100%": { left: "0", rotate: "y 180deg" },
        },
        cycleleft: {
          "0%": { left: "77%", rotate: "y 0deg" },
          "30%": {
            left: "0%",
            rotate: "y 0deg",
          },
          "40%": { left: "0%", rotate: "y 180deg" },
          "45%": { left: "0%", rotate: "y 180deg" },
          "90%": { left: "80%", rotate: "y 180deg" },
          "95%": { left: "80%", rotate: "y 0deg" },
          "100%": { left: "77%", rotate: "y 0deg" },
        },
        cycleleft2: {
          "0%": { left: "50%", rotate: "y 0deg" },
          "30%": {
            left: "0%",
            rotate: "y 0deg",
          },
          "40%": { left: "0%", rotate: "y 180deg" },
          "45%": { left: "0%", rotate: "y 180deg" },
          "80%": { left: "80%", rotate: "y 180deg" },
          "85%": { left: "80%", rotate: "y 0deg" },
          "100%": { left: "50%", rotate: "y 0deg" },
        },
        jump: {
          "0%,100%": { translate: "0 -10px" },
          "50%": { translate: "none" },
        },
        cycleleft3: {
          "0%": { left: "80%", rotate: "y 0deg" },
          "45%": {
            left: "0%",
            rotate: "y 0deg",
          },
          "50%": { left: "0%", rotate: "y 180deg" },
          "55%": { left: "0%", rotate: "y 180deg" },
          "95%": { left: "80%", rotate: "y 180deg" },
          "100%": { left: "80%", rotate: "y 0deg" },
        },
        cycleleft4: {
          "0%": { left: "70%", rotate: "y 0deg" },
          "45%": {
            left: "0%",
            rotate: "y 0deg",
          },
          "50%": { left: "0%", rotate: "y 180deg" },
          "55%": { left: "0%", rotate: "y 180deg" },
          "95%": { left: "70%", rotate: "y 180deg" },
          "100%": { left: "70%", rotate: "y 0deg" },
        },
      },
      animation: {
        cycleright: "cycleright 8s linear infinite",
        cycleright2: "cycleright2 15s linear infinite",
        cycleright3: "cycleright3 8s linear infinite",
        cycleleft: "cycleleft 15s linear infinite",
        cycleleft2: "cycleleft2 15s linear infinite",
        cycleleft3: "cycleleft3 15s linear infinite",
        cycleleft4: "cycleleft4 8s linear infinite",
        jump: "jump 2s linear infinite",
      },
    },
    fontFamily: {
      chewy: ["Chewy"],
      balsamiq: ["Balsamiq Sans"],
    },
  },
  plugins: [],
};
