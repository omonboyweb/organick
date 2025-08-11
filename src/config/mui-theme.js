import { createTheme } from "@mui/material";
import { COLOR } from "./colors";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 640,
      lg: 1200,
      xl: 1595,
    },
  },
  typography: {
    h1: {
      fontWeight: 800,
      fontSize: "70px",
      color: COLOR.primary,
    },
    h2: {
      fontWeight: 800,
      fontSize: "50px",
      color: COLOR.primary,
    },
    h3: {
      fontWeight: 800,
      fontSize: "40px",
      color: COLOR.primary,
    },
    h4: {
      fontWeight: 800,
      fontSize: "35px",
      color: COLOR.primary,
    },
    h5: {
      fontWeight: 800,
      fontSize: "30px",
      color: COLOR.primary,
    },
    h6: {
      fontWeight: 800,
      fontSize: "25px",
      color: COLOR.primary,
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "165%",
      color: COLOR.dark,
    },
    subtitle2: {
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "165%",
      textAlign: "center",
      color: COLOR.primary,
    },
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        primary: {
          fontWeight: 700,
          fontSize: "18px",
          lineHeight: "165%",
          color: COLOR.black,
        },
        secondary: {
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "165%",
          color: COLOR.black,
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        color: COLOR.primary,
        "&:hover": {
          COLOR: COLOR.lightBlue,
        },
        backgroundColor: COLOR.primary,
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "16px",
          padding: "28px 39px 28px 39px",
          color: "inherit",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.01)",
          },
          "&:active": {
            transform: "scale(0.99)",
          },
        },
      },
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            fontWeight: 700,
            fontSize: "20px",
            color: COLOR.primary,
            borderBlockColor: COLOR.yellow,
          },
        },
      ],
    },
  },
});
