import React from "react";
import {
  Clapperboard,
  Star,
  Smartphone,
  Gift,
} from "lucide-react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
    const navigate = useNavigate();
    let {register,handleSubmit,errors,onRegisterSubmit} = useAuth()

  return (
    <div className="min-h-screen h-full bg-[#020817] text-white py-10 pt-20">
      <div className="max-w-[1200px] mx-auto px-12 h-screen flex items-center justify-between">

        {/* LEFT SECTION */}
        <div className="w-[58%]">

          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-orange-500/20 bg-[#21131a] mb-8">
            <Clapperboard
              size={15}
              className="text-orange-300"
            />

            <span className="tracking-[6px] text-sm text-orange-300 uppercase">
              Cineview
            </span>
          </div>

          <h1 className="max-w-[720px] text-5xl leading-[0.95] font-extrabold">
            Join the Cinema Community
          </h1>

          <p className="mt-8 text-xl text-slate-300 max-w-[900px] leading-relaxed">
            Create an account and unlock a personalized
            movie experience like no other.
          </p>

          <div className="mt-10 space-y-10">

            <div className="flex gap-6">
              <div className="mt-1">
                <Star
                  className="text-yellow-400 fill-yellow-400"
                  size={30}
                />
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Personalized Recommendations
                </h3>

                <p className="text-slate-400 text-md mt-1">
                  Get movie suggestions based on your
                  favorites and watch patterns.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="mt-1">
                <Smartphone
                  className="text-purple-400"
                  size={30}
                />
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Sync Across Devices
                </h3>

                <p className="text-slate-400 text-md mt-1">
                  Access your watchlist and favorites
                  from anywhere, anytime.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="mt-1">
                <Gift
                  className="text-orange-400"
                  size={30}
                />
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Exclusive Features
                </h3>

                <p className="text-slate-400 text-md mt-1">
                  Enjoy advanced filters, ratings and
                  curated collections.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="w-[450px]">
          <div className="h-180 py-10 rounded-[40px] border border-slate-800 bg-[#030b29]/80 backdrop-blur-xl px-12">

            <p className="text-center tracking-[8px] text-orange-300 text-sm uppercase">
              Get Started
            </p>

            <h2 className="text-center text-4xl font-bold mt-3">
              Create Account
            </h2>

            <p className="text-center text-slate-400 mt-1 text-lg">
              Join thousands of movie enthusiasts
            </p>

            <form
              onSubmit={handleSubmit(onRegisterSubmit)}
              className="mt-5"
            >
              {/* Full Name */}
              <div>
                <label className="block mb-3 font-medium text-lg">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  {...register("name", {
                    required: "Name is required",
                  })}
                  className="w-full h-12 rounded-full bg-[#091631] border border-slate-700 px-6 text-md outline-none focus:border-orange-400"
                />

                {errors.name && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="mt-5">
                <label className="block mb-3 font-medium text-lg">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  className="w-full h-12 rounded-full bg-[#091631] border border-slate-700 px-6 text-md outline-none focus:border-orange-400"
                />

                {errors.email && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="mt-5">
                <label className="block mb-3 font-medium text-lg">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Create a strong password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="w-full h-12 rounded-full bg-[#091631] border border-slate-700 px-6 text-md outline-none focus:border-orange-400"
                />

                {errors.password && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* CTA */}
              <button
                type="submit"
                
                className="w-full h-12 mt-6 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-black font-semibold text-md shadow-[0_0_25px_rgba(255,100,0,0.35)]"
              >
                Create Account
              </button>
            </form>

            <div className="flex items-center gap-4 my-5">
              <div className="flex-1 h-px bg-slate-800" />

              <span className="text-slate-400 whitespace-nowrap">
                Already a member?
              </span>

              <div className="flex-1 h-px bg-slate-800" />
            </div>

            <button
              onClick={() => navigate("/")}
              className="w-full h-12 rounded-full border-2 border-orange-500 text-orange-300 text-md font-semibold hover:bg-orange-500/10 transition"
            >
              Sign In
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Register;