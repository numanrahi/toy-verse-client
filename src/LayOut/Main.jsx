import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Banner from "../components/Banner/Banner";
import KidsToys from "../components/KidsToys/KidsToys";
import useTitle from "../hooks/useTitle";
import Gallery from "../components/Gallary/Gallary";

const Main = () => {
    useTitle('Home')
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <KidsToys></KidsToys>
            <Gallery></Gallery>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;