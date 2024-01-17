<script>
   import { goto } from '$app/navigation';
   // export let data;

   let search_term = '';

   function submitSearch() {
      goto(`/search/${search_term}`);
   }
   // console.log(popular_movies[0]);
</script>

<form on:submit|preventDefault={submitSearch}>
   <input type="text" class="bg-slate-300" bind:value={search_term} placeholder="Search" />
   <input type="submit" hidden />
   <!-- <select name="" id="">
      {#each data.genres as genre}
         <option value={genre.id}>{genre.name}</option>
      {/each}
   </select> -->
</form>
