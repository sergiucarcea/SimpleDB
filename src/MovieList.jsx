import React from "react";

function MovieList({ movieData }) {
  return (
    <div className="flex-container">
      {movieData.map((item) => (
        <div
          key={item.id}
          className="movie_item transform cursor-pointer transition-all duration-200 hover:scale-95 "
        >
          {item.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
              className="shadow-2xl hover:shadow-indigo-500/50"
            />
          ) : (
            ""
          )}
          {item.original_title || item.original_name ? (
            <div className="movie_name">
              {item.original_title || item.original_name}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default MovieList;
