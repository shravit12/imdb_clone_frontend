import { Search, SlidersHorizontal, Star } from "lucide-react";
import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const MovieList = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const Movies = [
    {
      id: 1,
      title: "Dune: Part Two",
      rating: 8.8,
      image:
        "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?auto=format&fit=crop&w=800&q=80",
      year: 2024,
      genre: ["Action", "Adventure", "Sci-Fi"],
    },
    {
      id: 2,
      title: "Poor Things",
      rating: 8.4,
      image:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
      year: 2023,
      genre: ["Comedy", "Drama", "Romance"],
    },
    {
      id: 3,
      title: "Oppenheimer",
      rating: 8.9,
      image:
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80",
      year: 2023,
      genre: ["Biography", "Drama", "History"],
    },
    {
      id: 4,
      title: "The Batman",
      rating: 8.5,
      image:
        "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=800&q=80",
      year: 2024,
      genre: ["Action", "Crime", "Drama"],
    },
    {
      id: 5,
      title: "Killers of the Flower Moon",
      rating: 8.7,
      image:
        "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&w=800&q=80",
      year: 2023,
      genre: ["Crime", "Drama", "History"],
    },
  ];
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          {search ? `Search Results for "${search}` : "Popular Movies"}
        </h1>
        <button className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-xl hover:bg-gray-900 transition-colors">
          <SlidersHorizontal /> Filters
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <div className="bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="relative aspect-video">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-yellow-500 font-medium">
                    {movie.rating}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold justify-betwen mb-2 text-white">
                  {movie.title}
                </h2>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">{movie.year}</span>
                  <div className="flex gap-2">
                    {movie.genre.slice(0, 2).map((g) => (
                      <span key={g} className="text-xs px-2 py-1 bg-zinc-800 rounded-full text-zinc-300">
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;