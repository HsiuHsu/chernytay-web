import { Typography, Box } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import WorkImageList from '../components/WorkImageList';
import { smallSizedAirConditionImg, bigSizedAirConditionImg, repairAirConditionImg, maintainAirConditionImg } from '../data/galleryImages'
import { ContainerStyles } from '../utils/useCustomerComponentStyles';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
    subtitle: {
        color: 'var(--neutral60)',
        cursor: 'pointer',
        '&:hover': {
            color: 'var(--neutral40)'
        }
    }
}))

function WorkImagePage() {
    let navigate = useNavigate()
    let getPath = useLocation().pathname

    const classes = useStyles()
    const [getImgTitle, setGetImgTitle] = useState({
        imgTitle: '',
        imgList: [],
    })
    // 獲得路徑名稱 顯示相應資料
    useEffect(() => {
        if (getPath === '/work/small-sized-air-condition')
            setGetImgTitle({ imgTitle: '小型空調', imgList: smallSizedAirConditionImg })
        if (getPath === '/work/big-sized-air-condition')
            setGetImgTitle({ imgTitle: '大型空調', imgList: bigSizedAirConditionImg })
        if (getPath === '/work/air-condition-repair')
            setGetImgTitle({ imgTitle: '空調維修', imgList: repairAirConditionImg })
        if (getPath === '/work/air-condition-maintain')
            setGetImgTitle({ imgTitle: '空調保養', imgList: maintainAirConditionImg })
    }, [getPath])

    return (
        <div style={{ paddingTop: '56px', paddingBottom: '144px', background: 'var(--surface)' }}>
            <ContainerStyles disableGutters>
                <Box sx={{ display: 'flex', paddingBottom: '12px', borderBottom: '1px solid var(--neutral60)', marginBottom: '20px' }}>
                    <Typography variant='subtitle1' className={classes.subtitle} onClick={() => { navigate('/work') }}>工程紀錄 /</Typography>
                    <Typography variant='h5' sx={{ color: 'var(--primary40)', marginLeft: 1 }}>{getImgTitle.imgTitle}</Typography>
                </Box>
                <WorkImageList getImg={getImgTitle.imgList} />
            </ContainerStyles>
        </div>
    )
}

export default WorkImagePage