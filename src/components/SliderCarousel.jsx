import React, { useState } from 'react'
import { Box, IconButton, Stack } from '@mui/material'
import { ArrowBackIosRounded, ArrowForwardIosRounded } from '@mui/icons-material'
import slierImg1 from '../public/img/小型空調/吊隱冷氣線型出風口.jpg'
import slierImg2 from '../public/img/大型空調/多聯吊隱室內機.jpg'
import slierImg3 from '../public/img/大型空調/方形冷卻水塔.jpg'
import { useTheme } from "@mui/material/styles";

const ArrowBtn = ({ direction, handleArrowClick }) => (
    <IconButton onClick={handleArrowClick}
        sx={{
            position: 'absolute',
            top: '50%',
            right: `${direction === 'right' && '24px'}`,
            left: `${direction === 'left' && '24px'}`,
            background: 'rgba(255,255,255,0.3)',
            opacity: 0.5,
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'transform ease-in 0.1s',
            '&:hover': {
                transform: 'scale(1.1)',
                background: 'rgba(255,255,255,0.3)',
                opacity: 0.7
            },
            '& button': {
                transform: `translateX(${direction === 'left' ? '-2' : '2'}px)`,
                '&:focus': {
                    outline: 0
                }
            }
        }}>
        {direction === 'right' ? <ArrowForwardIosRounded sx={{ color: 'var(--white)', fontSize: { xs: 16, md: 24 } }} /> : <ArrowBackIosRounded sx={{ color: 'var(--white)', fontSize: { xs: 16, md: 24 } }} />}
    </IconButton>
)
const SlideImg = ({ windowWidth, img }) => {
    const theme = useTheme()
    return (
        <Box sx={{
            height: 500,
            width: windowWidth,
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            [theme.breakpoints.up('xs')]: {
                height: 500
            },
            [theme.breakpoints.up('lg')]: {
                height: '100vh'
            }
        }} />
    )
}
const SlideDot = ({ content, activeIndex, slider, setSlider, windowWidth }) => {
    const handleDotClick = (e) => {
        const dotId = Number(e.target.id)
        if (dotId === 0) {
            setSlider({ ...slider, activeIndex: 0, translate: 0 })
        } else if (dotId > activeIndex) {
            setSlider({ ...slider, activeIndex: dotId, translate: (activeIndex + dotId - activeIndex) * windowWidth })
        } else {
            setSlider({ ...slider, activeIndex: dotId, translate: (activeIndex - dotId) * windowWidth })
        }
    }
    return (
        <Stack direction='row' spacing={0.75} sx={{
            textAlign: { xl: 'left' },
            position: 'absolute',
            bottom: { xs: 24, sm: 36, lg: 48 },
            alignItems: 'center',
            justifyContent: { xs: 'center', sm: 'flex-end' },
            right: { xs: 16, sm: 32, md: 24, lg: 200, xl: 'calc(50% - 564px)' },
            width: '100%',
            height: 2,
            zIndex: 3000
        }}>
            {
                content.map((dot, index) => (<Box id={index} key={dot + index} onClick={(e) => handleDotClick(e)} sx={{
                    padding: '1px',
                    cursor: 'pointer',
                    width: { xs: '0.75rem', sm: '1.5rem' },
                    borderRadius: '5px',
                    background: `${activeIndex === index ? 'var(--white)' : 'rgba(255,255,255,0.3)'}`
                }} />))
            }
        </Stack>
    )
}

function SliderCarousel({ sliderWidth }) {
    const content = [slierImg1, slierImg2, slierImg3]
    const [slider, setSlider] = useState({
        activeIndex: 0, // 當前圖片index
        translate: 0,   // slide width
    })
    const { activeIndex, translate } = slider
    // 按鈕 => 下一張
    const nextSlide = () => {
        if (activeIndex === content.length - 1) {
            return setSlider({ ...slider, activeIndex: 0, translate: 0 })
        }
        setSlider({ ...slider, activeIndex: activeIndex + 1, translate: (activeIndex + 1) * sliderWidth })
    }
    // 按鈕 => 前一張
    const preSlide = () => {
        if (activeIndex === 0) {
            return setSlider({ ...slider, activeIndex: slider.length - 1, translate: (slider.length - 1) * sliderWidth })
        }
        setSlider({ ...slider, activeIndex: activeIndex - 1, translate: (activeIndex - 1) * sliderWidth })
    }

    return (
        <Box sx={{
            display: 'flex', position: 'relative', height: { xs: 500, lg: '100vh' }, maxWidth: sliderWidth, width: '100 % ', margin: '0 auto', overflow: 'hidden'
        }}>
            <Box sx={{
                transform: `TranslateX(-${translate}px)`,
                transition: 'transform ease-out 0.45s',
                display: 'flex', height: { xs: 500, lg: '100vh' }, width: sliderWidth * content.length
            }
            } >
                {content.map((img, index) => (<SlideImg windowWidth={sliderWidth} img={img} key={index} />))}
            </ Box>
            {/* <ArrowBtn direction='left' handleArrowClick={preSlide} /> */}
            {/* <ArrowBtn direction='right' handleArrowClick={nextSlide} /> */}
            <SlideDot content={content} activeIndex={activeIndex} slider={slider} setSlider={setSlider} windowWidth={sliderWidth} />
        </Box>
    )
}

export default SliderCarousel