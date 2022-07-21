import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import { ThemeProvider } from '@mui/system';
import HomePage from './containers/HomePage';
import Footer from "./containers/Footer";

function App() {
  return (
      <div className="App">
          <NavBar />
          <HomePage />
          <Footer/>
      </div>
  );
}

export default App;
