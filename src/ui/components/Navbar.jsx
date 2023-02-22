import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav>
            <ul className="flex">
                <li className="mr-4">
                    <NavLink to="characters">RickAndMorty</NavLink>
                </li>
                <li className="mr-4">
                    <NavLink to="characters">Characters</NavLink>
                </li>
                <li className="mr-4">
                    <NavLink to="locations">Locations</NavLink>
                </li>
                <li className="mr-4">
                    <NavLink to="episodes">Episodes</NavLink>
                </li>
                <li className='mr-auto'>
                    <NavLink to="login">Logout</NavLink>
                </li>
            </ul>
        </nav>
    );
}
