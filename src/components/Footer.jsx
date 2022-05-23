import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AppRegistrationRounded } from '@mui/icons-material'
import { Avatar, Box, Button, Grid, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { ContainerStyles } from '../utils/useCustomerComponentStyles'
import companyLogo from '../public/svg/company-logo-white.svg'

const companyInfos = [
    {
        title: '聯絡資訊',
        items: ['600', '嘉義市西區大同路18號', '電話  05-2856505', '傳真  05-2859665']
    },
    {
        title: '營業時間',
        items: ['周一 ~ 週五', '早上  08:00-12:00', '下午  13:30-17:30']
    }
]
const useStyles = makeStyles(theme => ({
    infosGroup: {
        marginLeft: 24,
        '& p:nth-last-child(1)': {
            marginBottom: 0
        },
    },
    infosTitle: {
        paddingBottom: '6px',
        borderBottom: '1px solid var(--primary60)',
        marginBottom: '12px',
    },
    infosItem: {
        marginBottom: '6px',
    },
    addLineBtn: {
        width: '100%',
        borderRadius: 25,
        background: 'var(--white)',
        [theme.breakpoints.up('xs')]: {
            marginBottom: 16,
        },
        [theme.breakpoints.up('md')]: {
            marginBottom: 0,
        },
        [theme.breakpoints.up('xl')]: {
            width: '100%',
            marginBottom: 16,
        }
    }
}))

function Footer() {
    let navigate = useNavigate()
    const classes = useStyles()
    return (
        <Box style={{ width: '100%', background: 'var(--primary40)', color: 'var(--white)', padding: '56px 0' }}>
            < ContainerStyles disableGutters >
                <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Grid item xs={12} md={6} xl={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Stack direction='row' alignItems='center'>
                            <Avatar variant="rounded" sx={{ background: 'rgba(0,0,0,0)', marginRight: '12px' }}><img src={companyLogo} alt='CherngTay' /></Avatar>
                            <Typography variant='h5'>成泰冷凍空調有限公司</Typography>
                        </Stack>
                        <Typography variant='body2' sx={{ marginTop: '12px' }}>&copy; 成泰冷凍空調有限公司 All Rights Reserved. </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} xl={8} sx={{ display: 'flex', flexDirection: { xs: 'column', xl: 'row' } }}>
                        <Grid item xs={12} xl={9} sx={{ display: 'flex', flexDirection: 'row', marginTop: { xs: 6, md: 0 }, '&  div:nth-of-type(1)': { marginLeft: 0 } }}>
                            {
                                companyInfos.map(infos => (
                                    <Grid item xs={6} key={infos.title} className={classes.infosGroup}>
                                        <Typography variant='subtitle1' className={classes.infosTitle}>{infos.title}</Typography>
                                        {
                                            infos.items && infos.items.map(item => (
                                                <Typography variant='body2' className={classes.infosItem} key={item}>{item}</Typography>
                                            ))
                                        }
                                    </Grid>
                                ))
                            }
                        </Grid>
                        <Grid item xs={6} sm={4} md={12} xl={3} sx={{ marginLeft: { xs: 0, xl: 3 }, marginTop: { xs: 6, xl: 0 }, display: 'flex', flexDirection: { xs: 'column', md: 'row', xl: 'column' } }}>
                            <Button variant='contained' disableElevation href='https://line.me/ti/p/TG3gfy3iYg' target="_blank" rel="noreferrer noopener"
                                className={classes.addLineBtn} sx={{ ':hover': { backgroundColor: 'var(--neutral90)' } }}>
                                <Typography variant='button' sx={{ color: 'var(--primary40)' }}>
                                    添加LINE好友
                                </Typography>
                            </Button>
                            <Button variant='contained' disableElevation startIcon={<AppRegistrationRounded sx={{ color: 'var(--neutral60)' }} />}
                                className={classes.addLineBtn} sx={{ marginLeft: { md: 3, xl: 0 }, ':hover': { backgroundColor: 'var(--neutral90)' } }}
                                onClick={() => {
                                    navigate('/contact')
                                }}>
                                <Typography variant='button' sx={{ color: 'var(--neutral20)' }}>詢問及報價</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </ContainerStyles >
        </Box >
    )
}

export default Footer