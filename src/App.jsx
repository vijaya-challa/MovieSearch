import "./App.css";
import SearchIcon from "./search.svg";
import { useState, useEffect } from "react";
// import Person from './component/Person/Person';
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=df5be08";
const movie1 = {
  Title: "Spiderman the Verse",
  Year: "2019–",
  imdbID: "tt12122034",
  Type: "series",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg",
};

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm]= useState('')

  const serachMovies = async (title) => {
    // try {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search)
    setMovies(data.Search);
    // } catch (error) {
    //   console.log(error.message);
    // }
  };

  useEffect(() => {
    serachMovies("Spiderman");
  }, []);

  //  df5be08
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={() => serachMovies(searchTerm)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => {
            return <MovieCard movie={movie}/>;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies Found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
