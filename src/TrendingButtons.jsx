import React from "react";

function TrendingButtons({ getTrendingMovieData }) {
  return (
    <div className="button_container flex justify-center gap-7 gap-x-20 lg:text-lg">
      <button
        id="movies"
        className="btn-secondary btn shadow-lg shadow-indigo-500/80 sm:btn-sm md:btn-md lg:btn-lg"
        onClick={() => {
          getTrendingMovieData("movie");
        }}
      >
        Trending Movies
      </button>
      <button
        id="shows"
        className="btn-secondary btn shadow-lg shadow-indigo-500/80 sm:btn-sm md:btn-md lg:btn-lg"
        onClick={() => {
          getTrendingMovieData("tv");
        }}
      >
        Trending Shows
      </button>
    </div>
  );
}

export default TrendingButtons;
