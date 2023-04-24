import { useRouter } from 'next/router'
function LiveStream() {
	
	const router = useRouter()
	const { slug } = router.query

	return (
		<div className='w-screen h-screen flex flex-col gap-10 justify-center items-center'>
			<iframe
				src={`/${slug}`}
				width={'100%'}
				height={'100%'}
				allowFullScreen
				allow="autoplay; encrypted-media; picture-in-picture"
				sandbox="allow-scripts"
			/>
		</div>
	)
}

export default LiveStream