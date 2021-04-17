import Card from '../Card';
import searchCharacter from '../../../redux/actions/index';

const List = () => {

    function componentWillMount(){
        this.props.searchCharacter();
    }

    const renderCharacterList = () => {
        return this.props.users.map( (char) => {
            return (
                <Card key={char.id} name={char.name} />
            )
        })
    }

    return (

        <>
        
            {renderCharacterList}   
            
        </>

    )

}

export default List;
