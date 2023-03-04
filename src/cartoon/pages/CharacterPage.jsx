import { useParams, useNavigate } from "react-router-dom";
import { useFetchCharacterById } from "../hooks";

export const CharacterPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { character, isLoading } = useFetchCharacterById( id );

    const { name, image, status, species, gender, type } = character;

    const onCharacterBack = () => {
        navigate(-1);
    }

    return (
        <div className="w-[80%] mx-auto">
            <h1 className="text-4xl font-bold mb-10 animate__animated animate__fadeInDown">Character</h1>

            {
                isLoading && 
                <div>Loading...</div>
            }

            {
                !isLoading && 
                <div className="grid grid-cols-3 gap-10">
                    <img 
                        src={ image } 
                        className="w-full fit-cover rounded-lg animate__animated animate__fadeInLeft" 
                        alt={ name + ' card'} 
                    />

                    <ul className="p-5 col-span-2 animate__animated animate__fadeIn">
                        <li>
                            <h3 className="mb-5 font-bold text-2xl">
                                { name }
                            </h3>
                        </li>
                        <li><b>Status:</b> { status }</li>
                        <li><b>Specie:</b> { species }</li>
                        <li><b>Gender:</b> { gender }</li>
                        <li><b>Type:</b> { type }</li>
                        <li>
                            <button
                                className="px-4 py-2 mt-5 bg-blue-500 rounded-lg text-white"
                                onClick={ onCharacterBack }
                            >
                                Back
                            </button>
                        </li>
                    </ul>
                </div>
            }
        </div>
    )
}
