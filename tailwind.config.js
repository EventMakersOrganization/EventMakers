/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*", "./src/*"],
  theme: {
    extend: {
      colors: {
        melon: "#F7B194", // Secondaire (filtrer, annuler…)
        nonPhotoBlue: "#A9DDE5", // Tertiaire (réinitialiser filtres…)
        byzantium: "#6A2E59", // Primaire (réserver, discussions…)
        rosé: "rgba(247, 177, 148, 0.11)",
        byzantium37: "rgba(106, 46, 78, 0.37)",
        xanthous: "#F9D5A7",
        tertbut: "#8FD4F3", // Badges, accents visuels
        black: "#000000",
        cardbg: "#E8F0F8", // Texte principal
        soft: "#FAFAFA", // Fond clair
      },

      fontFamily: {
        title: ["Poppins", "sans-serif"], // Titres H1/H2
        body: ["Nunito", "sans-serif"], // Texte principal
      },

      fontSize: {
        h1: "36px",
        h2: "29px",
        p: "24px",
        button: "20px",
      },
    },
  },
  plugins: [],
};
