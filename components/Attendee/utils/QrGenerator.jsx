import {QRCodeCanvas} from 'qrcode.react'

function QrGenerator({link}) {
	return (
		<div className='shadow-xl p-5 rounded-xl '>
			<QRCodeCanvas 
				size={200}
				value={link}
			/>
		</div>
	)
}

export default QrGenerator