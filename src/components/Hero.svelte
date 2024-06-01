<script>
	import Title from './Title.svelte'

	export let imgSrc, imgAlt, title, desc;
</script>

<img src="{imgSrc}" alt={imgAlt} class="h-56 xs:h-96 xl:h-[600px] w-full object-cover">
<section class="bg-light flex flex-col gap-20 py-20 px-6 sm:px-12 md:px-24 xl:px-44 2xl:px-80">
	<Title title={title} desc={desc} />

	<slot />

</section>