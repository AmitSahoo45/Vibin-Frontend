import React, { useContext, useEffect, useState } from 'react'
import { Avatar, CircularProgress, Container, Divider, Paper, Typography } from '@material-ui/core'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'

import { getPost, getPostBySearch } from '../../actions/posts'
import Loader from '../Loader/Loader'

import useStyles from './Style'

const SinglePost = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(getPostBySearch({ search: 'none', tags: post?.tags }));
    }
  }, [post]);

  if (!post) return null;

  const openPost = (_id) => history.push(`/posts/${_id}`);

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

  console.log(id)

  return (
    <Container>
      {(isLoading && post) ? (
        <Loader />
      ) : (
        <div className={classes.container}>
          <div
            className={classes.imageBox}
            style={{ background: `url(${post?.selectedFile}) center center/cover no-repeat` }}
          ></div>
          <div className={classes.headerBox}>
            <Typography variant='h4'>{post?.title}</Typography>
            <div className={classes.author}>
              <Avatar
                className={classes.avatar}
                src={post?.creator?.imageUrl}
              />
              <Typography variant='h6' className={classes.name}>
                Posted by : - {post?.creator?.name}, {moment(post?.createdAt).fromNow()}
              </Typography>
            </div>
          </div>

          <div className={classes.contentBox}>
            <Typography variant='h5' className={classes.contentTitle}>
              {post?.message}
            </Typography>
          </div>
        </div>
      )}
      {!!recommendedPosts.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">You might also like:</Typography>
          <Divider />
          <div className={classes.recommendedPosts}>
            {recommendedPosts.map(({ title, name, message, likes, selectedFile, _id }) => (
              <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openPost(_id)} key={_id}>
                <Typography gutterBottom variant="h6">{title}</Typography>
                <Typography gutterBottom variant="subtitle2">{name}</Typography>
                <Typography gutterBottom variant="subtitle2">{message}</Typography>
                <Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>
                <img src={selectedFile} width="200px" />
              </div>
            ))}
          </div>
        </div>
      )}
    </Container >
  )
}

export default SinglePost