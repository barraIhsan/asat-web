<script>
	export let serviceData;
</script>
<div class="flex flex-col lg:flex-row gap-8 m-5 sm:m-10">
	{#each serviceData as service}
		<div class="flex-1 flex flex-col gap-5 text-dark bg-white p-4 rounded-2xl">
			<img src="{service.imgSrc}" alt="{service.imgAlt}" class="rounded-2xl h-80 object-cover">
			<h3 class="font-semibold text-2xl xs:text-3xl">{service.title}</h3>
			<p class="text-lg xs:text-xl lg:mb-14">{service.desc}</p>
			<a href="{service.link}" class="py-6 bg-green hover:bg-greenHover text-white text-center font-semibold rounded-full transition mt-auto">{service.btnText}</a>
		</div>
	{/each}
</div>