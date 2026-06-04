import React from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../features/authReducer";

const Navbar = () => {
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let {user} = useSelector((store)=>store.auth)
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
            onClick={()=> user?navigate('/home/movies'):navigate('/home')}
            className="text-white text-md font-semibold hover:text-orange-400 cursor-pointer transition"
          >
            Home
          </a>

          <a
            onClick={()=>navigate('/home/favorites')}
            className="text-gray-300 text-md font-semibold hover:text-orange-400 cursor-pointer transition"
          >
            Favorites
          </a>

          <a
            onClick={()=>navigate('/home/profile')}
            className="text-gray-300 text-md font-semibold hover:text-orange-400 cursor-pointer transition"
          >
            Profile
          </a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          
          {/* Search */}
          <button className="w-11 h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center">
            <Search
              size={19}
              className="text-purple-400"
            />
          </button>

          {
            user? <button
            onClick={()=>dispatch(removeUser())} className="h-11 px-6 rounded-full border border-orange-500/20 bg-[#25171b] text-[#f6b17a] text-lg font-medium hover:bg-[#2f1c21] transition">
           Log out
          </button>
            : <button className="h-11 px-6 rounded-full border border-orange-500/20 bg-[#25171b] text-[#f6b17a] text-lg font-medium hover:bg-[#2f1c21] transition">
           Sign in
          </button>

          }

          {/* Get Started */}
          <button onClick={()=>navigate('/home/favorites')} className="cursor-pointer h-11 px-6 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-semibold shadow-[0_0_25px_rgba(255,120,0,0.35)] hover:scale-105 transition">
            Get started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;