import { roboto } from "@theme-ui/presets"

const theme = {
  ...roboto,
  container: {
    p: 2,
    mx: "auto",
    maxWidth: "1100px",
  },
  colors: {
    ...roboto.colors,
    light: "#f5f5f5",
    dark: "#111",
  },
  buttons: {
    primary: {
      bg: "light",
      color: "dark",
      fontWeight: "bolder",
    },
  },
  styles: {
    ...roboto.styles,
  },
}

console.log("theme", theme)

export default theme
