<script lang="ts">
	import { userID } from "$lib/store";
</script>
    
    
<div>
    <label for="userID">UserID</label>
    <input id="userID" type="text" bind:value={$userID} />
</div>
