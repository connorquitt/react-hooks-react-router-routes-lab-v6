import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "./Home";

function Movie() {
  const params = useParams();
  const [currentMovie, setCurrentMovie] = useState({});

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Check the fetched data
        setCurrentMovie(data);
      })
      .catch((error) => {
        console.error("Error fetching movie:", error);
      });
  }, [params.id]);

  function GenList() {
    if(!currentMovie.genres) {
      return <span>loading...</span>
    }
    console.log(currentMovie); // Check the value of currentMovie
    console.log(currentMovie.genres); // Check the value of currentMovie.genres
  
    return currentMovie.genres.map((genre, index) => (
      <span key={index}>{genre}</span>
    ));
  }

  return (
    <>
      <NavBar />
      <header>
        <h1>{currentMovie.title}</h1>
      </header>
      <main>
        <p>{currentMovie.time}</p>
        <div>{<GenList />}</div>
      </main>
    </>
  );
}

export default Movie;
