import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
    },
    buttonSubmit: {
        marginBottom: 10,
        color: '#FFFFFF',
        background: '#FF7072',
        borderRadius: '20px',
        transition: 'all 0.25s linear',
        '&:hover': {
            background: 'rgba(255, 112, 114, 0.8)',
        },
    },
    buttonClear: {
        borderRadius: '20px',
    }, formHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        '& svg': {
            cursor: 'pointer'
        }
    }
}));