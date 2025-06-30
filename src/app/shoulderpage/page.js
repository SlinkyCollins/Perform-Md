import React from 'react'
import Navbar from '@/components/Navbar'
import HeroForm from '@/components/Heroform'
import Footer from '@/components/Footer'
import Disclaimer from '@/components/Disclaimer'
import Testimonials from '@/components/Testimonials'
import Medicalaccordion from '@/components/Medicalaccordion'



const Page = () => {
  return (
    <div>
        <Navbar/>
        <HeroForm/>
        
        <Testimonials/>
        <Medicalaccordion/>

        <Disclaimer/>
        <Footer/>

    </div>
  )
}

export default Page
