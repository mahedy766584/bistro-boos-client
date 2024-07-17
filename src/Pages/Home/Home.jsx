import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import CategorySlider from "../../Components/Banner/CategorySlider";
import Features from "../../Components/Feature/Features";
import PopularMenu from "../../Components/PopularMenu/PopularMenu";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Container from "../../Container/Container"

const Home = () => {
    return (
        <div>
            <Helmet>
                <title> Bistro Boss | Home </title>
            </Helmet>
            <div>
                <Banner />
                <Container>
                    <div className="py-14">
                        <CategorySlider />
                    </div>
                    <div>
                        <PopularMenu />
                    </div>
                    <div>
                        <Features />
                    </div>
                    <div>
                        <Testimonials />
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Home;