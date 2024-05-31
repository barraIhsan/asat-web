<script>
	export let imgSrc, imgAlt, title, desc, link, btnText;
</script>

<div class="flex flex-col gap-5 text-dark bg-white p-4 rounded-2xl">
	<img src="{imgSrc}" alt="{imgAlt}" class="rounded-2xl h-80 w-fit object-cover">
	<h3 class="font-semibold text-2xl xs:text-3xl">{title}</h3>
	<p class="text-lg xs:text-xl">{desc}</p>
	<a href="{link}" class="py-6 bg-[#95BB6F] hover:bg-[#7a995b] text-white text-center font-semibold rounded-full transition">{btnText}</a>
</div>