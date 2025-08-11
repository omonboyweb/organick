import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return <>
        <Link to={"/about"}>

            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magnam labore dolore! Saepe, dolorem perferendis quia, doloremque ipsa aspernatur vitae assumenda neque voluptas dolor iure! Facere culpa libero at hic?
            </Typography>
        </Link>
        <Link to={"/shop"}>

            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magnam labore dolore! Saepe, dolorem perferendis quia, doloremque ipsa aspernatur vitae assumenda neque voluptas dolor iure! Facere culpa libero at hic?
            </Typography>
        </Link>
    </>
}
