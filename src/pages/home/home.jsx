import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { RightArrow } from '../../assets/icons/rightArrow'
export const Home = () => {

    return <>
        <Box sx={{
            width: "100%",
            height: '674px',
            backgroundImage: 'url(src/assets/banner.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <Container maxWidth={'xl'}>
                <Stack>
                    <Typography variant='subTitle'>
                        100% Natural Food
                    </Typography>
                    <Typography variant='h1'>
                        Choose the best
                        healthier way
                        of life
                    </Typography>
                    <Button variant='yellowBtn'>
                        Explore Now
                        <Box>
                            {RightArrow()}
                        </Box>
                    </Button>
                </Stack>
            </Container>
        </Box>


    </>

}
