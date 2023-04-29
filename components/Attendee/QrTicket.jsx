import QrGenerator from "./utils/QrGenerator"
function QrTicket({eventTitle,userId}) {

	return (
		<div className="rounded-xl relative mt-[12%] z-20 bg-[White] px-10 w-[40%]  flex flex-col gap-5 text-[#898989] items-center">
			<QrGenerator
				link={userId}
			/>

			<div>
				<h2
					className="text-[#31BEB6]">
					{eventTitle}
				</h2>
			</div>

			<span>Ticket for 1 enjoy 😊</span>
		</div>
	)
}

export default QrTicket