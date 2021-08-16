import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#d35af4",
      main: "#fa5238", // bg khi chưa hover
      dark: "#fa5238", // bg khi hover vào
      // contrastText: "#0b151c",
    },
    secondary: {
      light: "#dba71a",
      main: "#fff",
      dark: "#826907",
      // contrastText: "#c5c5c5",
    },
  },
  props: {
    MuiCard: {
      // disableRipple: true,
    },
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
  // overrides: {
  //   // Name of the component ⚛️
  //   MuiCssBaseline: {
  //     // Name of the rule
  //     "@global": {
  //       "*, *::before, *::after": {
  //         transition: "none !important",
  //         animation: "none !important",
  //       },
  //     },
  //   },
  // },
});
