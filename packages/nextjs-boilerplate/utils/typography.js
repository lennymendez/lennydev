import Typography from "typography";

export const DefaultTypography = new Typography({
  title: "Default Typography",
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif"
  ],
  bodyFontFamily: ["Georgia", "serif"],
  googleFonts: [
    {
      name: "Montserrat",
      styles: ["700"]
    },
    {
      name: "Merriweather",
      styles: ["400", "400i", "700", "700i"]
    },
    {
      name: "Mukta",
      styles: ["200", "400"]
    }
  ]
});
