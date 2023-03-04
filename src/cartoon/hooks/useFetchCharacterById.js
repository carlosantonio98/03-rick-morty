import { useState, useEffect } from 'react';
import { getCharacterById } from '../helpers';

export const useFetchCharacterById = ( id ) => {

    const [ character, setCharacter ] = useState( [] );
    const [ isLoading, setIsLoading ] = useState( true );

    const getCharacter = async () => {
        const newCharacter = await getCharacterById( id );
        setCharacter( newCharacter );
        setIsLoading( false );
    }

    useEffect( () => {

        getCharacter();

    }, [] );

    return {
        character,
        isLoading
    };
}
