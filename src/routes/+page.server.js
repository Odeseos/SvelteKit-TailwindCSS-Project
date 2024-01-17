export async function load({ fetch }) {
   const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=a9f8d5cbe962ab94a8a3d77d58e4dd4a&language=en-US&page=1`
   );
   const data = await res.json();
   // console.log(data);
   if (res.ok) {
      return {
         popular_movies: data.results,
      };
   }
}

// export async function load({ fetch }) {
//    // console.log('params ', params);
//    const res = await fetch(
//       `https://api.themoviedb.org/3/genre/movie/list?api_key=a9f8d5cbe962ab94a8a3d77d58e4dd4a&language=en-US`
//    );
//    // console.log(res);
//    const data = await res.json();
//    // console.log('genres: ', data);
//    if (res.ok) {
//       return {
//          genres: data,
//       };
//    }
//    // console.log('data after return', data);
// }
