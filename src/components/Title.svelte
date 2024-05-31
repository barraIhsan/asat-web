<script>
	export let title, desc;
</script>

<div class="flex flex-col xl:flex-row gap-10 xl:gap-5 px-5">
	<h1 class="text-dark font-black text-5xl xs:text-6xl">{title}</h1>
	<img src="/img/paw-hero.svg" alt="Cat Paw" class="w-36 md:w-52 mr-20">
	<p class="text-lg xs:text-xl">{desc}</p>
</div>