
export const getCharacterById = async ( id ) => {
    const url = `https://rickandmortyapi.com/api/character/${ id }`;
    const response = await fetch( url );
    const character = await response.json();

    return character;
}
