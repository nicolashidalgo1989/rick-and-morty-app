import { createStore } from 'redux';
import characterReducer from '../reducers';
import searchCharacter from '../actions';

const store = createStore(characterReducer);

console.log('Initial state: ', store.getState());

store.subscribe( () => { 
    console.log('Change state: ', store.getState());
})
store.dispatch(searchCharacter('nico'));

export default store;
