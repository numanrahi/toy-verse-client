import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Banner from "../components/Banner/Banner";
import Gallary from "../components/Gallary/Gallary";
import KidsToys from "../components/KidsToys/KidsToys";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <KidsToys></KidsToys>
            {/* <Gallary></Gallary> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Main;