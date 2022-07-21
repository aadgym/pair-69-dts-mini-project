import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/navigation"

import "./styles.css"
import { Navigation } from "swiper";

import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import MovieCard from '../components/MovieCard';
import tmdbApi from '../api/tmdbApi';


const MovieListTrending = () =>{
    console.log("this is the swiper")
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const fetchedMovies = await tmdbApi.get("/trending/movie/week");
            setMovies(fetchedMovies.data.results);
        }
        
        fetchMovies();
    }, []);
    return(
        <div>
            <h3>Trending Movies</h3>
            <Swiper slidesPerView={5}
                    spaceBetween={10}
                    navigation={true}
                    loop={true}
                    modules={[Navigation]}
                    className="mySwiper">

            {
                movies.map(movie => (
                    <SwiperSlide><MovieCard movie={movie}></MovieCard></SwiperSlide>
                ))
            }
            </Swiper>
        </div>
    )
}

export default MovieListTrending;
