<script lang="ts">
	import '$/app.postcss'; // Application global stylesheet

    import { AppShell } from '@skeletonlabs/skeleton';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<AppShell>
    <svelte:fragment slot="header"><Header/></svelte:fragment>
    <slot />
    <svelte:fragment slot="footer"><Footer/></svelte:fragment>
</AppShell>