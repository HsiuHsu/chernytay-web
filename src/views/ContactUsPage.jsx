import React from 'react'
import { Avatar, Box, Divider, Grid, Typography, InputLabel, Stack, Button, Checkbox } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useTheme } from '@mui/material/styles';
import { AppRegistrationRounded, PhoneRounded } from '@mui/icons-material'
import { ContainerStyles, CustomerTextField } from '../utils/useCustomerComponentStyles'

const useStyles = makeStyles(theme => ({
    contactTitle: {
        fontSize: 64,
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
    // 聯絡資訊
    infoGroup: {
        background: 'var(--primary99)',
        [theme.breakpoints.up('xs')]: {
            padding: '56px 24px'
        },
        [theme.breakpoints.up('sm')]: {
            padding: '56px 64px'
        }
    },
    infoItems: {
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.up('xs')]: {
            flexDirection: 'column'
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row'
        }
    },
    infoTxt: {
        marginBottom: '6px',
        color: 'var(--neutral20)'
    },
    infoMapGroup: {
        [theme.breakpoints.up('xs')]: {
            width: '100%',
            marginTop: 48
        },
        [theme.breakpoints.up('md')]: {
            width: '62.5%',
            marginLeft: 24,
            marginTop: 0
        }
    },
    // 預約
    contactPhone: {
        padding: '16px 20px',
        background: 'var(--primary60)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 auto',
        width: '100%'
    },
    // 表單
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0px 1px 3px rgba(0,0,0,0.25)',
        [theme.breakpoints.up('xs')]: {
            padding: '24px'
        },
        [theme.breakpoints.up('sm')]: {
            padding: '48px 24px'
        },
        [theme.breakpoints.up('md')]: {
            padding: '48px 96px'
        }
    },
    inputTitle: {
        display: 'flex',
        alignItems: 'center',
        color: 'var(--neutral20)',
        [theme.breakpoints.up('xs')]: {
            width: '100%',
            justifyContent: 'flex-start',
            marginBottom: 6
        },
        [theme.breakpoints.up('sm')]: {
            width: '25%',
            justifyContent: 'flex-end',
            marginBottom: 0,
            paddingRight: 16
        },
        [theme.breakpoints.up('md')]: {
            paddingRight: 24
        }
    },
    inputGroup: {
        marginBottom: 24,
        display: 'flex',
        [theme.breakpoints.up('xs')]: {
            flexDirection: 'column'
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row'
        }
    },
    submitBtn: {
        borderRadius: 24,
        color: 'var(--white)',
        backgroundColor: 'var(--primary60)',
        '&:hover': {
            backgroundColor: 'var(--primary40)'
        },
        [theme.breakpoints.up('xs')]: {
            width: '100%'
        },
        [theme.breakpoints.up('sm')]: {
            width: '75%',
            marginLeft: '25%',
            marginTop: 24
        }
    },
    checkBox: {
        width: 16,
        marginRight: 6,
        border: 0,
        color: 'var(--neutral20)',
        '&.Mui-checked': {
            color: 'var(--primary60)',
        }
    },
    checkBoxLabel: {
        color: 'var(--neutral20)'
    },
    checkboxGroup: {
        [theme.breakpoints.up('xs')]: {
            width: '100%',
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 0
        },
        [theme.breakpoints.up('sm')]: {
            width: '75%',
            marginLeft: 24
        }
    },
    textArea: {
        '& .MuiOutlinedInput-root': {
            padding: 0
        }
    },
    textAreaTitle: {
        margin: 0,
        color: 'var(--neutral20)',
        [theme.breakpoints.up('xs')]: {
            width: '100%',
            textAlign: 'left',
            marginBottom: 6
        },
        [theme.breakpoints.up('sm')]: {
            width: '25%',
            textAlign: 'right',
            marginBottom: 0,
            paddingRight: 16,
            marginBottom: 0,
            marginTop: 12
        },
        [theme.breakpoints.up('md')]: {
            paddingRight: 24
        }
    }
}))

// 聯絡資訊
const Information = ({ classes }) => {
    const information = {
        company: '成泰冷凍空調有限公司',
        subtitle: '專業空調工程服務',
        infos: [
            '嘉義市西區大同路18號',
            '電話  05-2856505',
            '傳真  05-2859665',
            '信箱  cherng.tay@msa.hinet.net',
            'LINE ID  0968898721'
        ],
        opening: [
            '周一 ~ 週五',
            '早上  08:00-12:00',
            '下午  13:30-17:30'
        ]
    }
    return (
        <Grid container display='flex' justifyContent='flex-end' sx={{ position: 'relative', height: 'fit-content', paddingTop: 12, paddingBottom: 18 }}>
            <Typography variant='h1' component='h2' className={classes.contactTitle} sx={{ position: 'absolute', left: 0, top: { xs: 72, sm: 56 } }}>Information</Typography>
            <Grid item xs={12} xl={10} className={classes.infoGroup}>
                <Typography variant='subtitle1' sx={{ color: 'var(--neutral60)', marginBottom: 3 }}>聯絡資訊</Typography>
                <Box className={classes.infoItems}>
                    <Box>
                        <Typography variant='h5' sx={{ color: 'var(--primary40)', marginBottom: '6px' }}>{information.company}</Typography>
                        <Typography variant='h6' sx={{ color: 'var(--primary60)', marginBottom: 3 }}>{information.subtitle}</Typography>
                        {
                            information.infos.map(info => (<Typography variant='body1' className={classes.infoTxt} key={info}>{info}</Typography>))
                        }
                        <Divider sx={{ margin: '24px 0', width: '72px', borderColor: 'var(--neutral60)' }} />
                        {
                            information.opening.map(time => (<Typography variant='body1' className={classes.infoTxt} key={time}>{time}</Typography>))
                        }
                    </Box>
                    <Box className={classes.infoMapGroup}>
                        <Avatar src={require('../public/img/png/map.png')} alt='map' variant='square' sx={{ width: '100%', height: 'auto' }} />
                        <Typography variant='body2' component='a' href='https://www.google.com.tw/maps/place/%E6%88%90%E6%B3%B0%E5%86%B7%E5%87%8D%E7%A9%BA%E8%AA%BF%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/@23.4750252,120.4328942,19z/data=!4m5!3m4!1s0x346e969db240be1f:0xd347ed10467411c8!8m2!3d23.4750506!4d120.4331484?hl=zh-TW'
                            target='_blank' rel='noreferrer noopener' sx={{ color: 'var(--primary40)', display: 'block', textAlign: 'right', marginTop: '12px' }}>查看google地圖</Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}
// 預約 詢問
const Contact = ({ classes, theme }) => (
    <Box sx={{ paddingTop: 7, paddingBottom: 18 }}>
        <Typography variant='h1' component='h2' className={classes.contactTitle} sx={{ marginBottom: 1 }}>Contact</Typography>
        <Typography variant='subtitle1' sx={{ color: 'var(--neutral60)', marginBottom: 6 }}>預約 / 詢問</Typography>
        <Grid container flexDirection='column' sx={{ marginBottom: 7 }}>
            <Stack direction='row' alignItems='center' sx={{ marginBottom: '36px' }}>
                <PhoneRounded sx={{ color: 'var(--primary60)' }} />
                <Typography variant='subtitle1' sx={{ color: 'var(--neutral20)', marginLeft: '12px' }}>致電成泰</Typography>
            </Stack>
            <Grid item sm={12} md={10} xl={8} className={classes.contactPhone}>
                <Stack direction={{ xs: 'column', sm: 'row' }} alignItems={{ xs: 'center', sm: 'flex-end' }} sx={{ marginBottom: '12px' }}>
                    <Typography variant='h5' component='p' sx={{ color: 'var(--white)', marginBottom: { xs: '6px', sm: 0 } }}>tel</Typography>
                    <Typography variant='h4' component='p' sx={{ color: 'var(--white)', marginLeft: { xs: 0, sm: 4 }, marginBottom: { xs: '6px', sm: 0 } }}>05-285-6505</Typography>
                    <Typography variant='h4' component='p' sx={{ color: 'var(--white)', marginLeft: { xs: 0, sm: 4 }, }}>09-68-898-721</Typography>
                </Stack>
                <Typography variant='body2' sx={{ color: 'var(--white)', textAlign: 'center' }}>【電話受理時間】周一至周五 早上8:00-12:00; 下午13:30-17:30(國定假日不受理)</Typography>
            </Grid>
        </Grid>
        <Grid container flexDirection='column' sx={{ marginBottom: 7 }}>
            <Stack direction='row' alignItems='center' sx={{ marginBottom: '36px' }}>
                <AppRegistrationRounded sx={{ color: 'var(--primary60)' }} />
                <Typography variant='subtitle1' sx={{ color: 'var(--neutral20)', marginLeft: '12px' }}>詢問及報價</Typography>
            </Stack>
            <Grid item sm={12} md={10} xl={8} sx={{ margin: '0 auto', width: '100%' }}>
                <ContactForm classes={classes} theme={theme} />
            </Grid>
        </Grid>
    </Box>
)
// 預約 詢問表單
const ContactForm = ({ classes, theme }) => {
    const formInfo = [
        {
            inputLabel: '姓名*',
            id: 'input-name',
            type: 'text',
            name: 'entry.573583167',
            placeholder: '請填寫全名',
        },
        {
            inputLabel: '電話*',
            id: 'input-phone',
            type: 'tel',
            name: 'entry.1404911985',
            placeholder: '例 : 09-12-345-678',
        },
        {
            inputLabel: '信箱*',
            id: 'input-email',
            type: 'email',
            name: 'entry.1487827096',
            placeholder: '例 : example@gmail.com',
        },
        {
            inputLabel: '詢問類別*',
            value: ['設計規劃', '工程施工', '維修服務', '保養服務', '節能改善', '其他'],
            type: 'checkbox',
            name: 'entry.1787171687',
        },
        {
            inputLabel: '詢問內容*',
            id: 'text-area',
            multiline: true,
            minRows: 5,
            name: 'entry.472842146',
            placeholder: '請填寫詢問內容',
        },
    ]
    return (
        <form target='_blank' action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSearVe5J1MuUlRiciuKxCPESmx38nOCApXW4V9FELTJwr_lqQ/formResponse' method='post'>
            <Box className={classes.formGroup}>
                {
                    formInfo.map(item => (
                        item.inputLabel === '詢問類別*' ? (
                            <Stack direction='row' className={classes.inputGroup} key={item.inputLabel}>
                                <InputLabel className={classes.textAreaTitle}>{item.inputLabel}</InputLabel>
                                <Stack className={classes.checkboxGroup}>
                                    {
                                        item.value.map(getId => (
                                            <Stack direction='row' alignItems='center' key={getId} sx={{ marginRight: 2 }}>
                                                <Checkbox type='checkbox' name='entry.1787171687' value={getId} id={getId} className={classes.checkBox} />
                                                <InputLabel htmlFor={getId} className={classes.checkBoxLabel}>{getId}</InputLabel>
                                            </Stack>
                                        ))
                                    }
                                </Stack>
                            </Stack>
                        ) : (
                            <Stack direction='row' className={classes.inputGroup} key={item.inputLabel}>
                                <InputLabel className={item.id === 'text-area' ? classes.textAreaTitle : classes.inputTitle} htmlFor={item.id}>{item.inputLabel}</InputLabel>
                                <CustomerTextField type={item.type} name={item.name} placeholder={item.placeholder} id={item.id} required sx={{ width: { xs: '100%', sm: '75%' } }}
                                    className={item.id === 'text-area' && classes.textArea}
                                    multiline={item.multiline && true} minRows={item.multiline && item.minRows} />
                            </Stack>
                        )
                    ))
                }
                <Button type='submit' className={classes.submitBtn}><Typography variant='button'>確認送出</Typography></Button>
            </Box>
        </form>
    )
}

function ContactUsPage() {
    const classes = useStyles()
    const theme = useTheme()
    return (
        <ContainerStyles disableGutters>
            <Information classes={classes} theme={theme} />
            <Contact classes={classes} theme={theme} />
        </ContainerStyles>
    )
}

export default ContactUsPage