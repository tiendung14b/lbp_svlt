<!-- intro page -->
<script>
	// import
	import UILangSwitch from '$lib/ui/UILangSwitch.svelte';
	import PageMarker from '../lib/components/PageMarker.svelte';
	import '../app.css';
	import { goto } from '$app/navigation';
	import { onDestroy } from 'svelte';
	import { cn } from '$lib/modules/cn.js';
	import { slide } from 'svelte/transition';
	import { fade } from 'svelte/transition';

	let screenWidth = null;
	const slideData = {
		idx: 0,
		data: [
			{ pc: '/intro_page_1.png', mb: '/intro_page_1mb.png' },
			{ pc: '/intro_page_2.png', mb: '/intro_page_2mb.png' },
			{ pc: '/intro_page_3.png', mb: '/intro_page_3mb.png' }
		]
	};

	// var
	$: isMobile = screenWidth > 450 ? false : true;
	let numPage = 0;
	let intervalSlide = setInterval(() => {
		numPage = (numPage + 1) % slideData.data.length;
	}, 4000);
	// handle event method
	onDestroy(() => {
		clearInterval(intervalSlide);
	});
</script>

<div
	id="#top"
	bind:clientWidth={screenWidth}
	class="overflow-hidden bg-transparent relative flex flex-col items-center pt-[22px] pb-[67px] h-[100vh] justify-between"
>
	<UILangSwitch />
	<div class="w-[100%] flex flex-col items-center gap-[66px]">
		<img src="/logo.png" alt="" class={cn('object-cover', isMobile ? 'w-[38.9%]' : 'w-[15.8%]')} />
		<button
			on:click={() => {
				throw goto('/home');
			}}
			class="bg-[#FB342E] text-[white] text-[1rem] font-bold pt-[15px] pb-[15px] pl-[30px] pr-[30px]"
			>Đến trang chủ</button
		>
	</div>
	<PageMarker len={slideData.data.length} bind:numPage {intervalSlide} />
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
