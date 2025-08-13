import { Stack, Box, Typography, Button, Container } from "@mui/material";
import { CustomNavLink } from "../../../components/customNavLink";
import { COLOR } from "../../../config/colors";
import { RightArrow } from "../../../assets/icons/rightArrow";
export const AboutCard = ({
  bgcolor,
  bgImg,
  aboutCardTitle,
  aboutCardDec,
  aboutTextTitle,
  btnText,
  aboutTextTitle2,
  aboutSubTitle,
  aboutSubTitle2,
  rowS,
  gapS,
  icon1,
  icon2,
  bgcolors,
}) => {
  return (
    <Box bgcolor={bgcolor}>
      <Container maxWidth={"lg"}>
        <Stack direction={"row"} padding={"186px 0 199px 0"}>
          <Stack
            mr={"30px"}
            maxWidth={"49%"}
            sx={{
              width: "100%",
              backgroundImage: `url(${bgImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></Stack>
          <Stack maxWidth={"49%"}>
            <Typography variant="subTitle" fontSize={"36px"}>
              About Us
            </Typography>
            <Typography variant="h2" mb={"14px"}>
              {aboutCardTitle}
            </Typography>
            <Typography variant="subtitle1" mb={"46px"}>
              {aboutCardDec}
            </Typography>
            <Stack direction={`${rowS}`} gap={`${gapS}`}>
              <Stack direction={"row"} gap={"19px"} mb={"30px"}>
                <Stack
                  justifyContent={"center"}
                  alignItems={"center"}
                  bgcolor={bgcolor}
                  borderRadius={"20px"}
                  width={"101px"}
                  height={"101px"}
                >
                  <img src={icon2} alt="" />
                </Stack>
                <Stack direction={"column"}>
                  <Typography variant="h6">{aboutTextTitle}</Typography>
                  <Typography variant="subtitle1">{aboutSubTitle}</Typography>
                </Stack>
              </Stack>
              <Stack direction={"row"} gap={"19px"} mb={"45px"}>
                <Stack
                  bgcolor={bgcolors}
                  justifyContent={"center"}
                  alignItems={"center"}
                  borderRadius={"20px"}
                  width={"101px"}
                  height={"101px"}
                >
                  <img src={icon1} alt="" />
                </Stack>
                <Stack direction={"column"}>
                  <Typography variant="h6">{aboutTextTitle2}</Typography>
                  <Typography variant="subtitle1">{aboutSubTitle2}</Typography>
                </Stack>
              </Stack>
            </Stack>
            <CustomNavLink to={"/about"}>
              <Button variant="primaryBtn">
                {btnText}
                <Stack
                  width={"19px"}
                  height={"19px"}
                  borderRadius={"100%"}
                  bgcolor="#335b6b"
                  justifyContent={"center"}
                  alignItems={"center"}
                  ml={"10px"}
                >
                  {RightArrow()}
                </Stack>
              </Button>
            </CustomNavLink>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
