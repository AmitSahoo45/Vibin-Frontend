import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    card: {
        height: '350px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        position: 'relative',
        color: '#FFFFFF',
    },
    editButton: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        letterSpacing: '2px',
        cursor: 'pointer',
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
    },
    border: {
        border: 'solid',
    },
    fullHeightCard: {
        height: '100%',
    },
    postHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.5rem 0.5rem 0.5rem 1rem',
    },
    overlay: {
        color: '#FFFFFF',
        width: '100%'
    },
    overlay2: {
        color: 'white',
    },
    grid: {
        display: 'flex',
    },
    details: {
        color: '#FFFFFF',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0.5rem 0.5rem 0.5rem 1rem',
    },
    title: {
        padding: '0 16px',
        fontSize: '1rem'
    },
    message: {
        fontSize: '0.8rem',
        fontWeight: '300',
        width: '100%',
        // height: '20px',
        // whiteSpace: 'nowrap',
        // overflow: 'hidden',
        // textOverflow: 'ellipsis'
    },
    likeButton: {
        fontSize: '1.5rem',
    },
    cardActions: {
        background: '#FFFFFF',
        padding: '0.5rem 0.9rem',
        display: 'flex',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: '0',
        width: '100%',
        borderTop: 'solid 1px #E0E0E0',
    },
    readMoreButton: {
        marginTop: '0.5rem',
        cursor: 'pointer',
        padding: '5px'
    }
});