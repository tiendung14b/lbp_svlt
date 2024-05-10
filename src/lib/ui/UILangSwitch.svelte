<script>
	import vie_flag from '$lib/assets/vie_flag.svg';
	import cn_flag from '$lib/assets/cn_flag.svg';
	import en_flag from '$lib/assets/en.webp';
	import { cn } from '$lib/modules/cn.js';
	import { language } from '$lib/stores/lang';
	// init var
	const langData = {
		vie: { text: 'VIE', img: vie_flag },
		cn: { text: 'CN', img: cn_flag },
		en: { text: 'EN', img: en_flag }
	};
	let currLang = langData.vie;
	let expand = false;
	// init method
	const handleClick = () => {
		expand = !expand;
	};
	const handleChoose = (lang) => {
		currLang = lang;
		$language = currLang;
		expand = !expand;
	};
</script>

<div class="relative z-10">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="relative z-0 bg-[#F0F3F6] cursor-pointer p-[5px] w-[90px] rounded-full flex items-center gap-[10px]"
		on:click={handleClick}
	>
		<img src={currLang.img} class="size-[24px] rounded-[50%]" alt={currLang.text + 'flag'} />
		<span class="text-[14px] font-bold">{currLang.text}</span>
		<div
			class={cn(
				'w-[5px] h-[5px] font-["Lexgend"] bg-transparent',
				'border-b-[2px] border-l-[2px] border-[black] translate-y-[0%] transition-all',
				expand ? 'rotate-[135deg]' : `-rotate-[45deg]`
			)}
		></div>
	</div>
	{#if expand}
		<ul
			class="absolute -z-10 -translate-y-[12px] pt-[12px] rounded-bl-sm rounded-br-sm bg-[#F0F3F6] inline-block"
		>
			{#each Object.values(langData).filter((lang) => lang.text != currLang.text) as lang}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<li
					class=" cursor-pointer p-[5px] w-[90px] flex items-center gap-[10px]"
					on:click={handleChoose.bind(null, lang)}
				>
					<img
						class="object-cover size-[24px] rounded-[50%]"
						src={lang.img}
						alt={lang.text + 'flag'}
					/>
					<span class="text-[14px] font-bold">{lang.text}</span>
				</li>
			{/each}
		</ul>
	{/if}
</div>
