<script>
   import MovieCard from '../../../components/movieCard.svelte';
   export let data;
   // console.log('search term:', data.search_movies.results);
</script>

<h1>hello</h1>
<div class="popular-movies grid grid-cols-auto-fill-250 gap-x-4 gap-y-8 p-4">
   {#each data.search_movies.results as movie}
      <MovieCard {movie} />
   {/each}
</div>
