import React, {useState} from 'react';

const Search = () => {

    const [ searchCharacter, setSearchCharacter ] = useState('');   

    const handleSearch = e => setSearchCharacter(e.target.value); 

    const handleSearchClick = () => console.log(searchCharacter);

    return (
        <div>
            <h1>Search</h1>
            <input type="text" onChange={handleSearch} value={searchCharacter}/>  
            <button onClick={handleSearchClick}>Search</button>
        </div>
    )
}
 
export default Search;
