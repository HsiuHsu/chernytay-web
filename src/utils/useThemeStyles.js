import { NoEncryption } from "@mui/icons-material";
import { createTheme } from "@mui/material";

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 905,
            lg: 1240,
            xl: 1440
        }
    },
    typography: {
        fontFamily: [
            'Noto Sans TC',
            'Noto Serif TC',
            'Roboto',
            'Open Sans',
        ].join(','),
        // fontSize: 16,
        htmlFontSize: 16,
        h5: {
            fontSize: '1.375rem'
        },
        h6: {
            fontSize: '1.125rem'
        },
        subtitle1: {
            fontSize: '1rem'
        },
        body1: {
            fontSize: '1rem'
        }
    },
})
console.log(theme);

