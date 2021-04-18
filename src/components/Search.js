import React, {useState} from 'react'; 
import { useDispatch } from 'react-redux'; 
import fetchCharactersRM from '../redux/actions'; 

const Search = () => {  

    const dispatch = useDispatch();

    const rgx =  /^[a-zA-Z\s]*$/; 

    const [ searchCharacter, setSearchCharacter ] = useState('');   

    const handleSearchClick = () => dispatch(fetchCharactersRM(searchCharacter));

    const handleChange =  (e) => { 

        const val = e.target.value;
        
        if ( val === '' || rgx.test(val) ) { 
            setSearchCharacter(val)
        }

    }
 
    return (
         
        <div className="form-group">

            <input onKeyPress={ handleSearchClick } onChange={ handleChange } value={searchCharacter} type="text" placeholder="Search..." className="form-control form-control-lg mb-3" />
            
        </div>

    )

}

export default Search;
