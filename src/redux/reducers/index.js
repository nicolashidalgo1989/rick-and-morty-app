import { SEARCH_CHARACTER } from '../../consts/actionTypes';

const initialState= { list : [] };

const characterReducer = ( state = initialState, action) => {

    switch(action.type){
        case SEARCH_CHARACTER : {
            return {
                ...state,
                list: action.payload
            }
        }
        default: return state;
    }

}

export default characterReducer;
