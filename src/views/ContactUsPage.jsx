import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Avatar, Box, Divider, Grid, Typography, InputLabel, Stack, TextareaAutosize, Button, Checkbox, FormLabel, FormControlLabel, FormGroup, FormControl, FormHelperText } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { alpha } from '@mui/system'
import { AppRegistrationRounded, CheckBox, PhoneRounded } from '@mui/icons-material'
import { ContainerStyles, CustomerTextField } from '../utils/useCustomerComponentStyles'

// 聯絡資訊
const Information = ({ classes }) => (
    <Grid container display='flex' justifyContent='flex-end' sx={{ position: 'relative', height: 'fit-content', paddingTop: 12, paddingBottom: 18 }}>
        <Typography variant='h1' component='h2' className={classes.title} sx={{ position: 'absolute', left: 0, top: '56px', }}>Information</Typography>
        <Grid item xs={10} sx={{ background: 'var(--primary99)', px: 8, py: 7 }}>
            <Typography variant='subtitle1' sx={{ color: 'var(--neutral60)', marginBottom: 3 }}>聯絡資訊</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                    <Typography variant='h5' sx={{ color: 'var(--primary40)', marginBottom: '6px' }}>成泰冷凍空調有限公司</Typography>
                    <Typography variant='h6' sx={{ color: 'var(--primary60)', marginBottom: 3 }}>專業空調工程服務</Typography>
                    <Typography variant='body1' className={classes.infoTxt}>嘉義市西區大同路18號</Typography>
                    <Typography variant='body1' className={classes.infoTxt}>電話  05-2856505</Typography>
                    <Typography variant='body1' className={classes.infoTxt}>傳真  05-2859665</Typography>
                    <Typography variant='body1' className={classes.infoTxt}>信箱  cherng.tay@msa.hinet.net</Typography>
                    <Typography variant='body1'>LINE ID  0968898721</Typography>
                    <Divider sx={{ my: 3, width: '72px', borderColor: 'var(--neutral60)' }} />
                    <Typography variant='body1' className={classes.infoTxt}>周一 ~ 週五</Typography>
                    <Typography variant='body1' className={classes.infoTxt}>早上  08:00-12:00 </Typography>
                    <Typography variant='body1'>下午  13:30-17:30</Typography>
                </Box>
                <Box sx={{ width: '62.5%', marginLeft: 3 }}>
                    {/* <img src={require('../public/png/map.png')} alt='map' /> */}
                    <Avatar src={require('../public/png/map.png')} alt='map'
                        sx={{ width: '100%', height: 'auto' }}
                        variant='square'
                    // variant="square" sx={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                    <Typography variant='body2' component='a' href='https://www.google.com.tw/maps/place/%E6%88%90%E6%B3%B0%E5%86%B7%E5%87%8D%E7%A9%BA%E8%AA%BF%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/@23.4750252,120.4328942,19z/data=!4m5!3m4!1s0x346e969db240be1f:0xd347ed10467411c8!8m2!3d23.4750506!4d120.4331484?hl=zh-TW'
                        target='_blank' rel='noreferrer noopener' sx={{ color: 'var(--primary40)', display: 'block', textAlign: 'right', marginTop: '12px' }}>查看google地圖</Typography>
                </Box>
            </Box>
        </Grid>
    </Grid>
)
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
                <Typography variant='body1' sx={{ color: 'var(--white)' }}>【電話受理時間】周一至周五 早上8:00-12:00; 下午13:30-17:30(國定假日不受理)</Typography>
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
    const [getFormValue, setGetFormValue] = useState({
        name: '',
        phone: '',
        email: '',
        category: [],
        description: '',
    })
    const [getFormState, setGetFormState] = useState({
        nameState: false,
        phoneState: false,
        emailState: false,
        categoryState: false,
        descriptionState: false,
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        setGetFormState && setGetFormState({ ...getFormState, nameState: false, phoneState: false, emailState: false, categoryState: false, descriptionState: false })
        const newGetFormState = { ...getFormState }
        if (getFormValue.name === '')
            newGetFormState.nameState = true
        if (getFormValue.phone === '')
            newGetFormState.phoneState = true
        if (getFormValue.email === '')
            newGetFormState.emailState = true
        if (getFormValue.description === '')
            newGetFormState.descriptionState = true
        if (getFormValue.category.length === 0)
            newGetFormState.categoryState = true
        setGetFormState(newGetFormState)

        const data = {
            'entry.1460789663': getFormValue.name,
            'entry.462311884': getFormValue.phone,
            'entry.1861811051': getFormValue.email,
            // 'category': getFormValue.category.join(','),
            'entry.235024568': getFormValue.category.join(','),
            'entry.121808905': getFormValue.description,
        }
        console.log(data);
        // axios({
        //     method: 'post',
        //     url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScvZTBN2wNAJRqv6Zu6fZ3QoBhRrHZwAIuaMVanecRprTQhYA/formResponse',
        //     body: data,
        //     // contentType: 'application/json',
        //     // dataType: 'jsonp',
        //     complete: function () {
        //         alert('資料已送出！');
        //     }
        // })
        try {
            axios.post('https://docs.google.com/forms/u/0/d/e/1FAIpQLScvZTBN2wNAJRqv6Zu6fZ3QoBhRrHZwAIuaMVanecRprTQhYA/formResponse', {
                'entry.1460789663': '2',
                'entry.462311884': '3',
                'entry.1861811051': '5',
                // 'category': getFormValue.category.join(','),
                'entry.235024568': '6',
                'entry.121808905': '1'
            })
        } catch (error) {
            console.log('@@error:', error);
        }

    }
    const handleCategoryChange = (e) => {
        const index = getFormValue.category.indexOf(e.target.value)
        if (index === -1) {
            setGetFormValue({ ...getFormValue, category: [...getFormValue.category, e.target.value] })
        } else {
            const filterItem = getFormValue.category.filter(item => item !== e.target.value)
            setGetFormValue({ ...getFormValue, category: filterItem })
        }
        if (getFormValue.category !== []) {
            setGetFormState({ ...getFormState, categoryState: false })
        }
    }
    const handleFormValue = (e) => {
        const inputId = e.target.id
        if (inputId === 'input-name') {
            setGetFormValue && setGetFormValue({ ...getFormValue, name: e.target.value })
            if (getFormValue.name !== '')
                setGetFormState({ ...getFormState, nameState: false })
        }
        if (inputId === 'input-phone') {
            setGetFormValue && setGetFormValue({ ...getFormValue, phone: e.target.value })
            if (getFormValue.phone !== '')
                setGetFormState({ ...getFormState, phoneState: false })
        }
        if (inputId === 'input-email') {
            setGetFormValue && setGetFormValue({ ...getFormValue, email: e.target.value })
            if (getFormValue.email !== '')
                setGetFormState({ ...getFormState, emailState: false })
        }
        if (inputId === 'text-area') {
            setGetFormValue && setGetFormValue({ ...getFormValue, description: e.target.value })
            if (getFormValue.description !== '')
                setGetFormState({ ...getFormState, descriptionState: false })
        }
    }
    return (
        <Box component='form' noValidate autoComplete='off'
            // action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSearVe5J1MuUlRiciuKxCPESmx38nOCApXW4V9FELTJwr_lqQ/formResponse'
            // method='post'
            sx={{ padding: '48px 96px', boxShadow: '0px 1px 3px rgba(0,0,0,0.25)' }} onSubmit={handleSubmit}>
            <Stack direction='row' spacing={3} className={classes.inputGroup}>
                <InputLabel error={getFormState.nameState} htmlFor='input-name' className={classes.inputTitle}>姓名*</InputLabel>
                <CustomerTextField error={getFormState.nameState} type='text' value={getFormValue.name} placeholder='請填寫全名' id='input-name' helperText={getFormState.nameState ? '此欄位必填' : ''} sx={{ width: '100%' }} required
                    onChange={e => { handleFormValue(e) }} />
            </Stack>
            <Stack direction='row' spacing={3} className={classes.inputGroup}>
                <InputLabel error={getFormState.phoneState} htmlFor='input-phone' className={classes.inputTitle}>電話*</InputLabel>
                <CustomerTextField error={getFormState.phoneState} type='phone' placeholder='例 : 09-12-345-678' id='input-phone' helperText={getFormState.phoneState ? '此欄位必填' : ''} sx={{ width: '100%' }} required
                    onChange={e => { handleFormValue(e) }} />
            </Stack>
            <Stack direction='row' spacing={3} className={classes.inputGroup}>
                <InputLabel error={getFormState.emailState} htmlFor='input-email' className={classes.inputTitle}>信箱*</InputLabel>
                <CustomerTextField error={getFormState.emailState} type='email' placeholder='例 : example@gmail.com' id='input-email' helperText={getFormState.emailState ? '此欄位必填' : ''} sx={{ width: '100%' }} required
                    onChange={e => { handleFormValue(e) }} />
            </Stack>
            <Stack direction='row' spacing={3} className={classes.inputGroup}>
                <FormLabel error={getFormState.categoryState} htmlFor='checkbox-category' sx={{ width: '25%', textAlign: 'right', marginTop: '12px', color: 'var(--neutral20)' }}>詢問類別*</FormLabel>
                <Box sx={{ width: '100%' }}>
                    <FormGroup id='checkbox-category' className={classes.checkboxGroup}>
                        {
                            ['設計規劃', '工程施工', '維修服務', '保養服務', '節能改善', '其他'].map(serviceItem => (
                                <FormControlLabel control={<Checkbox value={serviceItem} checked={getFormValue.category?.includes(serviceItem)} className={classes.checkBox} onChange={(e) => {
                                    handleCategoryChange(e)
                                }} inputProps={{ 'aria-label': 'controlled' }} />} label={serviceItem} key={serviceItem} className={classes.checkBoxLabel} />
                            ))
                        }
                    </FormGroup>
                    {getFormState.categoryState && <FormHelperText error={getFormState.categoryState} sx={{ mx: '14px' }}>此欄位必填</FormHelperText>}
                </Box>
            </Stack>
            <Stack direction='row' spacing={3}>
                <InputLabel error={getFormState.descriptionState} htmlFor='text-area' sx={{ width: '25%', textAlign: 'right', marginTop: '12px', color: 'var(--neutral20)' }}>詢問內容*</InputLabel>
                <Box sx={{ width: '100%' }}>
                    <CustomerTextField id='text-area' multiline minRows={5} placeholder='請填寫詢問內容' className={classes.textArea} required
                        onChange={e => { handleFormValue(e) }} />
                    {getFormState.descriptionState && <FormHelperText error={getFormState.descriptionState} sx={{ mx: '14px' }}>此欄位必填</FormHelperText>}
                </Box>
            </Stack>
            <Button type='submit' className={classes.submitBtn}><Typography variant='button'>確認送出</Typography></Button>
        </Box>
    )
}

const FormTest = () => {
    return (
        <Box component='form' noValidate autoComplete='off'
            action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSearVe5J1MuUlRiciuKxCPESmx38nOCApXW4V9FELTJwr_lqQ/formResponse'
            method='post'>
            <Stack>
                <InputLabel>姓名</InputLabel>
                <CustomerTextField type='text' name='entry.573583167' />
            </Stack>
            <Stack>
                <InputLabel>電話</InputLabel>
                <CustomerTextField type='phone' name='entry.1404911985' />
            </Stack>
            <Stack>
                <InputLabel>信箱</InputLabel>
                <CustomerTextField type='email' name='entry.1487827096' />
            </Stack>
            <Stack>
                <InputLabel>信箱</InputLabel>
                <CustomerTextField multiline minRows={5} name='entry.472842146' />
            </Stack>
            <Stack>
                <Stack>
                    <InputLabel htmlFor='設計規劃' />
                    <CustomerTextField type='checkbox' name='entry.1787171687' value='設計規劃' id='設計規劃' />
                </Stack>
                <Stack>
                    <InputLabel htmlFor='工程施工' />
                    <CustomerTextField type='checkbox' name='entry.1787171687' value='工程施工' id='工程施工' />
                </Stack>
                <Stack>
                    <InputLabel htmlFor='維修服務' />
                    <CustomerTextField type='checkbox' name='entry.1787171687' value='維修服務' id='維修服務' />
                </Stack>
                <Stack>
                    <InputLabel htmlFor='保養服務' />
                    <CustomerTextField type='checkbox' name='entry.1787171687' value='保養服務' id='保養服務' />
                </Stack>
                <Stack>
                    <InputLabel htmlFor='節能改善' />
                    <CustomerTextField type='checkbox' name='entry.1787171687' value='節能改善' id='節能改善' />
                </Stack>
                <Stack>
                    <InputLabel htmlFor='其他' />
                    <CustomerTextField type='checkbox' name='entry.1787171687' value='其他' id='其他' />
                </Stack>
            </Stack>
            <Button type='submit'>送出</Button>
        </Box>
    )
}

const useStyles = makeStyles(theme => ({
    infoTxt: {
        marginBottom: '6px',
        color: 'var(--neutral20)'
    },
    title: {
        fontSize: 64,
        color: 'rgba(255,255,255,0)',
        WebkitTextStroke: '1px var(--primary60)',
        fontFamily: 'Open Sans',
        fontWeight: 'bold',
        opacity: 0.5
    },
    contactPhone: {
        padding: '16px 0',
        background: 'var(--primary60)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 auto',
        width: '100%'
    },
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
        marginTop: 0
    },
    textArea: {
        width: '100%',
        // padding: '12px 16px',
        padding: 0,
        border: 0,
        borderRadius: 4,
        background: 'var(--neutral99)',
        '&:focus': {
            outline: '1px solid var(--primary60)',
            boxShadow: `${alpha('#5FA055', 0.25)} 0 0 0 0.25rem`
        },
        '& .MuiOutlinedInput-root': {
            padding: 0,
        }
    }
}))

function ContactUsPage() {
    const classes = useStyles()
    return (
        <ContainerStyles disableGutters>
            <Information classes={classes} />
            <Contact classes={classes} />
            {/* <FormTest /> */}
        </ContainerStyles>
    )
}

export default ContactUsPage