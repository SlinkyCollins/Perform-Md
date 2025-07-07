import Aboutdoctor from '@/components/Aboutdoctor'
import Disclaimer from '@/components/Disclaimer'
import Footer from '@/components/Footer'
import HeroForm from '@/components/Heroform'
import Medicalaccordion from '@/components/Medicalaccordion'
import Navbar from '@/components/Navbar'
import Patientstories from '@/components/Patientstories'
import Testimonials from '@/components/Testimonials'
import { Link } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
const page = () => {
    return (
        <>
            <Navbar/>

            <HeroForm/>
            <section className='grid lg:grid-cols-2 p-15  gap-2 lg items-center bg-gray-900 w-full'>
                <div className='text-left p-5 ms-20'>
                    <h1 className='text-3xl font-bold text-white mb-1'>Regenexx® Procedures</h1>
                    <h1 className='text-2xl text-blue-400 font-semibold mb-1'>For Elbow Injuries</h1>
                    <h1 className='text-lg mb-7 text-white'>Overuse Conditions and Arthritis.</h1>
                    <small className='text-lg font-bold mb-3 text-white'>Regenexx® Procedures</small>
                    <p className='text-lg mb-3 text-white'>Are highly specialized non-surgical, image-guided injection-based procedures performed only by very specially trained Regenexx Physicians for elbow arthritis, overuse conditions such as tennis elbow or golfer’s elbow, and other conditions that cause elbow pain. These procedures utilize concentrated repair cells that are obtained from your own bone marrow or blood to promote your body’s own natural ability to heal.
                        <br /> <br />

                        If you are experiencing elbow pain, Regenexx Procedures using the healing agents from your own body may be a good treatment option. In recent years, several studies have demonstrated good results of platelet-rich plasma in treating elbow tendon and ligament issues</p>
                </div>
                <div>
                    <Image src="/image.png" alt="image" width={652} height={289}/>
                </div>

            </section>
            <Medicalaccordion/>

<section>
<div className=' bg-gray-900 w-full'>
    <div>
    <h1 className='text-3xl font-bold  w-full ms-15 text-center text-white mb-1'>The Interventional Orthopedics<br/> Solution For Elbow Problems</h1>

    </div>

   <div className='text-left p-5 ms-20 flex'>
<Image src="/tablet.png" alt="image" width={652} height={289}/>
<p className='text-lg mb-3 text-white w-2xl mt-30'>
    The elbow is a critical joint in the musculoskeletal system. It doesn’t have to bear weight, like a knee or ankle does; however, think of all the things you wouldn’t be able to do if you couldn’t bend your arm: button your shirt, drive a car, pick up a baby, and so on. Elbow injuries are well known in many sports participants, including tennis, golf, and other sports that create stress on this joint. Experiencing pain or inflammation in this important joint can make it difficult to perform many standard daily activities.<br /> <br />

Download this report and learn how the concept of using the healing agents from your own body with Regenexx blood platelet procedures is backed by research that demonstrates that Interventional Orthopedic Regenerative Medicine treatment options may be a smart alternative to treating elbow pain via surgery in a majority of circumstances.<br/>
 <Button className="w-50 h-10 bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-lg">
           <small>DOWNLOAD EBOOK
            </small>  
            </Button>
</p>
</div>
</div>


</section>
            <Testimonials />
            <Patientstories />
            <Disclaimer />
            <Footer />
        </>
    )
}

export default page
