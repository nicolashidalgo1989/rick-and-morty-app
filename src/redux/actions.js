import Axios from 'axios';
import { SEARCH_CHARACTER, SEARCH_SUCCESS, SEARCH_ERROR } from '../consts/actionTypes'; 

export const searchCharacterAction = () => {

    return  { 
        type: SEARCH_CHARACTER
    }

}

export const searchSuccessAction = (char) => {

    return  { 
        type: SEARCH_SUCCESS, 
        payload: char
    }

}

export const searchErrorAction = (err) => {

    return  { 
        type: SEARCH_ERROR, 
        payload: err
    }

}

const fetchCharactersRM = (character) => {

    return (dispatch) => {

        dispatch(searchCharacterAction());
        Axios.get(`https://rickandmortyapi.com/api/character/?name=${character}`)
        .then( response => {
            dispatch(searchSuccessAction([response.data]))
        })
        .catch( error => {
            dispatch(searchErrorAction('Character not found...'))
        });

    }

}

export default fetchCharactersRM;
