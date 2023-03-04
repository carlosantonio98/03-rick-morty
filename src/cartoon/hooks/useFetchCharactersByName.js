import { useState, useEffect } from 'react';
import { getCharactersByName } from '../helpers';

export const useFetchCharactersByName = ( name ) => {

    const [ characters, setCharacters ] = useState( [] );
    const [ isLoading, setIsLoading ] = useState( true );

    const getCharacters = async () => {
        const newCharacter = await getCharactersByName( name );
        setCharacters( newCharacter );
        setIsLoading( false );
    }

    useEffect( () => {

        getCharacters();

    }, [ name ] );

    return {
        characters,
        isLoading
    };
}
