<script>
	import { getLocalTimeZone, today } from '@internationalized/date';
	import { Calendar } from '$lib/components/ui/calendar/index.js';
	import Pet from '../../pet.json';

	$: appointments = Pet.appointments || [];
	$: value = today(getLocalTimeZone());

	$: selectedAppointments =
		appointments.filter((a) => {
			const aDate = a.date;
			const cDate = `${value.year}-${value.month > 10 ? value.month : '0' + value.month}-${value.day > 10 ? value.day : '0' + value.day}`;
			if (aDate.includes(cDate)) {
				return a;
			}
		}) || [];

	$: console.log(selectedAppointments);

	function parseDate(date) {
		return new Intl.DateTimeFormat('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		}).format(new Date(date));
	}

	function getCategory(categories) {
		switch (categories[0]) {
			case 'vaccine':
				return 'fill-red-500';
			case 'checkup':
				return 'fill-yellow-500';
			case 'grooming':
				return 'fill-green-500';
			case 'medication':
				return 'fill-blue-500';
			case 'exercise':
				return 'fill-purple-500';

			default:
				return 'fill-slate-500';
		}
	}
</script>

<div class="flex gap-4 max-w-6xl mx-auto p-4">
	<Calendar
		{appointments}
		{getCategory}
		bind:value
		class="rounded-md border p-4 max-w-2xl w-full "
	/>

	<aside>
		<h2 class="text-xl font-semibold">Events</h2>
		<ul>
			{#each selectedAppointments as a}
				<li
					class="flex items-start justify-start bg-slate-500 border-slate-700 border rounded-lg overflow-hidden gap-4 mb-4"
				>
					<aside class="text-white p-2">
						<span class="leading-none">{parseDate(a.date)}</span>
					</aside>
					<aside class="flex flex-col bg-white flex-1 p-2">
						<p class="text-black">{a.name}</p>
						<span class="text-xs font-light italic text-black">
							{#each a.tags as tag, i}
								{tag + (i === a.tags.length - 1 ? '' : ', ')}
							{/each}
						</span>
					</aside>
				</li>
			{/each}
		</ul>
	</aside>
</div>

