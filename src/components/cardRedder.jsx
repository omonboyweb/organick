import { StarIcon } from "../assets/icons/star-icon";
import { Grid, Stack, Typography } from "@mui/material";
import { CustomNavLink } from "./customNavLink";
import { COLOR } from "../config/colors";
export const CardRender = ({ data }) => {
  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid
          height={"433px"}
          key={item.id}
          size={3}
          padding={"30px"}
          bgcolor={COLOR.light}
          position={"relative"}
          borderRadius={"30px"}
          border={"1px solid #7EB693"}
        >
          <Stack>
            <Typography
              position={"absolute"}
              top={"20px"}
              left={"20px"}
              fontWeight={600}
              fontSize={"15px"}
              textAlign={"center"}
              color={COLOR.white}
              py={"6px"}
              px={"12px"}
              bgcolor={COLOR.primary}
              width={"fit-content"}
              borderRadius={"8px"}
            >
              {item.type}
            </Typography>
            <Stack overflow={"hidden"}>
              <CustomNavLink to={`/${item.id}`}>
                <img
                  src={item.img}
                  alt="products imgs"
                  style={{
                    width: "100%",
                    height: "314px",
                    objectFit: "cover",
                  }}
                />
              </CustomNavLink>
            </Stack>
            <Typography variant="productName">{item.name}</Typography>
            <Stack
              direction={"row"}
              borderTop={"1px solid #dedddd"}
              pt={"6px"}
              alignItems={"center"}
            >
              <Typography
                fontSize={"15px"}
                fontWeight={600}
                color="#b8b8b8"
                sx={{
                  textDecoration: "line-through",
                }}
              >
                ${item.price}
              </Typography>
              <Typography variant="subtitle2" fontSize={"18px"} ml={"8px"}>
                ${item.salePrice}
              </Typography>

              <Typography ml={"auto"}>
                {StarIcon()}
                {StarIcon()}
                {StarIcon()}
                {StarIcon()}
                {StarIcon()}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};
