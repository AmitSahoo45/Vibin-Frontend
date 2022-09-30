import React, { useContext, useEffect, useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons'
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import FileBase from 'react-file-base64'
import { gapi } from 'gapi-script'

import { SocialMediaStore } from '../../context/Context';
import { signIn, signUp } from '../../actions/auth'
import Icon from './Icon'
import Input from './Input'
import useStyles from './Style'

const Auth = () => {
  const [showPassWord, setShowPassWord] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    imageUrl: ''
  });
  const { setAlertMessage, setUser } = useContext(SocialMediaStore)
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: '419450040419-r5465ka3g1u0gqp00g49kjmdfa4h8sdo.apps.googleusercontent.com',
        // clientId: process.env.REACT_APP_CLIENTID,
        scope: 'email',
      });
    }
    gapi.load('client:auth2', start);
  }, []);

  const handleShowPassword = () => setShowPassWord((prev) => !prev)

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!isSignUp && (formData.password !== formData.confirmPassword)) {
    //   setAlertMessage({
    //     open: true,
    //     message: 'Password does not match',
    //     severity: 'error',
    //   })
    //   return;
    // }
    try {
      if (isSignUp) {
        dispatch(signUp(formData, history))
      } else {
        dispatch(signIn(formData, history))
      }
    } catch (error) {
      // setAlertMessage({
      //   open: true,
      //   message: error.response.data.message,
      //   severity: 'error',
      // })
      console.log('error', error)
    }
  }

  const switchMode = () => {
    setIsSignUp((prev) => !prev)
    handleShowPassword(false)
  }

  const onGoogleLoginSuccess = async (response) => {
    const result = response?.profileObj
    const token = response?.tokenId

    setUser({
      name: result?.name,
      id: result?.googleId,
      imageUrl: result?.imageUrl
    })
    try {
      dispatch({
        type: 'AUTH',
        payload: { result, token }
      })
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  const onGoogleLoginFailure = (error) => {
    console.log('Unsuccessful')
    console.log(error);
  }

  
  return (
    <Container
      component='main'
      maxWidth='xs'
    >
      <Paper
        className={classes.paper}
        elevation={3}
      >
        <Avatar
          className={classes.avatar}
        >
          <LockOutlined />
        </Avatar>
        <Typography
          variant='h5'
        >
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </Typography>
        <form
          action=""
          className={classes.form}
          onSubmit={handleSubmit}
        >
          <Grid
            container
            spacing={2}
          >
            {isSignUp && (
              <>
                <Input
                  name='firstName'
                  label='First Name'
                  handleChange={handleChange}
                  autoFocus
                  half
                />

                <Input
                  name='lastName'
                  label='Last Name'
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name='email'
              label='Email'
              handleChange={handleChange}
              type='email'
            />
            <Input
              name='password'
              label='Password'
              handleChange={handleChange}
              type={showPassWord ? 'text' : 'password'}
              handleShowPassword={handleShowPassword}
            />
            {isSignUp && (
              <Input
                name='confirmPassword'
                label='Confirm Password'
                handleChange={handleChange}
                type='password'
              />
            )}
            {isSignUp && (
              <FileBase
                type='file'
                multiple={false}
                onDone={({ base64 }) => {
                  setFormData({
                    ...formData,
                    imageUrl: base64
                  })
                }}
              />
            )}
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
          <Typography
            style={{ margin: '1rem auto', textAlign: 'center' }}
            variant='h6'
          >OR</Typography>
          <GoogleLogin
            clientId='419450040419-r5465ka3g1u0gqp00g49kjmdfa4h8sdo.apps.googleusercontent.com'
            // insert clientId here
            // clientId={process.env.REACT_APP_CLIENTID}
            scope='email'
            plugin_name="VibIn App"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant='contained'
              >
                Google Sign In
              </Button>
            )}
            onSuccess={onGoogleLoginSuccess}
            onFailure={onGoogleLoginFailure}
            cookiePolicy='single_host_origin'
          />
          <Grid
            container
            justifyContent='flex-end'
          >
            <Grid item>
              <Button
                onClick={switchMode}
              >
                {isSignUp ? 'Already have an account? Sign In' : 'Dont have an account? Sign Up'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth