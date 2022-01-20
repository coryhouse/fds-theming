import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Button from "@mui/material/Button";
import { green } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { fleetTheme } from "@carrier/fds-react/FleetTheme";
import FleetThemeProvider from "@carrier/fds-react/FleetThemeProvider";
import AppBar from "@carrier/fds-react/AppBar";
import Toolbar from "@carrier/fds-react/Toolbar";
import Typography from "@carrier/fds-react/Typography";

const customTheme = createTheme({
  ...fleetTheme,
  palette: {
    primary: {
      main: green[500],
    },
  },
});

export default function ThemeNesting() {
  return (
    // Remove the theme prop below and the default Fleet theme will apply.
    <FleetThemeProvider theme={customTheme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">News</Typography>
          <Button color="primary">Login</Button>
        </Toolbar>
      </AppBar>
    </FleetThemeProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeNesting />
  </React.StrictMode>,
  document.getElementById("root")
);
