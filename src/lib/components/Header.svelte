<script>
    import { AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from "@skeletonlabs/skeleton";
</script>

<AppBar>
    <svelte:fragment slot="lead">Svelte Template</svelte:fragment>
    <svelte:fragment slot="trail"><LightSwitch/></svelte:fragment>
</AppBar>