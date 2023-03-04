import { CharacterCard } from '../components';
import { useFetchCharacters } from '../hooks';

export const CharactersPage = () => {
    const { characters, isLoading } = useFetchCharacters();

    return (
        <div className="w-[80%] mx-auto">
            <h1 className="text-4xl font-bold mb-10 animate__animated animate__fadeInDown">Characters</h1>

            {
                isLoading && 
                <div className="rounded-lg transition mb-4 py-6 px-8 bg-green-400 ease-in-out shadow-lg animate__animated animate__fadeIn">
                    Loading...
                </div>  
            }

            {
                !isLoading && characters && 
                <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10'>
                    {
                        characters.map( character => (
                            <CharacterCard key={ character.id } { ...character } />
                        ))
                    }
                </div>
            }

        </div>
    );
}