import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className='w-[80%] mx-auto mb-10 py-4 animate__animated animate__fadeIn'>
            <ul className="flex">
                <li className="mr-14 font-bold text-green-500">
                    <NavLink to="characters">Rick<span className="text-black text-xs">&</span>Morty</NavLink>
                </li>
                <li className="mr-4">
                    <NavLink to="characters" className={ ({ isActive }) => isActive ? 'border-b-2 border-green-500' : '' }>Characters</NavLink>
                </li>
                <li className="mr-4">
                    <NavLink to="humans" className={ ({ isActive }) => isActive ? 'border-b-2 border-green-500' : '' }>Humans</NavLink>
                </li>
                <li className="mr-4">
                    <NavLink to="aliens" className={ ({ isActive }) => isActive ? 'border-b-2 border-green-500' : '' }>Aliens</NavLink>
                </li>
                <li className="mr-4">
                    <NavLink to="search" className={ ({ isActive }) => isActive ? 'border-b-2 border-green-500' : '' }>Search</NavLink>
                </li>
                <li className='ml-auto'>
                    <NavLink to="login" className={ ({ isActive }) => isActive ? 'border-b-2 border-green-500' : '' }>Logout</NavLink>
                </li>
            </ul>
        </nav>
    );
}
