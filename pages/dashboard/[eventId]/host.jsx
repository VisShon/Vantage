import Image from 'next/image';
import localFont from 'next/font/local'
import Announecement from '@/components/Host/Announcement';
import LiveStream from '@/components/Host/LiveStream';
import Team from '@/components/Host/Team';
import QrScanner from '@/components/Host/QrScanner';
import CurationCenter from '@/components/Host/CurationCenter';
const Milans = localFont({ src: '../../../styles/fonts/Milans/Milans.ttf' })

function host() {
	
	return (
		<main className="bg-[#9F36AE] h-screen flex flex-col p-5 items-center text-center justify-center gap-24  cursor-default select-none font-lexend relative z-10">

			<div className="text-[15vw] absolute -top-28 z-20 w-full text-center">
				<h1 className={Milans.className}>
					DashBoard
				</h1>
				{/* <Navigator/> */}
			</div>

			<Image
				className="fixed w-[60%] top-0 z-0"
				src={"/HostOrb.svg"}
				width={100}
				height={100}
			/>

			{/* <Announecement/> */}
			{/* <LiveStream/> */}
			{/* <Team/> */}
			{/* <QrScanner/> */}
			<CurationCenter/>
		</main>
	)
}

export default host