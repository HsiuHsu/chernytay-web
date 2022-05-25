import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Skeleton, Typography } from '@mui/material'

function WorkImageCard({ imageIsLoading, imgUrl, imgName, galleryTitle, gallerySubtitle }) {
    return (
        <Card elevation={2} sx={{
            height: '100%', borderRadius: 0,
            '& .MuiButtonBase-root': { display: 'flex', flexDirection: 'column', alignItems: 'center' }
        }}>
            <CardActionArea>
                {
                    imageIsLoading ? (
                        <Skeleton variant='rectangular' height={250} />
                    ) : (
                        <CardMedia component='img' height='250'
                            image={require('../public/img/' + imgUrl + '/' + imgName + '.jpg')}
                            alt={imgName}
                        />
                    )
                }
                <CardContent id={imgName} sx={{ width: '100%' }}>
                    <Typography gutterBottom variant='h6' component='div' sx={{ color: 'var(--primary40)' }} >{imageIsLoading ? <Skeleton /> : galleryTitle}</Typography>
                    <Typography gutterBottom variant='body1' component='div' sx={{ color: 'var(--neutral40)' }}>{imageIsLoading ? <Skeleton /> : gallerySubtitle}</Typography>
                </CardContent>
            </CardActionArea>
        </Card >
    )
}

export default WorkImageCard