<script>
   export let movie;
   // console.log('movie: ', movie.title);
</script>

<div class="movie-card w-full flex justify-around flex-col p-2">
   <a href={`/movie/${movie.id}`}>
      <img
         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
         alt={movie.title}
         class=" w-full object-cover rounded-2xl mb-4"
      />
   </a>
   <div class="movie-info h-[10vh]">
      <h1 class="text-xl font-semibold">{movie.title}</h1>
      <h4>Rating: {movie.vote_average.toFixed(2)}</h4>
      <h4>Release Date: {movie.release_date}</h4>
   </div>
</div>
