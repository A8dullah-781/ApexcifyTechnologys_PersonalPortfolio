import React from 'react'

const Contact = () => {
  return (
    <div className='flex lg:flex-row lg:gap-0 gap-12 flex-col py-10 md:py-0 mx-[7.5vw]'>
        <div className=' flex lg:flex-col md:flex-row flex-col justify-center items-start lg:h-[100vh] lg:w-1/2'>
        <div className='lg:text-[5.2vw] md:text-[4vw] text-[12vw] mb-10 leading-none font-bold'>
            <div className='text-white'>Let's turn your</div>
            <div className='flex gap-2'>
                <div className='text-[#85E66C]'>vision</div>
                <div className='text-white'>into</div>
            </div>
            <div className='text-white'>reality.</div>
        </div>
        <div className='font-light mx-[7.5] text-lg text-white md:w-[80%]'>
            Your vision deserves precision, not guesswork. I build high-performance web experiences with clean architecture, intentional design, and animations that feel engineered, not improvised the kind of work you can trust to represent your brand at its best.
        </div>
        </div>
        <div className='flex justify-center items-center lg:h-[100vh] lg:w-1/2'>
        
          <form className="lg:w-[40vw] w-[80vw]  flex flex-col  gap-4"
  action="https://formsubmit.co/abdullah781.work@gmail.com"
  method="POST"
>
  
  <input
    type="text"
    placeholder="Your Name"
    className="glass w-full px-4 py-3 text-white placeholder-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-white/40"
  />

  <input
    type="email"
    placeholder="Your Email"
    className="glass w-full px-4 py-3 text-white placeholder-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-white/40"
  />

  <textarea
    placeholder="Your Message"
    rows="5"
    className="glassc w-full px-4 py-3 text-white placeholder-gray-300  outline-none focus:ring-2 focus:ring-white/40 resize-none"
  ></textarea>

  <button
    type="submit"
    className="glasst-btn px-6 py-3 lg:w-[14vw] w-[50vw] text-white font-semibold rounded-xl"
  >
   <span> Send </span>
  </button>

</form>
</div>
    </div>
  )
}

export default Contact