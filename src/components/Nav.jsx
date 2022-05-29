import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { AppBar, Avatar, Box, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { MenuRounded, CloseRounded } from '@mui/icons-material';
import { ContainerStyles, NavListItemTypo } from '../utils/useCustomerComponentStyles'
import companyLogo from '../public/img/svg/company-logo.svg'
import companyLogoWhite from '../public/img/svg/company-logo-white.svg'

const menuItems = [
    {
        title: '關於成泰',
        name: 'about',
        path: '/about'
    },
    {
        title: '服務項目',
        name: 'service',
        path: '/service'
    },
    {
        title: '工程實績',
        name: 'work',
        path: '/work'
    },
    {
        title: '常見問題',
        name: 'faq',
        path: '/faq'
    },
    {
        title: '聯絡我們',
        name: 'contact',
        path: '/contact'
    }
]
const useStyles = makeStyles(theme => ({
    appBar: {
        display: 'flex',
        justifyContent: 'center',
        // background: 'rgba(255,255,255)',
        [theme.breakpoints.up('xs')]: {
            height: 56
        },
        [theme.breakpoints.up('sm')]: {
            height: 80
        },
        [theme.breakpoints.up('md')]: {
            height: 100
        }
    },
    iconState: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
        },
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    listIcon: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        [theme.breakpoints.up('xs')]: {
            height: 56,
            boxSizing: 'border-box',
            paddingRight: 16,
        },
        [theme.breakpoints.up('sm')]: {
            height: 80,
            paddingRight: 32,
        }
    },
    listItems: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.up('md')]: {
            padding: '12px 0',
            marginLeft: 36,
        }
    },
    listItemsBar: {
        borderTop: '1px solid #000',
        borderBottom: '1px solid #000',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('xs')]: {
            paddingTop: 24,
            paddingBottom: 24,
        }
    },
    drawer: {
        [theme.breakpoints.up('xs')]: {
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '60%' },
        },
        [theme.breakpoints.up('sm')]: {
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '40%' },
        }
    },
    linkFocus: {
        color: 'var(--primary60)',
        [theme.breakpoints.up('md')]: {
            '&::before': {
                width: '100%',
            },
        }
    }
}))

// nav change link list group
const ListGroup = ({ getBar, classes, handleMenuItemClick, currentPath, colorStyle }) => (
    <List disablePadding className={getBar ? classes.listItemsBar : classes.listItems}>
        {menuItems.map((menu) => (
            <NavListItemTypo variant='subtitle1' component='a' key={menu.name} onClick={() => handleMenuItemClick(menu.path)}
                sx={{ color: { md: currentPath === '/' && colorStyle === true ? 'var(--white)' : 'var(--neutral20)' } }}
                className={currentPath.includes(menu.path) ? classes.linkFocus : ''}
            >{menu.title}</NavListItemTypo>
        ))}
    </List>
)

//width<905 menu icon
const MenuIcons = ({ classes, menuIcon, handleMenuIcon, currentPath, colorStyle }) => (
    <IconButton aria-label='open drawer' edge='start' onClick={handleMenuIcon} className={classes.iconState}>
        {
            menuIcon ? <CloseRounded sx={{ fontSize: 24, color: 'var(--neutral20)' }} /> :
                <MenuRounded sx={{ fontSize: 24, color: currentPath === '/' && colorStyle === true ? 'var(--white)' : 'var(--neutral20)' }} />
        }
    </IconButton>
)

function Nav() {
    const classes = useStyles()
    let currentPath = useLocation().pathname  // 獲得當前路徑
    let navigate = useNavigate()  // 切換頁面

    const [menuIcon, setMenuIcon] = useState(false)    // 側邊bar按鈕
    const [getBar, setGetBar] = useState(false)    //window width < 905 側邊出現
    const [companyName, setCompanyName] = useState(true)  // width < 600 公司名稱隱藏
    const [colorStyle, setColorStyle] = useState(true)  // scroll nav color

    const handleOnTop = () => document.documentElement.scrollTo(0, 0) // to top
    const handleMenuItemClick = (getPath) => {  // 點擊切換頁面
        // width<905 關閉選單
        if (document.documentElement.clientWidth <= 904) {
            setMenuIcon(false)
        }
        navigate(getPath)
        handleOnTop()
    }
    const handleMenuIcon = () => setMenuIcon && setMenuIcon(pre => !pre)  // 點擊側邊bar按鈕(menu open/close)

    window.onbeforeunload = function () {  //重整頁面回到頂部
        document.documentElement.scrollTop = 0;  //ie
        document.body.scrollTop = 0;  //非ie
    }

    useEffect(() => {  // 側邊bar(open/close), menu icon(open/close), width<600 企業名稱隱藏
        const showBtn = () => {
            if (document.documentElement.clientWidth < 905) { // width<905 
                setGetBar(true)  // menu改成側邊bar
            } else {
                setGetBar(false)
                setMenuIcon(false)
            }
            if (document.documentElement.clientWidth < 600) {
                setCompanyName(false)  // width<600 企業名稱隱藏
            } else setCompanyName(true)
        }
        showBtn()
        window.addEventListener('resize', showBtn)
        return () => {
            window.removeEventListener('resize', showBtn)
        }
    }, [])
    useEffect(() => {  // change home page color (scroll nav)
        const getCurrentScroll = () => { return window.scrollY || document.documentElement.scrollTop }
        window.onscroll = () => {
            // 大於1240 height=windows.height
            const scroll = getCurrentScroll()
            const windowHeight = document.documentElement.clientHeight
            const windowWidth = document.documentElement.clientWidth
            if (windowWidth > 1239) {
                if (scroll > windowHeight * 0.9) {
                    setColorStyle(false)
                } else setColorStyle(true)
            } else {
                if (scroll > 400) {
                    setColorStyle(false)
                } else setColorStyle(true)
            }
        }
    }, [])

    return (
        <AppBar className={classes.appBar} elevation={currentPath === '/' && colorStyle === true ? 0 : 1}
            sx={{ background: currentPath === '/' && colorStyle === true ? 'rgba(255,255,255,0)' : 'rgba(255,255,255)' }}>
            <ContainerStyles disableGutters className={classes.container}>
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => { navigate('/') }}>
                        <Avatar variant='rounded' sx={{ background: 'rgba(0,0,0,0)', marginRight: 1 }}>
                            <img src={colorStyle === true ? companyLogoWhite : companyLogo} alt='CherngTay' style={{ width: '80%', height: '80%' }} />
                        </Avatar>
                        {
                            companyName && <Typography variant='h5' component='h2'
                                sx={{ color: currentPath === '/' && colorStyle === true ? 'var(--white)' : 'var(--primary40)' }}>成泰冷凍空調有限公司</Typography>
                        }
                    </Box>
                    {/*width > 905 */}
                    {getBar === false &&
                        <ListGroup getBar={getBar} classes={classes} handleMenuItemClick={handleMenuItemClick} currentPath={currentPath} colorStyle={colorStyle} />
                    }
                    {/*width < 905 選單 */}
                    <MenuIcons classes={classes} menuIcon={menuIcon} handleMenuIcon={handleMenuIcon} colorStyle={colorStyle} currentPath={currentPath} />
                    <Drawer anchor='right' variant='temporary' open={menuIcon} ModalProps={{ keepMounted: true }} className={classes.drawer}>
                        <Box className={classes.listIcon}><MenuIcons classes={classes} menuIcon={menuIcon} handleMenuIcon={handleMenuIcon} /></Box>
                        <ListGroup getBar={getBar} classes={classes} handleMenuItemClick={handleMenuItemClick} currentPath={currentPath} colorStyle={colorStyle} />
                    </Drawer>
                </Toolbar>
            </ContainerStyles>
        </AppBar >
    )
}

export default Nav