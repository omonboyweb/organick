import React from "react";
import { Gmail } from "../components/gmail";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import { COLOR } from "../config/colors";
import { Logo } from "../components/logo";
import { Instagram } from "../assets/icons/instagram";
import { FacebookIcon } from "../assets/icons/facebook-icon";
import { Xicon } from "../assets/icons/x-icon";
import { PintresIcon } from "../assets/icons/pintres-icon";
export const Footer = () => {
  return (
    <Box bgcolor={COLOR.white}>
      <Container maxWidth={"lg"}>
        <Gmail />
        <Stack direction={"row"} justifyContent={"center"} pb={"102px"}>
          {/* contect  */}
          <Stack
            textAlign={"end"}
            borderRight={`1px solid ${COLOR.grey}`}
            pr={"51px"}
          >
            <Typography variant="footerText" mb={"32px"}>
              Contact Us
            </Typography>
            <Typography variant="footerDec">Email</Typography>
            <Typography variant="subtitle1" mb={"20px"}>
              needhelp@Organia.com
            </Typography>
            <Typography variant="footerDec">Phone</Typography>
            <Typography variant="subtitle1" mb={"20px"}>
              +998 88 428 09 37
            </Typography>
            <Typography variant="footerDec">Address</Typography>
            <Typography variant="subtitle1">
              88 road, borklyn street, USA
            </Typography>
          </Stack>
          {/* middle  */}
          <Stack
            textAlign={"center"}
            p={"0px 41px"}
            alignItems={"center"}
            maxWidth={"533px"}
          >
            <Stack justifyContent={"center"}>
              <Logo />
            </Stack>
            <Typography variant="subtitle1" mb={"49px"} mt={"23px"}>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing
            </Typography>
            <Stack direction={"row"} gap={"15px"}>
              <Box
                bgcolor={COLOR.lightBlue}
                borderRadius={"50%"}
                p={"10px"}
                color={COLOR.primary}
              >
                <IconButton color={COLOR.primary}>{Instagram()}</IconButton>
              </Box>
              <Box
                bgcolor={COLOR.lightBlue}
                borderRadius={"50%"}
                p={"10px"}
                color={COLOR.primary}
              >
                <IconButton color={COLOR.primary}>{FacebookIcon()}</IconButton>
              </Box>
              <Box
                bgcolor={COLOR.lightBlue}
                borderRadius={"50%"}
                p={"10px"}
                color={COLOR.primary}
              >
                <IconButton color={COLOR.primary}>{Xicon()}</IconButton>
              </Box>
              <Box
                bgcolor={COLOR.lightBlue}
                borderRadius={"50%"}
                p={"10px"}
                color={COLOR.primary}
              >
                <IconButton color={COLOR.primary}>{PintresIcon()}</IconButton>
              </Box>
            </Stack>
          </Stack>
          {/* Utility Pages */}
          <Stack pl={"51px"} borderLeft={`1px solid ${COLOR.grey}`}>
            <Typography variant="footerText">Utility Pages</Typography>
            <Typography variant="subtitle1" mb={"20px"}>
              Style Guide
            </Typography>
            <Typography variant="subtitle1" mb={"20px"}>
              404 Not Found Password Protected
            </Typography>
            <Typography variant="subtitle1" mb={"20px"}>
              Password Protected
            </Typography>
            <Typography variant="subtitle1" mb={"20px"}>
              Licences
            </Typography>
            <Typography variant="subtitle1" mb={"20px"}>
              Changelog
            </Typography>
          </Stack>
        </Stack>
      </Container>
      <Stack
        textAlign={"center"}
        borderTop={`1px solid ${COLOR.grey}`}
        pt={"17px"}
      >
        <Typography>
          Copyright ©<Typography variant="footerDec"> Organick </Typography>|
          Designed by
          <Typography variant="footerDec"> VictorFlow </Typography>
          Templates - Powered by
          <Typography variant="footerDec"> Webflow </Typography>
        </Typography>
      </Stack>
    </Box>
  );
};
