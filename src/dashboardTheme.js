import { createTheme } from '@mui/material/styles';

export const dashboardTheme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                fontSize: '0.875rem',
                fontWeight: 600,
                textTransform: 'capitalize',
                borderRadius: 2.5,
                '&.MuiButton-contained': {
                    backgroundColor: '#009be5',
                    '&:hover': {
                        backgroundColor: '#006db3'
                    },
                },
                '&.MuiButton-outlined': {
                    color: "#fff",
                    borderColor: '#fff',
                    '&:hover': {
                        backgroundColor: 'transparent'
                    },
                },
            },
        },
    },
    palette: {
        white: {
            main: '#fff',
        },
    },
    typography: {
        h1: {
            fontSize: '1.6rem',
            fontWeight: 600,
            color: '#fff',
            letterSpacing: '0.5px',
            textTransform: 'capitalize',
        }
    }

});