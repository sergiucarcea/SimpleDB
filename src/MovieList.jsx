import React from "react";

function MovieList({ movieData }) {
  return (
    <div className="flex-container">
      {movieData.map((item) => (
        <div
          key={item.id}
          className="movie_item transform-gpu cursor-pointer transition-all duration-200 hover:scale-[96%] "
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
          <div className="rating">
            {Array.from({ length: 5 }, (v, i) => (
              <input
                key={i}
                type="radio"
                name={`rating-${item.id}`}
                className={`mask mask-star-2 bg-orange-400 ${
                  Math.floor(Math.random() * 5) + 1 <= i ? "" : "checked"
                }`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
