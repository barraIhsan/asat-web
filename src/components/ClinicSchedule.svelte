<script>
	export let doctorData;
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
	{#each doctorData as doctor}
		<div class="flex flex-col sm:flex-row gap-3 text-dark text-center sm:text-left w-fit sm:w-full">
			<img src="{doctor.imgSrc}" alt="{doctor.name}" class="size-72 sm:size-48 xl:size-56 2xl:size-72 rounded-full object-cover">
			<div class="flex flex-col gap-6 w-full">
				<p class="font-bold text-3xl">{doctor.name}</p>
				<div class="border-y border-fuschia py-6">
					<p class="text-xl">{doctor.day}</p>
					<p class="text-xl">{doctor.time}</p>
				</div>
			</div>
		</div>
	{/each}
</div>