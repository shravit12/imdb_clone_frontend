import { div } from "framer-motion/client";
import { Award, Instagram, Star, Twitter } from "lucide-react";
import React from "react";
import { Link, useParams } from "react-router-dom";

const Actordetails = () => {
  const actors = [
    {
      id: 1,
      name: "Timothée Chalamet",
      birthDate: "December 27, 1995",
      birthPlace: "New York City, New York, USA",
      nationality: "American-French",
      height: "5' 10\" (1.78 m)",
      biography:
        "Timothée Hal Chalamet is an American actor. He has received various accolades, including nominations for an Academy Award, two Golden Globe Awards, and three BAFTA Film Awards. Born and raised in New York City, he began his career on the stage and in television productions, appearing in the drama series Homeland in 2012.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      coverImage:
        "https://images.unsplash.com/photo-1492446845049-9c50cc313f00?auto=format&fit=crop&w=2000&q=80",
      awards: [
        {
          name: "Academy Award Nomination",
          year: 2018,
          category: "Best Actor",
          film: "Call Me by Your Name",
        },
        {
          name: "Golden Globe Nomination",
          year: 2018,
          category: "Best Actor - Drama",
          film: "Call Me by Your Name",
        },
        {
          name: "BAFTA Nomination",
          year: 2018,
          category: "Best Actor",
          film: "Call Me by Your Name",
        },
      ],
      socialMedia: {
        instagram: "https://instagram.com/tchalamet",
        twitter: "https://twitter.com/realchalamet",
        imdb: "https://www.imdb.com/name/nm3154303/",
      },
      knownFor: [
        {
          id: 1,
          title: "Dune: Part Two",
          role: "Paul Atreides",
          year: 2024,
          rating: 8.8,
          image:
            "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 2,
          title: "Wonka",
          role: "Willy Wonka",
          year: 2023,
          rating: 7.2,
          image:
            "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 3,
          title: "Dune",
          role: "Paul Atreides",
          year: 2021,
          rating: 8.0,
          image:
            "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80",
        },
      ],
      stats: {
        moviesCount: 18,
        totalAwards: 12,
        avgRating: 8.4,
        yearsActive: "2012-present",
      },
      upcomingProjects: [
        {
          title: "Bob Dylan Biopic",
          role: "Bob Dylan",
          status: "Pre-production",
          expectedRelease: "2025",
        },
      ],
    },
    {
      id: 2,
      name: "Zendaya",
      birthDate: "September 1, 1996",
      birthPlace: "Oakland, California, USA",
      nationality: "American",
      height: "5' 10\" (1.78 m)",
      biography:
        "Zendaya is an American actress and singer. She began her career as a child model and backup dancer before gaining prominence for her role as Rocky Blue on the Disney Channel sitcom Shake It Up. She has gone on to star in numerous acclaimed films and television series.",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      coverImage:
        "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?auto=format&fit=crop&w=2000&q=80",
      awards: [
        {
          name: "Emmy Award",
          year: 2020,
          category: "Outstanding Lead Actress",
          film: "Euphoria",
        },
        {
          name: "Emmy Award",
          year: 2022,
          category: "Outstanding Lead Actress",
          film: "Euphoria",
        },
      ],
      socialMedia: {
        instagram: "https://instagram.com/zendaya",
        twitter: "https://twitter.com/zendaya",
        imdb: "https://www.imdb.com/name/nm3918035/",
      },
      knownFor: [
        {
          id: 1,
          title: "Dune: Part Two",
          role: "Chani",
          year: 2024,
          rating: 8.8,
          image:
            "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 4,
          title: "Spider-Man: No Way Home",
          role: "MJ",
          year: 2021,
          rating: 8.2,
          image:
            "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=800&q=80",
        },
      ],
      stats: {
        moviesCount: 15,
        totalAwards: 14,
        avgRating: 8.2,
        yearsActive: "2010-present",
      },
      upcomingProjects: [
        {
          title: "Challengers",
          role: "Tashi Donaldson",
          status: "Post-production",
          expectedRelease: "2024",
        },
      ],
    },
  ];
  const { id } = useParams();
  const actor = actors.find((m) => m.id === Number(id)) || actors[0];
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${actor.knownFor[0].image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80" />
        </div>
        <div className="relative h-full container flex items-end pb-8">
          <div className="flex items-end gap-8">
            <img
              src={actor.image}
              alt={actor.name}
              className="w-48 h-48 rounded-xl object-cover border-4 border-gray-900"
            />
            <div>
              <h1 className="text-4xl font-bold mb-4 text-white">{actor.name}</h1>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="text-white">{actor.stats.avgRating} Average Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-500" />
                  <span className="text-white">{actor.stats.totalAwards} Awards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="sticky top-24 space-y-6">
            <div className="bg-gray-800 rounded-xl p-6">
              <h2 className="font-semibold mb-4 text-white">Personal Info</h2>
              <dl className="space-y-4">
                <div>
                  <dt className="text-gray-400">Born</dt>
                  <dd className="text-white">{actor.birthDate}</dd>
                </div>
                <div>
                  <dt className="text-gray-400">Place of Birth</dt>
                  <dd className="text-white">{actor.birthPlace}</dd>
                </div>
                <div>
                  <dt className="text-gray-400">Movies</dt>
                  <dd className="text-white">{actor.stats.moviesCount} titles</dd>
                </div>
              </dl>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="font-semibold mb-4 text-white">Social Media</h2>
              <div className="flex gap-4">
                <a
                  href={actor.socialMedia.instagram}
                  className="text-gray-400 hover:text-white"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href={actor.socialMedia.twitter}
                  className="text-gray-400 hover:text-white"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Biography</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {actor.biography}
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Awards & Nominations</h2>
            <div className="grid gap-4">
              {actor.awards.map((award, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-800 p-4 rounded-xl"
                >
                  <Award className="w-5 h-5 text-yellow-500" />
                  <div>
                    <span className="font-semibold text-white">{award.name}</span>
                    <span className="mx-2 text-white">|</span>
                    <span className="text-white">{award.year}</span>
                    <p className="text-sm text-gray-400">
                      {award.category} - {award.film}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">Known For</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {actor.knownFor.map((movie) => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                  <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform">
                    <div className="relative aspect-[2/3]">
                      <img
                        src={movie.image}
                        alt={movie.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-black/60 px-2 py-1 rounded-md flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-yellow-500 font-medium">
                          {movie.rating}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1 text-white">
                        {movie.title}
                      </h3>
                      <p className="text-gray-400">as {movie.role}</p>
                      <p className="text-gray-500 text-sm">{movie.year}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Actordetails;