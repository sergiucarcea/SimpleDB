import { useEffect, useState } from "react";
import axios from "/axios";
import "./index.css";

function App() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    getTrendingMovieData("movie");
  }, []);

  async function getTrendingMovieData(type) {
    try {
      const apiKey = "db9d40d07710f8f16e5180c72ca16b00";
      let resp = await axios.get(
        `https://api.themoviedb.org/3/trending/${type}/day?api_key=${apiKey}&media_type=movie`
      );
      console.log(21, resp.data.results);

      setMovieData(resp.data.results);
    } catch (e) {
    } finally {
    }
  }

  return (
    <>
      <div className="background_container bg-gray-900">
        <div className="button_container flex justify-center gap-7 bg-gray-900 lg:text-lg">
          <button
            className="bg-red-500 px-6 py-3 hover:bg-red-700 focus:bg-red-700 active:bg-red-900"
            onClick={() => {
              getTrendingMovieData("movie");
            }}
          >
            Trending Movies
          </button>
          <button
            className="bg-red-500 px-6 py-3 hover:bg-red-700 focus:bg-red-700 active:bg-red-900"
            onClick={() => {
              getTrendingMovieData("tv");
            }}
          >
            Trending TV
          </button>
        </div>
        <div className="flex-container">
          {movieData.map((item) => (
            <div key={item.id} className="movie_item">
              <img
                src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
              />
              <div className="movie_name">
                {item.original_title ? item.original_title : item.original_name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
