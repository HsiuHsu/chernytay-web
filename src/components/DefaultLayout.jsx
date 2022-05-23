import { CssBaseline, Grid } from '@mui/material'
import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

function DefaultLayout({ children }) {
    return (
        <Grid container direction="column">
            <CssBaseline />
            <Grid item><Nav /></Grid>
            <Grid item sx={{
                marginTop: {
                    xs: 7,
                    sm: 10,
                    md: 12.5
                }
            }}>{children}</Grid>
            <Grid item sx={{ display: 'flex' }}><Footer /></Grid>
        </Grid>
    )
}

export default DefaultLayout