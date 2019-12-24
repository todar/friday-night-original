import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import styled from "styled-components";
import Fab from "@material-ui/core/Fab";
import QueueMusic from "@material-ui/icons/QueueMusic";
import Navbar from "./Navbar";

const StyledFab = styled(Fab)`
  margin: 0px;
  top: auto;
  right: 20px;
  bottom: 20px;
  left: auto;
  position: fixed;
`;

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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar showback={showback} />
      <div style={{ marginTop: "60px" }}>{children}</div>

      <StyledFab color="secondary" aria-label="edit">
        <QueueMusic />
      </StyledFab>
    </ThemeProvider>
  );
}

export default Layout;
