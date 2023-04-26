import Image from 'next/image'

function SearchBar({ searchParam, setSearchParam }) {
	return (
		<div className="w-[35%] relative flex flex-col items-center select-none z-30">
			<input
				className="bg-[#d0d0d02a] p-4 rounded-full w-full glass border-none text-[#ffffff7a] placeholder:text-[#ffffff7a] px-20"
				value={searchParam}
				onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
				placeholder=""
				type="search"
			/>
			<div className="absolute left-2 z-10 top-[20%] cursor-pointer">
				<Image
					className=''
					src={'/search.svg'}
					width={40}
					height={40}
					alt='vantage'
				/>
			</div>
		</div>
	)
}

export default SearchBar
