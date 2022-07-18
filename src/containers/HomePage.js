import { Box } from '@mui/material';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../auth/firebase';
import MovieList from './MovieList';

const HomePage = () => {
  const [user, loading, error] = useAuthState(auth); 
  return (
    <Box sx={{ margin: 10 }}>
      Home Page! <br />
      current user: {user?.email}
      <MovieList />
    </Box>
  )
}

export default HomePage;