<script>
	import { onMount } from 'svelte';
	import Pet from '../pet.json';
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
		const date = new Intl.DateTimeFormat(window.navigator.language, {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit'
		}).format(new Date());

		const newHealth = {
			id: pet.health.length,
			date,
			temperature: tempInputValue,
			respirations: respInputValue,
			pulse: pulseInputValue
		};
		console.log(newHealth);
		tempInputValue = '';
		respInputValue = '';
		pulseInputValue = '';
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
			<div class="flex flex-row w-5/6 mx-auto">
				<div class="card w-96 bg-base-200 shadow-xl m-8">
					<div class="avatar items-center m-8">
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
			<!--*----------EXERCISE DIV------------->
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
			<!--*--------------------------------- -->

			<!--*------------WEIGHT TRACKER DIV-------------->
	
				<div>
					<WeightChart name={pet.name} weight={pet.weight} />
				</div>
	

			<!--*----------------------------------->

			<!--*-------------HEALTH TRACKER DIV---------------------->
			<div class="overflow-x-auto bg-base-100 flex justify-center m-auto w-5/6 rounded-lg mt-10">
				<div class="opacity-100">
					<h3 class="text-center py-5">Health Tracker</h3>
					<div class="flex justify-center">
						<input
							class="text-center py-3 mx-5 text-white"
							type="text"
							placeholder="Temperature"
							bind:value={tempInputValue}
						/>
						<input
							class="text-center py-3 mx-5 text-white"
							type="text"
							placeholder="Respirations"
							bind:value={respInputValue}
						/>
						<input
							class="text-center py-3 mx-5 text-white"
							type="text"
							placeholder="Pulse"
							bind:value={pulseInputValue}
						/>
						<button on:click={addHealth} class="btn btn-secondary">Add</button>
					</div>
					<table class="table bg-base-100 m-10">
						<!-- head -->
						<thead>
							<tr>
								<th></th>
								<th>Date</th>
								<th>Temperature</th>
								<th>Respirations</th>
								<th>Pulse</th>
							</tr>
						</thead>
						<tbody>
							<!-- loop through petExercises -->
							{#each petHealth as health, index}
								<tr class="hover">
									<th>{index + 1}</th>
									<td>
										{health.date}
									</td>
									<td>
										{health.temperature}
									</td>
									<td>
										{health.respirations}
									</td>
									<td>
										{health.pulse}
									</td>
									<td>
										<button on:click={() => deleteHealth(index)} class="btn btn-secondary"
											>Delete</button
										>
									</td>
								</tr>
							{/each}
							<!-- end loop -->
						</tbody>
					</table>
				</div>
			</div>

			<!--*----------------------------------->

			<!--*------------STOOL TRACKER DIV-------------->
			<div>
				<PoopChart name={pet.name} stool={pet.stool} />
			</div>
			<!--*----------------------------------->

			<!--*------------MEDICAL TRACKER DIV-------------->
			<div class="overflow-x-auto bg-base-100 justify-center m-auto w-5/6 rounded-lg mb-10">
				<h3 class="text-center py-5">Medical Tracker</h3>
				<div>
					<table class="table bg-base-100 m-10">
						<thead>
							<tr>
								<th>Name</th>
								<th>Expiration Date</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{#each pet.vaccines as vaccine, index}
								<tr class="hover">
									{#if editedVaccine === vaccine}
										<td class="m-2">{vaccine.type}</td>
										<td class="m-2">
											<input
												class="text-white py-3"
												type="text"
												on:keydown={(event) => {
													if (event.key === 'Enter') {
														saveVaccines(index, event.target.value);
													}
												}}
											/>
										</td>
										<td>
											<button
												on:click={() => {
													editVaccines(vaccine);
												}}
												class="btn btn-secondary m-2"
											>
												Edit
											</button>
										</td>
									{:else}
										<td class="m-2">{vaccine.type}</td>
										<td class="m-2">{vaccine.date}</td>
										<td>
											<button
												on:click={() => {
													editVaccines(vaccine);
												}}
												class="btn btn-secondary m-2"
											>
												Edit
											</button>
										</td>
									{/if}
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</main>

	{#if currentReminder}
		<div
			class="fixed bottom-0 right-0 m-4 z-20 border-2 border-slate-500 w-full max-w-lg bg-white shadow-lg rounded p-4 text-black"
		>
			<p>{currentReminder.message}</p>
		</div>
	{/if}
{/if}
