import React, { useEffect, useState } from "react";
import MovieDeatils from "./MovieDeatils.js";

export const Movies = () => {
  const [inputs, setInputs] = useState([]);
  const [movieid, setMovieid] = useState("");
  useEffect(() => {
    const character= {
      method: "GET",
      headers: {
        Authorization: "Bearer Wookie2019",
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    };
    fetch("https://wookie.codesubmit.io/movies", character)
      .then((req) => req.json())
      .then((res) => setInputs(res.movies));
  }, []);
  return (
    <>
      <div>
        {movieid === "" ? (
          <div className="main-container1 main-counter">
            <div className="mesh main-container1">
              {inputs.map((movies, id) => {
                return (
                  <div className="mesh-item" key={id}>
                    <div className="sheet">
                      <img
                        className="sheet-img"
                        src={movies.poster}
                        alt="Rome"
                      />
                      <div className="sheet-content">
                        <h1 className="sheet-header">{movies.title}</h1>
                        <div className="movie-sheet">
                          <h3>Director:{movies.director}</h3>
                          <h3>Duration:{movies.length}</h3>
                        </div>
                        <p className="sheet-text">{movies.overview}</p>
                        <button
                          className="sheet-btn"
                          onClick={() => setMovieid(movies.id)}>
                          Visit <span>&rarr;</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="movie-details">
            <MovieDeatils inputs={inputs} movieid={movieid} />
          </div>
        )}
      </div>
    </>
  );
};
