import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    mainContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        '@media (max-width:780px)': {
            gridTemplateColumns: 'repeat(2, 1fr)',
        }, '@media (max-width:520px)': {
            gridTemplateColumns: 'repeat(1, 1fr)',
        }
    },
    smMargin: {
        margin: theme.spacing(1),
    },
    actionDiv: {
        textAlign: 'center',
    },
    parentDiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '1.5rem'
    }
}));