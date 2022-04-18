import { CssBaseline, Grid } from '@mui/material'
import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

function DefaultLayout({ children }) {
    return (
        // <div style={{ width: '100vw', height: '100vh' }}>
        //     <Nav />
        //     {children}
        //     <Footer />
        // </div>
        <Grid direction="column">
            <CssBaseline />
            <Grid item><Nav /></Grid>
            <Grid item>{children}</Grid>
            <Grid item><Footer /></Grid>
        </Grid>
    )
}

export default DefaultLayout