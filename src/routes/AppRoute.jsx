import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../auth/pages';
import { CartoonRoutes } from '../cartoon/routes/CartoonRoutes';

export const AppRoute = () => {
    return (
        <>
            <Routes>
                <Route path='login' element={ <LoginPage /> } />
                <Route path='/*' element={ <CartoonRoutes /> } />
            </Routes>
        </>
    )
}
