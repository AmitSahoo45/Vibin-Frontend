import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    logoAndImage: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    appBar: {
        margin: '0 0 30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: 'none',
        // background: 'linear-gradient(45deg, rgba(85,53,190,1) 0%, rgba(254,7,246,1) 33%, rgba(255,112,114,1) 66%, rgba(253,221,126,1) 100%)',
    },
    heading: {
        fontFamily: 'Righteous',
        fontSize: 20,
    },
    image: {
        marginLeft: '15px',
    }, addButton: {
        marginRight: '1rem',
        '&:hover': {
            cursor: 'pointer',
        },
        '&:after': {
            content: 'Add Post',
        }
    }, 
    gridBox: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
    }
}));