<script lang="ts">
	import { theme } from "$lib/store";
	import setDocumentColorModeClass from "$lib/util/setDocumentColorModeClass";

    $: setDocumentColorModeClass($theme);

</script>
<div>
    <div id={`label-theme-toggler`}>Toggle theme</div>
    <input type="radio" id={"light-label-theme-toggler"} value='light' bind:group={$theme}>
    <label for={"light-label-theme-toggler"}>
        Light mode
    </label> 
    <input type="radio" id={"dark-label-theme-toggler"} value='dark' bind:group={$theme}>
    <label for={"dark-label-theme-toggler"}>
        Dark mode
    </label> 
</div>
