import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';



function MovieCard({ title, id }) {
  return (
    <article>
        <h2>{title}</h2>
        {<Link to={`/movie/${id}`}>View Info</Link>}
    </article>
  );
};

export default MovieCard;