/** @jsxImportSource @emotion/react */
import { jsx, css, keyframes } from '@emotion/react';
import React from 'react'
import { ContainerStyles } from '../utils/useCustomerComponentStyles'
import { Avatar, Box, Grid, Typography, Skeleton } from '@mui/material'
import { makeStyles, useTheme } from '@mui/styles'
import abilityBackgroundImg from '../public/img/jpg/空調保養/分離式室外機保養.jpg'
import { fadeInAndTransform, fadeIn } from '../public/css/animation';
import useImgLoading from '../hooks/useImgLoading';

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
    aboutInfos: {
        [theme.breakpoints.up('xs')]: {
            paddingTop: 56,
            paddingLeft: 0,
            paddingRight: 24,
            paddingBottom: 72
        },
        [theme.breakpoints.up('sm')]: {
            paddingTop: 56,
            paddingLeft: 45
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: 56,
            paddingLeft: 51
        },
        [theme.breakpoints.up('xl')]: {
            paddingTop: 56,
            paddingLeft: 62
        }
    },
    aboutTitle: {
        position: 'absolute',
        left: 0,
        color: 'rgba(255,255,255,0)',
        WebkitTextStroke: '1px var(--primary60)',
        fontFamily: 'Open Sans',
        fontWeight: 'bold',
        opacity: 0.5,
        [theme.breakpoints.up('xs')]: {
            fontSize: 45,
            top: '-24px',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 64,
            top: '-40px',
        }
    },
    aboutItems: {
        background: 'var(--surface)',
        paddingLeft: '10%',
        paddingTop: 80,
        paddingBottom: 104
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
        right: 0,
        display: 'flex',
        [theme.breakpoints.up('xs')]: {
            height: 300,
            top: '350px',
            paddingRight: 24
        },
        [theme.breakpoints.up('sm')]: {
            height: 360,
            top: '250px'
        },
        [theme.breakpoints.up('md')]: {
            height: 360,
            top: '150px'
        }
    },
    abilityContainer: {
        width: '100%',
        zIndex: 10,
        width: '100%'
    },
    abilityGroup: {
        background: 'rgba(255,255,255,0.9)',
        boxShadow: '0px 1px 3px rgba(0,0,0,0.25)',
        [theme.breakpoints.up('xs')]: {
            padding: '96px 24px',
            '& >div': { marginBottom: 24 },
            '& div:nth-last-child(1)': {
                marginBottom: 0
            }
        },
        [theme.breakpoints.up('sm')]: {
            padding: 96,
            marginBottom: 0,
            '& >div': { marginRight: 24 },
            '& div:nth-last-child(1)': {
                marginRight: 0
            }
        }
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
        }
    }
}))

function AboutPage() {
    const classes = useStyles()
    const theme = useTheme()
    const isLoading = useImgLoading()
    return (
        <>
            <ContainerStyles disableGutters sx={{ display: 'flex', animation: `${fadeInAndTransform} 1000ms ${theme.transitions.easing.easeInOut}` }}>
                <Box sx={{ marginTop: '96px', marginBottom: '240px', display: 'flex', alignItems: 'center' }}>
                    <Grid container className={classes.aboutContainer} spacing={3}>
                        <Typography variant='h1' component='h2' className={classes.aboutTitle}>About Us</Typography>
                        <Grid item xs={12} sm={9} md={10} className={classes.aboutItems} >
                            <Grid item xs={12} sm={8} md={8} className={classes.aboutInfos}>
                                <Typography variant='subtitle1' className={classes.aboutSubtitle}>關於成泰</Typography>
                                <Typography variant='body1' component='p' className={classes.aboutTxt}>成泰空調二十年來努力研發空調與熱能共生之複合式技術，此乃創新獨特之先趨，8年前引領變頻節能之創舉，積極研發冷熱共生熱泵，空調工程，『空調系統』同時擁有『變頻』及『監控 』之運用，正所謂一本三效運用擴大，為營運機構降低營運成本及節能減碳之效益。 </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} className={classes.aboutImg} sx={{ animation: `${fadeInAndTransform} 2000ms ${theme.transitions.easing.easeInOut}` }}>
                            {
                                isLoading ? <Skeleton variant='rectangular' sx={{ width: '100%', height: '100%' }} /> :
                                    <Avatar src={require('../public/img/jpg/小型空調/分離式冷氣室外機3.jpg')} variant='square' sx={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
                            }
                        </Grid>
                    </Grid>
                </Box>
            </ContainerStyles>
            <Box sx={{ display: 'flex', position: 'relative', animation: `${fadeIn} 2000ms ${theme.transitions.easing.easeInOut} ` }}>
                {
                    isLoading ? <Skeleton variant='rectangular' sx={{ position: 'absolute', width: '100%', height: '274px' }} /> :
                        <Box sx={{ position: 'absolute', width: '100%', height: '274px', backgroundImage: `url(${abilityBackgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'left top', backgroundColor: 'rgba(255,255,255,0.5)', backgroundBlendMode: 'lighten' }} />
                }
                <ContainerStyles disableGutters className={classes.abilityContainer}>
                    <Grid container justifyContent='center' sx={{ padding: '127px 0' }}>
                        <Grid item xs={12} sm={10} display='flex' flexDirection={{ xs: 'column', md: 'row' }} className={classes.abilityGroup}>
                            {companyAbility.map((ability) => (
                                <Grid item xs={12} md={6} key={ability.title} >
                                    <Typography variant='subtitle1' className={classes.abilityTitle} key={ability.title} >{ability.title}</Typography>
                                    {
                                        ability.items.map((item) => (
                                            <Typography variant='body1' sx={{ marginBottom: '6px', color: 'var(--neutral20)' }} key={item}>{item}</Typography>
                                        ))
                                    }
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </ContainerStyles>
            </Box>
        </>
    )
}

export default AboutPage