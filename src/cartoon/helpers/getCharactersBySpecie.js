
export const getCharactersBySpecie = async ( specie ) => {

    const url = 'https://rickandmortyapi.com/api/character';
    const response = await fetch( url );
    const { results } = await response.json();

    let characters = results.filter( ( character ) => character.species == specie );

    characters = characters.map( ( character ) => (
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
