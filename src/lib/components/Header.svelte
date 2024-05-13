<script>
	export let isHome = false;

	import iclose from '$lib/assets/close.svg';
	import iopen from '$lib/assets/iopen.png';

	let clientOffset;
	let windowWidth;
	let isOpen = false;
	$: stuck = (() => {
		if (clientOffset > 100) return true;
		if (clientOffset < 70) return false;
		return stuck;
	})();
	// import
	import { cn } from '$lib/modules/cn.js';
	import '../../app.css';
	import logo from '$lib/assets/logo.png';
	import isearch from '$lib/assets/isearch.svg';
	import UILangSwitch from '$lib/ui/UILangSwitch.svelte';
	import { fade } from 'svelte/transition';
</script>

<svelte:window bind:scrollY={clientOffset} bind:innerWidth={windowWidth} />

{#if windowWidth > 970}
	<header
		class={cn(
			isHome && !stuck ? 'absolute left-[50vw] -translate-x-[50%]' : 'fixed',
			isHome && !stuck ? 'max-w-[1170px] mt-8' : '',
			'w-[100vw] mx-auto bg-white h-auto top-0 *:mx-auto z-10'
		)}
	>
		<div class={cn('h-[2px] bg-[#FB342E]', 'max-w-[100vw]')}></div>
		<div
			class={cn(
				' flex flex-row justify-between items-center px-[20px] box-border',
				stuck && 'px-[113px]'
			)}
		>
			<img class="w-[44px]" src={logo} alt="" />
			<ul class="flex flex-row *:px-[18px] *:py-[28px] *:text-[13px] *:font-[600]">
				<li class="bg-[#FB342E] text-white">Trang chủ</li>
				<li class="hover:bg-[#f44842] hover:text-white">Về chúng tôi</li>
				<li class="hover:bg-[#f44842] hover:text-white">Lĩnh vực hoạt động</li>
				<li class="hover:bg-[#f44842] hover:text-white">Dự án</li>
				<li class="hover:bg-[#f44842] hover:text-white">Tin tức</li>
				<li class="hover:bg-[#f44842] hover:text-white">Cơ hội nghề nghiệp</li>
				<li class="hover:bg-[#f44842] hover:text-white">Liên hệ</li>
			</ul>
			<div class="flex gap-[10px]">
				<img src={isearch} alt="search icon" />
				<UILangSwitch />
			</div>
		</div>
	</header>
{/if}

{#if windowWidth <= 970}
	<!-- BEFORE OPEN -->
	<button
		class={cn('fixed z-10 top-[10px] right-4', isOpen && 'hidden')}
		on:click={() => {
			isOpen = !isOpen;
		}}
	>
		<img src={iopen} class="w-[40px]" alt="" />
	</button>
	<!-- AFTER OPEN -->
	<div
		class={cn(
			'fixed right-0 z-10 flex flex-col w-[80vw] h-[100vh] ml-auto gap-2 bg-slate-100',
			!isOpen && 'hidden'
		)}
	>
		<button
			on:click={() => {
				isOpen = !isOpen;
			}}
			class="px-[18px] py-[20px]"><img class="w-[30px]" src={iclose} alt="" /></button
		>
		<ul
			class="flex flex-col *:px-[18px] *:py-[24px] *:text-[13px] *:font-[600] *:transition-all *:duration-100"
		>
			<li class="bg-[#FB342E] text-white">Trang chủ</li>
			<li class="hover:bg-[#f44842] hover:text-white">Về chúng tôi</li>
			<li class="hover:bg-[#f44842] hover:text-white">Lĩnh vực hoạt động</li>
			<li class="hover:bg-[#f44842] hover:text-white">Dự án</li>
			<li class="hover:bg-[#f44842] hover:text-white">Tin tức</li>
			<li class="hover:bg-[#f44842] hover:text-white">Cơ hội nghề nghiệp</li>
			<li class="hover:bg-[#f44842] hover:text-white">Liên hệ</li>
		</ul>
		<div class="flex gap-[10px] px-[18px]">
			<img src={isearch} alt="search icon" />
			<UILangSwitch />
		</div>
	</div>
{/if}
