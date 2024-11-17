/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"], // Add components directory
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#0077FF", // Ana Renk
        secondary: "#FFAA00", // İkincil Renk
        background: "#121212", // Arka Plan
        text: "#FFFFFF", // Metin
        shadow: "#1E1E1E", // Gölge
        highlight: "#00FF88", // Vurgu
        error: "#FF4444", // Hata
        selection: "#FF77FF", // Seçim
        card: "#1A1A1A", // Kart Arka Planı
        popup: "#292929", // Popup İçeriği
        scrollbar: "#505050", // Scroll Göstergesi
      },
    },
  },
  plugins: [],
};
