import { styled } from '@mui/system';
import { ListItem, Container, Typography } from '@mui/material'

// export const BottomLinerListItem = styled(ListItem)(({ theme }) => ({
//     cursor: 'pointer',
//     textAlign: 'center',
//     position: 'relative',
//     color: 'var(--neutral20)',
//     '& div h5:hover': { color: 'var(--primary60)' },
//     [theme.breakpoints.up("xs")]: {
//         paddingTop: 24,
//         paddingBottom: 24,
//     },
//     [theme.breakpoints.up("md")]: {
//         padding: '12px 0',
//         marginLeft: 36,
//         '& div h5:active': {
//             color: 'var(--primary60)',
//         },
//         '& div h5::before': {
//             position: 'absolute',
//             content: '""',
//             display: 'block',
//             height: 2,
//             background: 'var(--primary60)',
//             bottom: -2,
//             width: 0
//         },
//         '& div h5:hover::before': {
//             transition: 'all ease-in 250ms',
//             width: '100%',
//         },
//     },
// }))

export const NavListItemTypo = styled(Typography)(({ theme }) => ({
    color: 'var(--neutral20)',
    position: 'relative',
    cursor: 'pointer',
    '&:hover': { color: 'var(--primary60)' },
    [theme.breakpoints.up("md")]: {
        '&::before': {
            position: 'absolute',
            content: '""',
            display: 'block',
            height: 2,
            background: 'var(--primary60)',
            bottom: -12,
            width: 0
        },
        '&:hover::before': {
            transition: 'all ease-in 250ms',
            width: '100%',
        },
    },
}))

export const ContainerStyles = styled(Container)(({ theme }) => ({
    [theme.breakpoints.up("xs")]: {
        width: 'auto',
        marginRight: 16,
        marginLeft: 16
    },
    [theme.breakpoints.up("sm")]: {
        marginRight: 32,
        marginLeft: 32
    },
    [theme.breakpoints.up("md")]: {
        marginRight: 24,
        marginLeft: 24
    },
    [theme.breakpoints.up("lg")]: {
        marginRight: 200,
        marginLeft: 200
    },
    [theme.breakpoints.up("xl")]: {
        margin: '0 auto',
        padding: 0,
        maxWidth: 1128,
        width: '100%'
    },
}))