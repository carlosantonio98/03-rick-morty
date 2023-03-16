import { useState, useEffect } from 'react';
import { getAllCharacters } from '../helpers';

export const useFetchCharacters = ( ) => {

    const [ characters, setCharacters ] = useState( [] );
    const [ isLoading, setIsLoading ] = useState( true );
    
    const [ info, setInfo ] = useState( [] );
    const [ pageNumber, setPageNumber ] = useState(1);

    const getCharacters = async () => {
        const { characters, info } = await getAllCharacters( pageNumber );
        setCharacters( characters );
        setInfo( info );
        setIsLoading( false );
    }

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
