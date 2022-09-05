export const navbarStyles = {
    drawer: {
        width: 230,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: 230,
            boxSizing: 'border-box',
            backgroundColor: "#101F33",
            color: "#FFFFFF"

        },
    },
    icons: { 
        color: 'rgba(255, 255, 255, 0.7)!important',
        marginLeft: '5px',
    },
    text: {
        '& span': {
            marginLeft: '-10px',
            fontWeight: '300',
            fontSize: '15px',
        }
    }
};