import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Banner from "../components/Banner/Banner";
import Gallary from "../components/Gallary/Gallary";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Gallary></Gallary>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;