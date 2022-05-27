import React, { useState } from 'react'
import { Backdrop, IconButton, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { CloseRounded } from '@mui/icons-material'
import { ContainerStyles } from '../utils/useCustomerComponentStyles';

const ImgItem = ({ imgUrl, imgName, name }) => {
    // icon close pic
    const [imgView, setImgView] = useState(false)
    return (
        <>
            <ImageListItem sx={{ marginBottom: '24px !important', position: 'relative' }}>
                <img
                    src={require('../public/img/' + imgUrl + imgName + '.jpg')}
                    alt={name}
                    loading='lazy'
                    onClick={() => setImgView(true)}
                    style={{ cursor: 'pointer' }}
                />
                <ImageListItemBar position='bottom' title={name}
                    sx={{
                        '& div': { padding: 0 },
                        '& div div': {
                            fontSize: { xs: 12, sm: 14, xl: 16 },
                            padding: { xs: '6px 8px', sm: '12px 16px' }
                        }
                    }}
                />
            </ImageListItem>
            <Backdrop invisible sx={{ zIndex: 1200, backgroundColor: 'rgba(0,0,0,0.9)' }} open={imgView} onClick={() => setImgView(false)}>
                <ContainerStyles disableGutters>
                    <IconButton sx={{
                        position: 'absolute', top: 0, right: 0, margin: 2, backgroundColor: 'var(--neutral60)', opacity: 0.5,
                        '&:hover': { backgroundColor: 'var(--neutral40)', }
                    }}
                        onClick={() => setImgView(false)}>
                        <CloseRounded sx={{ color: 'var(--white)', fontSize: { xs: 14, md: 24 } }} />
                    </IconButton>
                    <div style={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '56px 0',
                        height: '80vh'
                    }}>
                        <img
                            src={require('../public/img/' + imgUrl + imgName + '.jpg')}
                            alt={name}
                            loading='lazy'
                            style={{ maxWidth: '100%', maxHeight: '80vh' }}
                        />
                    </div>
                </ContainerStyles>
            </Backdrop>
        </>
    )
}

function WorkImageList(getImg) {
    return (
        <ImageList variant='masonry' sx={{
            columnCount: {
                xs: '2 !important',
                md: '3 !important',
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
                    <ImgItem imgUrl={item.imgUrl} imgName={item.imgName} name={item.name} key={item.id} />
                )
            }
        </ImageList>
    )
}

export default WorkImageList