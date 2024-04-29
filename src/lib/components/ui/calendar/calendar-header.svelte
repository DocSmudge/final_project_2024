<script>
	import { Calendar as CalendarPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";
	let className = undefined;
	export { className as class };
</script>

<CalendarPrimitive.Header
	class={cn("relative flex w-full min-h-11 items-center justify-between pt-1", className)}
	{...$$restProps}
>
	<slot />
</CalendarPrimitive.Header>
