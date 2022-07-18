import { Box, CardMedia, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {
    return (
      <Card id={movie.id} sx={{ display: 'flex', width: 400, margin: 5 }}>
        <CardMedia
          component="img"
          sx={{ width: 150, height: 225 }}
          image={`${BASE_IMAGE_URL}${movie.poster_path}`}
          alt="Movie poster"
        />
      </Card>
    );
  }
  
  export default MovieCard;