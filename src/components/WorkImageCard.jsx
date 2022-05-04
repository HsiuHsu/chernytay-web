import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Skeleton, Typography } from '@mui/material'

function WorkImageCard({ imageIsLoading, handleImgClick, imgUrl, imgName, galleryTitle, gallerySubtitle }) {

    return (
        <Card elevation={2} sx={{ height: '100%', borderRadius: 0 }} onClick={handleImgClick}>
            <CardActionArea>
                {
                    imageIsLoading ? (
                        <Skeleton variant='rectangular' height={250} />
                    ) : (
                        <CardMedia component='img' height='250'
                            image={require('../public/img/' + imgUrl + '/' + imgName + '.jpg')}
                            // image={image}
                            alt={imgName} />
                    )
                }
                {/* <CardMedia component='img' height='250'
                    // image={require('../public/img/' + imgUrl + '/' + imgName + '.jpg')} 
                    image={image}
                    alt={imgName} />
                <CardContent>
                    <Typography gutterBottom variant='h6' sx={{ color: 'var(--primary40)' }} >{galleryTitle}</Typography>
                    <Typography gutterBottom variant='body1' sx={{ color: 'var(--neutral40)' }}>{gallerySubtitle}</Typography>
                </CardContent> */}
                <CardContent>
                    <Typography gutterBottom variant='h6' component='div' sx={{ color: 'var(--primary40)' }} >{imageIsLoading ? <Skeleton /> : galleryTitle}</Typography>
                    <Typography gutterBottom variant='body1' component='div' sx={{ color: 'var(--neutral40)' }}>{imageIsLoading ? <Skeleton /> : gallerySubtitle}</Typography>
                </CardContent>

            </CardActionArea>
        </Card >
    )
}

export default WorkImageCard