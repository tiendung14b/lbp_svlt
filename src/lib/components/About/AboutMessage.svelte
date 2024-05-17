<script>
	import about_ceo from '$lib/assets/about_ceo.png';
	import about_sign_ceo from '$lib/assets/about_sign_ceo.png';
	import about_deco from '$lib/assets/about_deco.svg';
</script>

<div id="about_td" class="relative p-[20px] lg:px-[60px] py-[66px] bg-[#F0F3F6]">
	<div class="content grid grid-cols-1 gap-8 lg:gap-0 lg:grid-cols-[65%_35%]">
		<div class="relative z-20">
			<h1 class="flex flex-col gap-2 xl:flex-row capitalize text-[#212163] text-[40px] font-[600]">
				Thông điệp <span class="text-[#FB342E]"> chủ tịch HĐQT</span>
			</h1>
			<div class="flex flex-col gap-5 mt-8 text-shadow text-justify">
				<strong class="text-[14px] font-[600]"
					>Kính gửi toàn thể cán bộ, nhân viên và đối tác của ENCO!</strong
				>
				<p>
					Tôi, với tư cách là chủ tịch hội đồng quản trị, xin gửi tới quý vị lời chào trân trọng và
					cảm ơn sâu sắc về sự đóng góp và nỗ lực của quý vị trong suốt thời gian qua.
				</p>
				<p>
					Với mục tiêu trở thành một trong những công ty hàng đầu trong ngành xây dựng, chúng ta đã
					đạt được nhiều thành tựu đáng kể trong năm vừa qua. Tuy nhiên, để tiếp tục phát triển và
					bứt phá, chúng ta cần phải tập trung vào những yếu tố quan trọng nhất:
				</p>
				<p>
					Thứ nhất, chúng ta cần phải tăng cường sự chuyên nghiệp hơn nữa trong cách làm việc của
					mình, từ quản lý đến sản xuất và cung cấp sản phẩm. Chúng ta cần phải luôn đặt lợi ích của
					khách hàng lên hàng đầu và đáp ứng nhu cầu của họ một cách tốt nhất có thể.
				</p>
				<p>
					Thứ hai, chúng ta cần phải nâng cao chất lượng sản phẩm và dịch vụ của mình. Chúng ta cần
					phải đảm bảo rằng sản phẩm của chúng ta luôn đáp ứng được các tiêu chuẩn chất lượng cao
					nhất và được sản xuất bằng các quy trình tiên tiến nhất.
				</p>
				<p>
					Cuối cùng, chúng ta cần phải tăng cường mối quan hệ với đối tác và khách hàng của mình.
					Chúng ta cần phải xây dựng những mối quan hệ đối tác bền vững và đáp ứng nhu cầu của khách
					hàng một cách chuyên nghiệp và tận tâm.
				</p>
				<p>
					Tôi muốn nhấn mạnh rằng chúng ta cần phải chủ động trong việc đối phó với những thách thức
					và cơ hội mới trong ngành xây dựng. Chúng ta cần phải luôn sẵn sàng thích nghi với các
					thay đổi trong thị trường và đưa ra các chiến lược phù hợp. Tôi tin rằng, với sự nỗ lực và
					đóng góp của tất cả chúng ta, ENCO sẽ tiếp tục phát triển và bứt phá thành công trong thời
					gian tới. Cám ơn quý vị đã dành thời gian lắng nghe.
				</p>
				<p>Trân trọng</p>
			</div>
			<div class="flex justify-end"><img src={about_sign_ceo} alt="" class="w-[282px]" /></div>
		</div>
		<div class="flex justify-center lg:justify-end">
			<div class="relative lg:w-[80%] lg:h-[500px]">
				<img src={about_ceo} alt="ceo" class="h-[500px] object-cover" />
				<p
					class="absolute bottom-4 left-1/2 -translate-x-1/2 text-center py-4 bg-[#FB342E] w-[90%]"
				>
					<span class="text-[20px] font-[600] text-white">Mr.<br />Nguyễn Thanh Sơn<br /></span
					><span class="text-[14px] font-[400] text-white">{'(Chủ tịch HDQT)'}</span>
				</p>
			</div>
		</div>
	</div>
	<img src={about_deco} alt="" class="absolute top-0 left-0 z-0" />
</div>
