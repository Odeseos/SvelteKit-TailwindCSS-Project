export async function load({ fetch, params }) {
   console.log(`Someone is searching for movies with "${params.title}" in the title`);
   const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${params.title}&api_key=a9f8d5cbe962ab94a8a3d77d58e4dd4a&include_adult=false&language=en-US`
   );
   const data = await res.json();
   // console.log('data line 9: ', data);
   if (res.ok) {
      return {
         search_movies: data,
      };
   }
   // console.log('data after return', data);
}
