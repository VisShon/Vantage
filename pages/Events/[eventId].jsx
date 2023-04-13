import Image from "next/image";
import { useEffect, useState } from "react";
import localFont from 'next/font/local'
import { useRouter } from "next/router";
import InfoCard from "@/components/InfoCard";
const Milans = localFont({ src: '../../styles/fonts/Milans/Milans.ttf' })

function Details() {
	return (
		<main className="flex flex-col justify-center items-left text-left relative w-screen bg-[#648AAE]">
			<div className="text-[20vw] absolute -top-20 z-20 w-full text-center">
				<h1 className={Milans.className}>
					Vantage
				</h1>
			</div>
			<Image
				className="absolute top-0 left-0 w-[30%] z-20"
				src={"/star.svg"}
				width={50}
				height={50}
			/>
			<Image
				className="absolute top-[35%] right-0 w-[20%] z-0"
				src={"/fullStar.svg"}
				width={50}
				height={50}
			/>

			<div className="flex w-full text-left justify-between p-10">
				<section className='relative w-[70%] h-[70%] flex flex-col justify-center items-start select-none pt-[18%] overflow-x-hidden'>
					<Image
						className="w-full rounded-2xl aspect-video z-0"
						src={"https://picsum.photos/id/237/200/300"}
						width={500}
						height={50}
					/>

					<div className="text-[10rem] z-20">
						<h2 className={Milans.className}>
							Event Details
						</h2>
						<p className="text-[1.2rem]">
							Lorem ipsum dolor sit amet consectetur. Adipiscing at elit egestas faucibus egestas malesuada tincidunt. Nisi sed est a varius nisi molestie. Arcu purus egestas est nibh aliquam lacus viverra. Commodo ornare egestas libero nullam eget in imperdiet sed. Ornare lobortis interdum amet scelerisque risus malesuada ornare. Consequat nunc dui integer sed semper purus. Turpis consectetur vestibulum volutpat auctor in eget porttitor. Ac nam tincidunt amet dignissim at amet. Aliquam dignissim quis nulla lacus mattis magna nibh. Senectus feugiat etiam volutpat arcu. Faucibus rutrum nam nulla viverra. Egestas nulla aliquam arcu non est.
							Commodo vitae non velit turpis lectus pulvinar habi

							tasse. Lobortis id malesuada fermentum dictumst justo. Cursus egestas et lorem egestas sit. Eu velit nunc ultrices non gravida lacus. Nisi enim tellus tristique pharetra quis nascetur dictum nunc posuere.
							Id cum erat ornare faucibus feugiat aliquet mi metus in. Volutpat dolor dolor praesent vestibulum. Non potenti semper in lobortis imperdiet. Nullam orci pretium duis vitae integer etiam nibh lacus porttitor. Volutpat tellus morbi penatibus id pellentesque nibh amet consectetur leo. Mi neque vulputate scelerisque maecenas sed cursus. 

							r in lobortis imperdiet. Nullam orci pretium duis vitae integer etiam nibh lacus porttitor. Volutpat tellus morbi penatibus id pellentesque nibh amet consectetur leo. Mi neque vulputate scelerisque maecenas sed cursus. 
						</p>
					</div>


					<div className="text-[10rem] z-20">
						<h2 className={Milans.className}>
							Sponsors
						</h2>
						<div>
							{/* <Image
								className="w-[10%] z-0"
								src={"/OrbBlue.svg"}
								width={50}
								height={50}
							/> */}
						</div>
					</div>

					<div className="text-[10rem] z-20">
						<h2 className={Milans.className}>
							Team
						</h2>
						<div>
							{/* <Image
								className="w-[10%] z-0"
								src={"/OrbBlue.svg"}
								width={50}
								height={50}
							/> */}
						</div>
					</div>
				</section>
				<section className="h-[200vh] w-[25%] relative p-10 pt-[18%] ">
					<InfoCard/>
				</section>
			</div>
		</main>
	)
}

export default Details