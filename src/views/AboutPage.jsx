/** @jsxImportSource @emotion/react */
import { jsx, css, keyframes } from "@emotion/react";
import React, { useState } from 'react'
import { ContainerStyles } from '../utils/useCustomerComponentStyles'
import { Avatar, Box, Card, CardMedia, Grid, Stack, Typography, Container, Collapse } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useTheme } from "@mui/material/styles";
import abilityBackgroundImg from '../public/img/空調保養/分離式室外機保養.jpg'

const companyAbility = [
    {
        title: '履約能力',
        items: ['經濟部甲等冷凍空調業登記證書', '台灣區冷凍空調工程工業同業公會會員證書', '嘉義市電器商業同業公會', '台灣銀行(中信局)供應商']
    },
    {
        title: '專業執照',
        items: ['冷凍空調工程技師證', '防火管理證照', '勞工安全證照', '技術士證照', 'Autodesk 國際認證 (Autocad 2011)']
    }
]
const useStyles = makeStyles((theme) => ({
    aboutContainer: {
        position: 'relative',
        margin: 0
    },
    aboutTitle: {
        position: 'absolute',
        left: 0,
        fontSize: 64,
        color: 'rgba(255,255,255,0)',
        WebkitTextStroke: '1px var(--primary60)',
        top: '-40px',
        fontFamily: 'Open Sans',
        fontWeight: 'bold',
        opacity: 0.5
    },
    aboutItems: {
        background: 'var(--surface)',
        paddingLeft: '10%',
        paddingTop: 80,
        paddingBottom: 104,
    },
    aboutSubtitle: {
        marginBottom: 48,
        color: 'var(--neutral60)'
    },
    aboutTxt: {
        color: 'var(--neutral20)'
    },
    aboutImg: {
        position: 'absolute',
        width: '100%',
        height: 360,
        top: '50px',
        right: 0,
        display: 'flex',
    },
    abilityTitle: {
        color: 'var(--primary40)',
        paddingBottom: 12,
        marginBottom: 24,
        position: 'relative',
        '&::before': {
            position: 'absolute',
            content: '""',
            display: 'block',
            height: 2,
            background: 'var(--neutral60)',
            bottom: 0,
            width: '24px'
        },
    },
}))
const anim = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

function AboutPage() {
    const classes = useStyles()
    const theme = useTheme();

    return (
        <>
            <ContainerStyles disableGutters css={css`animation: ${anim} 1000ms ${theme.transitions.easing.easeInOut};`}>
                <div style={{ height: 650, display: 'flex', alignItems: 'center' }}>
                    <Grid container className={classes.aboutContainer} spacing={3}>
                        <Typography variant='h1' component='h1' className={classes.aboutTitle}>About Us</Typography>
                        <Grid item xs={10} className={classes.aboutItems} >
                            <Grid item xs={8} sx={{ paddingLeft: 9, paddingTop: 7 }}>
                                <Typography variant='subtitle1' className={classes.aboutSubtitle}>關於成泰</Typography>
                                <Typography variant='body1' component='p' className={classes.aboutTxt}>成泰空調二十年來努力研發空調與熱能共生之複合式技術，此乃創新獨特之先趨，8年前引領變頻節能之創舉，積極研發冷熱共生熱泵，空調工程，『空調系統』同時擁有『變頻』及『監控 』之運用，正所謂一本三效運用擴大，為營運機構降低營運成本及節能減碳之效益。 </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={4} className={classes.aboutImg} css={css`animation: ${anim} 2000ms ${theme.transitions.easing.easeInOut};`}>
                            <Avatar src={require('../public/img/小型空調/分離式冷氣室外機 (3).jpg')} variant="square" sx={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Grid>
                    </Grid>
                </div>
            </ContainerStyles>
            {/* <Card square elevation={0} sx={{ display: 'flex', height: 650 }} >
                <CardMedia component='img' sx={{ width: '50%', height: 650, filter: 'brightness(0.5)' }} image={require('../public/img/空調保養/熱泵保養.jpg')} alt='熱泵保養' />
                <Stack direction='column' spacing={6} sx={{ justifyContent: 'center', marginLeft: 15 }}>
                    {companyAbility.map((ability) => (
                        <Box>
                            <Typography variant='subtitle1' className={classes.abilityTitle} key={ability.title} >{ability.title}</Typography>
                            {ability.items.map((item) => (
                                <Typography variant='body1' sx={{ marginBottom: '6px', color: 'var(--neutral20)' }} key={item}>{item}</Typography>
                            ))}
                        </Box>
                    ))}
                </Stack>
            </Card> */}
            {/* <div style={{ backgroundImage: `url('../public/img/空調保養/熱泵保養.jpg')` }}> */}
            <div style={{ height: '650px' }}>
                <div style={{ height: '274px', backgroundImage: `url(${abilityBackgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'left top', backgroundColor: 'rgba(255,255,255,0.5)', backgroundBlendMode: 'lighten' }}>
                    <ContainerStyles disableGutters sx={{ height: '650px' }}>
                        <Grid container justifyContent='center' sx={{ padding: '127px 0' }}>
                            <Grid item xs={10} display='flex' flexDirection='row' sx={{ padding: 12, background: 'rgba(255,255,255,0.9)', boxShadow: '0px 1px 3px rgba(0,0,0,0.25)' }}>
                                {companyAbility.map((ability) => (
                                    <Grid item xs={6} key={ability.title}>
                                        <Typography variant='subtitle1' className={classes.abilityTitle} key={ability.title} >{ability.title}</Typography>
                                        {ability.items.map((item) => (
                                            <Typography variant='body1' sx={{ marginBottom: '6px', color: 'var(--neutral20)' }} key={item}>{item}</Typography>
                                        ))}
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </ContainerStyles>
                </div>
            </div>
        </>
    )
}

export default AboutPage