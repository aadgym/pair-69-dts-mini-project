import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/navigation"

import "./styles.css"
import { Navigation } from "swiper";

const MovieListTrending = () =>{
    console.log("this is the swiper")
    return(
        <div>
            <Swiper slidesPerView={3}
                    spaceBetween={30}
                    navigation={true}
                    loop={true}
                    modules={[Navigation]}
                    className="mySwiper">
                <SwiperSlide><h2>Slide 1</h2></SwiperSlide>
                <SwiperSlide><h2>Slide 2</h2></SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </div>
    )
}

export default MovieListTrending;
