<script>
	// import rohan from '/rohan.jpg'
	import Chart from '../components/chart.svelte';
	import '../app.css';
</script>

<main class="container mx-auto bg-slate-400">
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
	<div class="container mx-20">
		<!-- <img src={rohan} alt="Rohan"> -->
		<div class="flex justify-start">
			<div class="bg-white w-40 h-40 mr-10"></div>
			<div>
				<h3>Breed: *dynamically insert breed*</h3>
				<h3>Age: *dynamically insert age*</h3>
				<h3>Sex: *dynamically insert sex*</h3>
			</div>
		</div>
		<!--*----------------------------------->

		<!--*----------FEEDING DIV------------->
		<div class="bg-black w-40 h-40">
			<h3 class="text-center mt-10">Food Instructions</h3>
			<p class="text-center">(insert) AM</p>
			<p class="text-center">(insert) PM</p>
		</div>
		<!--*----------------------------------->

		<!--*----------MEDICATION DIV------------->
		<div>
			<h3>Medications</h3>
			<ul>
				<li>*insert meds here</li>
				<li>*insert meds here</li>
				<li>*insert meds here</li>
			</ul>
		</div>
		<!--*----------------------------------->

		<!--*------------EXERCISE TRACKER DIV-------------->
		<div>
			<h3>Exercise Tracker</h3>
			<input type="text" placeholder="Exercise Name" />
			<button class="btn btn-secondary">Add</button>
			<li>
				<!--add input functionality -->
				*Insert Date* *Insert Time* *Insert exercise Name*
				<button class="btn btn-secondary">Edit</button>
				<button class="btn btn-secondary">Delete</button>
			</li>
		</div>
		<!--*----------------------------------->

		<!--*------------WEIGHT TRACKER DIV-------------->
		<div>
			<h3>Weight Tracker</h3>
			<input type="text" placeholder="Weight (lbs)" />
			<button class="btn btn-secondary">Add</button>
			<!-- <Chart /> -->
		</div>
		<!--*----------------------------------->

		<!--*------------HEALTH TRACKER DIV-------------->
		<div>
			<h3>Health Tracker</h3>
			<input type="text" placeholder="Temperature" />
			<input type="text" placeholder="Respirations" />
			<input type="text" placeholder="Pulse" />
			<button class="btn btn-secondary">Add</button>
			<li>*Insert Date* *Insert Temperature* *Insert Respirations* *Insert Heart Rate*</li>
			<li>*Insert Date* *Insert Temperature* *Insert Respirations* *Insert Heart Rate*</li>
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
