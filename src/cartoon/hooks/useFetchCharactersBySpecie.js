import { useState, useEffect } from 'react';
import { getCharactersBySpecie } from '../helpers';

export const useFetchCharactersBySpecie = ( specie ) => {

    const [ characters, setCharacters ] = useState( [] );
    const [ isLoading, setIsLoading ] = useState( true );

    const [ info, setInfo ] = useState( [] );
    const [ pageNumber, setPageNumber ] = useState(1);

    const getCharacters = async () => {
        const { characters, info } = await getCharactersBySpecie( specie, pageNumber );
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
