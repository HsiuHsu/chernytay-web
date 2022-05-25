import React from 'react'
import QuestionCard from '../components/QuestionCard'
import { ContainerStyles } from '../utils/useCustomerComponentStyles'
import { Button, Grid, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { FaqItem1, FaqItem2, FaqItem3, FaqItem4, FaqItem5, FaqItem6, FaqItem7, FaqItem8, FaqItem9 } from '../components/FaqItems'

const useStyles = makeStyles((theme) => ({
    faqContainer: {
        background: 'var(--surface)',
        display: 'flex',
        paddingTop: '72px',
        paddingBottom: '144px',
    },
    faqTitle: {
        marginBottom: 8,
        color: 'rgba(255,255,255,0)',
        WebkitTextStroke: '1px var(--primary60)',
        fontFamily: 'Open Sans',
        fontWeight: 'bold',
        opacity: 0.5,
        [theme.breakpoints.up("xs")]: {
            fontSize: 45,
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: 64,
        },
    },
    faqSubtitle: {
        marginBottom: 48,
        color: 'var(--neutral60)'
    },
    scrollBtn: {
        marginRight: '6px',
        marginBottom: '16px',
        borderRadius: 20,
        color: 'var(--on-surface-variant)',
        border: '1px solid var(--neutral80)',
        '&:hover': {
            border: '1px solid var(--on-surface-variant)',
            background: 'var(--neutral95)'
        },
        scrollBehavior: 'smooth'
    },
    questionTitle: {
        color: 'var(--on-surface-variant)',
    },
    // faq items
    mb6: { marginBottom: 6 },
    txt: { color: 'var(--on-surface-variant)' },
    listGroup: {
        listStyle: 'decimal',
        listStylePosition: 'inside',
        marginBottom: 6,
        '& li': {
            marginBottom: 6,
        },
        '& li:nth-last-child(1)': {
            marginBottom: 0
        },
    },
}))

function FaqPage() {
    const classes = useStyles()
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
            title: '關於冷氣，不可不知的事',
            item: <FaqItem3 classes={classes} />,
            url: '#faqItem3',
            id: 'faqItem3'
        },
        {
            title: '精打細算，省電不麻煩',
            item: <FaqItem4 classes={classes} />,
            url: '#faqItem4',
            id: 'faqItem4'
        },
        {
            title: '變頻式冷氣機的優點',
            item: <FaqItem5 classes={classes} />,
            url: '#faqItem5',
            id: 'faqItem5'
        },
        {
            title: '公式換算',
            item: <FaqItem6 classes={classes} />,
            url: '#faqItem6',
            id: 'faqItem6'
        },
        {
            title: '冷氣耗電如何換算？',
            item: <FaqItem7 classes={classes} />,
            url: '#faqItem7',
            id: 'faqItem7'
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
    const handleClick = (e) => {
        e.preventDefault()
        const target = e.target.getAttribute('href')
        const location = document.querySelector(target).offsetTop
        window.scrollTo({
            left: 0,
            top: location - 120,
            behavior: 'smooth'
        })
    }
    return (
        <Grid className={classes.faqContainer}>
            <ContainerStyles disableGutters >
                <Typography variant='h1' component='h2' className={classes.faqTitle}>Question</Typography>
                <Typography variant='subtitle1' className={classes.faqSubtitle}>常見問題</Typography>
                <Stack direction='row' justifyContent='flex-start' flexWrap='wrap'>
                    {
                        faqItems.map((faqItem) => (<Button variant='outlined' href={faqItem.url} key={faqItem.title} className={classes.scrollBtn} onClick={handleClick}>{faqItem.title}</Button>))
                    }
                </Stack>
                <Grid container direction='column' spacing={3} sx={{ marginTop: 4 }}>
                    {faqItems.map((faqItem) => (
                        <Grid item key={faqItem.title}>
                            <QuestionCard getExpand={true} getDefaultExpand={true} faqTitle={faqItem.title} faqItems={faqItem.item} classes={classes} faqId={faqItem.id} />
                        </Grid>
                    ))}
                </Grid>
                <Typography variant='body2' sx={{ marginTop: 6, color: 'var(--neutral40)' }}>以上資訊來源參考「經濟部能源局」，更多資訊請上網搜尋「節能專區」</Typography>
            </ContainerStyles>
        </Grid>
    )
}

export default FaqPage