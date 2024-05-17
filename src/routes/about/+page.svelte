<script>
	import Header from '../../lib/components/Header.svelte';
	import Direction from '../../lib/components/Direction.svelte';
	import AboutIntro from '../../lib/components/About/AboutIntro.svelte';
	import AboutStats from '../../lib/components/About/AboutStats.svelte';
	import AboutMessage from '../../lib/components/About/AboutMessage.svelte';
	import MasterBuilder from '../../lib/components/About/MasterBuilder.svelte';
	import about_poster from '$lib/assets/about_poster.png';
</script>

<div>
	<Header currTab={'about'} />
	<!-- main content -->
	<div class="relative min-[1180px]:mt-8">
		<img src={about_poster} class="h-[330px] w-[100vw] object-cover" alt="" />
		<h1
			class="absolute top-[50%] -translate-y-1/2 -translate-x-1/2 left-1/2 text-white text-[24px] sm:text-[32px] md:text-[48px] font-[600] capitalize"
		>
			Về chúng tôi
		</h1>
	</div>
	<!-- route -->
	<Direction
		dir={[
			{ url: '/home', name: 'Trang chủ' },
			{ url: '/about', name: 'Về chúng tôi' }
		]}
	/>
	<AboutIntro />
	<AboutStats />
	<AboutMessage />
	<MasterBuilder />
</div>
