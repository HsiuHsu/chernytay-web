/** @jsxImportSource @emotion/react */
import { jsx, css, keyframes } from "@emotion/react";
import React, { useState, useEffect } from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { ExpandMoreRounded } from '@mui/icons-material'
import { ContainerStyles } from '../utils/useCustomerComponentStyles'
import { makeStyles, useTheme } from '@mui/styles'
import { FaqItem1, FaqItem2, FaqItem8, FaqItem9 } from '../components/FaqItems'
import QuestionCard from '../components/QuestionCard'
import SliderCarousel from '../components/SliderCarousel'
import useWidthRwd from '../utils/useWidthRwd'
import workImg1 from '../public/img/小型空調/分離式冷氣銅配管.jpg'
import workImg2 from '../public/img/小型空調/雙風扇分離式冷氣室外機.jpg'
import workImg3 from '../public/img/大型空調/室內送風機.jpg'
import workImg4 from '../public/img/大型空調/氣冷式冰水主機.jpg'
import workImg5 from '../public/img/空調維修/水塔散熱材更換後.jpg'
import workImg6 from '../public/img/空調維修/逆止閥更新後.jpg'
import workImg7 from '../public/img/空調保養/水塔清洗後1.jpg'
import workImg8 from '../public/img/空調保養/水塔消音毯更換後.jpg'


const useStyles = makeStyles(theme => ({
    bgTitle: {
        position: 'absolute',
        color: 'rgba(255,255,255,0)',
        opacity: 0.5,
        fontFamily: 'Open Sans',
        fontWeight: 'bold',
        WebkitTextStroke: '1px var(--primary60)',
        [theme.breakpoints.up('xs')]: {
            fontSize: 36,
            top: '-24px',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 48,
            top: '-36px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 64,
            top: '-48px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 96,
            top: '-72px',
        },
    },
    title: {
        color: 'var(--neutral80)',
        marginBottom: 8
    },
    subtitleGroup: {
        [theme.breakpoints.up('xs')]: {
            marginBottom: 76
        },
        [theme.breakpoints.up('xl')]: {
            marginBottom: 0
        },
        '& p': {
            color: 'var(--primary40)',
            fontFamily: 'Noto Serif TC'
        }
    },
}))

const Banner = () => (
    <Box sx={{ position: 'relative' }}>
        <SliderCarousel sliderWidth={useWidthRwd()} />
        <Box sx={{ width: '100%', position: 'absolute', bottom: 0, marginLeft: { xs: 0, sm: 7, lg: 0 }, display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start', xl: 'center' } }}>
            <ContainerStyles disableGutters>
                <Box>
                    {
                        ['專業', '誠信'].map((txt, index) => (
                            <Typography variant='h3' component='p' key={index} sx={{
                                fontSize: { xs: 32, sm: 40, md: 48, lg: 56 },
                                fontFamily: 'Noto Serif TC', color: 'var(--white)', letterSpacing: '0.6rem', marginBottom: { xs: 1, lg: 3 },
                                marginLeft: index == 1 ? { xs: 9, sm: 10, lg: 12 } : 0
                            }}>{txt}</Typography>
                        ))
                    }
                </Box>
                <Typography variant='body1' component='p' sx={{ letterSpacing: { xs: '0.35rem', sm: '0.5rem', md: '0.6rem', lg: '0.8rem' }, color: 'var(--white)', marginBottom: { xs: 4.5, lg: 6 } }}>CHERNG TAY</Typography>
            </ContainerStyles>
        </Box>
    </Box >
)
const ServiceInfo = ({ classes }) => (
    <Box sx={{ display: 'flex' }}>
        <Box sx={{ width: '100%', margin: '120px 0', position: 'relative', background: { xs: 'rgb(252, 252, 246)', lg: 'linear-gradient(90deg, white 50%, rgb(252, 252, 246) 0%)' } }}>
            <ContainerStyles disableGutters>
                <Typography
                    className={classes.bgTitle}
                    sx={{
                        right: 0, letterSpacing: { xs: '16px', sm: '36px', md: '72px', xl: '96px' },
                        transform: { sm: 'translateX(48px)', lg: 'translateX(72px)' },
                    }}>Service</Typography>
                <Grid container sx={{
                    padding: '192px 0', paddingLeft: { lg: 9.5, xl: 0 }, alignItems: { xs: 'flex-start', xl: 'center' }, flexDirection: { xs: 'column', xl: 'row' },
                    background: { xs: 'rgb(252, 252, 246)', xl: 'linear-gradient(90deg, white calc(100%/6), rgb(252, 252, 246) 0%)' }
                }}>
                    <Grid item xs={12} xl={4}>
                        <Typography variant='subtitle1' className={classes.title}>服務項目</Typography>
                        <Box className={classes.subtitleGroup}>
                            <Typography variant='h4' component='p'>專業的空調技術</Typography>
                            <Typography variant='h4' component='p'>提供客戶最優質的服務</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} xl={8} sx={{
                        width: '100%', display: 'flex', flexDirection: 'row', justifyContent: { md: 'space-between' },
                        flexWrap: { xs: 'wrap', md: 'nowrap' }
                    }}>
                        {
                            ['設計規劃', '工程施工', '維修服務', '保養服務', '節能改善'].map(item => (
                                <Grid item xs={6} sm={3} md={0} key={item} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <img src={require('../public/svg/service/' + item + '.svg')} alt={item} />
                                    <Typography sx={{ marginTop: '12px' }}>{item}</Typography>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>
            </ContainerStyles>
        </Box>
    </Box>
)
const WorkInfo = ({ classes }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Box sx={{ width: '100%', margin: '120px 0', position: 'relative', background: { xs: 'rgb(245, 255, 235)', lg: 'linear-gradient(-90deg, white 50%, rgb(245, 255, 235) 0%)' } }}>
                <ContainerStyles disableGutters>
                    <Typography className={classes.bgTitle} sx={{ zIndex: 10, left: 24, letterSpacing: { xs: '16px', sm: '36px', md: '72px', xl: '96px' }, }}>Work</Typography>
                    <Grid container sx={{
                        position: 'relative', padding: { xs: '96px 0 216px 0', sm: '96px 0 320px 0', xl: '192px 0' }, alignItems: { xs: 'flex-start', xl: 'center' },
                        flexDirection: { xs: 'column', lg: 'row', xl: 'row-reverse' }, flexWrap: { xl: 'nowrap' },
                        background: { xs: 'rgb(245, 255, 235)', xl: 'linear-gradient(-90deg, white calc(100%/6), rgb(245, 255, 235) 0%)' }
                    }}>
                        <Grid item xs={12} xl={4} sx={{ paddingLeft: { xs: 0, xl: 6 } }}>
                            <Typography variant='subtitle1' className={classes.title}>工程實績</Typography>
                            <Box className={classes.subtitleGroup}>
                                {['專業技術團隊', '提供各式空調工程承裝', '給予客戶最專業的品質'].map(txt => (
                                    <Typography variant='h4' component='p' key={txt}>{txt}</Typography>))
                                }
                            </Box>
                        </Grid>
                        <Grid item xs={12} xl={8} sx={{ position: 'absolute', left: 0, bottom: '-96px', width: { xs: '100%', md: '75%', xl: 744 }, height: { xs: 314, sm: 435 } }}>
                            <WorkImg />
                        </Grid>
                    </Grid>
                </ContainerStyles>
            </Box>
        </Box >
    )
}
const fadeIn = keyframes`
    0% {opacity: 1;}
    50%{opacity: 1;}
    100%{opacity: 0;}
`
const WorkImg = () => {
    const theme = useTheme()
    const imgItems = [workImg1, workImg2, workImg3, workImg4, workImg5, workImg6, workImg7, workImg8]
    const [countImg, setCountImg] = useState({
        num: 0,
        img: imgItems[0],
        img2: imgItems[1],
    })
    const transitionStyles = {
        animation: `${fadeIn} 2000ms ${theme.transitions.easing.easeInOut}`,
    }
    let countNum = 0
    useEffect(() => {
        setInterval(() => {
            const imgLength = Number(imgItems.length)
            if (countNum == imgLength - 2) {
                countNum++
                setCountImg({ num: countNum, img: imgItems[countNum], img2: imgItems[0] })
            } else if (countNum == imgLength - 1) {
                countNum = 0
                setCountImg({ num: 0, img: imgItems[0], img2: imgItems[1] })
            } else {
                countNum++
                setCountImg({ num: countNum, img: imgItems[countNum], img2: imgItems[countNum + 1] })
            }
        }, 2000);
    }, []);

    return (
        <Box key={countImg.num + 1} sx={{ backgroundImage: `url(${countImg.img2})`, width: '100%', height: '100%', position: 'relative' }}>
            <Box key={countImg.num}
                sx={{
                    width: '100%', height: '100%', position: 'absolute', top: 0, left: 0,
                    backgroundImage: `url(${countImg.img})`, ...transitionStyles,
                }} />
        </Box>
    )
}

const FaqInfo = ({ classes }) => {
    const faqItems = [
        {
            title: '冷氣應多久保養一次？',
            item: <FaqItem1 classes={classes} />,
            url: '#faqItem1',
            id: 'faqItem1'
        },
        {
            title: '冷氣使用小秘訣',
            item: <FaqItem2 classes={classes} />,
            url: '#faqItem2',
            id: 'faqItem2'
        },
        {
            title: '如何挑選冷氣？',
            item: <FaqItem8 classes={classes} />,
            url: '#faqItem8',
            id: 'faqItem8'
        },
        {
            title: '冷氣省電絕招',
            item: <FaqItem9 classes={classes} />,
            url: '#faqItem9',
            id: 'faqItem9'
        },
    ]
    return (
        <Box sx={{ display: 'flex', paddingTop: 25, paddingBottom: 25 }}>
            <Box sx={{
                width: '100%', backgroundColor: { xs: 'var(--primary99)', lg: 'var(--white)' },
                borderBottom: { xs: '16px solid var(--white)', lg: 0 }, boxShadow: { xs: '48px 48px var(--neutral95)', lg: 0 }
            }}>
                <ContainerStyles disableGutters sx={{ width: '100%' }}>
                    <Stack spacing={3} sx={{
                        width: { xs: '100%', xl: 936 }, position: 'relative', paddingY: 9.5, paddingX: { sm: 9, lg: 12 }, background: 'var(--primary99)',
                        borderRight: { xs: 0, lg: '16px solid var(--white)' }, borderBottom: { xs: 0, lg: '16px solid var(--white)' },
                        boxShadow: { xs: 0, lg: '60px 60px var(--neutral95)' }
                    }}>
                        <Box item xs={12} xl={4} sx={{ position: 'absolute', width: '100%', top: '-56px', left: 0, textAlign: 'center', }}>
                            <Typography variant='subtitle1' className={classes.title}>常見問題</Typography>
                            <Typography variant='h4' component='p' sx={{ color: 'var(--primary40)', fontFamily: 'Noto Serif TC' }}>關於冷氣的小知識</Typography>
                        </Box>
                        {
                            faqItems.map(item => (
                                <QuestionCard getExpandIcon={<ExpandMoreRounded />} getDefaultExpand={false} faqTitle={item.title} faqItems={item.item} faqId={item.id} classes={classes} key={item.id} />
                            ))
                        }

                    </Stack>
                </ContainerStyles>
            </Box>
        </Box>
    )
}

function HomePage() {
    const classes = useStyles()
    return (
        <>
            <Banner />
            <ServiceInfo classes={classes} />
            <WorkInfo classes={classes} />
            <FaqInfo classes={classes} />
        </>
    )
}

export default HomePage