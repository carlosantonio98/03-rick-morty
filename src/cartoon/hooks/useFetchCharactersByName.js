import { useState, useEffect } from 'react';
import { getCharactersByName } from '../helpers';

export const useFetchCharactersByName = ( name ) => {

    const [ characters, setCharacters ] = useState( [] );
    const [ isLoading, setIsLoading ] = useState( true );

    const [ info, setInfo ] = useState( [] );
    const [ pageNumber, setPageNumber ] = useState(1);

    const getCharacters = async () => {
        const { characters, info } = await getCharactersByName( name, pageNumber );
        setCharacters( characters );
        setInfo( info );
        setIsLoading( false );
    }

    useEffect( () => {

        getCharacters();

    }, [ name ] );
    
    useEffect( () => {

        getCharacters();

    }, [ pageNumber ] );

    return {
        characters,
        info,
        isLoading,
        pageNumber,
        setPageNumber
    };
}
