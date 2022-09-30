import React, { useContext } from 'react';
import { Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion/dist/framer-motion'
import { SocialMediaStore } from '../../context/Context'

import NotFound from '../NotFound/NotFound';
import Loader from '../Loader/Loader';
import Post from './Post/Post'
import useStyles from './Style'

const Posts = () => {
    const { posts, isLoading } = useSelector((state) => state.posts)
    const classes = useStyles();
    const { setCurrentId } = useContext(SocialMediaStore);

    if(!posts.length && !isLoading) return (<NotFound />)

    return (
        <div
            className={classes.parentDiv}
        >
            {isLoading ? <Loader /> : (
                <motion.div
                    whileInView={{ opacity: [0, 1], marginTop: [100, 0] }}
                    transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
                >
                    <Grid
                        className={classes.mainContainer}
                        container
                        alignItems='stretch'
                        spacing={3}
                    >
                        {posts?.map((post) => (
                            <Grid
                                item
                                key={post._id}
                                xs={12}
                                sm={12}
                            >
                                <Post post={post} setCurrentId={setCurrentId} />
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            )}
        </div>
    )
}

export default Posts