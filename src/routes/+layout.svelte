<script lang="ts">
    // Skeleton theme via the Skeleton theme generator https://www.skeleton.dev/docs/generator
    // The order of these imports is important
    import '../theme.postcss'; // Custom Skeleton theme
    import '@skeletonlabs/skeleton/styles/all.css'; // Skeletons required styles
	import '../app.postcss'; // Application global stylesheet

    import { AppShell } from '@skeletonlabs/skeleton';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<AppShell>
    <svelte:fragment slot="header"><Header/></svelte:fragment>
    <slot />
    <svelte:fragment slot="footer"><Footer/></svelte:fragment>
</AppShell>