import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks';
import { useFetchCharactersByName } from '../hooks';
import { CharacterCard } from '../components/CharacterCard';

export const SearchPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { q = '' } = queryString.parse( location.search );
    const { characters, isLoading } = useFetchCharactersByName( q );

    const showSearch = ( q.length === 0 );
    const showError  = ( q.length > 0 )  && characters.length === 0;

    const { searchText, onInputChange } = useForm({
        'searchText': q
    });

    const onSearchSubmit = (event) => {
        event.preventDefault();

        navigate(`?q=${ searchText }`);
    }

    return (
        <div className="w-[80%] mx-auto">
            <h1 className="text-4xl font-bold mb-10 animate__animated animate__fadeInDown">Search</h1>

            <div className="grid lg:grid-cols-2 gap-10">
                <div>
                    <div className="rounded-lg transition mb-4 py-6 px-8 bg-green-400 ease-in-out shadow-lg animate__animated animate__fadeIn" 
                        style={{ display: showSearch ? '' : 'none' }}>
                        Search a character
                    </div>  
                    
                    <div className="rounded-lg transition mb-4 py-6 px-8 bg-orange-400 ease-in-out shadow-lg animate__animated animate__fadeIn"
                        style={{ display: showError ? '' : 'none' }}>
                        No character with <b>{ q }</b>
                    </div>

                    <form onSubmit={ onSearchSubmit }>   
                        <label 
                            htmlFor='searchText'
                            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                        >
                            Search
                        </label>
                        <div className="relative">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg 
                                    className="w-5 h-5 text-gray-500 dark:text-gray-400" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    >
                                    </path>
                                </svg>
                            </div>
                            <input 
                                type="text" 
                                id="searchText"
                                name="searchText"
                                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Search Rick, Morty..."
                                value={ searchText }
                                onChange={ onInputChange }
                            />
                            <button 
                                type="submit" 
                                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>

                {
                    isLoading && 
                    <div className='w-full text-center text-green-500'>Loading...</div>
                }

                {
                    !isLoading &&
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {
                            characters.map( character => (
                                <CharacterCard key={ character.id } { ...character } />
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    );
}
