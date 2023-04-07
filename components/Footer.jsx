import React from 'react'

const Footer = () => {
  return (
    <footer className='h-full w-full flex justify-center mt-[10rem] pb-12'>
      <div className='h-full w-10/12 grid grid-cols-3 justify-between'>
        {/* column */}
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl mb-8 text-red-600'>FAQ</h2>
          <span>Where we are based</span>
          <span>How we operate</span>
          <span>Refund policy</span>
        </div>
        {/* column */}
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl mb-8 text-red-600'>Contacts</h2>
          <span>Linkedin: JayLee</span>
          <span>Github: JayLee</span>
          <span>Instagram: JayLee</span>
        </div>
        {/* column */}
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl mb-8 text-red-600'>Privacy Policy</h2>
          <p>
          At Jays Anime, we take your privacy very seriously. Any information you 
          provide to us will be used solely for the purpose of fulfilling your request or order, 
          and will not be shared with any third parties without your explicit consent. We use industry-standard encryption 
          and security measures to protect your data from unauthorized access. If you have any questions or concerns about our 
          privacy practices, please do not hesitate to contact us.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer