<script>
	import '../../app.css';
	import Header from '$lib/components/Header.svelte';
	import hero00 from '$lib/assets/hero00.png';
	import hero01 from '$lib/assets/hero01.jpg';
	import hero02 from '$lib/assets/hero02.jpg';

	////// var
	//when client scroll down at specific point, header will spread
	// this effect just appears in home, not another page
	let clientOffset;
	$: stuck = (() => {
		if (clientOffset > 100) return true;
		if (clientOffset < 70) return false;
		return stuck;
	})();
	// list of hero image
	const heroImgs = [hero00, hero01, hero02];
</script>

<svelte:window bind:scrollY={clientOffset} />

<div class="relative">
	<Header isHome={true} {stuck} />
	<div class="flex max-w-[100vw] h-[100vh] overflow-x-auto no-scrollbar">
		{#each heroImgs as image}
			<img src={image} alt="about company" class="shrink-0 object-cover w-[100%]" />
		{/each}
	</div>
	<p>helo</p>
</div>
