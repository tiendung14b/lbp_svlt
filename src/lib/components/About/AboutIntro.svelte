<script>
	export let title;
	export let content;
	export let isHome;
	import { goto } from '$app/navigation';
	let aboutVid = '/aboutVid.gif';
</script>

<div
	id="about_intro"
	class="box-border grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 *:h-[505px] min-[500px]:*:h-[405px]"
>
	<iframe
		class="object-cover w-[100vw] h-[100%] lg:h-[405px] lg:w-[100%] lg:object-cover"
		src="https://www.youtube.com/embed/x2GGTitBy6I"
		title="THIS IS ELON MUSK MEME ( LONG VERSION ) HD"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		referrerpolicy="strict-origin-when-cross-origin"
		allowfullscreen
	></iframe>
	<div
		class="px-[20px] lg:px-[60px] min-[1200px]:px-[100px] py-[46px] bg-[url(/aboutIsu.png)] bg-cover"
	>
		<div class="flex flex-col gap-y-4 justify-between max-w-[720px]">
			<h2 class="text-[#212163] text-[32px] font-[600]">{title}</h2>
			<p class=" text-[14px] font-[400] text-[#353945] text-justify">
				{content}
			</p>
			{#if isHome}
				<div
					class="flex flex-col gap-4 items-center *:w-[90%] text-center min-[500px]:flex-row justify-between *:bg-[#35368B] *:text-white *:py-4 min-[500px]:*:py-5 *:text-[16px] *:font-[600] *:uppercase"
				>
					<button class="hover:bg-[#FB342E]">TẢI PROFILE</button>
					<button
						class="hover:bg-[#FB342E]"
						on:click={() => {
							throw goto('about');
						}}>TÌM HIỂU THÊM</button
					>
				</div>
			{/if}
		</div>
	</div>
</div>
