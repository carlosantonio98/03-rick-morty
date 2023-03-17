import { NavLink } from 'react-router-dom';

export const Navbar = () => {

    const showResponsiveMenu = () => {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('show');
    }

    return (
        <nav className='relative z-[100] flex w-[80%] mx-auto mb-10 py-4 animate__animated animate__fadeIn'>

            <div className='mr-14 font-bold text-green-500'>
                <NavLink to="characters">Rick<span className="text-black text-xs">&</span>Morty</NavLink>
            </div>
            
            <ul className="flex nav-menu">
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
            </ul>
            
            <div className='relative z-[100] ml-auto nav-toggle' onClick={ showResponsiveMenu }>
                <i className="fa-solid fa-bars"></i>
            </div>

        </nav>
    );
}
