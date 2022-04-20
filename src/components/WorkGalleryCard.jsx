import { Card, CardActionArea, CardContent, CardMedia, Skeleton, Typography } from '@mui/material'
import React from 'react'

function WorkGalleryCard({ isLoading, image, imgUrl, imgName, galleryTitle, gallerySubtitle }) {
    return (
        <Card elevation={2} sx={{ height: '100%', borderRadius: 0 }}>
            <CardActionArea>
                <CardMedia component='img' height='250' image={require('../public/img/' + imgUrl + '/' + imgName + '.jpg')} alt={imgName} />
                <CardContent>
                    <Typography gutterBottom variant='h6' sx={{ color: 'var(--primary40)' }} >{galleryTitle}</Typography>
                    <Typography gutterBottom variant='body1' sx={{ color: 'var(--neutral40)' }}>{gallerySubtitle}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default WorkGalleryCard