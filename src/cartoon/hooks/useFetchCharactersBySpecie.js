import { useState, useEffect } from 'react';
import { getCharactersBySpecie } from '../helpers';

export const useFetchCharactersBySpecie = ( specie ) => {

    const [ characters, setCharacters ] = useState( [] );
    const [ isLoading, setIsLoading ] = useState( true );

    const getCharacters = async () => {
        const newCharacter = await getCharactersBySpecie( specie );
        setCharacters( newCharacter );
        setIsLoading( false );
    }

    useEffect( () => {

        getCharacters();

    }, [] );

    return {
        characters,
        isLoading
    };
}
