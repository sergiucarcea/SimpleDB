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
  const api = axios.create({
    baseURL: import.meta.env.VITE_URL,
  });
  const [movieData, setMovieData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
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
      const apiKey = import.meta.env.VITE_API;
      let resp;
      if (searchQuery) {
        resp = await api.get(`/search/${type}`, {
          params: {
            api_key: apiKey,
            query: searchQuery,
            media_type: "movie",
          },
        });
      } else {
        resp = await api.get(`/trending/${type}/day`, {
          params: {
            api_key: apiKey,
            media_type: "movie",
          },
        });
      }
      setMovieData(resp.data.results);
    } catch (e) {
      console.error(e);
    }
  }

  function handleSearch(event) {
    event.preventDefault();
    getTrendingMovieData(searchQuery ? "multi" : "movie");
  }
  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handleRegister(event) {
    event.preventDefault();
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("password", password);
    sessionStorage.setItem("email", email);
  }

  return (
    <>
      <section id="hero" className="font-mono shadow-2xl ">
        <div className=" mx-auto max-w-[85%] py-12">
          <nav className="flex items-center justify-between  text-white">
            <img
              src={firstlogo}
              alt="logo"
              className="min-h-full overflow-hidden sm:w-52 md:w-72 lg:w-52"
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
            className=" btn-primary btn md:btn-md lg:btn-lg sm:float-left md:float-right lg:float-right  "
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
      <div className="hero h-[80%] bg-gradient-to-tl  from-blue-900 via-stone-800 to-blue-900 backdrop-blur-sm">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-red-500">Don't miss out!</h1>
            <p className="py-6 text-lg text-slate-300">
              Join our community of film and TV enthusiasts today and start
              exploring the best of entertainment!
            </p>
          </div>
          <div className="card w-full max-w-sm flex-shrink-0 bg-base-300 bg-opacity-20 duration-300 hover:bg-opacity-90">
            <div className=" card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="username"
                  className="input-bordered input-info input w-full max-w-xs duration-75"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-password">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input-bordered input-info input w-full max-w-xs duration-75"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input-bordered input-info input w-full max-w-xs duration-75"
                  value={email}
                  onChange={handleEmailChange}
                  id="email"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn-primary btn" onClick={handleRegister}>
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background_container bg-gradient-to-tr from-blue-900 via-stone-800 to-blue-900 ">
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

      <form
        className="flex items-center justify-center bg-black "
        onSubmit={handleSearch}
      >
        <input
          type="text"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search movies, shows..."
          className=" input-bordered input-info input input-lg w-full max-w-xs duration-100"
        />

        <button type="submit" className="btn-primary btn-lg btn mb-8">
          Search
        </button>
      </form>

      <div className="bg-black  text-center text-2xl text-red-500">
        <div className="stats stats-vertical bg-gray-100 px-11 shadow lg:stats-horizontal">
          <div className="stat">
            <div className="stat-title">Views</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-title">New Users</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-title">Pro Users</div>
            <div className="stat-value">369</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>

      <div className="bg-black py-5  text-center text-3xl font-bold text-red-500">
        <p>Frequent questions </p>
      </div>
      <div tabIndex={0} className="group collapse">
        <div className="collapse-title bg-primary text-center text-lg text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          <h2 className="text-2xl">What is Beyond Stream ?</h2>
        </div>
        <div className="collapse-content bg-primary text-center text-lg text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          <p>
            Beyond Stream is a dedicated streaming platform featuring movies and
            productions from Disney, Pixar, Marvel, Star Wars, National
            Geographic and more.
          </p>
        </div>
      </div>
      <div tabIndex={0} className="group collapse">
        <div className="collapse-title bg-primary text-center text-lg text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          <h2 className="text-2xl">What can I watch on Beyond Stream ?</h2>
        </div>
        <div className="collapse-content list-disc bg-primary text-center text-lg text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          <p>
            Beyond Stream offers an impressive collection of movies and series,
            with new content added monthly.
          </p>
          <ul className="list-inside list-disc">
            <li>
              4K UHD, Dolby Vision and Dolby Atmos playback on compatible
              devices at no additional cost.
            </li>
            <li>
              Discover the beauty of the planet through the exceptional
              documentaries of the National Geographic brand
            </li>
            <li>
              Exclusively see the shows everyone is talking about, like the
              latest season of the global phenomenon The Walking Dead
            </li>
          </ul>
        </div>
      </div>
      <div tabIndex={0} className="group collapse">
        <div className="collapse-title bg-primary text-center text-lg text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          <h2 className="text-2xl">How much does it cost ?</h2>
        </div>
        <div className="collapse-content bg-primary text-center text-lg text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          <p>
            The rate for monthly subscription is $10. Alternatively, you can
            choose the annual plan ($12) for 12 months at the price of 10
            months!*
          </p>
          <p>
            *Discount calculated compared to 12 months at the monthly
            subscription rate ($10) at launch.
          </p>
        </div>
      </div>

      <footer className="footer bg-black p-10 text-neutral-content">
        <div>
          <img
            srcSet={firstlogo}
            alt="logo"
            className="min-h-full sm:w-[50%] lg:w-72"
            onClick={() => window.location.reload()}
          />
          <div className="inline-flex flex-wrap space-x-10 text-lg font-semibold">
            <a
              href="#movies"
              className="text-gray-50 duration-300 hover:text-gray-300 active:text-gray-500  "
            >
              Movies
            </a>
            <a
              href="#shows"
              className="text-gray-50 duration-300 hover:text-gray-300 active:text-gray-500 "
            >
              TV Shows
            </a>
            <a
              href="#"
              className="text-gray-50 duration-300 hover:text-gray-300 active:text-gray-500 "
            >
              Actors
            </a>
            <a
              href="#"
              className="text-gray-50 duration-300 hover:text-gray-300 active:text-gray-500 "
            >
              Reviews
            </a>
            <a
              href="#"
              className="text-gray-50 duration-300 hover:text-gray-300 active:text-gray-500 "
            >
              Support
            </a>
          </div>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a href="#">
              <img
                src={logo4}
                alt="facebook"
                className=" h-7 w-7 duration-300 hover:-skew-y-12"
              />
            </a>
            <a href="#">
              <img
                src={logo5}
                alt="twitter"
                className="h-7 w-7 duration-300 hover:-skew-y-12"
              />
            </a>
            <a href="#">
              <img
                src={logo6}
                alt="instagram"
                className="h-7 w-7 duration-300 hover:-skew-y-12"
              />
            </a>
            <a href="#">
              <img
                src={logo7}
                alt="pinterest"
                className="h-7 w-7 duration-300 hover:-skew-y-12"
              />
            </a>
          </div>
        </div>
        <div className=" bg-black p-4 text-base-content">
          <p>&copy; 2023 Beyond Stream </p>
          <p>All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}

export default App;
