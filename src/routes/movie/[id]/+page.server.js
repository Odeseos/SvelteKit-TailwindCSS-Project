export async function load({ fetch, params }) {
   console.log('params ', params);
   const res = await fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=a9f8d5cbe962ab94a8a3d77d58e4dd4a&language=en-US`
   );
   const data = await res.json();
   // console.log('data line 9: ', data);
   if (res.ok) {
      return {
         movie_detail: data,
      };
   }
   // console.log('data after return', data);
}
