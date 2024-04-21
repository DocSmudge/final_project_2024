<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { onMount } from 'svelte';
	import Chart from '../components/chart.svelte';
	import Pet from '../pet.json';
	import { _adapters } from 'chart.js';

	//---------------------------------------

	$: pet = null;
	$: petExercises = [];
	$: petHealth = [];
	$: editedExercise = null;
	$: editedVaccine = null;
	$: petVaccines = [];

	// $: console.log(petExercises);

	onMount(() => {
		pet = JSON.parse(JSON.stringify(Pet));
		petExercises = [...pet.exercises];
		petHealth = [...pet.health];
		petVaccines = [...pet.vaccines];
	});

	let exerciseInputValue = '';
	let tempInputValue = '';
	let respInputValue = '';
	let pulseInputValue = '';
	let errorMessage = '';
	let vaccineInputValue = '';

	const date = new Intl.DateTimeFormat({
		year: 'numeric',
		month: '2-digit',
		day: '2-digit'
	}).format(new Date());

	function addExercise() {
		if (!exerciseInputValue) {
			return;
		}

		const newExercise = {
			id: pet.exercises.length,
			date,
			time: '30 minutes',
			exercise: exerciseInputValue
		};

		petExercises = [...petExercises, newExercise];
	}
	//---------------------------------------

	function deleteExercise(index) {
		// console.log(index);
		petExercises = [...petExercises.slice(0, index), ...petExercises.slice(index + 1)];
	}
	//---------------------------------------

	function addHealth() {
		if (!tempInputValue || !pulseInputValue || !respInputValue) {
			errorMessage = 'Please fill out all of the fields';
			return;
		}
		const newHealth = {
			id: pet.health.length,
			date,
			temperature: tempInputValue,
			respirations: respInputValue,
			pulse: pulseInputValue
		};
		petHealth = [...petHealth, newHealth];
		// console.log(petHealth);
	}
	//---------------------------------------
	function deleteHealth(index) {
		petHealth = [...petHealth.slice(0, index), ...petHealth.slice(index + 1)];
	}
	//---------------------------------------
	function editExercise(exercise) {
		editedExercise = exercise;
	}
	//---------------------------------------
	function saveExercise(index, value) {
		const exercise = petExercises.find((exercise, i) => {
			if (index === i) {
				return exercise;
			}
		});
		exercise.exercise = value;
		editedExercise = null; // RESET EDIT STATE
	}
	//---------------------------------------
	function editVaccines(vaccine) {
		editedVaccine = vaccine;
	}
	//---------------------------------------
	function saveVaccines(index, value) {
		console.log('saveVaccines function called');
		const vaccine = petVaccines.find((vaccine, i) => {
			if (index === i) {
				return vaccine;
			}
		});
		console.log('Found vaccine:', vaccine);
		console.log('Value:', value);
		vaccine.vaccine = value;
		console.log('Vaccines after update:', petVaccines);
		vaccine.vaccine = value;
		editedVaccine = null;
	}
	// function saveVaccines(index, value) {
	// 	const vaccineToUpdate = petVaccines[index]; // Find the vaccine to update using its index
	// 	console.log('saved');
	// 	console.log(value); // Use the value parameter directly
	// 	vaccineToUpdate.vaccine = value; // Update the vaccine's vaccine property with the new value
	// 	editedVaccine = null; // Reset the editedVaccine state
	// }
</script>

{#if pet}
	<main class="container mx-auto bg-slate-400 flex flex-col text-white">
		<!--*----------DESCRIPTION DIV------------->
		<h1 class="text-5xl text-center m-10">Pet Profile</h1>
		<div class="container mx-auto">
			<div class="flex justify-center">
				<img class="aspect-auto max-w-72" src="/rohan.jpg" alt="Rohan" />
				<!-- <div class="bg-white w-72 h-72 mr-10"></div> -->
				<div class="">
					<h3 class="text-2xl">Breed: {pet.breed}</h3>
					<h3 class="text-2xl">Age: {pet.age}</h3>
					<h3 class="text-2xl">Sex: {pet.sex}</h3>
				</div>
			</div>
			<!--*----------------------------------->

			<!--*----------FEEDING DIV------------->
			<div class="flex justify-center">
				<div class="bg-black w-1/3 h-40 my-10">
					<h3 class="text-center py-5">Food Instructions</h3>
					<p class="text-center">{pet.feeding.am}</p>
					<p class="text-center">{pet.feeding.pm}</p>
				</div>
				<!--*----------------------------------->

				<!--*----------MEDICATION DIV------------->
				<div class="bg-black w-1/3 h-40 my-10 mx-10">
					<h3 class="text-center py-5">Medications</h3>
					<ul>
						<li class="text-center">
							{pet.medications[0].name}
							{pet.medications[0].dose}
							{pet.medications[0].instructions}
						</li>
						<li class="text-center">
							{pet.medications[1].name}
							{pet.medications[1].dose}
							{pet.medications[1].instructions}
						</li>
						<li class="text-center">
							{pet.medications[2].name}
							{pet.medications[2].dose}
							{pet.medications[2].instructions}
						</li>
					</ul>
				</div>
			</div>
			<!--*----------------------------------->

			<!--*------------EXERCISE TRACKER DIV-------------->
			<div class="container bg-black w-5/6 h-60 my-10 mx-auto">
				<h3 class="text-center py-5">Exercise Tracker</h3>
				<div class="flex justify-center">
					<input
						class="text-center py-3 mx-5 text-black"
						type="text"
						placeholder="Exercise Name"
						bind:value={exerciseInputValue}
					/>
					<button on:click={addExercise} class="btn btn-secondary">Add</button>
				</div>
				<ul>
					{#each petExercises as exercise, index}
						<li>
							{#if editedExercise === exercise}
								<input
									class="text-black"
									type="text"
									bind.value={exercise.exercise}
									on:keydown={(event) => {
										if (event.key === 'Enter') {
											saveExercise(index, event.target.value);
										}
									}}
								/>
							{:else}
								<div>
									<strong>Date:</strong>
									{exercise.date}, <strong>Time:</strong>
									{exercise.time}, <strong>Exercise:</strong>
									{exercise.exercise}
									<button
										on:click={() => {
											editExercise(exercise);
										}}
										class="btn btn-secondary mx-5">Edit</button
									>
									<button on:click={() => deleteExercise(index)} class="btn btn-secondary"
										>Delete</button
									>
								</div>
							{/if}
						</li>
					{/each}
				</ul>
			</div>
			<!--*----------------------------------->

			<!--*------------WEIGHT TRACKER DIV-------------->
			<div class="container bg-black w-5/6 h-60 my-10 mx-auto">
				<h3 class="text-center py-5">Weight Tracker</h3>
				<div class="flex justify-center">
					<input class="text-center py-3 mx-5" type="text" placeholder="Weight (lbs)" />
					<button class="btn btn-secondary">Add</button>
				</div>
				<!-- <Chart /> -->
			</div>
			<!--*----------------------------------->

			<!--*------------HEALTH TRACKER DIV-------------->
			<div>
				<div class="container bg-black w-5/6 h-fit my-10 mx-auto">
					<h3 class="text-center py-5">Health Tracker</h3>
					<div class="flex justify-center">
						<input
							class="text-center py-3 mx-5 text-black"
							type="text"
							placeholder="Temperature"
							bind:value={tempInputValue}
						/>
						<input
							class="text-center py-3 mx-5 text-black"
							type="text"
							placeholder="Respirations"
							bind:value={respInputValue}
						/>
						<input
							class="text-center py-3 mx-5 text-black"
							type="text"
							placeholder="Pulse"
							bind:value={pulseInputValue}
						/>
						<button on:click={addHealth} class="btn btn-secondary">Add</button>
					</div>
					<div class="flex flex-col justify-center">
						<ul>
							<div>
								<strong>Date</strong>
								<strong>Temperature</strong>
								<strong>Respirations</strong>
								<strong>Pulse</strong>
							</div>
							{#if errorMessage}
								<p class="text-red-600">{errorMessage}</p>
							{/if}
							{#each petHealth as health, index}
								<li class="list-none m-10">
									<div class="flex">
										<p class="mr-2">{health.temperature} degrees</p>
										<p class="mr-2">{health.respirations} breaths per minute</p>
										<p class="mr-2">{health.pulse} beats per minute</p>
										<button on:click={() => deleteHealth(index)} class="btn btn-secondary"
											>Delete</button
										>
									</div>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
			<!--*----------------------------------->

			<!--*------------STOOL TRACKER DIV-------------->
			<div>
				<div class="container bg-black w-5/6 h-fit my-10 mx-auto p-5">
					<h3 class="text-center py-5">Stool Tracker</h3>
					<div class="flex justify-center m-10">
						<input class="text-center py-3 mx-5" type="text" placeholder="Stool Type" />
						<button class="btn btn-secondary">Add</button>
					</div>
				</div>
			</div>
			<!-- <Chart /> -->
			<!--*----------------------------------->

			<!--*------------MEDICAL TRACKER DIV-------------->
			<div class="container bg-black w-5/6 h-fit my-10 mx-auto p-5">
				<h3 class="text-center py-5">Medical Tracker</h3>
				<div>
					<ul>
						{#each pet.vaccines as vaccine, index}
							<li>
								{#if editedVaccine === vaccine}
									<input
										class="text-black"
										type="text"
										bind.value={vaccine.vaccine}
										on:keydown={(event) => {
											if (event.key === 'Enter') {
												saveVaccines(index, event.target.value);
											}
										}}
									/>
								{:else}
									<div class="flex">
										<p class="m-2">{vaccine.type}</p>
										<p class="m-2">{vaccine.date}</p>
										<button
											on:click={() => {
												editVaccines(vaccine);
											}}
											class="btn btn-secondary m-2">Edit</button
										>
										<!-- <button class="btn btn-secondary m-2">Delete</button> -->
									</div>
								{/if}
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</main>
{/if}

<!-- Todo:  -->
<!-- Todo: -->
