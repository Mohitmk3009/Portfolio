import React from 'react'
import ipu from '../assets/ipu.png';
import vertech from '../assets/vertech.png';
import chairbord from '../assets/chairbord.png';
import Image from 'next/image';

const Timeline = () => {
    return (
        <div>
            <section className="work-section ">

                <div className="project project0">
                    <div className="project-img">
                        <div className="project-img-wrapper">
                            <a href="https://www.harigurus.com/" target="_blank">
                                <Image src={chairbord} width={100} height={100} alt="project image" draggable="false" className=' img bg-[#C0C0C0] px-28 py-5 rounded-3xl lg:mb-0 mb-[-20px]  ' />
                            </a>
                            {/* <a href="https://www.harigurus.com/" target="_blank">
                                <span className="visit-site">Harigurus
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        className="feather feather-external-link bg-transparent">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </span>
                            </a> */}
                        </div>
                    </div>
                    <div className="project-details mx-6">
                        <h3>2024</h3>
                        <span className='font-medium' >UI/UX designer & Front-End Devloper at Chairbord Pvt Ltd</span>
                        <p className='mt-2 '>
                        As a UI/UX and Frontend Developer at Charbord Pvt Limited, I designed and developed an application to streamline FASTag processing for 1,000+ agents and built an admin panel for managing users, agents, inventory, and tags, with analytics for enhanced usability and functionality.
                        </p>


                    </div>
                    <a className="circle-dot" href="https://webdevenglish.com/" target="_blank"></a>
                    <div className="circle-extension"></div>
                </div>
                
                <div className="project project1">
                    <div className="project-details mx-6">
                        <h3>2023</h3>
                        <span className='font-medium'>Front-End Devloper at Chairbord Pvt Ltd</span>
                        <p className='mt-2'>
                        As a Frontend Developer at Vertech Digicom, I created responsive, user-friendly interfaces for sales and marketing platforms, enhancing user engagement and supporting effective customer acquisition strategies.
                        </p>


                    </div>
                    <div className="project-img">
                        <div className="project-img-wrapper ">
                            <a href="https://eazygrad.com/" target="_blank" >
                            <Image src={vertech} width={200} height={100} alt="project image" draggable="false" className='img bg-[#C0C0C0] px-28 lg:px-24 py-7 lg:py-3 rounded-3xl lg:mb-0 mb-[-20px]' />

                            </a>
                            {/* <a href="https://eazygrad.com/" target="_blank">
                                <span className="visit-site">EazyGrad
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        className="feather feather-external-link">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </span>
                            </a> */}
                        </div>
                    </div>
                    <a className="circle-dot" href="https://eazygrad.com/" target="_blank"> </a>
                    <div className="circle-extension"></div>
                </div>
                <div className="project project2 ">
                    <div className="project-img">
                        <div className="project-img-wrapper">
                            <a href="https://webdevenglish.com/" target="_blank" className=''>
                            <Image src={ipu} width={200} height={100} alt="project image" draggable="false" className='bg-[#C0C0C0] px-12 py-4 rounded-3xl lg:mb-0 mb-[-20px]' />

                            </a>
                            {/* <a href="https://webdevenglish.com/" target="_blank">
                                <span className="visit-site">Web Dev English
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        className="feather feather-external-link">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </span>
                            </a> */}
                        </div>
                    </div>
                    <div className="project-details mx-6">
                        <h3>2021</h3>
                        <span className='font-medium'>Admission to MAIT (IPU) Delhi</span>
                        <p className='mt-2'>
                        I was admitted to the Information Technology branch at MAIT, (GGSIPU) to deepen my technical expertise and pursue a career in technology.
                        </p>


                    </div>
                    <a className="circle-dot" href="https://webdevenglish.com/" target="_blank"></a>
                    <div className="circle-extension"></div>
                </div>
                
                



                <div className="vertical-line"></div>
            </section>
        </div>
    )
}

export default Timeline