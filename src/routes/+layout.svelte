<script lang="ts">
	import '../app.css';
</script>

<div class="app bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white">
	<main>
		<slot />
	</main>

	<footer>
		<p>Template source @ <a href="https://github.com/grahamdaw/my-svelte-template">grahamdaw/my-svelte-template</a></p>
	</footer>
</div>

<style lang="postcss">
    .app {
        min-height: 100vh;
    }
</style>