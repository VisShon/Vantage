import { QrReader } from 'react-qr-reader'
import { useState } from 'react'
import Image from 'next/image';

function QrScanner() {
	const [data, setData] = useState('No result');

	//send notifs
	
	const ViewFinder = () => (
		<Image
			className='absolute z-30 top-[30%] left-[25%] opacity-70'
			src={'/viewfinder.svg'}
			width={300}
			height={300}
		/>
	)

	return (
		<div className='w-[40%] mt-20'>
			<QrReader
				onResult={(result, error) => {
					if (!!result)
						alert(result?.text);
					if (!!error)
						console.info(error);
				}}
				ViewFinder={ViewFinder}
			/>
		</div>
	)
}

export default QrScanner