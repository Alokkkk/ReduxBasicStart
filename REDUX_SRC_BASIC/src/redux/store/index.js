import { createStore, applyMiddleware,compose } from 'redux';
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const enhancers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const logger = ({ getState }) => {
    return next => action => {
        console.log('will dispatch', action)
        // Call the next dispatch method in the middleware chain.   
        const returnValue = next(action)
        console.log('state after dispatch', getState())
        // This will likely be the action itself, unless    // a middleware further in chain changed it.   
        return returnValue
    }
}



//   export default store = createStore(rootReducer,enhancers);



export default store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));