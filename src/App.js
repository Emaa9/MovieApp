import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PageNotFound from './components/PageNotFound/PageNotFound';
import MovieDetail from './components/MovieDetail/MovieDetail';
import "./App.css";
import Movies from "./components/Movies/Movies";
import Shows from "./components/Shows/Shows";



function App() {
  return (
  <Router>
    <div className="App">
        <Header></Header>
        <div className='container'>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/movie/:imdbID" element={<MovieDetail/>}/>
          <Route path="/movie" element={<Movies/>}></Route>
          <Route path="/show" element={<Shows/>}></Route>
          <Route element={<PageNotFound/>}/>
        </Routes>
        </div>
        <Footer />
    </div>
    </Router>
  );
}

export default App;
