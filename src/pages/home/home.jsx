import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  Avatar,
} from "@mui/material";
import { RightArrow } from "../../assets/icons/rightArrow";
import { COLOR } from "../../config/colors";
import organicFood from "../../assets/icons/organicFood-icon.svg";
import qualityIcon from "../../assets/icons/quality-icon.svg";
import { StarIcon } from "../../assets/icons/star-icon";
import bgImg from "../../assets/banner.jpg";
import img2 from "../../assets/img2.png";
import img1 from "../../assets/img1.png";
import img3 from "../../assets/img3.png";
import bannerLeft from "../../assets/leftBanner.png";
import bannerRight from "../../assets/rightBaner.png";
import userImg from "../../assets/userImg.jpg";
import ecoFriendli from "../../assets/ecoFriendli.jpg";
import { CardComp } from "./components/cardComp";
import { Title } from "./components/title";
import { CardData } from "../../components/cardData";
import { fourPro, organic, products } from "../../data/data";
import img001 from "../../assets/img001.png";
import { AboutCard } from "./components/aboutCard";
import { CardRender } from "../../components/cardRedder";
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
                backgroundImage: `url(${img1})`,
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
                backgroundImage: `url(${img2})`,
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
        <AboutCard
          bgColor={COLOR.light}
          bgImg={img3}
          aboutCardTitle={"We Believe in Working Accredited Farmers"}
          aboutCardDec={
            "Simply dummy text of the printing and typesetting industry. Lorem had ceased to  been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
          }
          aboutTextTitle={"Organic Foods Only"}
          btnText={"Shop now"}
          aboutTextTitle2={"Quality Standards"}
          aboutSubTitle={
            "Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
          }
          aboutSubTitle2={
            "Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
          }
          icon1={organicFood}
          icon2={qualityIcon}
          rowS={"column"}
        />
      </section>
      {/* Categories */}
      <section>
        <Container maxWidth={"lg"}>
          <Stack
            direction={"column"}
            textAlign={"center"}
            justifyContent={"center"}
            padding={"186px 0 50px 0"}
          >
            <Typography variant="subTitle" mb={"5px"}>
              Categories
            </Typography>
            <Typography variant="h2" mb={"40px"}>
              Our Products
            </Typography>
            <CardRender data={products} />
            <Button
              variant="primaryBtn"
              sx={{
                display: "flex",
                m: "120px auto",
              }}
            >
              Load More
              <Stack
                width={"19px"}
                height={"19px"}
                borderRadius={"100%"}
                bgcolor={"#335b6b"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                {RightArrow()}
              </Stack>
            </Button>
          </Stack>
        </Container>
      </section>
      {/* Testimonial */}
      <section>
        <Stack
          width={"100%"}
          sx={{
            backgroundImage: `url(${bannerLeft}), url(${bannerRight})`,
            backgroundPosition: "left center,right center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Container maxWidth={"lg"}>
            <Stack
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              pt={"150px"}
              pb={"150px"}
            >
              <Typography variant="subTitle" mb={"8px"}>
                Testimonial
              </Typography>
              <Typography variant="h2" mb={"51px"}>
                What Our Customer Saying?
              </Typography>
              <Avatar
                alt="Remy Sharp"
                src={userImg}
                sx={{ width: 115, height: 115 }}
              />
              <Typography mt={"20px"}>
                {StarIcon()}
                {StarIcon()}
                {StarIcon()}
                {StarIcon()}
                {StarIcon()}
              </Typography>
              <Typography
                variant="subtitle1"
                maxWidth={"780px"}
                textAlign={"center"}
              >
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </Typography>
              <Typography variant="productName" mt={"20px"}>
                Sara Taylor
              </Typography>
              <Typography
                textAlign={"center"}
                width={"780px"}
                fontSize={"15px"}
                fontWeight={"400"}
                color={COLOR.dark}
                pb={"102px"}
                borderBottom={`1px solid ${COLOR.dark}`}
              >
                Consumer
              </Typography>
              <Stack direction={"row"} gap={"30px"} pt={"90px"}>
                <Box
                  width={"211px"}
                  height={"211px"}
                  border={"4px solid #7eb693"}
                  borderRadius={"50%"}
                  padding={"8px"}
                  overflow={"hidden"}
                >
                  <Stack
                    bgcolor={"#f1f1f1"}
                    width={"100%"}
                    height={"100%"}
                    borderRadius={"50%"}
                    textAlign={"center"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Typography variant="h2">100%</Typography>
                    <Typography variant="productName">Organic</Typography>
                  </Stack>
                </Box>
                <Box
                  width={"211px"}
                  height={"211px"}
                  border={"4px solid #7eb693"}
                  borderRadius={"50%"}
                  padding={"8px"}
                  overflow={"hidden"}
                >
                  <Stack
                    bgcolor={"#f1f1f1"}
                    width={"100%"}
                    height={"100%"}
                    borderRadius={"50%"}
                    textAlign={"center"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Typography variant="h2">285</Typography>
                    <Typography variant="productName">
                      Active Product
                    </Typography>
                  </Stack>
                </Box>
                <Box
                  width={"211px"}
                  height={"211px"}
                  border={"4px solid #7eb693"}
                  borderRadius={"50%"}
                  padding={"8px"}
                  overflow={"hidden"}
                >
                  <Stack
                    bgcolor={"#f1f1f1"}
                    width={"100%"}
                    height={"100%"}
                    borderRadius={"50%"}
                    textAlign={"center"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Typography variant="h2">350+</Typography>
                    <Typography variant="productName">
                      Organic Orchads
                    </Typography>
                  </Stack>
                </Box>
                <Box
                  width={"211px"}
                  height={"211px"}
                  border={"4px solid #7eb693"}
                  borderRadius={"50%"}
                  padding={"8px"}
                  overflow={"hidden"}
                >
                  <Stack
                    bgcolor={"#f1f1f1"}
                    width={"100%"}
                    height={"100%"}
                    borderRadius={"50%"}
                    textAlign={"center"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Typography variant="h2">25+</Typography>
                    <Typography variant="productName">
                      Years of Farming
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </Stack>
          </Container>
        </Stack>
      </section>
      {/* Offer */}
      <section>
        <Stack bgcolor={COLOR.primary} pt={"200px"} pb={"200px"}>
          <Container>
            <Stack>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                mb={"50px"}
              >
                <Stack>
                  <Typography variant="subTitle">Offer</Typography>
                  <Typography variant="h2" color={COLOR.white}>
                    We Offer Organic For You
                  </Typography>
                </Stack>
                <Button variant="yellowBtn">
                  View All Product
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
              <CardRender data={fourPro} />
            </Stack>
          </Container>
        </Stack>
      </section>
      {/* Eco Friendly */}
      <section>
        <Box
          sx={{
            backgroundImage: `url(${ecoFriendli})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
            backgroundSize: "50% 100%",
          }}
        >
          <Container maxWidth={"lg"}>
            <Stack
              pt={"178px"}
              pb={"185px"}
              marginLeft={"600px"}
              bgcolor={COLOR.white}
              position={"relative"}
            >
              <Typography variant="subTitle" zIndex={"1"}>
                Eco Friendly
              </Typography>
              <Typography variant="h2" zIndex={"1"}>
                Econis is a Friendly Organic Store
              </Typography>
              <Stack mt={"35px"}>
                <Typography
                  fontSize={"25px"}
                  fontWeight={"500"}
                  color={COLOR.primary}
                  zIndex={"1"}
                >
                  Start with Our Company First
                </Typography>
                <Typography variant="subtitle1" zIndex={"1"}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremque laudantium. Sed ut perspiciatis.
                </Typography>
              </Stack>
              <Stack mt={"35px"}>
                <Typography
                  fontSize={"25px"}
                  fontWeight={"500"}
                  color={COLOR.primary}
                  zIndex={"1"}
                >
                  Farming Strategies of Today
                </Typography>
                <Typography variant="subtitle1" zIndex={"1"}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremque laudantium. Sed ut perspiciatis.
                </Typography>
              </Stack>
              <Box
                bgcolor={COLOR.white}
                borderRadius={"30px"}
                position={"absolute"}
                width={"150px"}
                height={"600px"}
                top={"100px"}
                left={"-80px"}
              ></Box>
            </Stack>
          </Container>
        </Box>
      </section>
      {/* Organic */}
      <section>
        <Box pt={"100px"} pb={"100px"} bgcolor={COLOR.bgColor}>
          <Container maxWidth={"xl"} padding={"0"}>
            <CardComp data={organic} />
          </Container>
        </Box>
      </section>
      {/* News */}
      <section>
        <Box pt={"150px"} pb={"150px"}>
          <Container>
            <Stack>
              <Title
                title={"News"}
                titleDec={"Discover weekly content about organic food, & more"}
                variants={"outlined"}
                btnText={"More News"}
                withs={"703px"}
              />
              <Stack direction={"row"} pt={"31px"} gap={"46px"}>
                <CardData
                  date={"25 Nov"}
                  cardImg={img001}
                  cardBtn={"Read More"}
                  cardName={"By Rachi Card"}
                  cardTitle={"The Benefits of Vitamin D & How to Get It"}
                  cardDec={
                    "Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
                  }
                  cardVariant={"yellowBtn"}
                  cardColor={COLOR.iconUser}
                />

                <CardData
                  date={"25 Nov"}
                  cardImg={img001}
                  cardBtn={"Read More"}
                  cardName={"By Rachi Card"}
                  cardTitle={"Our Favourite Summertime Tommeto"}
                  cardDec={
                    "Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
                  }
                  cardVariant={"yellowBtn"}
                  cardColor={COLOR.iconUser}
                />
              </Stack>
            </Stack>
          </Container>
        </Box>
      </section>
    </>
  );
};
