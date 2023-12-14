import React from "react";

function Movie(props) {

    const {
        Poster: poster,
        Title: title,
        imdbID: id,
        Type: type,
        Year: year,
    } = props.movie;

    return <div className="col s12 m4" id={id}>
        <div className="card">
            <div className="card-image">
                {
                    poster === 'N/A' ? <img src={`https://via.placeholder.com/300x400?text=${title}`} /> : <img src={poster} />
                }

                <span className="card-title">{title}</span>
            </div>
            <div className="card-content">
                <p>{type} <span className="right">{year}</span></p>
            </div>
            <div className="card-action">
                <a href="#">This is a link</a>
            </div>
        </div>
    </div >;
}

export { Movie };