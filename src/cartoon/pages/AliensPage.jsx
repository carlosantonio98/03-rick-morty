import { CharacterCard, Pagination } from '../components';
import { useFetchCharactersBySpecie } from '../hooks';

export const AliensPage = () => {

    const { characters, info, isLoading, pageNumber, setPageNumber } = useFetchCharactersBySpecie( 'Alien' );

    return (
        <div className="w-[80%] mx-auto">
            <h1 className="text-4xl font-bold mb-10 animate__animated animate__fadeInDown">Aliens</h1>

            
            {
                isLoading && 
                <div className='w-full text-center text-green-500'>Loading...</div>
            }

            {
                !isLoading && 
                <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10'>
                    {
                        characters.map( character => (
                            <CharacterCard key={ character.id } { ...character } />
                        ))
                    }
                </div>
            }

            <Pagination
                info={ info }
                pageNumber={ pageNumber }
                updatePageNumber={ setPageNumber }
            />
        </div>
    )
}
