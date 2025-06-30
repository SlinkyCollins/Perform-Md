import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
    return (
        <div>
            <Navbar />
            <div>
                <div className='flex w-full overflow-x-hidden justify-between py-10' style={{ backgroundColor: '#2A333D' }}>
                    <img src="Rectangle 5061.png" alt="" />
                    <img src="Rectangle 5065.png" alt="" />
                    <img src="Rectangle 5069.png" alt="" />
                    <img src="Rectangle 5073.png" alt="" />
                    <img src="Rectangle 5077.png" alt="" />
                </div>
                {/* <img src="Rectangle 5104.png" alt="" className='bg-red-600 border-5 border-amber-300' /> */}
                {/* <hr className='bg-blue-500' /> */}
            </div>
            <div style={{ backgroundColor: '#1E242B' }} className='px-45 py-10'>
                <div className='flex justify-between'>
                    <div>
                        <img src="image 234.png" alt="" />
                        <h3 className='text-center font-medium text-white'>PETER MICHEAL</h3>
                        <p className='text-center text-blue-300'>MD, MBA</p>
                    </div>
                    <div>
                        <h1 className='text-white text-5xl font-bold'>Perform MD Regenerative Orthopedics and Spine </h1>
                        <p className='text-white mt-2 text-2xl'>PerformMD practitioners embody an exclusive and highly proficient network in interventional <br />
                            orthopedics, with an unwavering dedication to orthopedic well-being. Our team of physicians at <br />
                            PerformMD are specialists in musculoskeletal health, boasting extensive training and hands-on <br />
                            experience in diagnosing and treating musculoskeletal conditions. They are adept at administering <br />
                            intricate, image-guided injections using your body's natural healing agents to address orthopedic <br />
                            concerns.
                            <p className='text-end mt-1'>LEARN MORE</p>
                        </p>
                        <p className='border-t-1 border-white'></p>
                    </div>
                </div>
                    <div className='flex'>
                        <div className='border-t-1 mt-2'>
                            fgtyhuj  |
                        </div>
                        <div></div>
                    </div>
            </div>
        </div>
    )
}

export default page