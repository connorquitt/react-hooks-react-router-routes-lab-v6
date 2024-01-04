import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Home from "./Home";
function Directors() {
  const [directors, setDirectors] = useState([])
  useEffect(() => {
    fetch(`http://localhost:4000/directors`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setDirectors(data)
      })
  }, [Home, Directors])

  function DirectorCard() {
    if(!directors) {
      return <h2>Loading...</h2>
    }
    return (
      directors.map((director) => 
      <article key={director.id}>
        <h1>{director.name}</h1>
        <ul>
          {director.movies.map((movie, index) => <li key={index}>{movie}</li>)}
        </ul>
      </article>)
    )
  }
  return (
    <>
    <NavBar />
      <header>
        {<h1>Directors Page</h1>}
      </header>
      <main>
        {<DirectorCard />}
      </main>
    </>
  );
};

export default Directors;
