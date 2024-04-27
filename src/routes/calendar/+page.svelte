<script lang="ts">
	import { getLocalTimeZone, today } from "@internationalized/date";
	import { Calendar } from "$lib/components/ui/calendar/index.js";

	let value = today(getLocalTimeZone());
</script>

<h1 class="text-5xl text-center m-10">Calendar</h1>
<div class="flex justify-center">
<Calendar bind:value class="w-screen h-screen rounded-md border shadow" /> 
</div>
