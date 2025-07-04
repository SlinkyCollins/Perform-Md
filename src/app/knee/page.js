import Disclaimer from '@/components/Disclaimer'
import Footer from '@/components/Footer'
import HeroForm from '@/components/Heroform'
import Medicalaccordion from '@/components/Medicalaccordion'
import Navbar from '@/components/Navbar'
import Patientstories from '@/components/Patientstories'
import Testimonials from '@/components/Testimonials'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
        <Navbar/>
        <HeroForm/>
        <section className=" bg-gray-800 py-16 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                    {/* <span className="text-white">Regenexx® Procedures</span> */}
                    {/* <span className="text-cyan-400"> For Knee Arthritis</span> */}
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                    Meniscus Tears, Tendon & Ligament Tears, Overuse<br/>
                    Injuries And Other Conditions
                </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="relative">
                    <div className="bg-gray-600 rounded-lg overflow-hidden shadow-2xl">
                        <Image
                        src="/knee-pain.png"
                        alt="Knee pain illustration"
                        width={512}
                        height={589}
                        classNameName="mx-auto"
                        />
                    </div>
                </div>

                <div className="space-y-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        Regenexx® Procedures
                    </h3>

                
                    <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                        <p>
                            Are non-surgical injection-based procedures for people suffering from knee pain due to common injuries to the knee Meniscus, ACL, MCL, and other structures, or who are experiencing degenerative conditions such as Osteoarthritis. These procedures utilize concentrated repair cells that are obtained from your own bone marrow or blood to promote your body's own natural ability to heal.
                        </p>

                        <p>
                            Traditional options for patients suffering from these conditions include arthroscopic knee surgery to repair ligament tears, meniscus, or total knee replacement. With those surgeries, months of rehab are required, and the patient must be aware of and prepared to take on the risks. As an alternative, Regenexx regenerative orthopedic procedures are designed to help reduce knee pain and improve function with precise highly specific image-guided medical procedures.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        <Medicalaccordion/>
    <section className="bg-slate-900 py-16 px-6">
        <div className="max-w-7xl mx-auto">
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                
                <div className="space-y-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                            Your Alternative to Knee Surgery
                        </h1>
                        
                        <div className="text-gray-300 text-lg leading-relaxed space-y-4">
                            <p>
                                Surgical options for those dealing with painful knee issues range from arthroscopic knee surgery to total knee joint replacement. Recent research has shown that some of the most popular arthroscopic surgeries, such as meniscectomy, provide little benefit to the patient. Knee replacement is extremely traumatic and carries risks of chronic pain and toxic wear particles entering the bloodstream. Surgical risks aside, all surgeries require months of painful rehab to regain strength and mobility. Most knee surgeries also accelerate the cascade of degeneration that leads to Osteoarthritis.
                            </p>
                        </div>
                    </div>

                    <div className="relative bg-gray-700 rounded-lg overflow-hidden shadow-xl">
                        <Image
                        src="/images/image.jpg"
                        alt="An image"
                        width={500}
                        height={300}
                        />
                    </div>
                </div>

                <div className="space-y-8">
                    
                    <div className="relative bg-gray-700 rounded-lg overflow-hidden shadow-xl">
                    <Image
                    src="/images/image.jpg"
                    alt="An image"
                    width={500}
                    height={300}
                    />
                    </div>

                    <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                        <p>
                            We have seen exciting results on difficult cases, such as complete muscle and ligament tears, and we have helped thousands of patients with arthritis avoid knee replacement and continue to do the things they love with little or no pain. Most Regenexx patients experience little downtime from their procedure and are encouraged to return to activity as they begin to feel better.
                        </p>
                        
                        <p>
                            Your Regenexx Physician will determine if you are, or are not, a Candidate for these procedures and recommend surgery if that's what's needed.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </section>
        <Testimonials/>
    <div className="bg-slate-900 gradient-bg min-h-screen mx-auto px-4 py-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-16">
            How Regenexx Procedures Work
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            
            <div className="procedure-card rounded-2xl p-8 relative">
                <div className="mb-8">
                    <div className="text-sm procedure-title mb-2" style={{color: "#00A990" }}>Regenexx</div>
                    <div className="element-symbol text-8xl font-bold mb-2 text-white" style={{color: "#00A990" }}>Sd</div>
                    <div className="text-sm text-gray-400" style={{color: "#00A990" }}>Bone Marrow Concentrate</div>
                </div>
                
                <div className="space-y-6 text-gray-300 leading-relaxed">
                    <p>
                        <span className="highlight-link">Regenexx-SD</span> is <span className="highlight-link">Bone Marrow Concentrate</span>. These repair cells from your own body live inside all of us in various tissues, poised to leap into action to repair damage as it occurs. As we age or have big injuries, we may not be able to recruit enough of these cells to the site to fully repair the area.
                    </p>
                    
                    <p>
                        The <span className="highlight-link">Regenexx-SD</span> Procedure helps overcome this problem by harvesting <span className="highlight-link">Bone Marrow</span> from an area of the back of the hip that contains a dense population of these important cells and then concentrating those cells before precisely injecting them into the injured area using advanced imaging guidance.
                    </p>
                    
                    <p>
                        The goal of the procedure is to reduce pain and improve function by promoting the body's own ability to heal naturally. This Patented <span className="highlight-link">Bone Marrow Concentrate</span> Protocol can be used for a wide range of orthopedic conditions. Your Regenexx doctor will evaluate your condition and your imaging to determine whether a <span className="highlight-link">bone marrow concentrate</span> or platelet-based treatment is the best option for your orthopedic condition.
                    </p>
                </div>
            </div>
            
            <div className="procedure-card rounded-2xl p-8 relative">
                <div className="mb-8">
                    <div className="text-sm procedure-title mb-2" style={{color: "#00ADBC" }}>Regenexx</div>
                    <div className="element-symbol text-8xl font-bold mb-2 text-white" style={{color: "#00ADBC" }}>Scp</div>
                    <div className="text-sm text-gray-400" style={{color: "#00ADBC" }}>Super Concentrated PRP</div>
                </div>
                
                <div className="space-y-6 text-gray-300 leading-relaxed">
                    <p>
                        <span className="highlight-link">Platelet Rich Plasma (PRP)</span> and <span className="highlight-link">Platelet Lysate</span> are Platelet procedures that contain healing <span className="highlight-link">growth factors</span> from your own blood that promote your body's natural ability to repair itself.
                    </p>
                    
                    <p>
                        The use of <span className="highlight-link">PRP</span> to treat joint, tendon, ligament, and muscle injuries is becoming well known, thanks to exposure from professional athletes. Platelet injections have a stimulating effect on the repair cells within the targeted area, making those cells work harder to perform their natural job of healing the body. Like all Regenexx procedures, Regenexx <span className="highlight-link">SCP</span> procedures are performed with high-level imaging guidance to ensure the most accurate placements of cells into the desired area.
                    </p>
                    
                    <p>
                        Our Advanced Platelet Procedures are more concentrated and purer than <span className="highlight-link">PRP</span> created by the automated machines used at most <span className="highlight-link">regenerative medicine</span> clinics, increasing the ability to stimulate the body's natural healing response. Platelet procedures are commonly used for soft tissue injuries, mild arthritis, spine conditions, and around nerves.
                    </p>
                </div>
            </div>
            
        </div>
    </div>

    {/* common knee */}
     <div className=" bg-gray-800 mx-auto px-4 py-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-16">
            Common Knee Conditions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            <div className="condition-card rounded-xl overflow-hidden">
                <div className="relative aspect-video">
                    <Image/>
                    <div className="video-overlay absolute inset-0 flex items-center justify-center cursor-pointer">
                       
                    </div>
                </div>
                
                <div className="p-6 bg-slate-900">
                    <h3 className="text-2xl font-bold text-white mb-4">Osteoarthritis</h3>
                    <p className="text-gray-300 leading-relaxed">
                        Knee replacement surgery comes with many serious risks and complications, but is often considered to be a straightforward and accepted approach to treatment for those suffering from significant arthritis or injury in this joint. Before you consider knee replacement, learn what Regenexx can do for you.
                    </p>
                </div>
            </div>
            
            <div className="condition-card rounded-xl overflow-hidden">
                <div className="relative aspect-video">
                    <Image/>
                    <div className="video-overlay absolute inset-0 flex items-center justify-center cursor-pointer">
                      
                    </div>
                </div>
                
                <div className=" bg-slate-900 p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Meniscus Tears</h3>
                    <p className="text-gray-300 leading-relaxed">
                        Meniscus tears are one of the most common injuries we treat. The last option anyone should consider or treat a meniscus injury is the surgical removal of all or some of this important structure. Click below to learn why Regenexx is likely a better choice than meniscus surgery.
                    </p>
                </div>
            </div>
            
            <div className="condition-card rounded-xl overflow-hidden">
                <div className="relative aspect-video">
                    <Image/>
                    <div className="video-overlay absolute inset-0 flex items-center justify-center cursor-pointer">
                       
                    </div>
                </div>
                
                <div className=" bg-slate-900 p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">ACL Tears</h3>
                    <p className="text-gray-300 leading-relaxed">
                        Knee ACL tears are a very common injury. The rush to surgery has long been due to the traditional thinking that an ACL will not heal. Our experience treating ACL tears with the Regenexx patented bone marrow concentrate treatment has shown that it may be a better option for those who have experienced a partial or complete non-retracted ACL tear.
                    </p>
                </div>
            </div>
            
        </div>
    </div>

    {/* why knee */}
    <div className=" bg-slate-900 mx-auto px-4 py-16">
    <div className=" bg-slate-900 container mx-auto px-4 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            <div className="flex-1 max-w-2xl">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-8">
                    Why Knee And Hip Replacement
                    <span className="block">May Not Be All It's Cracked Up To Be</span>
                </h1>
                
                <div className="space-y-6 text-gray-200 text-lg leading-relaxed mb-10">
                    <p>
                        Knee and hip replacement surgeries come with many risks and complications. Several years ago we queried the National Sampling System for Medicare and found that in the year 2008 alone, there were 17,500 serious complications related to knee replacement surgery resulting in 5,000 patient deaths.
                    </p>
                    
                    <p>
                        If joint replacement is something you are considering, please take the time to read this report. These 10 facts come from the Regenexx website. Our goal is to provide information that will help you make the right choice for you.
                    </p>
                </div>
                
                <button className="download-btn inline-flex items-center px-8 py-4 text-white font-semibold rounded-lg text-lg group">
                    DOWNLOAD EBOOK
                    <svg className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </button>
            </div>
            
            <div className="flex-1 flex justify-center lg:justify-end">
                <div className="tablet-mockup relative">
                    <div className="bg-gray-800 rounded-3xl p-4 shadow-2xl">
                        <div className="bg-white rounded-2xl overflow-hidden" >
                            <div className="h-full flex flex-col">
                                <div className="bg-white p-6 text-center">
                                    <div className="text-2xl font-bold text-teal-600 mb-2">Regenexx</div>
                                    <h2 className="text-lg font-bold text-gray-800 leading-tight">
                                        WHY KNEE AND HIP REPLACEMENT MAY NOT BE ALL IT'S CRACKED UP TO BE
                                    </h2>
                                    <p className="text-xs text-gray-600 mt-2">10 THINGS YOU SHOULD KNOW ABOUT JOINT REPLACEMENT SURGERY</p>
                                </div>
                                
                                <div className="flex-1 bg-gray-50 relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-10">
                                        <div className="absolute top-10 left-10 w-20 h-20 bg-teal-300 rounded-full"></div>
                                        <div className="absolute top-32 right-8 w-16 h-16 bg-teal-400 rounded-full"></div>
                                        <div className="absolute bottom-20 left-16 w-12 h-12 bg-teal-500 rounded-full"></div>
                                        <div className="absolute bottom-32 right-12 w-8 h-8 bg-teal-600 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-full"></div>
                </div>
            </div>
        </div>
    </div>
    </div>
        <Patientstories/>
        <Disclaimer/>
        <Footer/>

    </>
  )
}

export default page