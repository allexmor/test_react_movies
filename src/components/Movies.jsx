import React from "react";
import { Movie } from "./Movie";

function Movies(props) {
    console.log(props);
    const { movies = [] } = props

    return <div className="movies">
        <div className="row row-flex">
            {
                movies.length ? movies.map((movie) => (

                    <Movie key={movie.imdbID} movie={movie} />

                )) : <h4>Nothing found</h4>

            }
        </div>
    </div>
}

export { Movies };