import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import firstlogo from "/src/logo.svg";
import logo1 from "/src/one.png";
import logo2 from "/src/two.png";
import logo3 from "/src/three.png";
import logo4 from "/src/icon-facebook.svg";
import logo5 from "/src/icon-twitter.svg";
import logo6 from "/src/icon-instagram.svg";
import logo7 from "/src/icon-pinterest.svg";

function App() {
  const [movieData, setMovieData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSignInClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  function handleSubmit(event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const email = emailInput.value;
    const password = passwordInput.value;

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  }

  useEffect(() => {
    getTrendingMovieData("movie");
  }, []);

  async function getTrendingMovieData(type) {
    try {
      const apiKey = "db9d40d07710f8f16e5180c72ca16b00";
      let resp;
      if (searchQuery) {
        resp = await axios.get(
          `https://api.themoviedb.org/3/search/${type}?api_key=${apiKey}&query=${searchQuery}&media_type=movie`
        );
      } else {
        resp = await axios.get(
          `https://api.themoviedb.org/3/trending/${type}/day?api_key=${apiKey}&media_type=movie`
        );
      }

      // console.log(resp.data.results);
      setMovieData(resp.data.results);
    } catch (e) {
      console.error(e);
    }
  }

  function handleSearch(event) {
    event.preventDefault();
    getTrendingMovieData(searchQuery ? "multi" : "movie");
  }

  return (
    <>
      <section id="hero" className="font-mono shadow-2xl ">
        <div className=" mx-auto max-w-7xl py-12">
          <nav className="flex items-center justify-between  text-white">
            <img
              src={firstlogo}
              alt="logo"
              className="max-w-[22%] cursor-pointer"
              onClick={() => window.location.reload()}
            />

            <div className="flex h-10 flex-col items-center pt-3 md:flex md:flex-row md:items-start md:justify-between md:space-x-8 md:space-y-0">
              <div className="group text-lg text-gray-50 duration-300 hover:text-gray-300 active:text-gray-500 ">
                <a href="#movies">Movies</a>
              </div>
              <div className="group text-lg text-gray-50 duration-300 hover:text-gray-300 active:text-gray-500">
                <a href="#shows">TV Shows</a>
              </div>
              <div className="group text-lg text-gray-50 duration-300 hover:text-gray-300 active:text-gray-500">
                <a href="#">Actors</a>
              </div>
              <div className="group text-lg text-gray-50 duration-300 hover:text-gray-300 active:text-gray-500">
                <a href="#">Reviews</a>
              </div>
            </div>
          </nav>

          <button
            className="active:text-gray-3000 float-right cursor-pointer rounded-md bg-red-600 p-4 px-7 text-lg text-gray-50  shadow-2xl duration-300 hover:bg-red-700 hover:text-white active:bg-red-800 sm:p-2 md:p-2"
            onClick={handleSignInClick}
          >
            Sign in
          </button>
          {showModal && (
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-screen items-center justify-center">
                <div className="fixed inset-0 bg-gray-900 bg-opacity-75"></div>
                <div className="z-10 rounded-lg bg-white p-8 opacity-90">
                  <div className="mb-4 text-lg font-bold">
                    Access Exclusive Content
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label
                        className="mb-2 block font-bold text-gray-700"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="rounded border px-3 py-2"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        className="mb-2 block font-bold text-gray-700"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        className="rounded border px-3 py-2"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="*********"
                      />
                    </div>
                    <div className="flex justify-end">
                      <button className="rounded bg-indigo-500 px-6 py-2 font-bold text-white hover:bg-indigo-600 active:bg-indigo-700">
                        Sign in
                      </button>
                      <button
                        className="ml-4 rounded px-6 py-2 font-bold text-gray-600 hover:text-black"
                        onClick={handleModalClose}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          <div className="mb-32 mt-32 max-w-lg border-2 p-4 font-sans text-4xl uppercase text-gray-50 opacity-90 md:m-32 md:mx-0 md:p-10 md:text-6xl">
            Limitless cinema, television shows,and more
          </div>
        </div>
      </section>
      <div className="hero h-[80%] bg-gradient-to-tl from-blue-900 via-stone-800 to-blue-900 backdrop-blur-sm">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-red-500">Don't miss out!</h1>
            <p className="py-6 text-lg text-slate-300">
              Join our community of film and TV enthusiasts today and start
              exploring the best of entertainment!
            </p>
          </div>
          <div className="card w-full max-w-sm flex-shrink-0 bg-base-300  bg-opacity-20 hover:bg-opacity-90">
            <div className=" card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="username"
                  className="input-bordered input"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-password">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input-bordered input"
                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input-bordered input"
                  id="email"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn-primary btn">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background_container bg-gradient-to-tr from-blue-900 via-stone-800 to-blue-900 ">
        <div className="button_container flex justify-center gap-7 gap-x-20 lg:text-lg">
          <button
            id="movies"
            className="btn-secondary btn sm:btn-sm md:btn-md lg:btn-lg"
            onClick={() => {
              getTrendingMovieData("movie");
            }}
          >
            Trending Movies
          </button>
          <button
            id="shows"
            className="btn-secondary btn sm:btn-sm md:btn-md lg:btn-lg"
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
        <div className="md:grid-cols-3-3 grid grid-cols-3 justify-center bg-black py-10 pb-32 align-middle text-white sm:row-span-3  sm:text-xs md:text-base lg:text-lg">
          <div className="items-center">
            <img src={logo1} alt="something" />
            <h1 className="text-center text-xl">Unlimited entertainment</h1>
            <p className="text-center">
              Explore thousands of hours of original TV shows, movies and
              productions.
            </p>
          </div>
          <div className="items-center">
            <img src={logo2} alt="something" />
            <h1 className="text-center text-xl">
              Available on your favorite devices
            </h1>
            <p className="text-center">
              You can watch on 4 screens simultaneously on your favorite devices
            </p>
          </div>
          <div className="items-center">
            <img src={logo3} alt="something" />
            <h1 className="text-center text-xl">
              Easy-to-use parental controls
            </h1>
            <p className="text-center">
              Age appropriate content with Parental Control option
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black text-center text-2xl text-red-500 ">
        Still nothing found?
      </div>
      <form
        className="flex items-center justify-center bg-black "
        onSubmit={handleSearch}
      >
        <input
          type="text"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search movies, shows..."
          className=" rounded-md rounded-r-none bg-gray-800 px-2 py-4 text-center text-lg text-gray-100 md:w-auto"
        />

        <button
          type="submit"
          className="my-10 cursor-pointer rounded-md rounded-l-none bg-red-600 p-4 px-7 text-center text-lg text-gray-50  duration-300 hover:bg-red-700 hover:text-white active:bg-red-800 active:text-gray-300"
        >
          Search
        </button>
      </form>

      <footer className="bg-black shadow-2xl">
        <div className="container mx-auto max-w-7xl py-10">
          <div className="mb-8 flex flex-col items-center space-y-6 md:flex-row md:items-start md:justify-between md:space-y-0">
            <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
              <div className="h-8">
                <img
                  src={firstlogo}
                  alt=""
                  className="max-w-[22%] md:ml-3"
                  onClick={() => window.location.reload()}
                />
              </div>

              <div className="flex flex-col items-center space-y-4 font-bold text-white md:ml-3 md:flex-row md:space-x-6 md:space-y-0">
                <div className="group h-10 text-lg text-gray-50 duration-300 hover:text-gray-300 active:text-gray-500">
                  <a href="#movies">Movies</a>
                </div>

                <div className="group h-10 text-lg text-gray-50 duration-300 hover:text-gray-300 active:text-gray-500">
                  <a href="#shows">TV Shows</a>
                </div>

                <div className="group h-10 text-lg text-gray-50 duration-300 hover:text-gray-300 active:text-gray-500">
                  <a href="#">Actors</a>
                </div>

                <div className="group h-10 text-lg text-gray-50 duration-300 hover:text-gray-300 active:text-gray-500">
                  <a href="#">Reviews</a>
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
                    <img src={logo4} alt="" className=" h-7 w-7" />
                  </a>
                </div>

                <div className="group h-8">
                  <a href="#">
                    <img src={logo5} alt="" className="h-7 w-7" />
                  </a>
                </div>

                <div className="group h-8">
                  <a href="#">
                    <img src={logo7} alt="" className="h-7 w-7" />
                  </a>
                </div>

                <div className="group h-8">
                  <a href="#">
                    <img src={logo6} alt="" className="h-7 w-7" />
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
