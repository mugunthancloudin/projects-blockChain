import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/header & footer/footer/footer';
import Scrollbar from './components/header & footer/header/scrollbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landingPage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LandingPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
