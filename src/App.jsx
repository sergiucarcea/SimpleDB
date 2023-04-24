import { useEffect, useState } from "react";
import axios from "axios";
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
      console.log(resp.data.results);

      setMovieData(resp.data.results);
    } catch (e) {
    } finally {
    }
  }

  return (
    <>
      <div class="bg-gray-900">
        <div class="container mx-auto flex items-center justify-between py-4">
          <ul class="flex space-x-10 text-lg text-gray-300">
            <li class="duration-300 hover:text-white active:text-gray-300 ">
              <a href="#">HOME</a>
            </li>
            <li class="duration-300 hover:text-white active:text-gray-300">
              <a href="#">ABOUT</a>
            </li>
            <li class="duration-300 hover:text-white active:text-gray-300">
              <a href="#">SERVICES</a>
            </li>
            <li class="duration-300 hover:text-white active:text-gray-300">
              <a href="#">WORKS</a>
            </li>
          </ul>
          <div class="flex items-center">
            <a
              href="#"
              class="rounded-sm bg-red-600 px-4 py-2 text-lg text-gray-50 shadow-md duration-300 hover:bg-red-700 hover:text-white active:bg-red-800 active:text-gray-300"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>
      <div className="background_container bg=gray-900">
        <div className="button_container flex justify-center gap-7 lg:text-lg">
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
            <div
              key={item.id}
              className="movie_item transform cursor-pointer transition-all hover:scale-95"
            >
              <img
                src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
              />
              <div className="movie_name">
                {item.original_title ? item.original_title : item.original_name}
              </div>
            </div>
          ))}
        </div>
        <div className="flex-container container">
          <h1 className="m-11 mx-auto space-x-4 rounded-lg bg-white px-12 text-blue-500 shadow-lg">
            Still nothing found?
          </h1>
          <div className=""></div>
        </div>
      </div>
    </>
  );
}

export default App;
