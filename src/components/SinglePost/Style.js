import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        paddingBottom: theme.spacing(4),
        borderRadius: '5px',
        overflow: 'hidden',
        marginBottom: '1rem'
    },
    imageBox: {
        width: '100%',
        height: '400px',
    },
    headerBox: {
        width: '80%',
        margin: '0 auto',
        position: 'relative',
        top: '-100px',
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
        borderRadius: '5px',
        boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
        '& h4': {
            fontSize: '1.5rem',
            lineHeight: '1.5',
        }
    },
    author: {
        display: 'flex',
        alignItems: 'center',
        marginTop: theme.spacing(2),
        '& img': {
            width: theme.spacing(4),
            height: theme.spacing(4),
            borderRadius: '50%',
            marginRight: theme.spacing(1),
        },
        '& h6': {
            fontSize: '0.8rem',
            fontWeight: '500',
            color: theme.palette.text.secondary
        }
    },
    contentTitle: {
        fontSize: '1rem',
        position: 'relative',
        top: '-50px',
        width: '80%',
        margin: '0 auto',
        padding: theme.spacing(2),
        boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
        lineHeight: '1.4',
    },
    recommended: {
        background: '#FFFFFF',
        padding: '0.8rem',
        marginBottom: '1rem'
    },
    recommendedTitle: {
        fontSize: '1.2rem',
        fontWeight: '500',
        marginBottom: '0.8rem',
        lineHeight: '1.5',
    },
    recommendedPosts: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
    },
    card: {
        width: '250px',
        height: '170px',
        overflow: 'hidden',
        margin: '0.8rem 1rem',
        borderRadius: '5px',
        position: 'relative',
        transition: 'all 0.3s linear',

        '&:hover': {
            cursor: 'pointer',
            boxShadow: '0px 0px 15px rgba(0,0,0,0.3)'
        },

        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'all 0.6s ease-in-out',
        },

        '&:hover img': {
            transform: 'scale(1.2)'
        },

        '& figcaption': {
            position: 'absolute',
            left: '0',
            top: '120%',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0.6rem',
            background: 'rgba(0,0,0,0.2)',
            color: '#FFFFFF',
            transition: 'all 0.6s ease-in-out',

            '& h6': {
                fontSize: '0.8rem'
            }
        },

        '&:hover figcaption': {
            top: '0'
        }
    },
    name: {
        marginLeft: '0.8rem'
    },
    // ------------------------------ //
    // Recommended cards ------ //
    recommendedPosts: {
        width: '100%',
        background: '#FFFFFF',
        borderRadius: '5px',
        margin: '1rem 0',
        padding: '0.8rem 0'
    },
    Card_post: {
        width: '90%',
        borderRadius: '5px',
        margin: '1rem auto',
        padding: '0.8rem',
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
        ["@media (max-width:650px)"]: {
            flexDirection: 'column',
            alignItems: 'flex-start'
        },
    },
    Card_Image: {
        width: '300px',
        position: 'relative',
        // add media queries
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginBottom: '0.8rem'
        },
        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
        }
    },
    Card_Content: {
        width: '100%',
        padding: '0 1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    Card_Title: {
        fontSize: '1rem',
        fontWeight: '500',
        lineHeight: '1.2',
        marginBottom: '0.8rem'
    },
    Card_Name: {
        fontSize: '0.8rem',
        color: 'grey',
        lineHeight: '1.5'
    },
    Card_Message:{
        fontSize: '0.7rem',
        color: '#36454F',
        lineHeight: '2' 
    }
}))