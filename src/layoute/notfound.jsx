import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import notFound from "../assets/notFound.png";
import { N404 } from "../assets/icons/404";
import { RightArrow } from "../assets/icons/rightArrow";
export const Notfound = () => {
  const [args] = React.useState();

  return (
    <>
      <Box
        p={"214px 0px"}
        sx={{
          backgroundImage: `url(${notFound})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Container maxWidth={"lg"}>
          <Stack alignItems={"end"} textAlign={"center"}>
            {N404()}
            <Typography variant="h1">Page not found</Typography>
            <Typography variant="productName" mb={"40px"}>
              The page you are looking for doesn't exist or has been moved
            </Typography>
            <Button variant="primaryBtn">
              Go to Homepage{" "}
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
          </Stack>
        </Container>
      </Box>
    </>
  );
};
