import { Box, Container, Stack, Typography, Button } from "@mui/material";
import { PagesHeader } from "../../components/pagesHeader";
import singleShop from "../../assets/singleShop.png";
import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { products } from "../../data/data";
import { products1 } from "../../data/data";
import { COLOR } from "../../config/colors";
import { StarIcon } from "../../assets/icons/star-icon";
import { CustomInput } from "../../components/customInput";
import { RightArrow } from "../../assets/icons/rightArrow";
import { CardRender } from "../../components/cardRedder";
import { fourPro } from "../../data/data";
export const ShopSingle = () => {
  const { id } = useParams();
  const arr = [...products, ...products1];
  const [data, setData] = React.useState([null]);

  useEffect(() => {
    const selectedId = arr.find((item) => item.id == id);
    setData(selectedId);
  }, [id]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Box>
        <PagesHeader imgs={singleShop} />
      </Box>
      <section>
        <Container maxWidth={"lg"}>
          <Stack>
            <Stack gap={"80px"} direction={"row"} alignItems={"center"}>
              <Stack
                width={"50%"}
                borderRadius={"30px"}
                border={`1px solid ${COLOR.secondary}`}
                overflow={"hidden"}
                maxWidth={"600px"}
                maxHeight={"600px"}
              >
                <img src={data.img} alt={data.name} />
              </Stack>
              <Stack width={"50%"}>
                <Typography variant="h3" fontSize={"40px"} fontWeight={600}>
                  {data.name}
                </Typography>
                <Stack direction={"row"} mt={"10px"} mb={"10px"}>
                  {StarIcon()}
                  {StarIcon()}
                  {StarIcon()}
                  {StarIcon()}
                  {StarIcon()}
                </Stack>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  gap={"6px"}
                  mb={"27px"}
                >
                  <Typography
                    fontSize={"15px"}
                    fontWeight={600}
                    color="#b8b8b8"
                    sx={{
                      textDecoration: "line-through",
                    }}
                  >
                    ${data.price}
                  </Typography>
                  <Typography variant="subtitle2">${data.salePrice}</Typography>
                </Stack>
                <Typography variant="subtitle1">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley.
                </Typography>
                <Stack
                  mt={"35px"}
                  direction={"row"}
                  alignItems={"center"}
                  gap={"22px"}
                >
                  <Typography variant="subtitle2">Quantity :</Typography>
                  <Box
                    bgcolor={COLOR.white}
                    border={`2px solid ${COLOR.primary}`}
                    borderRadius={"16px"}
                    p={"25px 25px"}
                    width={"100px"}
                  >
                    <CustomInput
                      colorPl={COLOR.colorPlc}
                      colorText={COLOR.primary}
                      placeholder="1"
                    />
                  </Box>
                  <Button variant="primaryBtn">
                    Add To Cart
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
              </Stack>
            </Stack>
            <Stack pt={"90px"} pb={"140px"}>
              <Stack
                direction={"row"}
                gap={"20px"}
                justifyContent={"center"}
                pb={"27px"}
              >
                <Button variant="primaryBtn"> Product Description</Button>
                <Button
                  variant="primaryBtn"
                  sx={{
                    bgcolor: COLOR.lightPrimary,
                    color: COLOR.primary,
                  }}
                >
                  Additional Info
                </Button>
              </Stack>
              <Typography
                textAlign={"center"}
                variant="subtitle1"
                p={"0 100px"}
              >
                Welcome to the world of natural and organic. Here you can
                discover the bounty of nature. We have grown on the principles
                of health, ecology, and care. We aim to give our customers a
                healthy chemical-free meal for perfect nutrition. It offers
                about 8–10% carbs. Simple sugars — such as glucose and fructose
                — make up 70% and 80% of the carbs in raw.
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </section>
      <section>
        <Container>
          <Stack pb={"140px"}>
            <Typography variant="h2" mb={"40px"} textAlign={"center"}>
              Related Products
            </Typography>
            <CardRender data={fourPro} />
          </Stack>
        </Container>
      </section>
    </>
  );
};
