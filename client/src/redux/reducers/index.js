import { combineReducers } from "redux";
import questions from'./questons'
import auth from './auth'

export default combineReducers({questions,auth})