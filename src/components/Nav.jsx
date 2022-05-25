import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { AppBar, Avatar, Box, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { MenuRounded, CloseRounded } from '@mui/icons-material';
import { ContainerStyles, NavListItemTypo } from '../utils/useCustomerComponentStyles'
import companyLogo from '../public/svg/company-logo.svg'

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
        },
    },
    iconState: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
        },
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
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
        },
    },
    listItems: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.up('md')]: {
            padding: '12px 0',
            marginLeft: 36,
        },
    },
    listItemsBar: {
        borderTop: '1px solid #000',
        borderBottom: '1px solid #000',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('xs')]: {
            paddingTop: 24,
            paddingBottom: 24,
        },
    },
    drawer: {
        [theme.breakpoints.up('xs')]: {
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '60%' },
        },
        [theme.breakpoints.up('sm')]: {
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '40%' },
        },
    },
    linkFocus: {
        color: 'var(--primary60)',
        // position: 'relative',
        [theme.breakpoints.up('xs')]: {
            display: 'block',
            textAlign: 'center',
            paddingTop: 24,
            paddingBottom: 24
        },
        [theme.breakpoints.up('md')]: {
            '&::before': {
                // transition: 'all ease-in 250ms',
                width: '100%',
            },
            display: 'block',
            textAlign: 'none',
            paddingTop: 24,
            paddingBottom: 24,
            marginLeft: 24,
        },
    },
    link: {
        // color: 'var(--neutral20)',
        [theme.breakpoints.up('xs')]: {
            display: 'block',
            textAlign: 'center',
            paddingTop: 24,
            paddingBottom: 24
        },
        [theme.breakpoints.up('md')]: {
            display: 'block',
            textAlign: 'none',
            paddingTop: 24,
            paddingBottom: 24,
            marginLeft: 24,
        }
    }
}))
const ListGroup = ({ getBar, classes, handleMenuItemClick, currentPath }) => (
    <List disablePadding className={getBar ? classes.listItemsBar : classes.listItems}>
        {menuItems.map((menu) => (
            <NavListItemTypo variant='subtitle1' component='a' key={menu.name} sx={{ color: currentPath === '/' ? 'var(--white)' : 'var(--neutral20)' }}
                className={currentPath.includes(menu.path) ? classes.linkFocus : classes.link} onClick={() => handleMenuItemClick(menu.path)}>{menu.title}</NavListItemTypo>
        ))}
    </List>
)
const MenuIcons = ({ classes, menuIcon, handleMenuIcon }) => (
    <IconButton aria-label='open drawer' edge='start' onClick={handleMenuIcon} className={classes.iconState}>
        {menuIcon ? <CloseRounded style={{ fontSize: 24 }} /> : <MenuRounded style={{ fontSize: 24 }} />}
    </IconButton>
)

function Nav() {
    const classes = useStyles()
    // top
    const handleOnTop = () => document.documentElement.scrollTo(0, 0)
    //重整頁面回到頂部
    window.onbeforeunload = function () {
        document.documentElement.scrollTop = 0;  //ie
        document.body.scrollTop = 0;  //非ie
    }
    // 獲得當前路徑
    let currentPath = useLocation().pathname
    // 切換頁面
    let navigate = useNavigate()
    const handleMenuItemClick = (getPath) => {
        // width<905 關閉選單
        if (document.documentElement.clientWidth <= 904) {
            setMenuIcon(false)
        }
        navigate(getPath)
        handleOnTop()
    }
    // 側邊bar按鈕
    const [menuIcon, setMenuIcon] = useState(false)
    const handleMenuIcon = () => setMenuIcon && setMenuIcon(pre => !pre)
    //window width < 905 側邊出現, width < 600 公司名稱隱藏
    const [getBar, setGetBar] = useState(false)
    const [companyName, setCompanyName] = useState(true)
    const showBtn = () => {
        if (document.documentElement.clientWidth < 905) {
            setGetBar(true)
        } else {
            setGetBar(false)
            setMenuIcon(false)
        }
        if (document.documentElement.clientWidth < 600) {
            setCompanyName(false)
        } else {
            setCompanyName(true)
        }
    }
    useEffect(() => {
        showBtn()
        window.addEventListener('resize', showBtn)
        return () => {
            window.removeEventListener('resize', showBtn)
        }
    }, [])

    return (
        <AppBar className={classes.appBar} elevation={currentPath === '/' ? 0 : 1} sx={{ background: currentPath === '/' ? 'rgba(255,255,255,0)' : 'rgba(255,255,255)' }}>
            <ContainerStyles disableGutters className={classes.container}>
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => { navigate('/') }}>
                        <Avatar variant='rounded' sx={{ background: 'rgba(0,0,0,0)', marginRight: 1 }}><img src={companyLogo} alt='CherngTay' style={{ width: '80%', height: '80%' }} /></Avatar>
                        {
                            companyName && <Typography variant='h5' component='h2' sx={{ color: currentPath === '/' ? 'var(--white)' : 'var(--neutral20)' }}>成泰冷凍空調有限公司</Typography>
                        }
                    </Box>
                    {/*width > 905 */}
                    {getBar === false &&
                        <ListGroup getBar={getBar} classes={classes} handleMenuItemClick={handleMenuItemClick} currentPath={currentPath} />
                    }
                    {/*width < 905 選單 */}
                    <MenuIcons classes={classes} menuIcon={menuIcon} handleMenuIcon={handleMenuIcon} />
                    <Drawer anchor='right' variant='temporary' open={menuIcon} ModalProps={{ keepMounted: true }} className={classes.drawer}>
                        <Box className={classes.listIcon}><MenuIcons classes={classes} menuIcon={menuIcon} handleMenuIcon={handleMenuIcon} /></Box>
                        <ListGroup getBar={getBar} classes={classes} handleMenuItemClick={handleMenuItemClick} currentPath={currentPath} />
                    </Drawer>
                </Toolbar>
            </ContainerStyles>
        </AppBar >
    )
}

export default Nav