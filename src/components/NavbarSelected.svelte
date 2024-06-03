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
		<li>
			<a href="/{item.path}" class={pathUrl == item.path ? 'flex items-center gap-2' : ''}>
				{#if pathUrl == item.path}
					<img src="/img/paw.svg" alt="" class="size-5">
				{/if}
				{item.label}
			</a>
		</li>
	{/each}
</ul>