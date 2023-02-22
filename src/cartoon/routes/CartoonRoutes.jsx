import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '../../ui/components';
import { CharactersPage, EpisodePage, LocationsPage } from '../pages/';

export const CartoonRoutes = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path='characters' element={ <CharactersPage /> } />
                <Route path='locations' element={ <LocationsPage /> } />
                <Route path='episodes' element={ <EpisodePage /> } />

                <Route path='/' element={ <Navigate to="characters" /> } />
            </Routes>
        </>
    );
}
