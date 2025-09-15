/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        shine: "shine 3s infinite linear",
        glow: "glow 1.5s infinite linear",
        float: "float 3s ease-in-out infinite",
        blob: "blob 6s infinite",
        bounceX: "bounceX 2s infinite",
        shimmer: "shimmer 2s linear infinite",
        pulseFast: "pulse 1s ease-in-out infinite",
        flicker: "flicker 2s infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "-200%" },
          "100%": { backgroundPosition: "200%" },
        },
        glow: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        bounceX: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(25%)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        flicker: {
          "0%, 19.999%, 22%, 62.999%, 64%, 100%": {
            opacity: "1",
            filter: "drop-shadow(0 0 2px #fff)",
          },
          "20%, 21.999%, 63%, 63.999%": {
            opacity: "0.4",
            filter: "none",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
}
