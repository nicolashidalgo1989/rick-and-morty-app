import {SEARCH_CHARACTER, SEARCH_SUCCESS, SEARCH_ERROR } from '../consts/actionTypes'; 
import { combineReducers } from 'redux';

const initialState = { loading: false, character: [], error: '' };

const characterReducer = ( state = initialState, action ) => {

    switch(action.type){

        case SEARCH_CHARACTER : {
            return {
                ...state,
                loading: true
            }
        }

        case SEARCH_SUCCESS : {
            return { 
                loading: false,
                character: action.payload,
                error: ''
            }
        }

        case SEARCH_ERROR : {
            return { 
                loading: false,
                character: [],
                error: action.payload
            }
        }

        default: return initialState;

    }

}

const rootReducers = combineReducers ({
    characterReducer
})

export default rootReducers;
