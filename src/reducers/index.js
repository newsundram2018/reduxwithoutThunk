
import { combineReducers } from 'redux'
import currentUser from './currentUser'
import counter from './counter'
// import apiReducer from './apiReducer'
const rootReducer = combineReducers({
    currentUser,
    counter,
})

export default rootReducer