<script>
	import { onMount } from 'svelte';

	let pathUrl;

	const navItems = [
		{ path: 'about', label: 'Tentang Kami'},
		{ path: 'clinic', label: 'Klinik'},
		{ path: 'daycare', label: 'Daycare & Grooming'},
		{ path: 'adoption', label: 'Adopsi'}
	];

	onMount(() => {pathUrl = window.location.pathname.substring(1)});
</script>

<ul class="hidden md:flex items-center gap-8 text-[#2E5171] font-semibold">
	{#each navItems as item}
		<li><a href="/{item.path}" class={pathUrl == item.path ? "before:content-[url('/img/paw.svg')] before:mr-2" : ''}>{item.label}</a></li>
	{/each}
</ul>