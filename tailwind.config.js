/** @type {import('tailwindcss').Config} */
export default {
   content: ['./src/**/*.{html,js,svelte,ts}'],
   theme: {
      extend: {
         gridTemplateColumns: {
            'auto-fill-250': 'repeat(auto-fill, minmax(250px, 1fr))',
            'auto-fit-100': 'repeat(auto-fit, minmax(100px, 1fr))',
         },
      },
   },
   plugins: [],
};
