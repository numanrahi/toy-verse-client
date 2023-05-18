import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Banner from "../components/Banner/Banner";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;