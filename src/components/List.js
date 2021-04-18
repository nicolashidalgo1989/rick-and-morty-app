import { useSelector } from 'react-redux';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Card from './Card';  

const List = () => {

    const search = useSelector( (state) => state.characterReducer ); 

    const { loading, character, error } = search;

    return (


        <> 
             
            { loading && (

                <SkeletonTheme color="#202020" highlightColor="#00ff00"> 
                    <Skeleton count={6} /> 
                </SkeletonTheme>)

            }

            { character.length >= 1 && ( 
                
                <> 
                    <div className="row list">
                        <Card character={character} /> 
                    </div>
                </>

            )}
 
            { error !== '' &&  <h3 className="text-danger">{search.error}</h3> }
            
        </>

    )

}
 
export default List;
