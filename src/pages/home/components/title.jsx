import { Stack, Typography, Button } from "@mui/material";
import { RightArrow } from "../../../assets/icons/rightArrow";
import { COLOR } from "../../../config/colors";
export const Title = ({ title, titleDec, variants, btnText, withs }) => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Stack>
        <Typography variant="subTitle">{title}</Typography>
        <Typography variant="h2" maxWidth={withs}>
          {titleDec}
        </Typography>
      </Stack>
      <Button variant={variants}>
        {btnText}
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
  );
};
