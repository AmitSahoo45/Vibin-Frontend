import React, { useEffect } from 'react'
import { Avatar, Box, Button, Container, Divider, Typography } from '@material-ui/core'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion/dist/framer-motion'
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

  const openPost = (_id) => history.push(`/post/${_id}`);

  if (isLoading) {
    return (
      <Container style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Loader />
      </Container>
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
      {recommendedPosts.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">You might also like:</Typography>
          <Divider />
          <motion.div
            className={classes.recommendedPosts}
            animate={{ opacity: 1, transition: { duration: 2, delay: 1 } }}
            initial={{ opacity: 0 }}
          >
            {recommendedPosts.map(({ title, name, message, selectedFile, _id }) => (
              <motion.div
                onClick={() => openPost(_id)}
                key={_id}
                className={classes.Card_post}
              >
                {/* Image Part */}
                <div className={classes.Card_Image}>
                  <img src={selectedFile} alt={title} />
                </div>
                {/* Text Part */}
                <div className={classes.Card_Content}>
                  <Typography gutterBottom className={classes.Card_Title} variant="h6">{title}</Typography>
                  <Typography gutterBottom className={classes.Card_Name} variant="subtitle2">Written By - {name}</Typography>
                  <Box>
                    <Typography gutterBottom className={classes.Card_Message} variant="subtitle2">{message.substring(0, 80)}....</Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={() => openPost(_id)}
                    >Read More</Button>
                  </Box>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </Container >
  )
}

export default SinglePost