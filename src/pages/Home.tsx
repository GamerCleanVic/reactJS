import { Link } from "react-router-dom";
export const Home = () => {
    return(
        <div>
            Home - <Link to="sobre">Ir para sobre</Link>
        </div>    
    );
}