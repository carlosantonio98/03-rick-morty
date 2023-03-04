import { useState, useEffect } from 'react';

export const useFetch = ( url ) => {

    const [ datas, setDatas ] = useState( [] );
    const [ errors, setErrors ] = useState( [] );
    const [ loading, setLoading ] = useState( true );

    const getDatas = async () => {
        setLoading( true );

        const response = await fetch( url );
        const result = await response.json();

        setDatas( result );
        setLoading( false );
    }

    useEffect( () => {

        getDatas();

    }, [ ] );

    return {
        datas,
        errors,
        loading
    };
}
