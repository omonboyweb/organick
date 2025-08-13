import { createTheme } from "@mui/material";
import { COLOR } from "./colors";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 640,
      lg: 1400,
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
      lineHeight: "25px",
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
        root: {
          color: COLOR.primary,
          "&:hover": {
            COLOR: COLOR.lightBlue,
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "16px",
          padding: "25px 35px 25px 35px",
          color: "inherit",
          display: "inline-flex",
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
            textWrap: "nowrap",
          },
        },
        {
          props: { variant: "yellowBtn" },
          style: {
            width: "fit-content",
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "0",
            color: COLOR.primary,
            borderBlockColor: " #efd372",
            backgroundColor: "#efd372",
          },
        },
        {
          props: { variant: "primaryBtn" },
          style: {
            width: "fit-content",
            fontWeight: 700,
            fontSize: "20px",
            color: COLOR.white,
            borderBlockColor: COLOR.primary,
            backgroundColor: COLOR.primary,
          },
        },
      ],
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: "subTitle" },
          style: {
            fontFamily: ["Yellowtail", "sans-serif"].join(","),
            fontWeight: 400,
            fontSize: "36px",
            color: "#68a47f",
          },
        },
        {
          props: { variant: "productName" },
          style: {
            fontWeight: 600,
            fontSize: "20px",
            color: COLOR.primary,
          },
        },
        {
          props: { variant: "footerText" },
          style: {
            fontWeight: 700,
            fontSize: "30px",
            color: COLOR.primary,
          },
        },
        {
          props: { variant: "footerDec" },
          style: {
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "165%",
            color: COLOR.dark,
          },
        },
      ],
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {},
        label: {
          fontWeight: 600,
          fontSize: "20px",
          color: COLOR.primary,
        },
      },
    },
  },
});
