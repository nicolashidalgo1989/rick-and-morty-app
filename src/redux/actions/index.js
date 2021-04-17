import { SEARCH_CHARACTER } from '../../consts/actionTypes';

const searchCharacter = () => {

    const characters = [
        {
            name: 'morty',
            gender: 'male',
            type: 'human'
        },
        {
            name: 'rick',
            gender: 'male',
            type: 'human'
        }
    ]

    return  { 
        type: SEARCH_CHARACTER, 
        payload: characters 
    }
}

export default searchCharacter;
