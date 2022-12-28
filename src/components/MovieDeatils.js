import React from "react";
const MovieDeatils = (props) => {
  return (
    <div>
      <h1>Movie Details</h1>
      <div>
        <div>
          {props.inputs.map((movies) => {
            if (movies.id === props.movieid) {
              return (
                <>
                  <div className="movie-details">
                    <img src={movies.poster} alt="" />
                    <div className="movie-sheet1">
                      <p>Title:{movies.title}</p>
                      <p>
                        price:
                        {movies.prices.map((prices) => {
                          return <p>{prices}</p>;
                        })}
                      </p>
                      <p className="para">Movie Overview:{movies.overview}</p>
                      <p>classifications:{movies.classification}</p>
                      <p>imdb_rating :{movies.imdb_rating}</p>
                      <p>Duration:{movies.length}</p>
                      <p>released_on :{movies.released_on}</p>
                      <p>slug :{movies.slug}</p>
                      <p>
                        groups:{" "}
                        {movies.groups.map((group, i) => {
                          return (
                            <p>
                              <ol>
                                {i}:{group}
                              </ol>
                            </p>
                          );
                        })}
                      </p>
                    </div>
                  </div>
                </>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieDeatils;
