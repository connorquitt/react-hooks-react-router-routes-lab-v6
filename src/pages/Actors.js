import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([])
  useEffect(() => {
    fetch(`http://localhost:4000/actors`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setActors(data)
      })
  })

  function ActorCard() {
    return (
      actors.map((actor) => 
            <article key={actor.id}>
              <h2>{actor.name}</h2>
              <ul>
                {actor.movies.map((movie, index) => <li key={index}>{movie}</li>)}
              </ul>
            </article>
          )
    )
  }

  return (
    <>
    <NavBar />
      <header>
        {<h1>Actors Page</h1>}
      </header>
      <main>
        {<ActorCard />}
      </main>
    </>
  );
};

export default Actors;
