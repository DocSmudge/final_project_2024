<script>
	import { Calendar as CalendarPrimitive } from 'bits-ui';
	import * as Calendar from './index.js';
	import { cn } from '$lib/utils.js';
	export let value = undefined;
	export let placeholder = undefined;
	export let weekdayFormat = 'short';
	let className = undefined;
	export { className as class };

	export let appointments = [];
	export let getCategory;

</script>

<CalendarPrimitive.Root
	bind:value
	bind:placeholder
	{weekdayFormat}
	class={cn(className)}
	{...$$restProps}
	on:keydown
	let:months
	let:weekdays
>
	<Calendar.Header class="mb-2">
		<Calendar.PrevButton class="w-11 h-11" />
		<Calendar.Heading class="font-bold text-2xl" />
		<Calendar.NextButton class="w-11 h-11" />
	</Calendar.Header>

	<Calendar.Months class="">
		{#each months as month}
			<Calendar.Grid>
				<Calendar.GridHead>
					<Calendar.GridRow class="mb-4">
						{#each weekdays as weekday}
							<Calendar.HeadCell class="w-full">
								{weekday.slice(0, 2)}
							</Calendar.HeadCell>
						{/each}
					</Calendar.GridRow>
				</Calendar.GridHead>
				<Calendar.GridBody>
					{#each month.weeks as weekDates}
						<Calendar.GridRow>
							{#each weekDates as date}
								<Calendar.Cell {date} class="w-full h-auto border-[0.5px]">
									<Calendar.Day
										class="w-full h-full aspect-square justify-start items-start flex-col p-2"
										{date}
										{getCategory}
										appointments={appointments.filter((a) => {
											const aDate = a.date;
											const cDate = `${date.year}-${date.month > 10 ? date.month : '0' + date.month}-${date.day > 10 ? date.day : '0' + date.day}`;
											if (aDate.includes(cDate)) {
												return a;
											}
										})}
										month={month.value}
									/>
								</Calendar.Cell>
							{/each}
						</Calendar.GridRow>
					{/each}
				</Calendar.GridBody>
			</Calendar.Grid>
		{/each}
	</Calendar.Months>
</CalendarPrimitive.Root>
