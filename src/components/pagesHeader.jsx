import { Box } from "@mui/material";
export const PagesHeader = ({ imgs }) => {
  return (
    <Box
      height={"405px"}
      mb={"62px"}
      sx={{
        backgroundImage: `url(${imgs})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></Box>
  );
};
