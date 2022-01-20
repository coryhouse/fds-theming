import { createTheme, Theme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

type FleetThemeProviderProps = {
  children: React.ReactNode;
  theme?: Theme;
};

export const fleetThemeSettings = {
  palette: {
    primary: {
      main: orange[500],
    },
  },
};

export function FleetThemeProvider({
  children,
  theme = createTheme(fleetThemeSettings),
}: FleetThemeProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
