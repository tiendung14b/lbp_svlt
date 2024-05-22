<script></script>

<div
	class="absolute py-[53px] px-[135px] gap-8 grid grid-cols-2 left-0 w-[100%] h-[400px] bg-[#F0F3F6]"
>
	{#each [{ project: 'Đang thực hiện', urlImg: '/projectdr01.png' }, { project: 'Đang thực hiện', urlImg: '/projectdr01.png' }] as { project, urlImg }}
		<div
			class={`bg-[url(${urlImg})] bg-cover flex flex-col pt-[35px] pl-[42px] *:text-white *:text-[32px] *:font-[600]`}
		>
			<strong>Dự án</strong>
			<strong>{project}</strong>
		</div>
	{/each}
</div>
