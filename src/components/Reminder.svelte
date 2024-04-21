<script>
	export let reminder;
	function dismissReminder() {
		//dismiss reminder logic heeerreeee
		console.log('needs to be dismissed');
	}
</script>

<div class="reminder">
	<p>{reminder.message}</p>
	<button on:click={dismissReminder}>Dismiss</button>
</div>
