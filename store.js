import {createStore, applyMiddleware, compose} from 'redux'
import ReduxThunk from 'redux-thunk'
import reducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(applyMiddleware(ReduxThunk))

//const store = createStore(reducer, comenhancer)

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(ReduxThunk),
));

export default store