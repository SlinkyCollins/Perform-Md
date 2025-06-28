import Aboutdoctor from '@/components/Aboutdoctor'
import Footer from '@/components/Footer'
import Footercta from '@/components/Footercta'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
     <Navbar/>
     <div className='bg-[#2A333D]'>
        <form>
            <h1>Schedule Appointment</h1>
        </form>
     </div>
     <Aboutdoctor/>
     <Footercta/>
     <Footer/>
    </>
  )
}

export default page