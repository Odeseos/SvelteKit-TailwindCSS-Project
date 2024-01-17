<script>
   import PopularMovies from '../components/popularMovies.svelte';
   import SearchMovies from '../components/searchMovies.svelte';

   export let data;
   // console.log('DATA ', data);
</script>

<section>
   <SearchMovies />
   <PopularMovies popular_movies={data.popular_movies} />
</section>
