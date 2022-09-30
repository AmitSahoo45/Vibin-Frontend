import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    logoAndImage: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    appBar: {
        margin: '0 0 10px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: 'none',
    },
    heading: {
        fontFamily: 'Righteous',
        fontSize: 20,
        textDecoration: 'none'
    },
    navbarButton: {
        marginRight: '1rem',
        '&:hover': {
            cursor: 'pointer',
        }
    },
    profile: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    avatar: {
        marginRight: '0.75rem',
    },
    userInfo: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginLeft: '0.75rem'
    },
}));