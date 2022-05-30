import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Skeleton, Typography } from '@mui/material'
import { useTheme } from '@mui/styles';
import { fadeIn } from '../public/css/animation';

function WorkImageCard({ isLoading, imgUrl, imgName, galleryTitle, gallerySubtitle }) {
    const theme = useTheme()
    return (
        <Card elevation={2} sx={{
            height: '100%', borderRadius: 0,
            '& .MuiButtonBase-root': { display: 'flex', flexDirection: 'column', alignItems: 'center' }
        }}>
            <CardActionArea sx={{ height: '100%', justifyContent: 'flex-start' }}>
                {
                    isLoading ? (
                        <Skeleton variant='rectangular' height={250} sx={{ width: '100%' }} />
                    ) : (
                        <CardMedia component='img' height='250'
                            image={require('../public/img/jpg/' + imgUrl + '/' + imgName + '.jpg')}
                            alt={imgName}
                            sx={{ animation: `${fadeIn} 300ms ${theme.transitions.easing.easeInOut}` }} />
                    )
                }
                <CardContent id={imgName} sx={{ width: '100%' }}>
                    <Typography gutterBottom variant='h6' component='div' sx={{ color: 'var(--primary40)' }} >{isLoading ? <Skeleton /> : galleryTitle}</Typography>
                    <Typography gutterBottom variant='body1' component='div' sx={{ color: 'var(--neutral40)' }}>{isLoading ? <Skeleton /> : gallerySubtitle}</Typography>
                </CardContent>
            </CardActionArea>
        </Card >
    )
}

export default WorkImageCard