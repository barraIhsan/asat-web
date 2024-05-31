<script>
	export let imgSrc, name, day, time
</script>

<div class="flex flex-col sm:flex-row gap-3 text-dark text-center sm:text-left w-fit sm:w-full">
	<img src="{imgSrc}" alt="{name}" class="size-72 sm:size-48 xl:size-56 2xl:size-72 rounded-full object-cover">
	<div class="flex flex-col gap-6 w-full">
		<p class="font-bold text-3xl">{name}</p>
		<div class="border-y border-fuschia py-6">
			<p class="text-xl">{day}</p>
			<p class="text-xl">{time}</p>
		</div>
	</div>
</div>