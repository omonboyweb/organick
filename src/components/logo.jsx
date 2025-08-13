import { Stack, Typography } from "@mui/material";
import logo from "../assets/icons/logo.svg";
import { COLOR } from "../config/colors";

export const Logo = () => {
  return (
    <Stack direction={"row"} gap={"8px"} alignItems={"center"}>
      <img src={logo} alt="Logo" />
      <Typography fontSize={"38px"} fontWeight={"700"} color={COLOR.primary}>
        Organick
      </Typography>
    </Stack>
  );
};
