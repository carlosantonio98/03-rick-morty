
export const getCharactersByName = async ( name ) => {
    const url = `https://rickandmortyapi.com/api/character`;
    const response = await fetch( url );
    const { results } = await response.json();

    const characters = results.filter((character) =>  {
        name = name.toLowerCase().trim();
        return character.name.toLowerCase().includes( name );
    });

    return characters;
}
