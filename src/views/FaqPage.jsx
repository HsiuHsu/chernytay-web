import React from 'react'
import QuestionCard from '../components/QuestionCard'
import { ContainerStyles } from '../utils/useCustomerComponentStyles'
import { faqItems } from '../components/FaqItems'
import { Button, Grid, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    faqContainer: {
        background: 'var(--surface)',
        display: 'flex',
        paddingTop: '72px',
        paddingBottom: '144px',
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
    title: {
        color: 'var(--on-surface-variant)',
    }
}))

function FaqPage() {
    const classes = useStyles()
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