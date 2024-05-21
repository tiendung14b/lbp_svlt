<script>
	import Header from '../../lib/components/Header.svelte';
	import Direction from '../../lib/components/Direction.svelte';
	import ActivityIntro from '../../lib/components/Activity/ActivityIntro.svelte';
	import ActivityAds from '../../lib/components/Activity/ActivityAds.svelte';
	import Activity02 from '../../lib/components/Activity/Activity02.svelte';
	import Footer from '../../lib/components/Footer.svelte';
	let activity_poster = '/activity_poster.png';
</script>

<div>
	<Header currTab={'activity'} />
	<div class="relative">
		<img src={activity_poster} class="h-[330px] w-[100vw] object-cover" alt="" />
		<h1
			class="absolute top-[50%] -translate-y-1/2 -translate-x-1/2 left-1/2 text-white text-[24px] sm:text-[32px] md:text-[48px] font-[600] capitalize"
		>
			Lĩnh Vực Hoạt Động
		</h1>
	</div>
	<Direction
		dir={[
			{ url: '/home', name: 'Trang chủ' },
			{ url: '/about', name: 'Lĩnh vực hoạt động' }
		]}
	/>
	<ActivityIntro />
	<ActivityAds />
	<Activity02 />
	<Footer />
</div>
