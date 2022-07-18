import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import MovieCard from '../components/MovieCard';
import tmdbApi from '../api/tmdbApi';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const fetchedMovies = await tmdbApi.get("/trending/movie/week");
            setMovies(fetchedMovies.data.results);
        }
        
        fetchMovies();
    }, []);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            mt: 5,
        }}>
            {
                movies.map(movie => (
                    <MovieCard movie={movie}></MovieCard>
                ))
            }
        </Box>
    );
}

export default MovieList;
