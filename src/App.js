import {  useState } from 'react';
import MovieList from './MovieList';
import { v4 as uuidv4 } from 'uuid';
import Addmovie from './Addmovie';
import Filter from './Filter';
import './App.css';
import {Routes, Route, Link, useNavigate } from "react-router-dom";
import MovieDes from './MovieDes';


function App() {

  const [movies,setMovies]=useState([{
    id:uuidv4(),
    title:'Batman',
    description:'Movie description Batman',
    posterURL:'https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_batman-min.png' ,
    rating:1,
    trailler:"https://www.youtube.com/embed/mqqft2x_Aa4?si=vfNAmovBdOuvN85H"
},
{
  id:uuidv4(),
  title:'Baby Driver',
  description:'Movie description Baby Driver',
  posterURL:'https://m.media-amazon.com/images/I/81EbCnmjXFL._AC_UF894,1000_QL80_.jpg' ,
  rating:4,
  trailler:"https://www.youtube.com/embed/zTvJJnoWIPk?si=uSNw2n3BWRRIgUHz"
},
{
  id:uuidv4(),
  title:'Amateur',
  description:'Movie description Amateur',
  posterURL:'https://fr.web.img4.acsta.net/pictures/18/03/21/21/21/0762918.jpg' ,
  rating:3,
  trailler:"https://www.youtube.com/embed/0cQ3sBXpNtw?si=pb0rm3WKHtuCk8VE"
},]);
const [rate,setRate]=useState(0);
const [title,setTitle]=useState("");
  return (
    <div className="App">

      <header>
        <h1>My Movie App</h1>
      </header>
      <Routes>
      <Route path="/" element={
      <div>
      <Addmovie setMovies={setMovies} movies={movies} />
      <Filter rate={rate} setRate={setRate} setTitle={setTitle} />
      <MovieList  movies={movies.filter((movie)=>movie.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())&& movie.rating>=rate)}/> 
      </div>}/>
      <Route path="/Movies/:description" element={<MovieDes  movies={movies}/>}/>
      
      </Routes>
      
      
      


    </div>
  );
}

export default App;
