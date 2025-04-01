"use client";
import { Footer } from "@/components/Footer";
import { MovieCard } from "@/components/MovieCard";
import { MovieCarus } from "@/components/MovieCarus";
import { MovieType } from "@/components/Movietype";
import { Navigation } from "@/components/Navigation";
import { NowPlaying } from "@/components/NowPlaying";
import { PopularSection } from "@/components/PopularMovies";
import { TopRatedSection } from "@/components/TopratedMovies";
import { UpcomingSection } from "@/components/UpcomingSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <Navigation />
      <NowPlaying />
      <MovieType genre="Upcoming" />
      <UpcomingSection />
      <MovieType genre="Popular" />
      <PopularSection />
      <MovieType genre="Top Rated" />
      <TopRatedSection />
      <Footer />
    </div>
  );
}
