import Link from "next/link"
import QrGenerator from "./utils/QrGenerator"
import Image from "next/image"

function QrTicket({userMail,userTicket,eventTitle}) {
	return (
		<div className="rounded-xl relative mt-[12%] z-20 bg-[White] px-10 w-[40%]  flex flex-col gap-5 text-[#898989] items-center">
			<Link 
				className=" z-20 self-end absolute top-10"
				href={' '}>
				<Image
					src={'/mail_31BEB6.svg'}
					width={20}
					height={20}
				/>
			</Link>
			<QrGenerator
				link={'hello'}
			/>

			<div>
				<h2
					className="text-[#31BEB6]">
					{TicketData?.title}
				</h2>
			</div>

			<span>Ticket for 1 enjoy 😊</span>
		</div>
	)
}

export default QrTicket