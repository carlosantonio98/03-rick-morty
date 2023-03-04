import { useState } from 'react';
import { CharacterCard } from '../components';
import { useFetchCharacters } from '../hooks';

export const CharactersPage = () => {

    const [ page, setPage ] = useState( 1 );
    const { characters, pages, isLoading } = useFetchCharacters( page );

    const getPaginationContent = () => {
        let content = [];
        
        for (let i = 1; i < pages; i++) {
            content = [ 
                ...content, 
                <a 
                    key={ i }
                    className='p-4 m-2 bg-green-500 rounded-md text-white text-lg' 
                    href="#"
                    name={ i }
                    onClick={ (event) => {
                        event.preventDefault();
                        setPage( event.target.name );
                    } }
                >
                    { i }
                </a>
            ];
        }

        return content;
    }

    return (
        <div className="w-[80%] mx-auto">
            <h1 className="text-4xl font-bold mb-10 animate__animated animate__fadeInDown">Characters</h1>

            {
                isLoading && 
                <div className='w-full text-center text-green-500'>Loading...</div>
            }

            {
                !isLoading && 
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                    {
                        characters.map( character => (
                            <CharacterCard key={ character.id } { ...character } />
                        ))
                    }
                </div>
            }

            {
                characters && 
                <div className='mt-20 flex flex-wrap justify-center'>
                    {
                        getPaginationContent()
                    }
                </div>
            }
            
        </div>
    );
}