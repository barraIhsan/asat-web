<script>
	import List from './AdoptionList.svelte'

	export let adoptions;

	 const properties = [
		{ name: 'Umur', key: 'age', unit: " tahun" },
		{ name: 'Kelamin', key: 'gender' },
		{ name: 'Jenis', key: 'type' },
		{ name: 'Bobot', key: 'weight', unit: "kg" },
		{ name: 'Sifat', key: 'personality' }
	];
</script>

<section class="bg-light grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 py-8 px-5 xs:px-12">
	{#each adoptions as adoption}
		<div class="bg-white p-3 rounded-3xl flex flex-col gap-5 text-dark w-full">
			<img src="{adoption.imgSrc}" alt="{adoption.name}" class="rounded-2xl h-60 object-cover">
			<div class="flex flex-col gap-3">
				<p class="font-bold text-3xl xs:text-4xl">{adoption.name}</p>

				<div class="grid grid-cols-[1fr_4fr] xs:grid-cols-[1fr_3fr] gap-3">
					{#each properties as property}
						<List property={property.name} value={adoption[property.key] + (property.unit ? " " + property.unit : "")}/>
					{/each}
				</div>
			</div>
			<a href="https://wa.me/62812345678910?text=Saya%20mau%20adopsi%20{adoption.name}" target="_blank" class="bg-green hover:bg-greenHover py-6 flex justify-center gap-3 items-center rounded-full mt-auto">
				<img src="/img/whatsapp.svg" alt="WhatsApp Logo" class="size-8">
				<p class="text-white font-semibold text-2xl">Adopsi</p>
			</a>
		</div>
	{/each}
</section>