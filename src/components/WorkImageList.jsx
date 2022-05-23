import React from 'react'
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';

function WorkImageList(getImg) {
    return (
        <ImageList variant='masonry' sx={{
            columnCount: {
                xs: '1 !important',
                sm: '2 !important',
                xl: '3 !important'
            },
            columnGap: {
                xs: '24px !important',
                sm: '16px !important',
                xl: '24px !important',
            }
        }}>
            {
                getImg.getImg.map(item =>
                    <ImageListItem key={item.id} sx={{ marginBottom: '24px !important' }}>
                        <img
                            src={require('../public/img/' + item.imgUrl + item.imgName + '.jpg')}
                            alt={item.name}
                            loading='lazy'
                        />
                        <ImageListItemBar position='bottom' title={item.name} />
                    </ImageListItem>
                )
            }
        </ImageList>
    )
}

export default WorkImageList