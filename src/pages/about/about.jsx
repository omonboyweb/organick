import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  Radio,
  Stack,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import aboutBg from "../../assets/baoutBg.png";
import { AboutCard } from "../home/components/aboutCard";
import { COLOR } from "../../config/colors";
import baoutBg from "../../assets/aboutBg.png";
import modernCars from "../../assets/Tractor.png";
import climetn from "../../assets/climent.png";
import about01 from "../../assets/about01.jpg";
import { aboutChoose, aboutUs } from "../../data/data";
import teamUser from "../../assets/teamUser.jpg";

import teamUser2 from "../../assets/teamUser2.jpg";

import teamUser3 from "../../assets/teamUser3.jpg";
import { FacebookIcon } from "../../assets/icons/facebook-icon";
import { Instagram } from "../../assets/icons/instagram";
import { Xicon } from "../../assets/icons/x-icon";
import { PagesHeader } from "../../components/pagesHeader";
export const About = () => {
  return (
    <>
      <PagesHeader imgs={aboutBg} />

      <section>
        <Box>
          <Container>
            <Stack>
              <AboutCard
                bgcolor={COLOR.white}
                bgImg={baoutBg}
                aboutCardTitle={"We do Creative Things for Success"}
                aboutCardDec={
                  "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
                }
                aboutTextTitle={"Modern Agriculture Equipment"}
                btnText={"Shop now"}
                aboutTextTitle2={"No growth hormones are used"}
                aboutSubTitle={""}
                aboutSubTitle2={""}
                icon1={modernCars}
                icon2={climetn}
                rowS={"row"}
                gapS={"65px"}
                bgcolors={"transparent"}
              />
            </Stack>
          </Container>
        </Box>
      </section>
      <section>
        <Box bgcolor={COLOR.light} padding={"180px 0px 170px"}>
          <Container maxWidth={"lg"}>
            <Stack>
              <Stack direction={"row"}>
                <Stack width={"50%"}>
                  <Typography variant="subTitle">Why Choose us?</Typography>
                  <Typography variant="h2" mb={"25px"}>
                    We do not buy from the open market & traders.
                  </Typography>
                  <Typography mb={"32px"} variant="subtitle1">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem had ceased to been the industry's standard the 1500s,
                    when an unknown
                  </Typography>
                  <FormControl>
                    <Box
                      bgcolor={"#ececec"}
                      padding={"17px 29px"}
                      borderRadius={"49px"}
                      maxWidth={"334px"}
                    >
                      <FormControlLabel
                        value={"natural"}
                        control={<Radio />}
                        label="100% Natural Product"
                      />
                    </Box>
                    <Typography m={"12px 0px 24px 60px"} maxWidth={"400px"}>
                      Simply dummy text of the printing and typesetting industry
                      Lorem Ipsum
                    </Typography>
                    <Box
                      bgcolor={"#ececec"}
                      padding={"17px 29px"}
                      borderRadius={"49px"}
                      maxWidth={"334px"}
                    >
                      <FormControlLabel
                        value={"natural"}
                        control={<Radio />}
                        label=" Increases resistance"
                      />
                    </Box>
                    <Typography m={"12px 0px 24px 60px"} maxWidth={"400px"}>
                      Filling, and temptingly healthy, our Biona Organic Granola
                      with Wild Berries is just the thing
                    </Typography>
                  </FormControl>
                </Stack>
                <Stack
                  width={"50%"}
                  borderRadius={"30px"}
                  sx={{
                    backgroundImage: `url(${about01})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></Stack>
              </Stack>
              <Stack
                direction={"row"}
                gap={"30px"}
                justifyContent={"center"}
                pt={"91px"}
              >
                {aboutChoose.map((item) => (
                  <Stack
                    key={item.id}
                    bgcolor={COLOR.white}
                    borderRadius={"30px"}
                    maxWidth={"257px"}
                    padding={"50px 30px 10px 30px"}
                    alignItems={"center"}
                  >
                    <Stack
                      justifyContent={"center"}
                      alignItems={"center"}
                      width={"95px"}
                      height={"95px"}
                      borderRadius={"18px"}
                      bgcolor={COLOR.light}
                    >
                      <img src={item.img} alt="" />
                    </Stack>
                    <Typography
                      variant="h6"
                      mt={"15px"}
                      mb={"12px"}
                      textAlign={"center"}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="subtitle1" textAlign={"center"}>
                      {item.description}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Container>
        </Box>
      </section>
      <section>
        <Container>
          <Stack textAlign={"center"} alignItems={"center"} pt={"177px"}>
            <Typography variant="subTitle">Team</Typography>
            <Typography variant="h2" mb={"16px"}>
              Our Organic Experts
            </Typography>
            <Typography variant="outline1" maxWidth={"800px"}>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={"27px"} pt={"42px"} mb={"200px"}>
            <Card sx={{ maxWidth: 449, height: "600px", borderRadius: "30px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="500"
                  image={teamUser}
                  alt="green iguana"
                  sx={{
                    borderRadius: "30px 30xp 0 0",
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Giovani Bacardo
                  </Typography>
                  <Stack direction={"row"} justifyContent={"space-between"}>
                    <Typography variant="subTitle" fontSize={"22px"}>
                      Farmer
                    </Typography>
                    <Stack color={COLOR.primary} direction={"row"} gap={"17px"}>
                      {FacebookIcon()} {Xicon()}
                    </Stack>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 449, height: "600px", borderRadius: "30px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="500"
                  image={teamUser2}
                  alt="green iguana"
                  sx={{
                    borderRadius: "30px 30xp 0 0",
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Marianne Loreno
                  </Typography>
                  <Stack direction={"row"} justifyContent={"space-between"}>
                    <Typography variant="subTitle" fontSize={"22px"}>
                      Designer
                    </Typography>
                    <Stack color={COLOR.primary} direction={"row"} gap={"17px"}>
                      {Instagram()} {FacebookIcon()} {Xicon()}
                    </Stack>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 449, height: "600px", borderRadius: "30px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="500"
                  image={teamUser3}
                  alt="green iguana"
                  sx={{
                    borderRadius: "30px 30xp 0 0",
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Riga Pelore
                  </Typography>
                  <Stack direction={"row"} justifyContent={"space-between"}>
                    <Typography variant="subTitle" fontSize={"22px"}>
                      Farmer
                    </Typography>
                    <Stack color={COLOR.primary} direction={"row"} gap={"17px"}>
                      {Instagram()} {FacebookIcon()} {Xicon()}
                    </Stack>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Stack>
        </Container>
      </section>
      <section>
        <Box bgcolor={COLOR.primary} p={"188px 0px"} mb={"141px"}>
          <Container maxWidth={"lg"}>
            <Stack alignItems={"center"}>
              <Typography variant="subTitle">About Us</Typography>
              <Typography variant="h2" color={COLOR.white}>
                What We Offer for You
              </Typography>
              <Stack direction={"row"} gap={"21px"}>
                {aboutUs.map((item) => (
                  <Stack key={item.id} textAlign={"center"} pt={"33px"}>
                    <Box
                      maxWidth={"355px"}
                      maxHeight={"352px"}
                      borderRadius={"30px"}
                      mb={"24px"}
                      overflow={"hidden"}
                      bgcolor={COLOR.white}
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        width={"100%"}
                        height={"100%"}
                      />
                    </Box>
                    <Typography
                      fontWeight={500}
                      fontSize={"25px"}
                      color={COLOR.white}
                    >
                      {item.name}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Container>
        </Box>
      </section>
    </>
  );
};
