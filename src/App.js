import React, { useContext } from 'react';
import { Container, Dialog, Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
// import { getPosts } from './actions/posts'
import { Auth, Form, HomePage, Navbar, SinglePost } from './components';
import { SocialMediaStore } from './context/Context';

function App() {
  // const dispatch = useDispatch();
  const { isEditing, currentId, setCurrentId, alertMessage, setAlertMessage, user } = useContext(SocialMediaStore);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') { return; }
    setAlertMessage({ ...alertMessage, open: false })
  };

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [currentId, dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Container
        maxWidth="xl"
        style={{ padding: '0px' }}
      >
        <Switch>
          <Route exact path="/auth" component={() => (!user.isLoggedIn ? <Auth /> : <Redirect to="/posts" />)} />
          <Route exact path="/" component={() => <Redirect to='/posts' />} />
          <Route exact path="/posts" component={HomePage} />
          <Route exact path="/posts/search" component={HomePage} />
          <Route exact path='/post/:id' component={SinglePost} />
        </Switch>
      </Container>

      {isEditing ? <Dialog open={isEditing}><Form currentId={currentId} setCurrentId={setCurrentId} /></Dialog> : null}

      {alertMessage.open ? <Snackbar onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} autoHideDuration={3000} open={alertMessage.open}><Alert onClose={handleClose} severity={alertMessage.severity}>{alertMessage.message}</Alert></Snackbar> : null}
    </BrowserRouter>
  );
}

export default App;
