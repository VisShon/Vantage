import { Box, Button, Flex, Text, TextField } from '@livepeer/design-system';
import { useCreateStream } from '@livepeer/react';
import { useMemo, useState, useEffect } from 'react';
import emailJs from '@emailjs/browser'

export default function LiveStream({id}) {
	const [streamName, setStreamName] = useState('');
	const {
		mutateAsync: createStream,
		data: stream,
		status,
	} = useCreateStream(streamName ? { name: streamName } : null);
	const isLoading = useMemo(() => status === 'loading', [status]);
	const createLiveStream = async()	=>{
		await createStream?.()
	}

	useEffect(() => {
		const SendMail = async () =>{
			let templateParams = {
				to_name: 'Vishnu',
				to_email:'vishnu20414@iiitd.ac.in',
				playbackId:stream?.playbackId
			}
			await emailJs.send(
				'service_mv03hwf',
				'template_dysx4ir',
				templateParams,
				'6HGQvyzipY4qgGkWm'
			)
		}
		SendMail()

	}, [stream?.playbackId])
	

	return (
		<div className='z-10 flex flex-col items-center pt-[10%]'>
			<Box
				className='w-full mb-3 text-[black]'>
				<TextField
					size="3"
					type="text"
					placeholder="Stream name"
					onChange={(e) => setStreamName(e.target.value)}
				/>
			</Box>

			{stream &&
			stream.rtmpIngestUrl &&
			(!stream?.playbackUrl || !stream.isActive) && (
				<Text 
					size="3" 
					variant="gray" 
					className='mt-4 mb-3'>
					Use the ingest URL rtmp://rtmp.livepeer.com/live and key
					<code> {stream.rtmpIngestUrl.match(/\/([^\/]+)$/)[1]} </code> 
					in a stream client like OBS to see content below.
				</Text>
			)}

			<a className="underline opacity-30 hover:opacity-60" href="http://">Link to OBS</a>

			{stream?.playbackId && (
			<Box className='mt-3 h-full w-full flex items-center justify-center relative z-40'>
				<iframe
					src={`https://lvpr.tv?v=${stream.playbackId}`}
					className='rounded-2xl h-[40vh]'
					width={'70%'}
					height={'90%'}
					allowFullScreen
					allow="autoplay; encrypted-media; picture-in-picture"
					sandbox="allow-scripts"
				/>
			</Box>
			)}

			<Flex className=' justify-end gap-3 mt-4'>
			{!stream && (
				<Button
				className='flex items-center '
				onClick={createLiveStream}
				size="2"
				disabled={isLoading || !createStream}
				variant="orange"
				>
				Create Stream
				</Button>
			)}
			</Flex>
		</div>
	);
};
