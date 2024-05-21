<script>
	export let isHome = false;
	export let currTab = 'home';

	// import iclose from '/Close.svg';
	let iopen = '/iopen.png';
	let logo = '/logo.png';
	let isearch = '/isearch.svg';

	import { goto } from '$app/navigation';

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
	import UILangSwitch from '$lib/ui/UILangSwitch.svelte';
</script>

<svelte:window bind:scrollY={clientOffset} bind:innerWidth={windowWidth} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
{#if windowWidth > 1180}
	<header
		class={cn(
			isHome && !stuck
				? 'absolute left-[50vw] -translate-x-[50%] w-[90%] xl:max-w-[1170px] mt-8'
				: 'fixed',
			'w-[100vw] mx-auto bg-white h-auto top-0 *:mx-auto z-[1000]',
			!isHome && 'block relative'
		)}
	>
		<div class={cn('h-[2px] bg-[#FB342E]', 'max-w-[100vw]')}></div>
		<div class="content">
			<div
				class={cn('flex flex-row justify-between items-center box-border', !stuck && 'px-[20px]')}
			>
				<img class="w-[44px]" src={logo} alt="" />
				<ul class={cn('flex flex-row *:px-[18px] *:py-[28px] *:text-[13px] *:font-[600]')}>
					<li
						on:click={() => goto('/home')}
						class={cn(
							'cursor-pointer',
							currTab == 'home'
								? 'bg-[#FB342E] text-white'
								: 'bg-white text-black hover:bg-[#f44842] hover:text-white'
						)}
					>
						Trang chủ
					</li>
					<li
						on:click={() => goto('/about')}
						class={cn(
							'cursor-pointer',
							currTab == 'about'
								? 'bg-[#FB342E] text-white'
								: 'bg-white text-black hover:bg-[#f44842] hover:text-white'
						)}
					>
						Về chúng tôi
						{#if currTab === 'about'}
							<ul
								class="absolute flex justify-center w-[100vw] gap-10 bottom-0 left-0 translate-y-[100%] z-50 *:text-[#777E90] *:text-[13px] font-[600] bg-[#F0F3F6] py-4"
							>
								<li><a href="#about_intro">Giới thiệu</a></li>
								<li><a href="#about_td">Thông điệp</a></li>
								<li><a href="#about_mb">Master Builder</a></li>
								<li><a href="#about_his">Lịch sử</a></li>
								<li><a href="#about_mis">Tầm nhìn - Sứ mệnh</a></li>
								<li><a href="#about_eng">Đội ngũ kỹ sư</a></li>
								<li><a href="#about_cer">Chứng nhận</a></li>
								<li><a href="#about_par">Khách hàng - Đối tác</a></li>
							</ul>
						{/if}
					</li>
					<li
						on:click={() => goto('/activity')}
						class={cn(
							'cursor-pointer',
							currTab == 'activity'
								? 'bg-[#FB342E] text-white'
								: 'bg-white text-black hover:bg-[#f44842] hover:text-white'
						)}
					>
						Lĩnh vực hoạt động
					</li>
					<li class="hover:bg-[#f44842] hover:text-white cursor-pointer"><a href="#!">Dự án</a></li>
					<li class="hover:bg-[#f44842] hover:text-white cursor-pointer">
						<a href="#!">Tin tức</a>
					</li>
					<li class="hover:bg-[#f44842] hover:text-white cursor-pointer">
						<a href="#!">Cơ hội nghề nghiệp</a>
					</li>
					<li class="hover:bg-[#f44842] hover:text-white cursor-pointer">
						<a href="#!">Liên hệ</a>
					</li>
				</ul>
				<div class="flex gap-[10px]">
					<img src={isearch} alt="search icon" />
					<UILangSwitch />
				</div>
			</div>
		</div>
	</header>
{/if}

{#if windowWidth <= 1180}
	<!-- BEFORE OPEN -->
	<div
		class={cn(
			'fixed top-0 left-0 w-full z-50 flex flex-row items-center h-[70px] px-6 bg-white',
			isOpen && 'hidden'
		)}
	>
		<img src={logo} alt="" class="h-[90%] m-auto" />
		<button
			on:click={() => {
				isOpen = !isOpen;
			}}
		>
			<img src={iopen} class="w-[30px]" alt="" />
		</button>
	</div>
	<!-- AFTER OPEN -->
	<div
		class={cn(
			'fixed right-0 z-50 flex flex-col w-[80vw] h-[100vh] ml-auto gap-2 bg-slate-100',
			!isOpen && 'hidden'
		)}
	>
		<button
			on:click={() => {
				isOpen = !isOpen;
			}}
			class="px-[18px] py-[20px]"><img class="w-[30px]" src={iopen} alt="" /></button
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
