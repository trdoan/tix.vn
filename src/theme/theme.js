import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#d35af4",
      main: "#fff", // bg khi chưa hover
      dark: "#fa5238", // bg khi hover vào
      contrastText: "#0b151c",
    },
    secondary: {
      light: "#dba71a",
      main: "#bc9b14",
      dark: "#826907",
      contrastText: "#c5c5c5",
    },
  },
});
