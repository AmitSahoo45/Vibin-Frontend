import React from 'react'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import './NotFound.css'
import { images } from '../../constants'

const NotFound = () => {
    const history = useHistory()
    return (
        <div className="container">
            <img src={images.NotFound} alt="404" />
            <h3>Oops! No Posts were found</h3>
            <Button
                variant='contained'
                onClick={() => { history.push('/posts') }}
            >
                Refresh Page
            </Button>
        </div>
    )
}

export default NotFound