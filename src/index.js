import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/index';
import { BrowserRouter } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import { rootReducer } from './store/reducer/rootReducer'
import thunk from 'redux-thunk'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

