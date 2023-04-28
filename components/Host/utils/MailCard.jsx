function MailCard({subject,message}) {
  return (
    <div className='shadow-[0_4px_41px_0_rgba(0,0,0,0.1)] w-[70%] text-[80%] rounded-xl p-8 bg-[white] text-[#4D4D4D] text-left self-start z-20 select-text'>
        <p className='text-[90%] opacity-80'>{subject}</p>
        <span>{message}</span>
    </div>
  )
}

export default MailCard