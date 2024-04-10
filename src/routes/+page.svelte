<script>
	// import rohan from '/rohan.jpg'
	import Chart from '../components/chart.svelte';
</script>

<h1>Pet Care Reminder App</h1>
<nav>
	<ul>
		<li><a href="/">Pet Profile</a></li>
		<li><a href="/pet_services">Pet Services</a></li>
		<li><a href="/calendar">Calendar</a></li>
	</ul>
</nav>
<!--*----------DESCRIPTION DIV------------->
<h1>Pet Profile</h1>
<!-- <img src={rohan} alt="Rohan"> -->
<div><p>THIS IS AN IMAGE</p></div>
<div>
	<h3>Breed: *dynamically insert breed*</h3>
	<h3>Age: *dynamically insert age*</h3>
	<h3>Sex: *dynamically insert sex*</h3>
</div>
<!--*----------------------------------->

<!--*----------FEEDING DIV------------->
<div>
	<h3>Food Instructions</h3>
	<p>(insert)AM</p>
	<p>(insert)PM</p>
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
	<button>Add</button>
	<li>
		<!--add input functionality -->
		*Insert Date* *Insert Time* *Insert exercise Name*
		<button>Edit</button>
		<button>Delete</button>
	</li>
</div>
<!--*----------------------------------->

<!--*------------WEIGHT TRACKER DIV-------------->
<div>
	<h3>Weight Tracker</h3>
	<input type="text" placeholder="Weight (lbs)" />
	<button>Add</button>
	<!-- <Chart /> -->
</div>
<!--*----------------------------------->

<!--*------------HEALTH TRACKER DIV-------------->
<div>
	<h3>Health Tracker</h3>
	<input type="text" placeholder="Temperature" /> <input type="text" placeholder="Respirations" />
	<input type="text" placeholder="Pulse" />
	<button>Add</button>
	<li>*Insert Date* *Insert Temperature* *Insert Respirations* *Insert Heart Rate*</li>
	<li>*Insert Date* *Insert Temperature* *Insert Respirations* *Insert Heart Rate*</li>
</div>
<!--*----------------------------------->

<!--*------------STOOL TRACKER DIV-------------->
<h3>Stool Tracker</h3>
<input type="text" placeholder="Stool Type" />
<button>Add</button>
<!-- <Chart /> -->
<!--*----------------------------------->

<!--*------------MEDICAL TRACKER DIV-------------->
<div>
	<h3>Medical Tracker</h3>
	<li>
		<!--add input functionality -->
		Rabies: *Insert Date*
		<button>Edit</button>
		<button>Delete</button>
	</li>
	<li>
		<!--add input functionality -->
		DAPP: *Insert Date*
		<button>Edit</button>
		<button>Delete</button>
	</li>
	<li>
		<!--add input functionality -->
		BORD: *Insert Date*
		<button>Edit</button>
		<button>Delete</button>
	</li>
	<li>
		<!--add input functionality -->
		LEPTO: *Insert Date*
		<button>Edit</button>
		<button>Delete</button>
	</li>
	<li>
		<!--add input functionality -->
		HWP: *Insert Date*
		<button>Edit</button>
		<button>Delete</button>
	</li>
	<li>
		<!--add input functionality -->
		FLEA/TICK: *Insert Date*
		<button>Edit</button>
		<button>Delete</button>
	</li>
</div>
