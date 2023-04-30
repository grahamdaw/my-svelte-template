<script lang="ts">

	import '../app.css';

	import { userID, } from '$lib/store';

	import ShowUserID from '$lib/components/ShowUserID.svelte';

</script>

<svelte:head>	
	<title>Svelte Template</title>
	<meta name="description" content="A Svelte app." />
</svelte:head>

<section>
	<h2>
		Svelte Template
	</h2>

	{#if !$userID}
		<ShowUserID />
	{/if}
    

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
