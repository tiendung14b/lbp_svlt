<!-- intro page -->
<script>
	// import
	import UILangSwitch from '$lib/ui/UILangSwitch.svelte';
	import { theme } from '$lib/stores/theme.js';
	import '../app.css';
	import { goto } from '$app/navigation';
	import { onDestroy } from 'svelte';
	import logo from '$lib/assets/logo.png';
	import intro01 from '$lib/assets/intro_page_1.png';
	import intro01mb from '$lib/assets/intro_page_1mb.png';
	import intro02 from '$lib/assets/intro_page_2.png';
	import intro02mb from '$lib/assets/intro_page_2mb.png';
	import intro03 from '$lib/assets/intro_page_3.png';
	import intro03mb from '$lib/assets/intro_page_3mb.png';
	import { cn } from '$lib/modules/cn.js';
	import { slide } from 'svelte/transition';
	import { fade } from 'svelte/transition';

	let screenWidth = null;
	const slideData = {
		idx: 0,
		data: [
			{ pc: intro01, mb: intro01mb },
			{ pc: intro02, mb: intro02mb },
			{ pc: intro03, mb: intro03mb }
		]
	};

	// var
	$: isMobile = screenWidth > 450 ? false : true;
	let numPage = 0;
	let intervalSlide = setInterval(() => {
		numPage = (numPage + 1) % slideData.data.length;
	}, 4000);
	// handle event method
	const handleChangeSlide = (num) => {
		numPage = num % slideData.data.length;
		clearInterval(intervalSlide);
		intervalSlide = setInterval(() => {
			numPage = (numPage + 1) % slideData.data.length;
		}, 4000);
	};
	onDestroy(() => {
		clearInterval(intervalSlide);
	});
</script>

<div
	bind:clientWidth={screenWidth}
	class="overflow-hidden bg-transparent relative flex flex-col items-center pt-[22px] pb-[67px] h-[100vh] justify-between"
>
	<UILangSwitch />
	<div class="w-[100%] flex flex-col items-center gap-[66px]">
		<img src={logo} alt="" class={cn('object-cover', isMobile ? 'w-[38.9%]' : 'w-[15.8%]')} />
		<button
			on:click={() => {
				throw goto('/home');
			}}
			class="bg-[#FB342E] text-[white] text-[1rem] font-bold pt-[15px] pb-[15px] pl-[30px] pr-[30px]"
			>Đến trang chủ</button
		>
	</div>
	<!-- check mark -->
	<div class="flex flex-row gap-3">
		{#each Array.from(Array(slideData.data.length).keys()) as item}
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				on:click={handleChangeSlide.bind(null, item)}
				class={cn(
					'w-[40px] h-[5px] transition-all duration-300',
					item == numPage ? 'bg-[#FB342E]' : 'bg-[#0002] hover:bg-[#0005]'
				)}
			></div>
		{/each}
	</div>
	{#key numPage}
		<div class="absolute -z-10 object-cover top-0" transition:slide={{ duration: 1000, axis: 'x' }}>
			<img
				transition:fade
				class="object-cover min-h-[100vh] min-w-[100vw]"
				src={isMobile ? slideData.data[numPage].mb : slideData.data[numPage].pc}
				alt=""
			/>
		</div>
	{/key}
</div>
