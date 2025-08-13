import { Button, Stack, Typography, Box } from "@mui/material";
import { COLOR } from "../config/colors";
import { RightArrow } from "../assets/icons/rightArrow";
import { UserIconCard } from "../assets/icons/userIconCard";

export const CardData = ({
  date,
  cardImg,
  cardBtn,
  cardColor,
  cardDec,
  cardName,
  cardVariant,
  cardTitle,
}) => {
  return (
    <Stack
      borderRadius={"30px"}
      bgcolor={COLOR.primary}
      maxWidth={"677px"}
      minHeight={"500px"}
      px={"32px"}
      py={"42px"}
      sx={{
        backgroundImage: `url(${cardImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography
        variant="h6"
        width={"86px"}
        height={"86px"}
        borderRadius={"100%"}
        bgcolor={COLOR.white}
        textAlign={"center"}
        justifyContent={"center"}
        lineHeight={"25px"}
        p={"10px"}
      >
        {date}
      </Typography>
      <Stack
        mt={"132px"}
        bgcolor={COLOR.white}
        p={"40px 50px"}
        borderRadius={"34px"}
        mb={"-100px"}
        minHeight={"332px"}
        height={"100%"}
        boxShadow={"0 20px 35px 0 rgba(167, 167, 167, 0.25)"}
      >
        <Stack direction={"row"} gap={"8px"} mb={"15px"}>
          <Box color={cardColor}> {UserIconCard()} </Box>
          <Typography variant="subtitle1">{cardName}</Typography>
        </Stack>
        <Typography variant="h6">{cardTitle}</Typography>
        <Typography variant="subtitle1" mb={"15px"}>
          {cardDec}
        </Typography>
        <Button
          variant={cardVariant}
          sx={{
            marginTop: "auto",
          }}
        >
          {cardBtn}
          <Stack
            ml={"10px"}
            width={"19px"}
            height={"19px"}
            overflow={"hidden"}
            borderRadius={"100%"}
            bgcolor={COLOR.primary}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {RightArrow()}
          </Stack>
        </Button>
      </Stack>
    </Stack>
  );
};
