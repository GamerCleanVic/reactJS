import {useParams, useNavigate} from 'react-router-dom';

export const AboutItem = () => {
    const params = useParams();
    const navigate = useNavigate();
    const handleBackButton = () => {
        navigate(-1);
    }
    const handleHomeButton = () => {
        navigate('/');
    }
    return(
        <div>
            Página sobre {params.slug?.toUpperCase()} ({params.slug?.length} letras)
            <hr />
            <button className='mt-3
                pt-0
                pb-0 
                text-green-700'
                onClick={handleBackButton}
            >
                Voltar
            </button>
            <button className='
                    pt-0
                    pb-0
                    ml-3
                    text-green-700
                    uppercase'
                    onClick={handleHomeButton}
            >
                Home
            </button>
        </div>
    );
}