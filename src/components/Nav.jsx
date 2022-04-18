import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { AppBar, Avatar, Box, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { MenuRounded, CloseRounded } from '@mui/icons-material';
import { BottomLinerListItem, ContainerStyles, NavListItemTypo } from '../utils/useCustomerComponentStyles'
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
        name: 'achievement',
        path: '/achievement'
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
        background: 'rgba(0,0,0,0)',
        [theme.breakpoints.up("xs")]: {
            height: 52
        },
        [theme.breakpoints.up("sm")]: {
            height: 80
        },
        [theme.breakpoints.up("md")]: {
            height: 100
        },
    },
    iconState: {
        [theme.breakpoints.up("xs")]: {
            display: 'flex',
        },
        [theme.breakpoints.up("md")]: {
            display: 'none'
        },
    },
    listIcon: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        [theme.breakpoints.up("xs")]: {
            height: 52,
            boxSizing: 'border-box',
            paddingRight: 16,
        },
        [theme.breakpoints.up("sm")]: {
            height: 80,
            paddingRight: 32,
        },
    },
    listItems: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.up("md")]: {
            padding: '12px 0',
            marginLeft: 36,
        },
    },
    listItemsBar: {
        borderTop: '1px solid #000',
        borderBottom: '1px solid #000',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up("xs")]: {
            paddingTop: 24,
            paddingBottom: 24,
        },
    },
    // listItemActive: {
    //     color: 'var(--primary60)',
    //     '& div h5:hover::before': {
    //         transition: 'all ease-in 250ms',
    //         width: '100%',
    //     },
    // },
    drawer: {
        [theme.breakpoints.up("xs")]: {
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '60%' },
        },
        [theme.breakpoints.up("sm")]: {
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '40%' },
        },
    },
    linkFocus: {
        color: 'var(--primary60)',
        // position: 'relative',
        [theme.breakpoints.up("md")]: {
            '&::before': {
                // transition: 'all ease-in 250ms',
                width: '100%',
            }
        },
    },
}))

// const ListItems = ({ getBar, classes, handleMenuItemClick }) => (
//     <List disablePadding className={getBar ? classes.listItemsBar : classes.listItems}>
//         {menuItems.map((menu) => (
//             <BottomLinerListItem components='a' key={menu.name} className={classes.listItem} onClick={() => handleMenuItemClick(menu.path)}>
//                 <ListItemText sx={{ margin: 0 }} ><Typography variant='h5' >{menu.title}</Typography></ListItemText>
//             </BottomLinerListItem>
//         ))}
//     </List>
// )

const ListGroup = ({ getBar, classes, handleMenuItemClick, currentPath }) => (
    <List disablePadding className={getBar ? classes.listItemsBar : classes.listItems}>
        {menuItems.map((menu) => (
            <ListItem components='a' key={menu.name} onClick={() => handleMenuItemClick(menu.path)}>
                <NavListItemTypo variant='subtitle1' component='h6' className={currentPath === menu.path && classes.linkFocus}>{menu.title}</NavListItemTypo>
            </ListItem>
        ))}
    </List>
)

const MenuIcons = ({ classes, menuIcon, handleMenuIcon }) => (
    <IconButton aria-label="open drawer" edge="start" onClick={handleMenuIcon} className={classes.iconState}>
        {menuIcon ? <CloseRounded style={{ fontSize: 24 }} /> : <MenuRounded style={{ fontSize: 24 }} />}
    </IconButton>
)

function Nav() {
    const classes = useStyles()

    // 更換頁面
    let navigate = useNavigate()
    const handleMenuItemClick = (getPath) => {
        if (document.documentElement.clientWidth <= 904) {
            setMenuIcon(false)
        }
        navigate(getPath)
    }

    // 獲得當前路徑
    let currentPath = useLocation().pathname

    // 側邊bar按鈕
    const [menuIcon, setMenuIcon] = useState(false)
    const handleMenuIcon = () => setMenuIcon(pre => !pre)

    const [getBar, setGetBar] = useState(false)

    const showBtn = () => {
        if (document.documentElement.clientWidth <= 904) {
            setGetBar(true)
        } else {
            setGetBar(false)
            setMenuIcon(false)
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
        <AppBar className={classes.appBar} position='static' elevation={1}>
            <ContainerStyles disableGutters className={classes.container}>
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => { navigate('/') }}>
                        <Avatar variant="rounded" sx={{ background: 'rgba(0,0,0,0)', marginRight: 1 }}><img src={companyLogo} alt='CherngTay' style={{ width: '80%', height: '80%' }} /></Avatar>
                        <Typography variant="h5" sx={{ color: 'var(--primary40)' }}>成泰冷凍空調有限公司</Typography>
                    </Box>
                    {getBar === false &&
                        // <ListItems getBar={getBar} classes={classes} handleMenuItemClick={handleMenuItemClick} />
                        <ListGroup getBar={getBar} classes={classes} handleMenuItemClick={handleMenuItemClick} currentPath={currentPath} />
                    }
                    <MenuIcons classes={classes} menuIcon={menuIcon} handleMenuIcon={handleMenuIcon} />
                    <Drawer anchor='right' variant="temporary" open={menuIcon} onBackdropClick ModalProps={{ keepMounted: true }} className={classes.drawer}>
                        <Box className={classes.listIcon}><MenuIcons classes={classes} menuIcon={menuIcon} handleMenuIcon={handleMenuIcon} /></Box>
                        {/* <ListItems getBar={getBar} classes={classes} handleMenuItemClick={handleMenuItemClick} currentPath={currentPath} /> */}
                        <ListGroup getBar={getBar} classes={classes} handleMenuItemClick={handleMenuItemClick} currentPath={currentPath} />
                    </Drawer>
                </Toolbar>
            </ContainerStyles>
        </AppBar >
    )
}

export default Nav