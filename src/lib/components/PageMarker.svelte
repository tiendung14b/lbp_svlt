<script>
	export let len = 0;
	export let numPage = 0;

	export let onChange;

	import { cn } from '$lib/modules/cn.js';
	import { onDestroy, tick } from 'svelte';

	const handleChangeSlide = (num) => {
		numPage = num % len;
	};
</script>

<div class="flex flex-row gap-3 mx-auto">
	{#each Array.from(Array(len).keys()) as item}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={() => {
				handleChangeSlide(item);
				if (onChange) onChange();
			}}
			class={cn(
				'w-[40px] h-[5px] transition-all duration-300',
				item == numPage ? 'bg-[#FB342E]' : 'bg-[#fffc] hover:bg-[#0005]'
			)}
		></div>
	{/each}
</div>
