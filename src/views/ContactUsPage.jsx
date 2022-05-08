import React from 'react'
import { Avatar, Box, Divider, Grid, Typography, InputLabel, Stack, Button, Checkbox } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { AppRegistrationRounded, PhoneRounded } from '@mui/icons-material'
import { ContainerStyles, CustomerTextField } from '../utils/useCustomerComponentStyles'

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
            <Typography variant='h1' component='h2' className={classes.title} sx={{ position: 'absolute', left: 0, top: '56px', }}>Information</Typography>
            <Grid item xs={10} sx={{ background: 'var(--primary99)', px: 8, py: 7 }}>
                <Typography variant='subtitle1' sx={{ color: 'var(--neutral60)', marginBottom: 3 }}>聯絡資訊</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box>
                        <Typography variant='h5' sx={{ color: 'var(--primary40)', marginBottom: '6px' }}>{information.company}</Typography>
                        <Typography variant='h6' sx={{ color: 'var(--primary60)', marginBottom: 3 }}>{information.subtitle}</Typography>
                        {
                            information.infos.map(info => (<Typography variant='body1' className={classes.infoTxt} key={info}>{info}</Typography>))
                        }
                        <Divider sx={{ my: 3, width: '72px', borderColor: 'var(--neutral60)' }} />
                        {
                            information.opening.map(time => (<Typography variant='body1' className={classes.infoTxt} key={time}>{time}</Typography>))
                        }
                    </Box>
                    <Box sx={{ width: '62.5%', marginLeft: 3 }}>
                        <Avatar src={require('../public/png/map.png')} alt='map' variant='square' sx={{ width: '100%', height: 'auto' }} />
                        <Typography variant='body2' component='a' href='https://www.google.com.tw/maps/place/%E6%88%90%E6%B3%B0%E5%86%B7%E5%87%8D%E7%A9%BA%E8%AA%BF%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/@23.4750252,120.4328942,19z/data=!4m5!3m4!1s0x346e969db240be1f:0xd347ed10467411c8!8m2!3d23.4750506!4d120.4331484?hl=zh-TW'
                            target='_blank' rel='noreferrer noopener' sx={{ color: 'var(--primary40)', display: 'block', textAlign: 'right', marginTop: '12px' }}>查看google地圖</Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}
// 預約 詢問
const Contact = ({ classes }) => (
    <Box sx={{ paddingTop: 7, paddingBottom: 18 }}>
        <Typography variant='h1' component='h2' className={classes.title} sx={{ marginBottom: 1 }}>Contact</Typography>
        <Typography variant='subtitle1' sx={{ color: 'var(--neutral60)', marginBottom: 6 }}>預約 / 詢問</Typography>
        <Grid container flexDirection='column' sx={{ marginBottom: 7 }}>
            <Stack direction='row' alignItems='center' sx={{ marginBottom: '36px' }}>
                <PhoneRounded sx={{ color: 'var(--primary60)' }} />
                <Typography variant='subtitle1' sx={{ color: 'var(--neutral20)', marginLeft: '12px' }}>致電成泰</Typography>
            </Stack>
            <Grid item xs={8} className={classes.contactPhone}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: '12px' }}>
                    <Typography variant='h5' component='p' sx={{ color: 'var(--white)' }}>tel</Typography>
                    <Typography variant='h4' component='p' sx={{ color: 'var(--white)', marginLeft: 4 }}>05-285-6505</Typography>
                    <Typography variant='h4' component='p' sx={{ color: 'var(--white)', marginLeft: 4 }}>09-68-898-721</Typography>
                </Box>
                <Typography variant='body2' sx={{ color: 'var(--white)' }}>【電話受理時間】周一至周五 早上8:00-12:00; 下午13:30-17:30(國定假日不受理)</Typography>
            </Grid>
        </Grid>
        <Grid container flexDirection='column' sx={{ marginBottom: 7 }}>
            <Stack direction='row' alignItems='center' sx={{ marginBottom: '36px' }}>
                <AppRegistrationRounded sx={{ color: 'var(--primary60)' }} />
                <Typography variant='subtitle1' sx={{ color: 'var(--neutral20)', marginLeft: '12px' }}>詢問及報價</Typography>
            </Stack>
            <Grid item xs={8} sx={{ margin: '0 auto', width: '100%' }}>
                <ContactForm classes={classes} />
            </Grid>
        </Grid>
    </Box>
)
// 預約 詢問表單
const ContactForm = ({ classes }) => {
    const formInfo = [
        {
            inputLable: '姓名*',
            id: 'input-name',
            type: 'text',
            name: 'entry.573583167',
            placeholder: '請填寫全名',
        },
        {
            inputLable: '電話*',
            id: 'input-phone',
            type: 'phone',
            name: 'entry.1404911985',
            placeholder: '例 : 09-12-345-678',
        },
        {
            inputLable: '信箱*',
            id: 'input-email',
            type: 'email',
            name: 'entry.1487827096',
            placeholder: '例 : example@gmail.com',
        },
        {
            inputLable: '詢問類別*',
            value: ['設計規劃', '工程施工', '維修服務', '保養服務', '節能改善', '其他'],
            type: 'checkbox',
            name: 'entry.1787171687',
        },
        {
            inputLable: '詢問內容*',
            id: 'text-area',
            multiline: true,
            minRows: 5,
            name: 'entry.472842146',
            placeholder: '請填寫詢問內容',
        },
    ]
    return (
        <Box component='form' noValidate autoComplete='off' method='post' sx={{ padding: '48px 96px', boxShadow: '0px 1px 3px rgba(0,0,0,0.25)' }}
            action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSearVe5J1MuUlRiciuKxCPESmx38nOCApXW4V9FELTJwr_lqQ/formResponse'
        >
            {
                formInfo.map(item => (
                    item.inputLable === '詢問類別*' ? (
                        <Stack direction='row' spacing={3} className={classes.inputGroup} key={item.inputLable}>
                            <InputLabel className={classes.textAreaTitle}>{item.inputLable}</InputLabel>
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
                        <Stack direction='row' spacing={3} className={classes.inputGroup} key={item.inputLable}>
                            <InputLabel className={item.id === 'text-area' ? classes.textAreaTitle : classes.inputTitle} htmlFor={item.id}>{item.inputLable}</InputLabel>
                            <CustomerTextField type={item.type} name={item.name} placeholder={item.placeholder} id={item.id} required sx={{ width: '100%' }}
                                className={item.id === 'text-area' && classes.textArea}
                                multiline={item.multiline && true} minRows={item.multiline && item.minRows} />
                        </Stack>
                    )
                ))
            }
            <Button type='submit' className={classes.submitBtn}><Typography variant='button'>確認送出</Typography></Button>
        </Box>
    )
}

const useStyles = makeStyles(theme => ({
    title: {
        fontSize: 64,
        color: 'rgba(255,255,255,0)',
        WebkitTextStroke: '1px var(--primary60)',
        fontFamily: 'Open Sans',
        fontWeight: 'bold',
        opacity: 0.5
    },
    // 聯絡資訊
    infoTxt: {
        marginBottom: '6px',
        color: 'var(--neutral20)'
    },
    // 預約
    contactPhone: {
        padding: '16px 0',
        background: 'var(--primary60)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 auto',
        width: '100%'
    },
    // 表單
    inputTitle: {
        width: '25%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        color: 'var(--neutral20)'
    },
    inputGroup: {
        marginBottom: 24,
        display: 'flex',
        flexDirection: 'row'
    },
    submitBtn: {
        color: 'var(--white)',
        backgroundColor: 'var(--primary60)',
        width: '75%',
        marginLeft: '25%',
        marginTop: 48,
        '&:hover': {
            backgroundColor: 'var(--primary40)',
        }
    },
    checkBox: {
        width: 16,
        marginRight: 6,
        border: 0,
        color: 'var(--neutral20)',
        '&.Mui-checked': {
            color: 'var(--primary60)',
        },
    },
    checkBoxLabel: {
        color: 'var(--neutral20)'
    },
    checkboxGroup: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 0,
        width: '100%',
        marginLeft: 24
    },
    textArea: {
        '& .MuiOutlinedInput-root': {
            padding: 0,
        }
    },
    textAreaTitle: {
        width: '25%',
        textAlign: 'right',
        marginTop: '12px',
        color: 'var(--neutral20)'
    }
}))

function ContactUsPage() {
    const classes = useStyles()
    return (
        <ContainerStyles disableGutters>
            <Information classes={classes} />
            <Contact classes={classes} />
        </ContainerStyles>
    )
}

export default ContactUsPage