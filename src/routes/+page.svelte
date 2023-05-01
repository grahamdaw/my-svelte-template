<script lang="ts">

	import '../app.css';

	import ThemeSelector from '$lib/components/ThemeSelector.svelte';

</script>

<svelte:head>	
	<title>Svelte Template</title>
	<meta name="description" content="A Svelte app." />
</svelte:head>

<section>
	<h2>
		Svelte Template
	</h2>

	<p>Go & write some code &#128515;</p>

	<ThemeSelector/>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
