<script>
	export let isHome = false;
	let clientOffset;
	$: stuck = (() => {
		if (clientOffset > 100) return true;
		if (clientOffset < 70) return false;
		return stuck;
	})();
	$: console.log(stuck);
	// import
	import { cn } from '$lib/modules/cn.js';
	import '../../app.css';
	import logo from '$lib/assets/logo.png';
	import isearch from '$lib/assets/isearch.svg';
	import UILangSwitch from '$lib/ui/UILangSwitch.svelte';
</script>

<svelte:window bind:scrollY={clientOffset} />

<header
	class={cn(
		isHome && !stuck ? 'absolute left-[50vw] -translate-x-[50%]' : 'sticky',
		isHome && !stuck ? 'max-w-[1170px] mt-8 absolute z-10' : '',
		'w-[100vw] mx-auto bg-white h-auto top-0 *:mx-auto'
	)}
>
	<div class={cn('h-[2px] bg-[#FB342E]', 'max-w-[100vw]')}></div>
	<div class=" flex flex-row justify-between items-center max-w-[1170px] px-[20px] box-border">
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
