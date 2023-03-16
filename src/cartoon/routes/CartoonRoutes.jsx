import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '../../ui/components';
import { CharactersPage, CharacterPage, HumansPage, AliensPage, SearchPage } from '../pages';

export const CartoonRoutes = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path='characters' element={ <CharactersPage /> } />
                <Route path='character/:id' element={ <CharacterPage /> } />
                <Route path='humans' element={ <HumansPage /> } />
                <Route path='search' element={ <SearchPage /> } />
                <Route path='aliens' element={ <AliensPage /> } />

                <Route path='/*' element={ <Navigate to="characters" /> } />
            </Routes>
        </>
    );
}
