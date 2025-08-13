import React from "react";
import { PagesHeader } from "../../components/pagesHeader";
import shopBg from "../../assets/shopBg.png";
import { Box, Container } from "@mui/material";
import { CardRender } from "../../components/cardRedder";
import { products1 } from "../../data/data";
export const Shop = () => {
  return (
    <>
      <section>
        <PagesHeader imgs={shopBg} />
      </section>
      <section>
        <Container maxWidth={"lg"}>
          <Box pb={"140px"}>
            <CardRender data={products1} />
          </Box>
        </Container>
      </section>
    </>
  );
};
