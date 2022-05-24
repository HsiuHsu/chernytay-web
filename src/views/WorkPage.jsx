/** @jsxImportSource @emotion/react */
import { jsx, css, keyframes } from "@emotion/react";
import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Box, Grid, List, Skeleton, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useTheme } from "@mui/material/styles";
import { ContainerStyles } from '../utils/useCustomerComponentStyles'
import WorkImageCard from "../components/WorkImageCard";

const workGalleryInfo = [
    {
        imgUrl: '小型空調',
        imgName: '分離式冷氣室外機',
        galleryTitle: '小型空調',
        gallerySubtitle: '依照客戶的需求及空間大小，規劃空調的擺放位置與噸數。',
        img: '/assets/image/分離式冷氣室外機.jpg'
    },
    {
        imgUrl: '大型空調',
        imgName: '多聯式室外機',
        galleryTitle: '大型空調',
        gallerySubtitle: '配合客戶的需求及空間裝修的施工工程，提供客戶高品質的安裝服務。'
    },
    {
        imgUrl: '空調維修',
        imgName: '乾燥過濾器更換後',
        galleryTitle: '空調維修',
        gallerySubtitle: '配依照現場評估空調的情況後，提供客戶最專業的維修品質。'
    },
    {
        imgUrl: '空調保養',
        imgName: '熱泵保養',
        galleryTitle: '空調保養',
        gallerySubtitle: '定期維護與保養，檢查空調與零件，使冷氣用得安心、吹得舒適健康。'
    }
]
const customersInfo = [
    '皇品大飯店',
    '海岸巡防署南部地區巡防局熱泵系統改善工程',
    '龍象實業股份有限公司',
    '海王星興業公司總部空調工程',
    '東陽實業辦公大樓',
    '冠軍磁磚展示中心辦公室',
    '斗六永寬化學大樓.廠房空調',
    '萬能工商VRV變頻空調',
    '嘉義嘉商VRV變頻空調',
    '嘉義市立兒童館VRV變頻空調',
    '嘉義市餐飲公會VRV變頻空調',
    '雲林科學園區汙水廠VRV空調',
    '斗南鐵道櫥窗VRV變頻空調',
    '南華大學南華學舍空調工程',
    '南華大學南華館空調工程',
    '佛光山圓福寺空調工程',
    '佛光山大林講堂空調工程',
    '佛光山員林講堂空調工程 ',
    '佛光山新營講堂空調工程',
    '佛光山苗栗大明寺',
    '嘉義市佛教協會',
    '嘉義縣佛教協會',
    '嘉義市圓善庵',
    '嘉義市地藏庵社教大樓VRV變頻空調',
    '永悅商務大飯店',
    '嘉義商旅大飯店',
    '玉山大飯店',
    '冠閣商務大飯店',
    '禾楓商務汽車旅館',
    '全國汽車旅館',
    '凱歐汽車旅館',
    '羅馬汽車旅館',
    '宜蘭杜拜汽車旅館',
    '邁阿密汽車旅館',
    '滿福樓海宴餐廳',
    '小原喜宴餐廳',
    '東園軒餐廳 ',
    '總合建材辦公室空調工程',
    '遠東汽車百貨廣場空調工程 ',
    '啄木鳥全省連鎖藥局',
    '三皇三家 ',
    '關仔嶺警光山莊 ',
    '瑞泰安養中心',
    '吉升飼料廠空調工程',
    '伊芮化粧品/紅彤企業辦公室空調',
]

const useStyles = makeStyles(theme => ({
    workTitle: {
        fontFamily: 'Open Sans',
        fontWeight: 'bold',
        color: 'rgba(255,255,255,0)',
        WebkitTextStroke: '1px var(--primary60)',
        opacity: 0.5,
        marginBottom: 8,
        [theme.breakpoints.up("xs")]: {
            fontSize: 45,
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: 64,
        }
    },
    workSubtitle: {
        marginBottom: 36,
        color: 'var(--neutral60)'
    },
    customerGroup: {
        position: 'relative',
        paddingTop: '44px',
        paddingBottom: '84px'
    },
    customerListGroup: {
        display: 'grid',
        [theme.breakpoints.up('sx')]: {
            gridTemplateColumns: 'repeat(1, 1fr)',
        },
        [theme.breakpoints.up('sm')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridColumnGap: '16px'
        },
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridColumnGap: '24px'
        }
    }
}))

const anim = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

function WorkPage() {
    const classes = useStyles()
    const theme = useTheme()
    // 圖片加載時
    const [imageIsLoading, setImageIsLoading] = useState(true);
    const [image, setImage] = useState({});
    const handleImageLoaded = () => {
        setImageIsLoading(false);
    };
    // 相簿路徑
    let navigate = useNavigate()
    const handleImgClick = (e) => {
        console.log(e);
        const getName = e.target.alt
        if (getName === '分離式冷氣室外機')
            navigate('/work/small-sized-air-condition')
        if (getName === '多聯式室外機')
            navigate('/work/big-sized-air-condition')
        if (getName === '乾燥過濾器更換後')
            navigate('/work/air-condition-repair')
        if (getName === '熱泵保養')
            navigate('/work/air-condition-maintain')
    }
    // 圖片加載
    useEffect(() => {
        const image = new Image();
        image.onload = handleImageLoaded;
        image.src = '/image/分離式冷氣室外機.jpg'
        setImage(image);
    }, []);

    return (
        <>
            <Box sx={{ paddingTop: 7, paddingBottom: 19, backgroundImage: { xs: 'linear-gradient(180deg, white 20%, rgba(45, 107, 40, 0.3) 0%)', sm: 'linear-gradient(180deg, white 30%, rgba(45, 107, 40, 0.3) 0%)' } }}
                css={css`animation: ${anim} 200ms ${theme.transitions.easing.easeInOut};`}
            >
                <ContainerStyles disableGutters>
                    <Typography variant='h1' component='h2' className={classes.workTitle}>Work</Typography>
                    <Typography variant='subtitle1' className={classes.workSubtitle}>工程紀錄</Typography>
                    <Grid container spacing={2} >
                        {
                            workGalleryInfo.map(item => (
                                <Grid item xs={12} sm={6} xl={4} key={item.imgName}>
                                    <WorkImageCard
                                        imgUrl={item.imgUrl} imgName={item.imgName} imageIsLoading={imageIsLoading}
                                        galleryTitle={item.galleryTitle} gallerySubtitle={item.gallerySubtitle}
                                        handleImgClick={(e) => handleImgClick(e)}
                                    />
                                </Grid>))
                        }
                    </Grid>
                </ContainerStyles>
            </Box>
            <Box sx={{ margin: '112px 0', background: 'var(--surface)' }}>
                <ContainerStyles disableGutters className={classes.customerGroup}>
                    <Typography variant='h1' component='h2' sx={{
                        position: 'absolute', top: { xs: -24, sm: -40 }
                    }} className={classes.workTitle}>Customer</Typography>
                    <Typography variant='subtitle1' className={classes.workSubtitle}>優質客戶</Typography>
                    <List className={classes.customerListGroup}>
                        {
                            customersInfo.map(item => (<Typography key={item} variant='body1' component='li' sx={{ color: 'var(--neutral20)', listStyle: 'disc', listStylePosition: 'inside' }}>{item}</Typography>))
                        }
                    </List>
                </ContainerStyles>
            </Box>
        </>
    )
}

export default WorkPage