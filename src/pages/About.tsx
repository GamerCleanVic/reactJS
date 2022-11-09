import {Link} from 'react-router-dom';

export const About = () => {
    return(
        <div>
            About
            <ul>
                <li><Link to="/sobre/joao">João</Link></li>
                <li><Link to="/sobre/pedro">Pedro</Link></li>
            </ul>
        </div>
    );
}