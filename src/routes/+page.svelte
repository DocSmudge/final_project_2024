<script>
	// import rohan from '/rohan.jpg'
	import Chart from '../components/chart.svelte';
	import '../app.css';
</script>

<main class="container mx-auto bg-slate-400 flex flex-col">
	<h1 class="text-7xl text-center m-10">Pet Care Reminder App</h1>
	<nav>
		<div class="container mx-auto">
			<ul class="flex items-center justify-center space-x-6 bg-black color text-white p-4">
				<li><a class="hover:bg-white hover:text-black py-4 px-2" href="/">Pet Profile</a></li>
				<li>
					<a class="hover:bg-white hover:text-black py-4 px-2" href="/pet_services">Pet Services</a>
				</li>
				<li>
					<a class="hover:bg-white hover:text-black py-4 px-2" href="/calendar">Calendar</a>
				</li>
			</ul>
		</div>
	</nav>
	<!--*----------DESCRIPTION DIV------------->
	<h1 class="text-5xl text-center m-10">Pet Profile</h1>
	<div class="container mx-auto">
		<!-- <img src={rohan} alt="Rohan"> -->
		<div class="flex justify-center">
			<div class="bg-white w-72 h-72 mr-10"></div>
			<div class="">
				<h3 class="text-2xl">Breed: *dynamically insert breed*</h3>
				<h3 class="text-2xl">Age: *dynamically insert age*</h3>
				<h3 class="text-2xl">Sex: *dynamically insert sex*</h3>
			</div>
		</div>
		<!--*----------------------------------->

		<!--*----------FEEDING DIV------------->
		<div class="flex justify-center">
			<div class="bg-black w-1/3 h-40 my-10">
				<h3 class="text-center py-5">Food Instructions</h3>
				<p class="text-center">(insert) AM</p>
				<p class="text-center">(insert) PM</p>
			</div>
			<!--*----------------------------------->

			<!--*----------MEDICATION DIV------------->
			<div class="bg-black w-1/3 h-40 my-10 mx-10">
				<h3 class="text-center py-5">Medications</h3>
				<ul>
					<li class="text-center">*insert meds here</li>
					<li class="text-center">*insert meds here</li>
					<li class="text-center">*insert meds here</li>
				</ul>
			</div>
		</div>
		<!--*----------------------------------->

		<!--*------------EXERCISE TRACKER DIV-------------->
		<div class="container bg-black w-5/6 h-60 my-10 mx-auto">
			<h3 class="text-center py-5">Exercise Tracker</h3>
			<div class="flex justify-center">
				<input class="text-center py-3 mx-5" type="text" placeholder="Exercise Name" />
				<button class="btn btn-secondary">Add</button>
			</div>
			<li class="list-none m-10">
				<!--add input functionality -->
				*Insert Date* *Insert Time* *Insert exercise Name*
				<button class="btn btn-secondary mx-5">Edit</button>
				<button class="btn btn-secondary">Delete</button>
			</li>
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

					<li class="list-none m-10">
						*Insert Date* *Insert Temperature* *Insert Respirations* *Insert Heart Rate*
					</li>
					<li class="list-none m-10">
						*Insert Date* *Insert Temperature* *Insert Respirations* *Insert Heart Rate*
					</li>
					<li class="list-none m-10">
						*Insert Date* *Insert Temperature* *Insert Respirations* *Insert Heart Rate*
					</li>
					<li class="list-none m-10">
						*Insert Date* *Insert Temperature* *Insert Respirations* *Insert Heart Rate*
					</li>
				</div>
			</div>
		</div>
		<!--*----------------------------------->

		<!--*------------STOOL TRACKER DIV-------------->
		<h3>Stool Tracker</h3>
		<input type="text" placeholder="Stool Type" />
		<button class="btn btn-secondary">Add</button>
		<!-- <Chart /> -->
		<!--*----------------------------------->

		<!--*------------MEDICAL TRACKER DIV-------------->
		<div>
			<h3>Medical Tracker</h3>
			<li>
				<!--add input functionality -->
				Rabies: *Insert Date*
				<button class="btn btn-secondary">Edit</button>
				<button class="btn btn-secondary">Delete</button>
			</li>
			<li>
				<!--add input functionality -->
				DAPP: *Insert Date*
				<button class="btn btn-secondary">Edit</button>
				<button class="btn btn-secondary">Delete</button>
			</li>
			<li>
				<!--add input functionality -->
				BORD: *Insert Date*
				<button class="btn btn-secondary">Edit</button>
				<button class="btn btn-secondary">Delete</button>
			</li>
			<li>
				<!--add input functionality -->
				LEPTO: *Insert Date*
				<button class="btn btn-secondary">Edit</button>
				<button class="btn btn-secondary">Delete</button>
			</li>
			<li>
				<!--add input functionality -->
				HWP: *Insert Date*
				<button class="btn btn-secondary">Edit</button>
				<button class="btn btn-secondary">Delete</button>
			</li>
			<li>
				<!--add input functionality -->
				FLEA/TICK: *Insert Date*
				<button class="btn btn-secondary">Edit</button>
				<button class="btn btn-secondary">Delete</button>
			</li>
		</div>
	</div>
</main>
