import React from 'react'
import { ImageList, ImageListItem, ImageListItemBar, Skeleton } from '@mui/material';

function WorkImageList(getImg) {
    return (
        <ImageList variant='masonry' cols={3} gap={24}>
            {
                getImg.getImg.map(item =>
                    <ImageListItem key={item.id}>
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