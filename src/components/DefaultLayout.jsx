import React from 'react'
import { useLocation } from 'react-router-dom'
import { CssBaseline, Grid } from '@mui/material'
import Footer from './Footer'
import Nav from './Nav'

function DefaultLayout({ children }) {
    let currentPath = useLocation().pathname
    return (
        <Grid container direction="column">
            <CssBaseline />
            <Grid item><Nav /></Grid>
            <Grid item sx={{
                marginTop: currentPath === '/' ? { xs: 0 } : {
                    xs: 7,
                    sm: 10,
                    md: 12.5
                }
            }}>{children}</Grid>
            <Grid item sx={{ display: 'flex' }}><Footer /></Grid>
        </Grid >
    )
}

export default DefaultLayout