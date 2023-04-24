import Link from "next/link"
import QrGenerator from "./utils/QrGenerator"
import Image from "next/image"

const TicketData = {
	title:'Front end and Web Design',
	timestamp:new Date('2023-04-19T14:11:33.609Z'),
	ticketLink:''
}

function QrTicket() {
	return (
		<div className="rounded-xl relative mt-[12%] z-20 bg-[White] px-10 py-5 w-[40%]  flex flex-col gap-5 text-[#898989] items-center">
			<Link 
				className=" z-20 self-end"
				href={' '}>
				<Image
					src={'/mail_31BEB6.svg'}
					width={20}
					height={20}
				/>
			</Link>
			<QrGenerator/>

			<div>
				<h2
					className="text-[#31BEB6]">
					{TicketData?.title}
				</h2>

				<p
					className="text-[#4D4D4D]">
					{TicketData?.timestamp.toISOString()}
				</p>
			</div>

			<span>Ticket for 1 enjoy 😊</span>
		</div>
	)
}

export default QrTicket