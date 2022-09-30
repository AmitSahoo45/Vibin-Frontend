import React, { useState, useEffect, useContext } from 'react'
import { TextField, Button, Typography, Paper, Snackbar } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { Alert } from '@material-ui/lab';
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './Style'
import { createPost, updatePost } from '../../actions/posts'
import { SocialMediaStore } from '../../context/Context';
import { motion } from 'framer-motion/dist/framer-motion'

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });
    const post = useSelector((state) => currentId ? state.posts.posts.find((po) => po._id === currentId) : null)
    const classes = useStyles();
    const dispatch = useDispatch();
    const { setisEditing, setAlertMessage } = useContext(SocialMediaStore);
    const user = JSON.parse(localStorage.getItem('authData'))

    useEffect(() => {
        if (post) {
            setPostData(post)
        }
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const { message, selectedFile, tags, title } = postData;
        if (message === '' || selectedFile === '' || tags === '' || title === '') {
            setAlertMessage({
                open: true,
                message: 'Oops! You forgot to fill in some fields',
                severity: 'error',
            });
            return;
        }

        
        if (currentId) {
            let tagsArray = typeof tags === 'string' ? tags.split(',') : tags
            tagsArray = tagsArray.map((tag) => tag.trim())
            dispatch(updatePost(currentId, {
                ...postData,
                tags: tagsArray,
                name: user?.result?.name,
                // creator: user?.result?.id
            }));
            setAlertMessage({
                open: true,
                severity: 'success',
                message: 'Post updated successfully'
            });
        } else {
            const newtags = tags.split(',');
            dispatch(createPost({
                ...postData,
                tags: newtags,
                name: user?.result?.name,
                // creator: user?.result?.id
            }));
            setAlertMessage({
                open: true,
                severity: 'success',
                message: 'Post created successfully'
            });
        }
        clear()
        setisEditing(false);
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
        });
    }

    if (!user?.result?.name) {
        setAlertMessage({
            open: true,
            severity: 'error',
            message: 'Please login to continue'
        })
        return;
    }

    return (
        <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        >
            <Paper className={`${classes.paper} ${classes.root}`}>
                <form
                    autoComplete='off'
                    oValidate
                    className={classes.form}
                    onSubmit={handleSubmit}
                >
                    <div className={classes.formHeader}>
                        <Typography
                            variant='h5'
                        >
                            {currentId ? 'Update Post' : 'Create Post'}
                        </Typography>
                        <Close
                            onClick={() => { clear(); setisEditing(false) }}
                        />
                    </div>

                    <TextField
                        name='title'
                        label='Title'
                        variant='outlined'
                        fullWidth
                        multiline
                        maxRows={2}
                        value={postData.title}
                        onChange={(e) => setPostData({
                            ...postData,
                            title: e.target.value
                        })}
                    />

                    <TextField
                        name='message'
                        label='Message'
                        variant='outlined'
                        fullWidth
                        multiline
                        maxRows={6}
                        value={postData.message}
                        onChange={(e) => setPostData({
                            ...postData,
                            message: e.target.value
                        })}
                    />

                    <TextField
                        name='tags'
                        label='Tags'
                        variant='outlined'
                        fullWidth
                        placeholder='Enter tags separated by comma'
                        value={postData.tags}
                        onChange={(e) => setPostData({
                            ...postData,
                            tags: e.target.value
                        })}
                    />

                    <div className={classes.fileInput}>
                        <FileBase
                            type='file'
                            multiple={false}
                            onDone={({ base64 }) => {
                                setPostData({
                                    ...postData,
                                    selectedFile: base64
                                })
                            }}
                        />
                    </div>

                    <Button
                        className={classes.buttonSubmit}
                        variant='contained'
                        size='large'
                        type='submit'
                        fullWidth
                    >
                        Submit
                    </Button>

                    <Button
                        className={classes.buttonClear}
                        variant='contained'
                        color='secondary'
                        size='large'
                        onClick={clear}
                        fullWidth
                    >
                        Clear
                    </Button>
                </form>
            </Paper>
        </motion.div>
    )
}

export default Form