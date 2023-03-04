import { Link } from "react-router-dom";

export const CharacterCard = ({ id, image, name, status, species, gender } ) => {
    return (
        <Link 
            to={ `/character/${ id }` } 
            className="text-center rounded-lg transition ease-in-out hover:shadow-lg animate__animated animate__fadeIn"
        >
            <img src={ image } className="w-full fit-cover rounded-lg" alt={ name + ' card'} />

            <ul className="p-5">
                <li className="font-bold">{ name }</li>
                <li>Status: { status }</li>
            </ul>
        </Link>
    );
}