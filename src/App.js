import React from "react"
import './App.css';
import Header from "./components/Header/Header"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MovieInfo from "./components/MovieInfo/MovieInfo";
import MovieList from "./components/Movies/MovieList";

function App () {
  return (
    <div> 
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<h1>Página Inicial</h1>}/>
                <Route path="/programacao" element={<MovieList/>}/> 
                <Route path="/bomboniere" />
                <Route path="/unidades"/> 
                <Route path="/movie-info/:id_movie" element={<MovieInfo/>} />         
            </Routes>
        </BrowserRouter>
    </div>
  );
}


export default App;
