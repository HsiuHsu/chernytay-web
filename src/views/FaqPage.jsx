import React from 'react'
import QuestionCard from '../components/QuestionCard'
import { ContainerStyles } from '../utils/useCustomerComponentStyles'
import { Button, Grid, Stack, Typography } from '@mui/material'
import { makeStyles, useTheme } from '@mui/styles'
import { faqItems } from '../components/FaqItems'
import { fadeIn } from '../public/css/animation'

const useStyles = makeStyles((theme) => ({
    faqContainer: {
        background: 'var(--surface)',
        display: 'flex',
        paddingTop: '56px',
        paddingBottom: '144px'
    },
    faqTitle: {
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
        color: 'var(--on-surface-variant)'
    }
}))

function FaqPage() {
    const classes = useStyles()
    const theme = useTheme()
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
        <Grid className={classes.faqContainer} sx={{ animation: `${fadeIn} 1000ms ${theme.transitions.easing.easeInOut}` }}>
            <ContainerStyles disableGutters >
                <Typography variant='h1' component='h2' className={classes.faqTitle}>Question</Typography>
                <Typography variant='subtitle1' className={classes.faqSubtitle}>????????????</Typography>
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
                <Typography variant='body2' sx={{ marginTop: 6, color: 'var(--neutral40)' }}>????????????????????????????????????????????????????????????????????????????????????????????????</Typography>
            </ContainerStyles>
        </Grid>
    )
}

export default FaqPage