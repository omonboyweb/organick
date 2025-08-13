import { Box, Button, Stack, Typography } from "@mui/material";
import gmailBg from "../assets/gmailBg.png";
import { COLOR } from "../config/colors";
import { CustomInput } from "./customInput";

export const Gmail = () => {
  return (
    <>
      <Stack
        padding={"121px 71px"}
        justifyContent={"center"}
        borderRadius={"30px"}
        mb={"117px"}
        sx={{
          backgroundImage: `url(${gmailBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Stack direction={"row"} alignItems={"center"}>
          <Typography variant="h2" color={COLOR.white} maxWidth={"357px"}>
            Subscribe to our Newsletter
          </Typography>
          <Box
            bgcolor={COLOR.white}
            maxWidth={"320px"}
            borderRadius={"16px"}
            p={"28px 10px 28px 23px "}
            ml={"auto"}
            mr={"6px"}
          >
            <CustomInput
              placeholder="Your Email Address"
              colorPl={COLOR.colorPlc}
              colorText={COLOR.primary}
            />
          </Box>
          <Button variant="primaryBtn">Subscribe</Button>
        </Stack>
      </Stack>
    </>
  );
};
