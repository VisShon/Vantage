import Image from 'next/image'
import Link from 'next/link'
import localFont from 'next/font/local'
const Milans = localFont({ src: '../../../styles/fonts/Milans/Milans.ttf' })

function AteendeeProfile({profilePic='https://xsgames.co/randomusers/assets/images/favicon.png', name='User', id=''}) {
	return (
		<Link
			href={`/${id}`}
			className="p-10 flex flex-col items-center justify-center w-[80%] h-[80%] "
		>
			<Image
				className="relative border-2 border-[white] rounded-full  z-20 mt-10"
				src={profilePic}
				width={500}
				height={500}
			/>

			<div className="text-[9vw] z-20 text-center -mt-10 hover:text-[#b7d9d6]">
				<h1 className={Milans.className}>
					{name}
				</h1>
			</div>
		</Link>
	)
}

export default AteendeeProfile