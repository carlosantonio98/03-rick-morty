
export const getAllCharacters = async ( ) => {

    const url = 'https://rickandmortyapi.com/api/character';
    const response = await fetch( url );
    const { results } = await response.json();

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

    return characters;
}