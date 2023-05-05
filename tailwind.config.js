/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    // Path for the Skeleton NPM package and files:
    require('path').join(require.resolve(
      '@skeletonlabs/skeleton'),
      '../**/*.{html,js,svelte,ts}'
    ),
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    ...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')() // Skeleton plugin
  ],
}
