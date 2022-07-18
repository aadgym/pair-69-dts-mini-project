import { MovieFilter,Logout } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css'
import { auth } from '../auth/firebase';
import { signOut } from 'firebase/auth';

const navItems = ['Indonesian', 'Pricing', 'About'];

const Navbar = () => {
  const navigate = useNavigate();
  
  const onLogout = async () => {
    try {
        await signOut(auth);
        navigate("/login");
    } catch (err) {
        console.log(err);
    }
};


  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <MovieFilter sx={{ display: 'flex', mr: 1 }} />
          <div className="menuContainer">
          <Button key="Home" className="HeadMenu">
            Home
          </Button>
          <Button className="HeadMenu">Series</Button>
          <Typography className="HeadMenu">Movie</Typography>
          <Typography className="HeadMenu">New and Popular</Typography>
          <Typography className="HeadMenu">My List</Typography>
          </div>
          
          <Box sx={{ display: 'block' }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: 'flex' }}>
            <IconButton sx={{ padding: 1 }}>
                <Logout onClick={onLogout} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
