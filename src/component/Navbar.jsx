import React, { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../features/authReducer";
import { movies } from "../utils/movies";
import { usemovie } from "../hooks/usemovie";
import { setSearch } from "../features/movieReducer";

const Navbar = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  let { user } = useSelector((store) => store.auth);
  const { search } = useSelector(
  (state) => state.movie
);

console.log(search);
  


  let {searchMovie} = usemovie()

  console.log(searchMovie);
  console.log(search);
  

  const handleSearch = (e)=>{
    e.preventDefault()
    navigate('/home/search')
    console.log(search);
    
  } 
  
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[black] border-b border-white/5 ">
      <div className="max-w-[1300px] mx-auto px-12 h-22 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex items-center gap-4 px-3 pr-6 h-13 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 shadow-[0_0_30px_rgba(255,80,80,0.35)]">
            <div className="w-10 h-10 rounded-full bg-[#2b1f22] flex items-center justify-center">
              <span className="text-white font-bold text-xl">CV</span>
            </div>

            <span className="text-white text-xl font-bold tracking-[2px]">
              CINEVIEW
            </span>
          </div>
        </div>

        {/* Center Links */}
        <nav className="hidden lg:flex items-center gap-16">
          <a
            onClick={() =>
              user ? navigate("/home/movies") : navigate("/home")
            }
            className="text-gray-300 text-md font-semibold hover:text-orange-400 cursor-pointer transition"
          >
            Home
          </a>

          <a
            onClick={() => navigate("/home/favorites")}
            className="text-gray-300 text-md font-semibold hover:text-orange-400 cursor-pointer transition"
          >
            Favorites
          </a>

          <a
            onClick={() => navigate("/home/profile")}
            className="text-gray-300 text-md font-semibold hover:text-orange-400 cursor-pointer transition"
          >
            Profile
          </a>
        </nav>

        {/* Right Side */}
        <div>
          <div className="flex items-center gap-5">
            {/* Search */}
            <div className="flex items-center gap-2">
              <form onSubmit={handleSearch} className="flex items-center gap-2" action="">

             
              <input
                type="text"
                value={search}
                onChange={(e) =>dispatch(setSearch(e.target.value))}
                placeholder="Search movies..."
                className={`
      transition-all duration-300 ease-in-out
      bg-transparent text-white outline-none
      border border-orange-500 rounded-full
      ${
        open ? "w-40 px-4 py-1 opacity-100" : "w-0 px-0 py-0 opacity-0 border-0"
      }
    `}
              />

              {open ?
                  <button
                onClick={() =>{navigate('/home/movies'),setOpen(!open)}}
                className="h-10 w-10 flex items-center justify-center border border-blue-950 rounded-full bg-[rgb(12,17,36)] hover:border-orange-500 cursor-pointer"
              >
                ✖ 
              </button>
              
              
              :<button
              type="button"
                onClick={() =>{ setOpen(!open)}}
                className="h-10 w-10 flex items-center justify-center border border-blue-950 rounded-full bg-[rgb(12,17,36)] hover:border-orange-500 cursor-pointer"
              >
                🔍
              </button>
                }
               </form>
            </div>

            {user ? (
              <div className="flex justify-center items-center">
                <div
                  onClick={() => navigate("/home/profile")}
                  className="cursor-pointer flex justify-between px-2 items-center h-12 gap-2 rounded-full border border-orange-500/20 bg-[#25171b] text-[#f6b17a] text-lg font-medium hover:bg-[#2f1c21] transition"
                >
                  <h1 className="h-9 w-9 bg-orange-500 text-amber-950 rounded-full flex justify-center items-center">
                    {user.user?.name[0].toUpperCase()}
                  </h1>
                  {user.user?.name}
                </div>
              </div>
            ) : (
              <button className="h-11 px-6 rounded-full border border-orange-500/20 bg-[#25171b] text-[#f6b17a] text-lg font-medium hover:bg-[#2f1c21] transition">
                Sign in
              </button>
            )}

            {/* Get Started */}
            <button
              onClick={() => navigate("/home/favorites")}
              className="cursor-pointer h-10 px-6 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-semibold shadow-[0_0_25px_rgba(255,120,0,0.35)] hover:scale-105 transition"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
