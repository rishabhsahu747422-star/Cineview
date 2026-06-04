import React from "react";
import { Clapperboard } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";

const Login = () => {
    const navigate = useNavigate();
    let {register,handleSubmit,errors,onLoginSubmit} = useAuth()
  

  return (
    <div className="min-h-screen bg-[#020817] text-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-10 h-screen flex items-center justify-between">

        {/* LEFT SIDE */}
        <div className="w-[55%]">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#22131b] border border-orange-500/20 mb-8">
            <Clapperboard size={16} className="text-orange-400" />
            <span className="tracking-[6px] text-orange-300 text-sm">
              CINEVIEW
            </span>
          </div>

          <h1 className="text-5xl leading-[0.95] font-extrabold max-w-[700px] tracking-wider">
            Welcome to Your Cinema Hub
          </h1>

          <p className="mt-8 text-xl text-slate-300 max-w-[850px] leading-relaxed">
            Discover blockbuster trailers, save your favorite movies,
            and build your ultimate watchlist.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-[450px] pt-10">
          <div className="rounded-[38px] border border-slate-800 bg-[#030b29]/10 backdrop-blur-xl p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">

            <p className="text-center tracking-[8px] text-orange-300 text-sm uppercase">
              Welcome Back
            </p>

            <h2 className="text-center text-4xl font-bold mt-3">
              Sign In
            </h2>

            <p className="text-center text-slate-400 mt-4 text-lg">
              Access your personalized cinema experience
            </p>

            <form
              onSubmit={handleSubmit(onLoginSubmit)}
              className="mt-8"
            >
              {/* EMAIL */}
              <div>
                <label className="block text-lg mb-3">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                  className="w-full h-12 rounded-full bg-[#091631] border border-slate-700 px-6 text-lg outline-none focus:border-orange-400"
                />

                {errors.email && (
                  <p className="text-red-400 text-sm mt-2 ml-4">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* PASSWORD */}
              <div className="mt-6">
                <label className="block text-lg mb-3">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message:
                        "Password must be at least 6 characters",
                    },
                  })}
                  className="w-full h-12 rounded-full bg-[#091631] border border-slate-700 px-6 text-lg outline-none focus:border-orange-400"
                />

                {errors.password && (
                  <p className="text-red-400 text-sm mt-2 ml-4">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                
                className="w-full h-12 mt-8 rounded-full bg-gradient-to-r from-orange-500 via-orange-500 to-red-500 text-black font-semibold text-md shadow-[0_0_30px_rgba(255,90,0,0.35)] disabled:opacity-60"
              >
                Sign In
              </button>
            </form>

            <div className="flex items-center gap-4 my-7">
              <div className="flex-1 h-px bg-slate-800"></div>

              <span className="text-slate-400 whitespace-nowrap">
                New to CINEVIEW ?
              </span>

              <div className="flex-1 h-px bg-slate-800"></div>
            </div>

            <button
              onClick={() => navigate("/register")}
              className="w-full h-12 rounded-full border-2 border-orange-500 text-orange-300 font-semibold text-md hover:bg-orange-500/10 transition"
            >
              Create Account
            </button>
          </div>
        </div>  

      </div>
    </div>
  );
};

export default Login;