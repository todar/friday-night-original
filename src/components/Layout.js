import React from "react";
import Fade from "@material-ui/core/Fade";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

// import QueueMusic from "@material-ui/icons/QueueMusic";
import Navbar from "./Navbar";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1e1f20",
      light: "#4b4b4c",
      dark: "#151516"
    },
    secondary: {
      main: "#ffd600",
      light: "#ffde33",
      dark: "#b29500"
    }
  }
});

function Layout({ children, showback = false }) {
  const [filter, setFilter] = React.useState("");

  console.log("Layout is rendered");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div id="back-to-top-anchor" />
      <Navbar showback={showback} filter={filter} setFilter={setFilter} />
      <Fade in={true}>
        <div style={{ marginTop: "60px" }}>{children}</div>
      </Fade>
    </ThemeProvider>
  );
}

export default Layout;
