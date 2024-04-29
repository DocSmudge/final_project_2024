<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { onMount, onDestroy } from 'svelte';
	// import Chart from '../components/chart.svelte';
	import Pet from '../pet.json';
	import Reminder from '../components/Reminder.svelte';
	import PoopChart from '../components/PoopChart.svelte';
	import WeightChart from '../components/WeightChart.svelte';

	//---------------------------------------

	$: pet = null;
	$: petExercises = [];
	$: petHealth = [];
	$: editedExercise = null;
	$: editedVaccine = null;
	$: petVaccines = [];
	$: stool = null;

	let exerciseTime = null;
	let exerciseInputValue = '';
	let tempInputValue = '';
	let respInputValue = '';
	let pulseInputValue = '';
	let errorMessage = '';
	let scheduledReminders = [];

	/**
	 * Generate Reminder Times
	 * @param {number} minutes
	 */
	const generateReminderTime = (minutes) => new Date(new Date().getTime() + minutes * 60000);
	let currentReminder;
	$: console.log(currentReminder);
	$: if (currentReminder) {
		setTimeout(() => {
			currentReminder = null;
		}, currentReminder.time);
	}
	let reminders = [
		{
			id: 0,
			message: 'Make sure to feed rohan and smudge now :)',
			completed: false,
			time: generateReminderTime(0.01)
		},
		{
			id: 1,
			message: 'Make sure to medicate Rohan now :)',
			completed: false,
			time: generateReminderTime(0.04)
		},
		{
			id: 2,
			message: "Remember to buy cat litter and dog food within the next week so you don't run out.",
			completed: false,
			time: generateReminderTime(1)
		},
		{
			id: 3,
			message: 'Remember to fast Smudge from 10pm-7am before her dental cleaning tomorrow.',
			completed: false,
			time: generateReminderTime(2)
		}
	];

	function checkReminders(e) {
		reminders.forEach((reminder, index) => {
			const time = reminder.time.getTime();
			const currentTime = new Date().getTime();
			if (currentTime >= time) {
				currentReminder = {
					...reminder,
					time: 5000 // 5 seconds
				};
				reminders = reminders.filter((r) => r.id !== reminder.id);
			}
		});
	}

	onMount(() => {
		pet = JSON.parse(JSON.stringify(Pet));
		petExercises = [...pet.exercises];
		petHealth = [...pet.health];
		petVaccines = [...pet.vaccines];
		stool = [...pet.stool];

		const interval = setInterval(checkReminders, 1000); // Run every 1 seconds

		return () => {
			clearInterval(interval);
		};
	});

	function dismissReminder(id) {
		reminders = reminders.filter((reminder) => reminder.id !== id);
	}

	function addExercise() {
		if (!exerciseInputValue && !exerciseTime) {
			return;
		}

		const date = new Intl.DateTimeFormat(window.navigator.language, {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit'
		}).format(new Date());

		const newExercise = {
			id: pet.exercises.length,
			date,
			time: exerciseTime,
			exercise: exerciseInputValue
		};

		petExercises = [...petExercises, newExercise];
		exerciseInputValue = '';
		exerciseTime = '';
	}
	//---------------------------------------

	function deleteExercise(index) {
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
		editedExercise = null;
	}
	//---------------------------------------
	function editVaccines(vaccine) {
		editedVaccine = vaccine;
	}
	//---------------------------------------
	function saveVaccines(index, value) {
		const vaccine = petVaccines.find((vaccine, i) => {
			if (index === i) {
				return vaccine;
			}
		});
		vaccine.date = value;
		editedVaccine = null;
	}
</script>

{#if pet}
	<main class="container mx-auto bg-slate-400 flex flex-col text-white">
		<!--*----------DESCRIPTION DIV------------->
		<h1 class="text-5xl text-center m-10">Pet Profile</h1>
		<div class="container mx-auto">
			<div class="flex flex-row justify-around">
				<div class="card w-96 bg-base-100 shadow-xl m-6">
					<div class="avatar items-center justify-evenly m-8">
						<div class="w-56 mask mask-hexagon">
							<img src="/rohan.jpg" alt="Rohan" />
						</div>
					</div>

					<div class="flex flex-col items-start mx-auto">
						<div class="flex">
							<h3 class="text-1xl font-bold text-primary mr-1">Breed:</h3>
							<p>{pet.breed}</p>
						</div>
						<div class="flex">
							<h3 class="text-1xl font-bold text-primary mr-1">Age:</h3>
							<p>{pet.age}</p>
						</div>
						<div class="flex">
							<h3 class="text-1xl font-bold text-primary mr-1">Sex:</h3>
							<p>{pet.sex}</p>
						</div>
						<!-- <h3 class="text-1xl">Age: {pet.age}</h3>
						<h3 class="text-1xl">Sex: {pet.sex}</h3> -->
					</div>
				</div>
				<!--*----------------------------------->

				<!--*----------FEEDING DIV------------->
				<div class="flex">
					<div class="card w-96 bg-base-100 shadow-xl m-8">
						<figure>
							<img src="/dog-food.jpg" alt="dogfood" />
						</figure>
						<h3 class="text-1xl font-bold text-primary mr-1 text-center py-5">Food Instructions</h3>
						<p class="text-center">{pet.feeding.am}</p>
						<p class="text-center">{pet.feeding.pm}</p>
					</div>
					<!--*----------------------------------->

					<!--*----------MEDICATION DIV------------->
					<div class="card w-96 bg-base-100 shadow-xl m-8">
						<figure>
							<img src="/meds.jpeg" alt="medication" />
						</figure>
						<h3 class="text-1xl font-bold text-primary mr-1 text-center py-5">Medications</h3>
						<ul class="m-2">
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
			</div>
			<!--*----------------------------------->
			<div class="overflow-x-auto bg-base-100 flex justify-center m-auto w-5/6 rounded-lg">
				<div class="opacity-100">
					<h3 class="text-center py-5">Exercise Tracker</h3>
					<div class="flex justify-center">
						<input
							class="text-center py-3 mx-5 text-white"
							type="text"
							placeholder="Exercise Name"
							bind:value={exerciseInputValue}
						/>
						<input
							class="text-center py-3 mx-5 text-white"
							type="text"
							placeholder="Time"
							bind:value={exerciseTime}
						/>
						<button on:click={addExercise} class="btn btn-secondary">Add</button>
					</div>
					<table class="table bg-base-100 m-10">
						<!-- head -->
						<thead>
							<tr>
								<th></th>
								<th>Date</th>
								<th>Time</th>
								<th>Exercise</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<!-- loop through petExercises -->
							{#each petExercises as exercise, index}
								<tr class="hover">
									<th>{index + 1}</th>
									<td>
										{exercise.date}
									</td>
									<td>
										{exercise.time}
									</td>
									<td>
										{#if editedExercise === exercise}
											<input
												class="text-white"
												type="text"
												bind:value={exercise.exercise}
												on:keydown={(event) => {
													if (event.key === 'Enter') {
														saveExercise(index, event.target.value);
													}
												}}
											/>
										{:else}
											<span> {exercise.exercise}</span>
										{/if}
									</td>
									<td>
										<div>
											{#if editedExercise === exercise}
												<button
													on:click={() => {
														saveExercise(index, exercise.exercise);
													}}
													class="btn btn-secondary"
												>
													Save
												</button>
											{:else}
												<button
													on:click={() => {
														editExercise(exercise);
													}}
													class="btn btn-secondary"
												>
													Edit
												</button>
												<button on:click={() => deleteExercise(index)} class="btn btn-secondary">
													Delete
												</button>
											{/if}
										</div>
									</td>
								</tr>
							{/each}
							<!-- end loop -->
						</tbody>
					</table>
				</div>
			</div>

			<!--*------------EXERCISE TRACKER DIV-------------->
			<!-- <div class="container bg-black w-5/6 h-60 my-10 mx-auto">
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
			*--------------------------------- -->

			<!--*------------WEIGHT TRACKER DIV-------------->
			<div class="container justify-center m-auto w-5/6 rounded-lg mt-8">
				<div>
					<WeightChart name={pet.name} weight={pet.weight} />
				</div>
			</div>

			<!--*----------------------------------->

			<!--*----------------------------------->

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
				<PoopChart name={pet.name} stool={pet.stool} />
			</div>
			<!--*----------------------------------->

			<!--*------------MEDICAL TRACKER DIV-------------->
			<div class="container bg-black w-5/6 h-fit my-10 mx-auto p-5">
				<h3 class="text-center py-5">Medical Tracker</h3>
				<div>
					<ul>
						{#each pet.vaccines as vaccine, index}
							<li class="flex">
								{#if editedVaccine === vaccine}
									<p class="m-2">{vaccine.type}</p>
									<input
										class="text-black"
										type="text"
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
									</div>
								{/if}
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</main>

	{#if currentReminder}
		<div
			class="fixed bottom-0 right-0 m-4 z-20 border-2 border-slate-500 w-full max-w-lg bg-white shadow-lg rounded p-4"
		>
			<p>{currentReminder.message}</p>
		</div>
	{/if}
{/if}
