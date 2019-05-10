// Store/configureStore.js
import { createStore, combineReducers, applyMiddleware  } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import commonReducer from './Reducers/commonReducer'
import uiReducer from './Reducers/uiReducer'
import ReduxThunk from 'redux-thunk'

export default () => {
    /* eslint-disable no-underscore-dangle */
    let store = createStore(combineReducers({commonReducer, uiReducer}),  {}, composeWithDevTools(
        applyMiddleware(ReduxThunk),
    ))
    /* eslint-enable */
    return { store }
}

