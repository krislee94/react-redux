/**
 * Created by air on 2017/12/26.
 */
import {SET_FILTER} from './actionTypes.js';
import {FilterTypes} from '../constants.js'


export default (state = FilterTypes.ALL,action)=>{
    switch (action.type){
        case SET_FILTER:{
            return action.filter
        }
        default:
            return state;
    }
}

