import NavBar from '../Shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const Auth = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Auth;