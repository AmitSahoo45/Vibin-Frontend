import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    Footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        position: 'fixed',
        bottom: '0px',
        backdropFilter: 'blur(1px)',
        zIndex: '100',
        padding: '0.5rem 1rem',
        color: '#FFFFFF'
    }
})