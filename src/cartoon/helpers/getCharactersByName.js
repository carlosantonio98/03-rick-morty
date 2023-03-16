
export const getCharactersByName = async ( name, pageNumber ) => {

    const url = `https://rickandmortyapi.com/api/character/?name=${ name }&page=${ pageNumber }`;
    const response = await fetch( url );
    const { results, info } = await response.json();

    if ( !results ) return { characters: [], info: [] };   

    const characters = results.map( ( character ) => (
        {
            'id': character.id,
            'name': character.name,
            'status': character.status,
            'species': character.species,
            'gender': character.gender,
            'image': character.image
        }
    ));

    return {
        characters,
        info
    };
}
