import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Card, Typography } from '@mui/material'

export default function QuestionCard({ getExpand, getDefaultExpand, getExpandIcon, faqTitle, faqItems, classes, faqId }) {
    return (
        <Accordion disableGutters id={faqId} expanded={getExpand} defaultExpanded={getDefaultExpand} square elevation={0}
            sx={{ border: '1px solid var(--surface-variant)', '&:before': { height: 0 } }}>
            <AccordionSummary expandIcon={getExpandIcon} sx={{ padding: 0, marginX: '16px' }}>
                <Typography variant='subtitle1' className={classes.questionTitle}>{faqTitle}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ borderTop: '1px solid var(--neutral60)', padding: '8px 0 16px 0', margin: '0 16px 0 16px' }}>
                {faqItems}
            </AccordionDetails>
        </Accordion >
    )
}
