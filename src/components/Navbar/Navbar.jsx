import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { AppBar, Avatar, Button, Typography } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode'
import { motion } from 'framer-motion/dist/framer-motion'
import { Menu, Close } from '@material-ui/icons';


import { images } from '../../constants'
import { SocialMediaStore } from '../../context/Context'
import useStyles from './Style';
import './Navbar.css'

const Navbar = () => {
    const [Toggle, setToggle] = useState(false);
    const { setisEditing, user, setUser } = useContext(SocialMediaStore);
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const handleOnClick = (e) => {
        e.stopPropagation();
        setToggle((prevState) => !prevState);
    };

    const logOut = () => {
        dispatch({
            type: 'LOGOUT',
            payload: {
                user: null,
                token: null
            }
        })
        history.push('/auth')
        setUser({ name: '', id: '', imageUrl: '', isLoggedIn: false })
        localStorage.removeItem('authData')
    }

    useEffect(() => {
        // JWT
        const data = JSON.parse(localStorage.getItem('authData'))
        if (data) {
            setUser({
                name: data.result.name,
                id: data.result.googleId || data.result._id,
                imageUrl: data.result.imageUrl,
                isLoggedIn: true
            });
        } else {
            setUser({ name: '', id: '', imageUrl: '', isLoggedIn: false });
        }

        if (data?.token) {
            const decodedToken = decode(data.token);
            // check if the JWT has expired or not. The validity of the jwt is 30 days
            if (decodedToken.exp * 1000 < new Date().getTime()) logOut();
        }
    }, [location]);

    return (
        <AppBar
            position="static"
            color="inherit"
            className={classes.appBar}
        >
            {/* Left Side Component - Optional */}
            {/* ==================================== */}
            {user.isLoggedIn ? (<div className={classes.userInfo}>
                <Avatar
                    className={classes.avatar}
                    alt={user.name}
                    src={user.imageUrl}
                >
                    {user.name.charAt(0)}
                </Avatar>
            </div>) : (null)}

            {/* ==================================== */}
            {/* Middle Component - Compulsory */}
            <div className={classes.logoAndImage}>
                <img src={images.ChatONlogo} alt="Logo" width='60' />
                <Typography component={Link} to='/' variant='h2' align='center' className={classes.heading} >VibIn</Typography>
            </div>

            {/* ==================================== */}
            {/* Right Side Component - Optional */}
            <nav className='app__navbar'>
                <div className='app__navbar-menu'>
                    <Menu onClick={(e) => handleOnClick(e)} />

                    {Toggle && (
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 300 }}
                            transition={{ duration: 0.85, ease: 'easeOut' }}
                        >
                            <motion.span
                                initial={{ width: 0 }}
                                animate={{ width: 70 }}
                                transition={{ duration: 0.85, ease: 'easeOut' }}
                            >
                                <Close onClick={(e) => handleOnClick(e)} />
                            </motion.span>
                            <ul>
                                <Button
                                    variant='outlined'
                                    color='secondary'
                                    className='button-navbar'
                                    disabled={!user.isLoggedIn}
                                    fullWidth
                                    onClick={() => setisEditing(true)}
                                >
                                    Create Post
                                </Button>
                                {user.isLoggedIn ? (
                                    <Button
                                        variant='contained'
                                        color='secondary'
                                        className='button-navbar'
                                        to='/auth'
                                        onClick={logOut}
                                        fullWidth
                                    >
                                        Logout
                                    </Button>
                                ) : (
                                    <Button
                                        to='/auth'
                                        variant='contained'
                                        color='secondary'
                                        className='button-navbar'
                                        fullWidth
                                    >
                                        Login
                                    </Button>
                                )}
                            </ul>
                        </motion.div>
                    )}
                </div>
            </nav>
        </AppBar>
    )
}

export default Navbar


{/* {user.isLoggedIn ? (
                    <div className={classes.profile}>
                        <AddBox
                            variant='subtitle1'
                            className={classes.navbarButton}
                            onClick={() => setisEditing(true)}
                        />
                        <Button
                            variant='contained'
                            color='secondary'
                            // component={Link}
                            // to='/'
                            onClick={logOut}
                        >
                            Logout
                        </Button>
                    </div>
                ) : (
                    <Button component={Link} to='/auth' variant='contained' color='secondary' className={classes.Login}>
                        Login
                    </Button>
                )} */}