import React from "react";
import { Grid, Typography } from "@mui/material";
import { COLOR } from "../../../config/colors";
export const CardComp = ({ data }) => {
  return (
    <Grid
      container
      spacing={2}
      mt={"60px"}
      mb={"60px"}
      direction={"row"}
      flexWrap={"nowrap"}
    >
      {data.map((item) => (
        <Grid
          key={item.name}
          width={"550px"}
          height={"550px"}
          size={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            backgroundImage: `url(${item.img})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Typography
            borderRadius={"20px"}
            display={"inline-flex"}
            fontWeight={"500"}
            fontSize={"25px"}
            color={COLOR.primary}
            padding={"34px 83px"}
            bgcolor={COLOR.white}
          >
            {item.name}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};
