export default function Card(props) {

    const character = props.character[0].results;

    const characterList =  character.map( (char) => {

        return (

            <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4" key={char.id}>
                <div className="card">
                    <img className="card-img-top" src={char.image} alt={char.name} />
                    <div className="card-body">
                        <h5 className="card-title">{char.name}</h5>
                        <p className="card-text">{char.gender} {char.species}</p>
                    </div>
                </div>
            </div>
        
        )

    })

    return (
        
        <>

            {characterList}

        </>


    )

}
