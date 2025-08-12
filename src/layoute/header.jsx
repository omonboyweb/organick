import { Button, Container, Stack, Typography } from '@mui/material'

import { CustomNavLink } from '../components/customNavLink'
import logo from "../assets/icons/logo.svg";
import { COLOR } from '../config/colors'
import { CustomInput, IconWrapper } from '../components/customInput';
import { SearchIcon } from '../assets/icons/search-icon'
import { BasketIcon } from '../assets/icons/basket-icon'
export const Header = () => {
    return <Container maxWidth={'xl'}>
        <Stack padding={"70px 20px"} direction={'row'} alignItems={'center'}>
            {/* header logo  */}
            <CustomNavLink to={"/"}>
                <img src={logo} alt="Logo img" loading='lazy' />
                <Typography fontSize={"38px"} fontWeight={"700"} color={COLOR.primary} ml={"9px"}>
                    Organick
                </Typography>
            </CustomNavLink>
            {/* header navigation  */}
            <Stack direction={'row'} gap={'45px'} ml={'150px'}>
                <CustomNavLink to={"/"}>
                    Home
                </CustomNavLink>
                <CustomNavLink to={"/about"}>
                    About
                </CustomNavLink>
                <CustomNavLink to={"/pages"}>
                    Pages
                </CustomNavLink>
                <CustomNavLink to={"/shop"}>
                    Shop
                </CustomNavLink>
                <CustomNavLink to={"/projects"}>
                    Projects
                </CustomNavLink>
                <CustomNavLink to={"/news"}>
                    News
                </CustomNavLink>
            </Stack>
            <Stack direction={'row'} bgcolor={COLOR.search} maxWidth={'376px'} height={'66px'} py={'5px'} px={'10px'} borderRadius={'36px'} position={'relative'} ml={'auto'} mr={'18px'}>
                <label>
                    <CustomInput></CustomInput>
                    <IconWrapper>
                        {SearchIcon()}
                    </IconWrapper>
                </label>
            </Stack>
            <Stack direction={'row'} bgcolor={COLOR.search} width={'159px'} height={'66px'} py={'5px'} px={'10px'} borderRadius={'36px'} position={'relative'}>
                <label>
                    <Stack pl={'60px'} alignItems={'center'} pt={'15px'}>
                        <Typography fontWeight={600} fontSize={'18px'}>
                            Cart (0)
                        </Typography>
                    </Stack>
                    <IconWrapper bgColors={COLOR.primary} right={'61%'}>
                        {BasketIcon()}
                    </IconWrapper>
                </label>
            </Stack>
        </Stack>
    </Container >
}
