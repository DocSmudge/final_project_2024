<script lang="ts">
	import { getLocalTimeZone, today } from "@internationalized/date";
	import { Calendar } from "$lib/components/ui/calendar/index.js";

	let value = today(getLocalTimeZone());
</script>

<h1>Calendar</h1>

<Calendar bind:value class="rounded-md border shadow" /> 

<!-- cant get calendar to work :( -->
