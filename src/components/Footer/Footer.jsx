import React from 'react'
import { Button } from '@material-ui/core'
import useStyles from './Style'

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.Footer}>
            <Button
                variant='contained'
                size='small'
                color='secondary'
            >
                Prev
            </Button>
            <Button
                variant='contained'
                size='small'
                color='secondary'
            >
                Next
            </Button>
        </div>
    )
}

export default Footer