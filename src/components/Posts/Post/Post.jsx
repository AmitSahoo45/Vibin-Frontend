import React, { useContext } from 'react'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core'
import { FavoriteBorder, DeleteSharp, EditSharp, Favorite } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { deletePost, likePost } from '../../../actions/posts'
import { SocialMediaStore } from '../../../context/Context'
import useStyles from './Style'

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const { name, title, message, selectedFile, likes, tags } = post;
    const { setisEditing, user } = useContext(SocialMediaStore);
    const options = { year: 'numeric', month: 'long', day: 'numeric' }

    const onEditPress = () => {
        setCurrentId(post._id);
        setisEditing(true);
    }

    const goToPost = () => {
        history.push(`/post/${post._id}`)
    }

    const Likes = () => {
        return (
            <Button size='small' onClick={() => dispatch(likePost(post._id))}>
                {likes.includes(user.id) ?
                    <Favorite className={classes.likeButton} style={{ color: '#FF0000' }} /> :
                    <FavoriteBorder className={classes.likeButton} />} &nbsp;
                <span>{likes.length} {likes.length === 0 || likes.length === 1 ? 'Like' : 'Likes'}</span>
            </Button>
        )
    }

    return (
        <Card
            className={classes.card}
            style={{
                backgroundImage: `url(${selectedFile})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'darken',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
        >
            <div>
                <div className={classes.postHeader}>
                    <div className={classes.overlay}>
                        <Typography variant='h6'>{name}</Typography>
                        <Typography variant='body2'>{new Date(post.createdAt).toLocaleString('en-IN', options)}</Typography>
                    </div>
                    <div className={classes.overlay2}>
                        {user.id === post.creator &&
                            <EditSharp
                                size='small'
                                onClick={() => onEditPress()}
                                className={classes.editButton}
                            />
                        }
                    </div>
                </div>
                <Typography variant='h5' className={classes.title}>
                    {title.slice(0, 40)}....
                </Typography>
                <CardContent>
                    <Typography variant='h5' className={classes.message}>
                        {message.slice(0, 40)}......
                    </Typography>
                    <Button onClick={goToPost} variant='contained' size='small' className={classes.readMoreButton}>
                        <Typography variant='button'>
                            Read more
                        </Typography>
                    </Button>
                </CardContent>
                <div className={classes.details}>
                    <Typography variant="body2" component="h2">
                        {tags.map((tag, index) => {
                            return (<span key={index} className={classes.tag}>#{tag} </span>)
                        })}
                    </Typography>
                </div>
            </div>
            <CardActions className={classes.cardActions}>
                <Likes />
                {user.id === post.creator &&
                    <Button size="small" onClick={() => dispatch(deletePost(post._id))}>
                        <DeleteSharp fontSize="small" /> Delete
                    </Button>}
            </CardActions>
        </Card>
    )
}

export default Post