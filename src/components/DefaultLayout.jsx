import { CssBaseline, Grid } from '@mui/material'
import { useTheme } from '@mui/styles'
import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

function DefaultLayout({ children }) {
    const theme = useTheme()
    return (
        <Grid container direction="column">
            <CssBaseline />
            <Grid item><Nav /></Grid>
            <Grid item sx={{
                [theme.breakpoints.up("xs")]: {
                    marginTop: '56px'
                },
                [theme.breakpoints.up("sm")]: {
                    marginTop: '80px'
                },
                [theme.breakpoints.up("md")]: {
                    marginTop: '100px'
                }
            }}>{children}</Grid>
            <Grid item><Footer /></Grid>
        </Grid>
    )
}

export default DefaultLayout