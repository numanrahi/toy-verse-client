import NavBar from "../Shared/NavBar/NavBar";
import Banner from "../components/Banner/Banner";
import KidsToys from "../components/KidsToys/KidsToys";
import useTitle from "../hooks/useTitle";
import Gallery from "../components/Gallary/Gallary";
import Footer from "../Shared/Footer/Footer";
import ToyByCategory from "../components/ToyByCategory/ToyByCategory";

const Main = () => {
    useTitle('Home')
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <KidsToys></KidsToys>
            <ToyByCategory></ToyByCategory>
            <Gallery></Gallery>
            <Footer></Footer>
        </div>
    );
};

export default Main;