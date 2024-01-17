<script>
   export let data;
   console.log('slug page data:', data);
</script>

<section class="p-8 w-full flex flex-col justify-center">
   <img
      src="https://image.tmdb.org/t/p/original{data.movie_detail.backdrop_path}"
      alt=""
      class="rounded-2xl h-[75vh] w-full object-cover object-top"
   />
   <h1 class="text-2xl font-semibold mt-4 mb-6">{data.movie_detail.title}</h1>
   <p
      class="first-letter:text-6xl first-letter:font-bold first-letter:italic first-letter:mr-4 first-letter:float-left first-letter:text-gray-600 text-justify"
   >
      {data.movie_detail.overview}
   </p>
</section>
