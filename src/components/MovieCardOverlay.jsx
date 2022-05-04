export const MovieCardOverlay = ({ movie }) => {
  return (
    <div
      className="absolute top-0 p-4 text-white w-full h-full bg-black rounded-t 
      opacity-0 ease-in-out duration-300 hover:opacity-80"
    >
      <p className="font-bold text-sm md:text-2xl">{movie.title} </p>
      <p className="text-xs">({movie.release_date.slice(0, 4)})</p>
      <p className="text-lg text-amber-400">{movie.vote_average}/10</p>
      <p className="text-sm">{movie.overview}</p>
    </div>
  );
};
