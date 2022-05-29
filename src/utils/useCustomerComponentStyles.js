import { styled, alpha } from '@mui/system'
import { Container, Typography, TextField } from '@mui/material'

// nav 按鈕
export const NavListItemTypo = styled(Typography)(({ theme }) => ({
    position: 'relative',
    cursor: 'pointer',
    '&:hover': { color: 'var(--primary60)' },
    [theme.breakpoints.up('xs')]: {
        display: 'block',
        textAlign: 'center',
        paddingTop: 24,
        paddingBottom: 24
    },
    [theme.breakpoints.up('md')]: {
        textAlign: 'none',
        marginLeft: 24,
        '&::before': {
            position: 'absolute',
            content: '""',
            display: 'block',
            height: 2,
            background: 'var(--primary60)',
            bottom: 12,
            width: 0
        },
        '&:hover::before': {
            transition: 'all ease-in 250ms',
            width: '100%',
        },
    },
}))

// 響應式設定
export const ContainerStyles = styled(Container)(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
        width: 'auto',
        marginRight: 16,
        marginLeft: 16
    },
    [theme.breakpoints.up('sm')]: {
        marginRight: 32,
        marginLeft: 32
    },
    [theme.breakpoints.up('md')]: {
        marginRight: 24,
        marginLeft: 24
    },
    [theme.breakpoints.up('lg')]: {
        marginRight: 200,
        marginLeft: 200
    },
    [theme.breakpoints.up('xl')]: {
        margin: '0 auto',
        padding: 0,
        maxWidth: 1128,
        width: '100%'
    },
}))

// 表單input
export const CustomerTextField = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-input': {
        color: 'var(--neutral20)',
        borderRadius: 4,
        position: 'relative',
        border: 0,
        backgroundColor: 'var(--neutral99)',
        padding: '12px 16px',
        margin: 0,
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        '&:focus': {
            boxShadow: `${alpha('#5FA055', 0.25)} 0 0 0 0.2rem`,
            border: '1px solid var(--primary60)',
        },
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: 0,
    }
}))