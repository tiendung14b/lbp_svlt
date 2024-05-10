<script>
	import '../../app.css';
	import Header from '$lib/components/Header.svelte';
	import PageMarker from '../../lib/components/PageMarker.svelte';
	// import image
	import iviewmore from '$lib/assets/iviewmore.png';
	import iviewmore_white from '$lib/assets/iviewmore_white.png';
	import hero00 from '$lib/assets/hero00.png';
	import hero01 from '$lib/assets/hero01.jpg';
	import hero02 from '$lib/assets/hero02.jpg';
	import { onMount, tick } from 'svelte';

	////// var
	//when client scroll down at specific point, header will spread
	// this effect just appears in home, not another page
	// list of hero image
	let windowWidth;
	const heroImgs = [hero00, hero01, hero02];

	let currHeroImg = 0;
	let intervalHeroImg = setInterval(() => {
		currHeroImg = (currHeroImg + 1) % heroImgs.length;
		if (onChange) onChange();
	}, 4000);
	let onChange;
	onMount(() => {
		onChange = () => {
			document.querySelector('#heroCtn').scroll({ left: currHeroImg * windowWidth });
		};
	});
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div class="relative">
	<Header isHome={true} />
	<div>
		<div
			class="relative flex gap-[27px] max-w-[1170px] mx-auto h-[100vh] flex-col justify-center *:z-10 *:text-white"
		>
			<h1 class=" text-[32px] w-[549px] font-[600] text-white">
				Doanh nghiệp uy tín hàng đầu trong lĩnh vực xây dựng nhà xưởng công nghiệp tại Việt Nam
			</h1>
			<p class="text-[20px] text-[400] w-[563px]">
				ENCO Industry là doanh nghiệp uy tín hàng đầu miền Bắc trong lĩnh vực xây dựng các công
				trình nhà xưởng công nghiệp có vốn đầu tư nước ngoài
			</p>
			<div class="flex items-center gap-6">
				<strong class="text-[20px] font-[600]">Xem thêm</strong>
				<img src={iviewmore_white} alt="" />
			</div>
			<div class="absolute flex bottom-[10%] w-[100%]">
				<PageMarker
					bind:intervalSlide={currHeroImg}
					bind:numPage={currHeroImg}
					{onChange}
					len={heroImgs.length}
				/>
			</div>
		</div>
		<!-- this is bunch of images to slide hihih -->
		<div
			id="heroCtn"
			class="absolute left-0 top-0 flex w-[100vw] h-[100vh] overflow-x-auto no-scrollbar"
		>
			{#each heroImgs as image}
				<img src={image} alt="about company" class="shrink-0 object-cover w-[100%]" />
			{/each}
		</div>
	</div>
</div>
