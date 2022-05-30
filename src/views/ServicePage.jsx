import { Avatar, Box, Stack, Typography } from '@mui/material'
import { makeStyles, useTheme } from '@mui/styles'
import React from 'react'
import { fadeIn } from '../public/css/animation'
import { ContainerStyles } from '../utils/useCustomerComponentStyles'


const serviceInfo = [
    {
        title: '設計規劃',
        subtitle: ['依照客戶的需求及場域空間，規劃出最完善的空調配置。']
    },
    {
        title: '工程施工',
        subtitle: ['空調工程服務 : 配管工程、配電工程、風管工程、保溫工程、熱泵、自動控制及監控工程、避震及吊運安裝、維護保養工程、其他。'
            , '冷氣施作方式 : 嵌入式、壁掛式、埋入式、懸吊式、窗型。']
    },
    {
        title: '維修服務',
        subtitle: ['根據現場評估空調狀況後，提供最專業的維修技術。']
    },
    {
        title: '保養服務',
        subtitle: ['空調設備定期維護與保養，檢查空調與零件，提供最高品質的清潔服務，使空間內的空氣品質乾淨又健康。'],
    },
    {
        title: '節能改善',
        subtitle: ['評估場域空間及現有的空調設備，彙整出最優質的節能方法。']
    },
]

const useStyles = makeStyles(theme => ({
    pageTitle: {
        marginBottom: 8,
        color: 'rgba(255,255,255,0)',
        WebkitTextStroke: '1px var(--primary60)',
        fontFamily: 'Open Sans',
        fontWeight: 'bold',
        opacity: 0.5,
        [theme.breakpoints.up('xs')]: {
            fontSize: 45,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 64,
        }
    },
    pageSubtitle: {
        marginBottom: 48,
        color: 'var(--neutral60)'
    },
    serviceContainer: {
        marginTop: 56,
        marginBottom: 144
    },
    serviceGroup: {
        [theme.breakpoints.up('xs')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
            alignItems: 'flex-start',
            textAlign: 'left'
        }
    },
    serviceImg: {
        [theme.breakpoints.up('xs')]: {
            width: '156px',
            height: '156px',
            marginBottom: 12
        },
        [theme.breakpoints.up('sm')]: {
            width: '140px',
            height: '140px',
            marginRight: 24,
        }
    },
    serviceTitle: {
        color: 'var(--neutral20)',
        marginBottom: 12
    },
    serviceSubtitle: {
        marginBottom: 8,
        color: 'var(--neutral40)'
    }
}))

function ServicePage() {
    const classes = useStyles()
    const theme = useTheme()
    return (
        <ContainerStyles disableGutters className={classes.serviceContainer} sx={{ animation: `${fadeIn} 1000ms ${theme.transitions.easing.easeInOut}` }}>
            <Typography variant='h1' component='h2' className={classes.pageTitle}>Service</Typography>
            <Typography variant='subtitle1' className={classes.pageSubtitle}>服務項目</Typography>
            <Stack spacing={{ xs: 7, sm: 4.5 }}>
                {
                    serviceInfo.map(serviceItem => (
                        <Stack key={serviceItem.title} className={classes.serviceGroup}>
                            <Avatar src={require('../public/img/svg/service/' + serviceItem.title + '.svg')} alt={serviceItem.title} variant='square' className={classes.serviceImg} />
                            <Stack>
                                <Typography variant='h6' className={classes.serviceTitle}>{serviceItem.title}</Typography>
                                {
                                    serviceItem.subtitle.map(serviceSubTitle => (
                                        <Typography variant='body1' key={serviceSubTitle} className={classes.serviceSubtitle}>{serviceSubTitle}</Typography>
                                    ))
                                }
                            </Stack>
                        </Stack>
                    ))
                }
            </Stack>
        </ContainerStyles>
    )
}

export default ServicePage