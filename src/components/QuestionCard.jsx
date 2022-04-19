import { Accordion, AccordionDetails, AccordionSummary, Card, Typography } from '@mui/material'
import React from 'react'

export default function QuestionCard({ getExpand, getDefaultExpand, getExpandIcon, faqTitle, faqItems, classes, faqId }) {
    return (
        <Accordion disableGutters id={faqId} expanded={getExpand} defaultExpanded={getDefaultExpand} square elevation={0} sx={{ border: '1px solid var(--surface-variant)' }}>
            <AccordionSummary expandIcon={getExpandIcon} sx={{ padding: 0, marginX: '16px', borderBottom: '1px solid var(--neutral60)' }}>
                <Typography variant='subtitle1' className={classes.title}>{faqTitle}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {faqItems}
            </AccordionDetails>
        </Accordion>
    )
}
