<script>
   import MovieCard from './movieCard.svelte';
   export let popular_movies;
   // console.log(popular_movies[0]);
</script>

<h1 class="px-0 py-4">Popular Movies</h1>
<div class="popular-movies grid grid-cols-auto-fill-250 gap-x-4 gap-y-8 p-4">
   {#each popular_movies as movie}
      <MovieCard {movie} />
   {/each}
</div>
