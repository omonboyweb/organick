import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  Rating,
} from "@mui/material";
import { RightArrow } from "../../assets/icons/rightArrow";
import { COLOR } from "../../config/colors";
import organicFood from "../../assets/icons/organicFood-icon.svg";
import qualityIcon from "../../assets/icons/quality-icon.svg";
import productImg from "../../assets/productImg.png";
import { CustomNavLink } from "../../components/customNavLink";
import { StarIcon } from "../../assets/icons/star-icon";
import bgImg from "../../assets/banner.jpg"

export const Home = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container maxWidth={"lg"}>
          <Stack maxWidth={"530px"} py={"200px"}>
            <Typography variant="subTitle" mt={"10px"}>
              100% Natural Food
            </Typography>
            <Typography variant="h1" mb={"25px"}>
              Choose the best healthier way of life
            </Typography>
            <Button variant="yellowBtn">
              Explore Now
              <Stack
                width={"19px"}
                height={"19px"}
                borderRadius={"100%"}
                bgcolor={COLOR.primary}
                justifyContent={"center"}
                alignItems={"center"}
              >
                {RightArrow()}
              </Stack>
            </Button>
          </Stack>
        </Container>
      </Box>
      <section>
        <Container maxWidth={"lg"}>
          <Stack direction={"row"} gap={"36px"} py={"150px"}>
            <Stack
              width={"682px"}
              borderRadius={"30px"}
              overflow={"hidden"}
              py={"90px"}
              px={"50px"}
              sx={{
                width: "100%",
                backgroundImage: "url(src/assets/img1.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Stack maxWidth={"272px"}>
                <Typography variant="subTitle" color={COLOR.white}>
                  Natural!!
                </Typography>
                <Typography variant="h3" color={COLOR.white}>
                  Get Garden Fresh Fruits
                </Typography>
              </Stack>
            </Stack>
            <Stack
              width={"682px"}
              borderRadius={"30px"}
              overflow={"hidden"}
              py={"90px"}
              px={"50px"}
              sx={{
                width: "100%",
                backgroundImage: "url(src/assets/img2.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Stack maxWidth={"272px"}>
                <Typography variant="subTitle">Natural!!</Typography>
                <Typography variant="h3" color={COLOR.primary}>
                  Get 10% off on Vegetables
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </section>
      {/* about   */}
      <section>
        <Box bgcolor={COLOR.light}>
          <Container maxWidth={"lg"}>
            <Stack direction={"row"} padding={"186px 0 199px 0"}>
              <Stack
                maxWidth={"50%"}
                sx={{
                  width: "100%",
                  backgroundImage: "url(src/assets/img3.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></Stack>
              <Stack maxWidth={"50%"}>
                <Typography variant="subTitle" fontSize={"36px"}>
                  About Us
                </Typography>
                <Typography variant="h2" mb={"14px"}>
                  We Believe in Working Accredited Farmers
                </Typography>
                <Typography variant="subtitle1" mb={"46px"}>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley.
                </Typography>
                <Stack direction={"row"} gap={"19px"} mb={"30px"}>
                  <Stack
                    justifyContent={"center"}
                    alignItems={"center"}
                    bgcolor={COLOR.white}
                    borderRadius={"20px"}
                    width={"101px"}
                    height={"101px"}
                  >
                    {" "}
                    <img src={organicFood} alt="" />
                  </Stack>
                  <Stack direction={"column"}>
                    <Typography variant="h6">Organic Foods Only</Typography>
                    <Typography variant="subtitle1">
                      Simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum
                    </Typography>
                  </Stack>
                </Stack>
                <Stack direction={"row"} gap={"19px"} mb={"45px"}>
                  <Stack
                    justifyContent={"center"}
                    alignItems={"center"}
                    bgcolor={COLOR.white}
                    borderRadius={"20px"}
                    width={"101px"}
                    height={"101px"}
                  >
                    {" "}
                    <img src={qualityIcon} alt="" />
                  </Stack>
                  <Stack direction={"column"}>
                    <Typography variant="h6">Quality Standards</Typography>
                    <Typography variant="subtitle1">
                      Simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum{" "}
                    </Typography>
                  </Stack>
                </Stack>
                <CustomNavLink to={"/about"}>
                  <Button variant="primaryBtn">
                    Shop Now
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
      </section>
      <section>
        <Container maxWidth={"lg"}>
          <Stack
            direction={"column"}
            textAlign={"center"}
            padding={"186px 0 199px 0"}
          >
            <Typography variant="subTitle" mb={"5px"}>
              Categories
            </Typography>
            <Typography variant="h2" mb={"40px"}>
              Our Products
            </Typography>
            <Grid container spacing={2}>
              <Grid
                size={3}
                padding={"30px"}
                bgcolor={COLOR.light}
                position={"relative"}
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
                    Vegetable
                  </Typography>
                  <Stack overflow={"hidden"}>
                    <img
                      src={productImg}
                      alt="products imgs"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Stack>
                  <Typography variant="productName">
                    Fresh Banana Fruites
                  </Typography>
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
                      $20.00
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      fontSize={"18px"}
                      ml={"8px"}
                    >
                      $13.00
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
              <Grid size={3} padding={"30px"} bgcolor={COLOR.light}>
                <Stack>
                  <Stack overflow={"hidden"}>
                    <img
                      src={productImg}
                      alt="products imgs"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Stack>
                  <Typography variant="productName">
                    Fresh Banana Fruites
                  </Typography>
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
                      $20.00
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      fontSize={"18px"}
                      ml={"8px"}
                    >
                      $13.00
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
              <Grid size={3} padding={"30px"} bgcolor={COLOR.light}>
                <Stack>
                  <Stack overflow={"hidden"}>
                    <img
                      src={productImg}
                      alt="products imgs"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Stack>
                  <Typography variant="productName">
                    Fresh Banana Fruites
                  </Typography>
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
                      $20.00
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      fontSize={"18px"}
                      ml={"8px"}
                    >
                      $13.00
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
              <Grid size={3} padding={"30px"} bgcolor={COLOR.light}>
                <Stack>
                  <Stack overflow={"hidden"}>
                    <img
                      src={productImg}
                      alt="products imgs"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Stack>
                  <Typography variant="productName">
                    Fresh Banana Fruites
                  </Typography>
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
                      $20.00
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      fontSize={"18px"}
                      ml={"8px"}
                    >
                      $13.00
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
            </Grid>
          </Stack>
        </Container>
      </section>
    </>
  );
};
