<script></script>

<div class="absolute flex justify-center py-[53px] px-[135px] left-0 w-[100%] bg-[#F0F3F6]">
	<div class="min-w-[1170px] px-4 gap-8 grid grid-cols-2 h-[400px]">
		{#each [{ project: 'Đang thực hiện', urlImg: '/projectdr01.png' }, { project: 'Đang thực hiện', urlImg: '/projectdr01.png' }] as { project, urlImg }}
			<div
				class={` bg-[url(${urlImg})] bg-cover flex flex-col pt-[35px] pl-[42px] *:text-white *:text-[32px] *:font-[600]`}
			>
				<strong>Dự án</strong>
				<strong>{project}</strong>
			</div>
		{/each}
	</div>
</div>
