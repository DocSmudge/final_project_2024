<script lang="ts">
	import { onMount } from 'svelte';
	import { Chart } from 'chart.js/auto';
	import 'chartjs-adapter-date-fns';

	export let name = '';
	export let stool = [];

	$: chart = undefined;
	// $: console.log(chart);

	function chartRender() {
		const canvas = document.querySelector('#poopyChart');

		const data = {
			// labels: ['02/10', '02/13', '02/14', '03/12', '03/14', '03/20'],
			labels: stool.map((s) => s.date),
			datasets: [
				{
					label: `${name} Stool`,
					// data: [10, 1, 1, 1, 1, 1], // Values corresponding to 'soft'
					data: stool.map((s) => s.scale),
					borderColor: 'rgba(255, 99, 132, 1)',
					borderWidth: 1
				}
			]
		};

		if (canvas) {
			const ctx = canvas.getContext('2d');
			if (ctx) {
				chart = new Chart(ctx, {
					type: 'line',
					data: data,
					options: {
						scales: {
							x: {
								type: 'time',
								time: {
									parser: 'MM/dd', // Corrected format
									unit: 'day',
									displayFormats: {
										day: 'MM/dd'
									}
								},
								title: {
									display: true,
									text: 'Date'
								}
							},
							y: {
								type: 'linear',
								min: 0, // Adjusted minimum value
								max: 11, // Adjusted maximum value
								ticks: {
									stepSize: 1,
									callback: function (value) {
										if (value === 0) return ''; // Added empty label for padding
										if (value === 1) return 'Soft';
										if (value === 5) return 'Medium';
										if (value === 10) return 'Hard';
										return '';
									}
								},
								title: {
									display: true,
									text: 'Consistency'
								}
							}
						}
					}
				});
			}
		}
	}

	let stoolInputValue = '';

	function addPoopingEvent() {
		if (!chart) {
			throw new Error('Chart not initialized');
		}

		if (!stoolInputValue) {
			throw new Error('Please select a consistency level');
		}

		const newEvent = {
			date: new Intl.DateTimeFormat(window.navigator.language, {
				month: '2-digit',
				day: '2-digit'
			}).format(new Date()),
			consistency: parseInt(stoolInputValue) // Assuming the input string is a number.
		};

		chart.data.labels.push(newEvent.date);
		chart.data.datasets[0].data.push(newEvent.consistency);
		chart.update();
	}

	onMount(() => {
		chartRender();
	});
</script>

<div class="container bg-base-100 w-5/6 h-fit my-10 mx-auto p-5 flex rounded-lg">
	<aside class="flex-1">
		<h3 class="text-center py-5">Stool Tracker</h3>
		<div class="flex justify-center items-center gap-6 m-10">
			<label for="poopy_consitency">
				<span class="sr-only">Consistency</span>
				<select
					bind:value={stoolInputValue}
					name="poopy_consistency"
					id="poopy_consistency"
					class="text-white py-3 mx-5"
				>
					<option value="" disabled selected>Consistency Scale</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">5</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10</option>
				</select>
			</label>
			<button
				class="btn btn-secondary"
				on:click={() => {
					addPoopingEvent();
				}}
			>
				Add
			</button>
		</div>
	</aside>

	<section class="w-full bg-white p-4 rounded-xl shadow-xl">
		<canvas id="poopyChart"></canvas>
	</section>
</div>
