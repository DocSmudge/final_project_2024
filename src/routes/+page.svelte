<script>
	import Button from '$lib/components/ui/button/button.svelte';

	// import rohan from '/rohan.jpg'
	import Chart from '../components/chart.svelte';
	import Pet from '../pet.json';
	//---------------------------------------
	let inputValue = '';

	function addExercise() {
		if (inputValue.trim() !== '') {
			const newExercise = {
				id: Pet.exercises.length,
				date: new Date(),
				time: new Date().getTime(),
				exercise: inputValue
			};
			Pet.exercises.push(newExercise);
			console.log(Pet);
		}
		inputValue = '';
	}
	//---------------------------------------
	function deleteExercise(index) {
		Pet.exercises = [...Pet.exercises.slice(0, index), ...Pet.exercises.slice(index + 1)];
		console.log(Pet);
	}
</script>

<main class="container mx-auto bg-slate-400 flex flex-col text-white">
	<!--*----------DESCRIPTION DIV------------->
	<h1 class="text-5xl text-center m-10">Pet Profile</h1>
	<div class="container mx-auto">
		<!-- <img src={rohan} alt="Rohan"> -->
		<div class="flex justify-center">
			<div class="bg-white w-72 h-72 mr-10"></div>
			<div class="">
				<h3 class="text-2xl">Breed: {Pet.breed}</h3>
				<h3 class="text-2xl">Age: {Pet.age}</h3>
				<h3 class="text-2xl">Sex: {Pet.sex}</h3>
			</div>
		</div>
		<!--*----------------------------------->

		<!--*----------FEEDING DIV------------->
		<div class="flex justify-center">
			<div class="bg-black w-1/3 h-40 my-10">
				<h3 class="text-center py-5">Food Instructions</h3>
				<p class="text-center">{Pet.feeding.am}</p>
				<p class="text-center">{Pet.feeding.pm}</p>
			</div>
			<!--*----------------------------------->

			<!--*----------MEDICATION DIV------------->
			<div class="bg-black w-1/3 h-40 my-10 mx-10">
				<h3 class="text-center py-5">Medications</h3>
				<ul>
					<li class="text-center">
						{Pet.medications[0].name}
						{Pet.medications[0].dose}
						{Pet.medications[0].instructions}
					</li>
					<li class="text-center">
						{Pet.medications[1].name}
						{Pet.medications[1].dose}
						{Pet.medications[1].instructions}
					</li>
					<li class="text-center">
						{Pet.medications[2].name}
						{Pet.medications[2].dose}
						{Pet.medications[2].instructions}
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
					bind:value={inputValue}
				/>
				<button on:click={addExercise} class="btn btn-secondary">Add</button>
			</div>
			<ul>
				{#each Pet.exercises as exercise, index}
					<li class="list-none m-10">
						<div>
							<strong>Date:</strong>
							{exercise.date}, <strong>Time:</strong>
							{exercise.time}, <strong>Exercise:</strong>
							{exercise.exercise}
							<button class="btn btn-secondary mx-5">Edit</button>
							<button on:click={deleteExercise(index)} class="btn btn-secondary">Delete</button>
						</div>
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
					<input class="text-center py-3 mx-5" type="text" placeholder="Temperature" />
					<input class="text-center py-3 mx-5" type="text" placeholder="Respirations" />
					<input class="text-center py-3 mx-5" type="text" placeholder="Pulse" />
					<button class="btn btn-secondary">Add</button>
				</div>
				<div class="flex flex-col justify-center">
					<ul>
						{#each Pet.health as health, index}
							<li class="list-none m-10">
								<div>
									<strong>Date</strong>
									<strong>Temperature</strong>
									<strong>Respirations</strong>
									<strong>Pulse</strong>
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
				<li class="list-none m-10">
					<!--add input functionality -->
					Rabies: *Insert Date*
					<button class="btn btn-secondary m-2">Edit</button>
					<button class="btn btn-secondary">Delete</button>
				</li>
			</div>
			<li class="list-none m-10">
				<!--add input functionality -->
				DAPP: *Insert Date*
				<button class="btn btn-secondary">Edit</button>
				<button class="btn btn-secondary">Delete</button>
			</li>
			<li class="list-none m-10">
				<!--add input functionality -->
				BORD: *Insert Date*
				<button class="btn btn-secondary">Edit</button>
				<button class="btn btn-secondary">Delete</button>
			</li>
			<li class="list-none m-10">
				<!--add input functionality -->
				LEPTO: *Insert Date*
				<button class="btn btn-secondary">Edit</button>
				<button class="btn btn-secondary">Delete</button>
			</li>
			<li class="list-none m-10">
				<!--add input functionality -->
				HWP: *Insert Date*
				<button class="btn btn-secondary">Edit</button>
				<button class="btn btn-secondary">Delete</button>
			</li>
			<li class="list-none m-10">
				<!--add input functionality -->
				FLEA/TICK: *Insert Date*
				<button class="btn btn-secondary">Edit</button>
				<button class="btn btn-secondary">Delete</button>
			</li>
		</div>
	</div>
</main>

<!-- Todo: Figure out why my UI is taking forever to update when I add a new object to my Pet.exercise object  -->
<!-- Todo: Figure out how to shorten the "date" info on exercise tracker  -->
