import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    HomePage: {
        minHeight: '100vh',
    },
    appBarSearch: {
        borderRadius: 4,
        margin: '8px 0 15px 0',
        display: 'flex',
        padding: '0.4rem 1rem',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    searchBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        '& button': {
            marginLeft: '10px'
        }
    },
    pagination: {
        borderRadius: 4,
        marginTop: '30px',
        padding: '16px',
    },
    gridContainer: {
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse',
        },
    },
    chipInput: { margin: '10px 0' }
}))