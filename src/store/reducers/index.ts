import { combineReducers } from "redux";
import {panels} from './panels'
import {carts} from './carts'

export const rootReducer =  combineReducers({
    panels,
    carts
  });