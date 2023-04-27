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
      <section id="hero" className="font-mono shadow-2xl">
        <div className=" mx-auto max-w-7xl py-12">
          <nav className="flex items-center justify-between  text-white">
            <img src="/src/logo.svg" alt="logo" className="max-w-[22%]" />

            <div className="flex h-10 flex-col items-center pt-3 md:flex md:flex-row md:items-start md:justify-between md:space-x-8 md:space-y-0">
              <div className="group text-lg text-gray-50 duration-300 hover:text-gray-300 active:text-gray-500 ">
                <a href="#">About</a>
              </div>
              <div className="group text-lg text-gray-50 duration-300 hover:text-gray-300 active:text-gray-500">
                <a href="#">Careers</a>
              </div>
              <div className="group text-lg text-gray-50 duration-300 hover:text-gray-300 active:text-gray-500">
                <a href="#">Events</a>
              </div>
              <div className="group text-lg text-gray-50 duration-300 hover:text-gray-300 active:text-gray-500">
                <a href="#">Products</a>
              </div>
              <div className="group cursor-pointer rounded-sm bg-red-600 px-6 text-lg  text-gray-50 duration-300 hover:bg-red-700 hover:text-white active:bg-red-800 active:text-gray-300">
                <a href="#">Sign In</a>
              </div>
            </div>
          </nav>

          <div className="mb-32 mt-32 max-w-lg border-2 p-4 font-sans text-4xl uppercase text-gray-50 md:m-32 md:mx-0 md:p-10 md:text-6xl">
            Limitless cinema, television shows,and more
          </div>
        </div>
      </section>
      <div className="background_container bg-gray-500">
        <div className="button_container flex justify-center gap-7 gap-x-20 lg:text-lg">
          <button
            className="cursor-pointer rounded-md bg-red-600 p-4  px-7 text-lg text-gray-50  shadow-2xl duration-300 hover:bg-red-700 hover:text-white active:bg-red-800 active:text-gray-300"
            onClick={() => {
              getTrendingMovieData("movie");
            }}
          >
            Trending Movies
          </button>
          <button
            className="cursor-pointer rounded-md bg-red-600 p-4 px-7 text-lg text-gray-50 shadow-2xl duration-300 hover:bg-red-700 hover:text-white active:bg-red-800 active:text-gray-300"
            onClick={() => {
              getTrendingMovieData("tv");
            }}
          >
            Trending Shows
          </button>
        </div>
        <div className="flex-container">
          {movieData.map((item) => (
            <div
              key={item.id}
              className="movie_item transform cursor-pointer  transition-all hover:scale-95"
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
        <div className="md:grid-cols-3-3 grid grid-cols-3 content-center bg-black pb-32 align-middle text-white sm:row-span-3  sm:text-xs md:text-base lg:text-lg">
          <div className="">
            <img src="/src/1.jpg" alt="something" />
            <h1 className="text-center text-xl">Unlimited entertainment</h1>
            <p className="text-center">
              Explore thousands of hours of original TV shows, movies and
              productions.
            </p>
          </div>
          <div>
            <img src="/src/2.jpg" alt="something" />
            <h1 className="text-center text-xl">
              Available on your favorite devices
            </h1>
            <p className="text-center">
              You can watch on 4 screens simultaneously on your favorite devices
            </p>
          </div>
          <div>
            <img src="/src/3.jpg" alt="something" />
            <h1 className="text-center text-xl">
              Easy-to-use parental controls
            </h1>
            <p className="text-center">
              Age appropriate content with Parental Control option
            </p>
          </div>
        </div>
      </div>
      <footer className="bg-black shadow-2xl">
        <div className="container mx-auto max-w-7xl py-10">
          <div className="mb-8 flex flex-col items-center space-y-6 md:flex-row md:items-start md:justify-between md:space-y-0">
            <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
              <div className="h-8">
                <img
                  src="/src/logo.svg"
                  alt=""
                  className="max-w-[22%] md:ml-3"
                />
              </div>

              <div className="flex flex-col items-center space-y-4 font-bold text-white md:ml-3 md:flex-row md:space-x-6 md:space-y-0">
                <div className="group h-10 text-lg text-gray-50 duration-300 hover:text-gray-300 active:text-gray-500">
                  <a href="#">About</a>
                </div>

                <div className="group h-10 text-lg text-gray-50 duration-300 hover:text-gray-300 active:text-gray-500">
                  <a href="#">Careers</a>
                </div>

                <div className="group h-10 text-lg text-gray-50 duration-300 hover:text-gray-300 active:text-gray-500">
                  <a href="#">Events</a>
                </div>

                <div className="group h-10 text-lg text-gray-50 duration-300 hover:text-gray-300 active:text-gray-500">
                  <a href="#">Products</a>
                </div>

                <div className="group h-10 text-lg text-gray-50 duration-300 hover:text-gray-300 active:text-gray-500">
                  <a href="#">Support</a>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-between space-y-4 text-gray-700">
              <div className="mx-auto flex items-center justify-center space-x-4 md:mx-0 md:justify-end ">
                <div className="group h-8">
                  <a href="#">
                    <img
                      src="/src/icon-facebook.svg"
                      alt=""
                      className=" h-7 w-7"
                    />
                  </a>
                </div>

                <div className="group h-8">
                  <a href="#">
                    <img
                      src="/src/icon-twitter.svg"
                      alt=""
                      className="h-7 w-7"
                    />
                  </a>
                </div>

                <div className="group h-8">
                  <a href="#">
                    <img
                      src="/src/icon-pinterest.svg"
                      alt=""
                      className="h-7 w-7"
                    />
                  </a>
                </div>

                <div className="group h-8">
                  <a href="#">
                    <img
                      src="/src/icon-instagram.svg"
                      alt=""
                      className="h-7 w-7"
                    />
                  </a>
                </div>
              </div>

              <div className="font-mono">
                &copy; 2023 Beyond Stream All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
