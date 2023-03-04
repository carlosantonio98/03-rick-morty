import { useState, useEffect } from 'react';
import { getAllCharacters } from '../helpers';

export const useFetchCharacters = ( page ) => {

    const [ characters, setCharacters ] = useState( [] );
    const [ pages, setPages ] = useState( 0 );
    const [ isLoading, setIsLoading ] = useState( true );

    const getCharacters = async () => {
        const newCharacter = await getAllCharacters( page );
        setCharacters( newCharacter.characters );
        setPages( newCharacter.pages );
        setIsLoading( false );
    }

    useEffect( () => {

        getCharacters();

    }, [ page ] );

    return {
        characters,
        pages,
        isLoading
    };
}
