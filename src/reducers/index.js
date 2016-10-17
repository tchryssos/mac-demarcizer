import { combineReducers } from 'redux';
import setUrlReducer from './set_url_reducer'

 const rootReducer =  combineReducers({
   url: setUrlReducer
 })

export default rootReducer;
