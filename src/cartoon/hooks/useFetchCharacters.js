import { useState, useEffect } from 'react';
import { getAllCharacters } from '../helpers';

export const useFetchCharacters = ( ) => {

    const [ characters, setCharacters ] = useState( [] );
    const [ isLoading, setIsLoading ] = useState( true );

    const getCharacters = async () => {
        const newCharacter = await getAllCharacters();
        setCharacters( newCharacter );
        setIsLoading( false );
    }

    useEffect( () => {

        getCharacters();

    }, [ ] );

    return {
        characters,
        isLoading
    };
}
