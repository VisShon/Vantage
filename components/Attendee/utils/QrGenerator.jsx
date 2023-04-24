import {QRCodeCanvas} from 'qrcode.react'

function QrGenerator() {
	return (
		<div className='shadow-xl p-5 rounded-xl '>
			<QRCodeCanvas 
				size={200}
				value="https://reactjs.org/" 
			/>
		</div>
	)
}

export default QrGenerator