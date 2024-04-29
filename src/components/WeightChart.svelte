<script lang="ts">
	import { onMount } from 'svelte';
	import { Chart } from 'chart.js/auto';
	import 'chartjs-adapter-date-fns';

	export let name = '';
	export let weight = [];

	$: newChart = undefined;
	

	function chartRender() {
		const canvas = document.querySelector('#weightChart');

		const data = {
		
			labels: weight.map((w) => w.date),
			datasets: [
				{
					label: `${name} WEIGHT`,
					data: weight.map((w) => w.scale),
					borderColor: 'rgba(255, 99, 132, 1)',
					borderWidth: 1
				}
			]
		};

		if (canvas) {
			const ctx = canvas.getContext('2d');
			if (ctx) {
				newChart = new Chart(ctx, {
					type: 'line',
					data: data,
					options: {
						scales: {
							x: {
								type: 'time',
								time: {
									parser: 'MM/dd', 
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
								min: 0, 
								max: 30, 
								ticks: {
									stepSize: 1,
									callback: function (value) {
										if (value === 0) return ''; 
										if (value === 1) return 'Low';
										if (value === 15) return 'Medium';
										if (value === 30) return 'Heavy';
										return '';
									}
								},
								title: {
									display: true,
									text: 'Weight'
								}
							}
						}
					}
				});
			}
		}
	}

	let weightInputValue = '';

	function addWeightEvent() {
		if (!newChart) {
			throw new Error('Chart not initialized');
		}

		if (!weightInputValue) {
			throw new Error('Please select a weight');
		}

		const newEvent = {
			date: new Intl.DateTimeFormat(window.navigator.language, {
				month: '2-digit',
				day: '2-digit'
			}).format(new Date()),
			weight: parseInt(weightInputValue) 
		};

		newChart.data.labels.push(newEvent.date);
		newChart.data.datasets[0].data.push(newEvent.weight);
		newChart.update();
	}

	onMount(() => {
		chartRender();
	});
</script>

<div class="container h-fit my-8 mx-auto p-5 flex flex-col">
	<aside class="flex-1">
		<h3 class="text-center">Weight Tracker</h3>
		<div class="flex justify-center items-center gap-6 mt-2 mb-10">
			<label class=" text-white" for="weight_consitency">
				<span class="sr-only">Weight</span>
				<select bind:value={weightInputValue} name="weight" id="weight" class="text-white p-3 bg-base-100">
					<option value="" disabled selected>Weight</option>
					<option value="0">0</option>
					<option value="5">5</option>
					<option value="10">10</option>
					<option value="15">15</option>
					<option value="20">20</option>
					<option value="25">25</option>
					<option value="30">30</option>
					<option value="35">35</option>
					<option value="40">40</option>
					<option value="45">45</option>
				</select>
			</label>
			<button
				class="btn btn-secondary"
				on:click={() => {
					addWeightEvent();
				}}
			>
				Add
			</button>
		</div>
	</aside>

	<section class="w-full bg-white p-4 rounded-xl shadow-xl">
		<canvas id="weightChart"></canvas>
	</section>
</div>
