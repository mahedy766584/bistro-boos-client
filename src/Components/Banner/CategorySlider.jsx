import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from '../SectionTitle/SectionTitle';
import Container from "../../Container/Container";

const CategorySlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return (
        <Container>
            <section>
                <SectionTitle
                    heading={'ORDER ONLINE'}
                    subHeading={'From 11.00am to 10.00pm'}
                />


                <div className="mt-7 mb-8">
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <img src={slide1} alt={slide1} />
                                <h1 className='text-3xl font-poppins font-medium -mt-10 text-center text-gray-100 uppercase'>Salad</h1>
                            </div>
                            <div>
                                <img src={slide2} alt={slide2} />
                                <h1 className='text-3xl font-poppins font-medium -mt-10 text-center text-gray-100 uppercase'>pizza</h1>
                            </div>
                            <div>
                                <img src={slide3} alt={slide3} />
                                <h1 className='text-3xl font-poppins font-medium -mt-10 text-center text-gray-100 uppercase'>soups</h1>
                            </div>
                            <div>
                                <img src={slide4} alt={slide4} />
                                <h1 className='text-3xl font-poppins font-medium -mt-10 text-center text-gray-100 uppercase'>desserts</h1>
                            </div>
                            <div>
                                <img src={slide5} alt={slide5} />
                                <h1 className='text-3xl font-poppins font-medium -mt-10 text-center text-gray-100 uppercase'>pizza</h1>
                            </div>
                            <div>
                                <img src={slide2} alt={slide2} />
                                <h1 className='text-3xl font-poppins font-medium -mt-10 text-center text-gray-100 uppercase'>pizza</h1>
                            </div>
                            <div>
                                <img src={slide3} alt={slide3} />
                                <h1 className='text-3xl font-poppins font-medium -mt-10 text-center text-gray-100 uppercase'>soups</h1>
                            </div>
                            <div>
                                <img src={slide4} alt={slide4} />
                                <h1 className='text-3xl font-poppins font-medium -mt-10 text-center text-gray-100 uppercase'>desserts</h1>
                            </div>
                            <div>
                                <img src={slide5} alt={slide5} />
                                <h1 className='text-3xl font-poppins font-medium -mt-10 text-center text-gray-100 uppercase'>pizza</h1>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </Container>
    );
};

export default CategorySlider;