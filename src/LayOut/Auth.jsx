import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const Auth = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div style={{maxWidth: '1200px'}} className='mx-auto'><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Auth;