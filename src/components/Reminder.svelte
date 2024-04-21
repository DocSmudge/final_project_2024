<script>
	import { createEventDispatcher } from 'svelte';
	export let reminder;
    const dispatch = createEventDispatcher()
	function dismissReminder() {
		dispatch('dismiss', {id: reminder.id})
		console.log('needs to be dismissed');
	}
</script>

<div class="reminder">
	<p>{reminder.message}</p>
	<button on:click={dismissReminder}>Dismiss</button>
</div>
