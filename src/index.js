import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

import { ThemeProvider, createTheme } from '@material-ui/core';
import { SocialMediaProvider } from './context/Context';

const THEME = createTheme({
  typography: {
    "fontFamily": `'Plus Jakarta Sans', sans-serif`,
  }
});

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <ThemeProvider theme={THEME}>
    <SocialMediaProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </SocialMediaProvider>
  </ThemeProvider>,
  document.getElementById('root')
)
