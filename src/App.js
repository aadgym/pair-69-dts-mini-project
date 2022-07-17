import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import { ThemeProvider } from '@mui/system';
import HomePage from './containers/HomePage';

function App() {
  return (
      <div className="App">
        <NavBar />
        <HomePage />
      </div>
  );
}

export default App;
