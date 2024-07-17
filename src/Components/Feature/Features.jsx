import SectionTitle from "../SectionTitle/SectionTitle";
import featuresImg from "../../assets/home/featured.jpg"
import Container from "../../Container/Container";
import "./features.css"

const Features = () => {
    return (
        <div className="features-item text-white bg-fixed">
            <Container>
                <div className="py-10">
                    <SectionTitle subHeading={'---Check it out---'} heading={'FROM OUR MENU'} />
                    <div className="md:flex justify-center items-center py-2 mb-10 gap-5">
                        <div>
                            <img src={featuresImg} alt="" />
                        </div>
                        <div>
                            <p>Aug 20, 2029</p>
                            <p className="uppercase">WHERE CAN I GET SOME?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                            <button className="btn btn-outline uppercase border-0 border-b-4">Read More</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Features;