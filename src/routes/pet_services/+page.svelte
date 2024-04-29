<script>
	import Pet from '../../pet.json';
	console.log(Pet);
	let vetURL =
		'https://www.banfield.com/visit-information/schedule-appointment/guest?hospitalId=1066';
	let groomerPhoneNumber = '8015651263';
	let phoneNumber = '801123456';
</script>

<slot />
<div class="container mx-auto bg-white flex flex-col">
	<h1 class="text-5xl text-center m-10 text-black">SERVICES</h1>

	<div class="collapse bg-base-200 my-5">
		<input type="checkbox" class="peer" />
		<div
			class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
		>
			<h3 class="text-center">{Pet.providers[0].profession}</h3>
		</div>
		<div
			class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
		>
			<h3 class="m-2">Name: {Pet.providers[0].name}</h3>
			<h3 class="m-2">Address:{Pet.providers[0].address}</h3>
			<h3 class="m-2">Phone: {Pet.providers[0].phone}</h3>
			<a class="m-2 text-blue-600" href={vetURL}>Make an Appointment</a>
		</div>
	</div>

	<div class="collapse bg-base-200 my-5">
		<input type="checkbox" class="peer" />
		<div
			class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
		>
			<h3 class="text-center">{Pet.providers[1].profession}</h3>
		</div>
		<div
			class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
		>
			<h3 class="m-2">Name: {Pet.providers[1].name}</h3>
			<h3 class="m-2">Name: {Pet.providers[1].name}</h3>
			<h3 class="m-2">Address:{Pet.providers[1].address}</h3>
			<h3 class="m-2">Name: {Pet.providers[1].name}</h3>
			<a class="m-2 text-blue-600" href={'tel:' + groomerPhoneNumber}
				>Call us at {groomerPhoneNumber}</a
			>
		</div>
	</div>

	<div class="collapse bg-base-200 my-5">
		<input type="checkbox" class="peer" />
		<div
			class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
		>
			<h3 class="text-center">{Pet.providers[2].profession}</h3>
		</div>
		<div
			class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
		>
			<h3 class="m-2">{Pet.providers[2].name}</h3>
			<h3 class="m-2">{Pet.providers[2].address}</h3>
			<a class="m-2 text-blue-600" href={'tel:' + phoneNumber}>Call us at {phoneNumber}</a>
		</div>
	</div>
</div>
