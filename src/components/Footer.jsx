import React from 'react'
import { AppRegistrationRounded } from '@mui/icons-material'
import { Avatar, Button, Grid, Stack, Typography } from '@mui/material'
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
        marginBottom: 16,
        borderRadius: 25,
        background: 'var(--white)',
        ':hover': { background: 'var(--neutral90)' }
    }
}))


function Footer() {
    const classes = useStyles()
    return (
        <div style={{ background: 'var(--primary40)', color: 'var(--white)', padding: '56px 0' }}>
            <ContainerStyles disableGutters>
                <Grid container spacing={3}>
                    <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Stack direction='row' alignItems='center'>
                            <Avatar variant="rounded" sx={{ background: 'rgba(0,0,0,0)', marginRight: '12px' }}><img src={companyLogo} alt='CherngTay' style={{ fill: 'var(--white)', width: '80%', height: '80%' }} /></Avatar>
                            <Typography variant='h5'>成泰冷凍空調有限公司</Typography>
                        </Stack>
                        <Typography variant='body2'>&copy; 成泰冷凍空調有限公司 All Rights Reserved. </Typography>
                    </Grid>
                    {
                        companyInfos.map(infos => (
                            <Grid item xs={3} key={infos.title} className={classes.infosGroup}>
                                <Typography variant='subtitle1' className={classes.infosTitle}>{infos.title}</Typography>
                                {
                                    infos.items && infos.items.map(item => (
                                        <Typography variant='body2' className={classes.infosItem} key={item}>{item}</Typography>
                                    ))
                                }
                            </Grid>
                        ))
                    }
                    <Grid item xs={2}>
                        <Button variant='contained' disableElevation href='https://line.me/ti/p/TG3gfy3iYg' target="_blank" rel="noreferrer noopener"
                            className={classes.addLineBtn} sx={{ ':hover': { bgcolor: 'var(--neutral90)' } }}>
                            <Typography variant='button' sx={{ color: 'var(--primary40)' }}>
                                添加LINE好友
                            </Typography>
                        </Button>
                        <Button variant='contained' disableElevation startIcon={<AppRegistrationRounded sx={{ color: 'var(--neutral60)' }} />}
                            className={classes.addLineBtn} sx={{ ':hover': { bgcolor: 'var(--neutral90)' } }}>
                            <Typography variant='button' sx={{ color: 'var(--neutral20)' }}>詢問及報價</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </ContainerStyles>
        </div>
    )
}

export default Footer