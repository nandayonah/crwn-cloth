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
    white: "#fff",
    light: "#f5f5f5",
    dark: "#111",
    muted: "#898989",
    warning: "#ffc107",
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: "bold",
    },
  },
  alerts: {
    warning: {
      bg: "warning",
    },
  },
  buttons: {
    primary: {
      bg: "light",
      color: "dark",
      "&:hover": {
        bg: "dark",
        color: "light",
      },
    },
    secondary: {
      bg: "dark",
      color: "light",
      "&:hover": {
        bg: "light",
        color: "dark",
      },
    },
    accent: {
      bg: "primary",
      color: "white",
      "&:hover": {
        bg: "white",
        color: "dark",
      },
    },
    link: {
      bg: "transparent",
      color: "dark",
    },
  },
  styles: {
    ...roboto.styles,
  },
}

console.log("theme", theme)

export default theme
