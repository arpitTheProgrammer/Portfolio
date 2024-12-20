import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Route, BrowserRouter, Router, Routes} from 'react-router-dom'
import About from './components/About';
import Project from './components/Project';
import FirstImpression from './components/FirstImpression';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<FirstImpression/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='about'element={<About/>}/>
      <Route path='project' element={<Project/>}/>
    </Routes>
    </BrowserRouter>
    

    </>
  );
}

export default App;
