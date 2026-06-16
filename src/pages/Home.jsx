import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white pt-10">
      <div className="max-w-7xl mx-auto px-8 py-10">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-[40px] border border-slate-800 p-15">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.15),transparent_50%)]" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-6 py-3 text-sm tracking-[0.35em] text-orange-300 uppercase">
              Featured
              <span className="ml-6 text-slate-400">Top Trending</span>
            </div>

            <h1 className="mt-10 text-4xl font-black leading-[0.95] tracking-tight">
              CINEMATIC STORIES, LIVE
              <br />
              NOW
            </h1>

            <p className="mt-8 text-lg text-slate-300">Latest</p>

            <p className="mt-8 max-w-2xl text-xl text-slate-300">
              Explore the latest blockbusters, save favorites, and watch
              trailers in a cinematic experience.
            </p>

            <div className="mt-12 flex gap-4">
              <button className="rounded-full bg-slate-800 px-8 py-4 font-semibold text-slate-400">
                ▶ Watch Trailer
              </button>

              <button className="rounded-full bg-slate-900 px-8 py-4 font-semibold">
                Sign in to save
              </button>
            </div>
          </div>
        </section>

        {/* Trending Section */}
        <section className="mt-16">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">Trending This Week</h2>

              <p className="mt-1 text-slate-400">
                Browse the movies people are watching around the globe.
              </p>
            </div>

            <span className="text-slate-500">Updated daily</span>
          </div>

          <p className="mt-10 text-slate-400">Loading trending movies...</p>
        </section>

        {/* Popular Section */}
        <section className="mt-10">
          <h2 className="text-3xl font-bold">Popular Picks</h2>

          <p className="mt-1 text-slate-400">
            Catch up with today's most popular titles.
          </p>

          <p className="mt-5 text-slate-400">Loading popular movies...</p>
        </section>
      </div>
    </div>
  )
}

export default Home;
