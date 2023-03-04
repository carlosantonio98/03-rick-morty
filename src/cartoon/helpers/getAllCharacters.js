
export const getAllCharacters = async ( page ) => {

    const url = `https://rickandmortyapi.com/api/character/?page=${ page }`;
    const response = await fetch( url );
    const { results, info } = await response.json();

    const characters = results.map( (character) => (
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
        characters: characters,
        pages: info.pages
    };
}
