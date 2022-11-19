import {Navigate} from 'react-router-dom';
import {Home} from './pages/Home';
type Props = {
    children: JSX.Element

}
const RequireAuth = ({ children}: Props) => {;
    const isAuth = true;
    if(isAuth){
        return children;
    }
    else{
        return <Navigate to="/login"/>;
    }
}
export default RequireAuth;