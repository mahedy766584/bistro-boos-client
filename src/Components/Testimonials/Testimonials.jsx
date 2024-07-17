import SectionTitle from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Container from "../../Container/Container";
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { BiSolidQuoteLeft } from "react-icons/bi";


const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    // console.log(reviews);

    return (
        <Container>
            <div className="py-8">
                <section>
                    <SectionTitle subHeading={'---What Our Clients Say---'} heading={'TESTIMONIALS'} />

                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        {
                            reviews?.map(review => <SwiperSlide key={review?._id}>
                                <div className="px-20 flex flex-col justify-center items-center space-y-3">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review?.rating}
                                        readOnly
                                    />
                                    <div className="py-2">
                                        <BiSolidQuoteLeft size={'70px'}/>
                                    </div>
                                    <p className="lg:w-10/12 text-center">{review?.details}</p>
                                    <h1 className="text-2xl font-poppins font-medium text-yellow-500">{review?.name}</h1>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </section>
            </div>
        </Container>
    );
};

export default Testimonials;