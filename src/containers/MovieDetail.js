import * as React from 'react';
import tmdbApi from '../api/tmdbApi';
import { Box } from '@mui/material';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../auth/firebase';


const MovieDetail = () => {
    const [user, loading, error] = useAuthState(auth); 
    let param = useParams();
    const [movie,setMovie] = useState([]);
    const movieid = param.movieid

    useEffect(() => {
        const getMovieDetail = async () => {
            try {
                const moviInfo = await tmdbApi.get(
                    `/movie/${movieid}`
                )
                setMovie(moviInfo.data);
            } catch (err){
                console.log(err)
            }

        }

        getMovieDetail();
    },[param.movieid])

    return (
        <div>
            <h2>{movie.title}</h2>
            <Box>
                Ini Tempat Filmnya
            </Box>
            <Box>
                {movie.overview}
            </Box>
        </div>
    )
}

export default MovieDetail;