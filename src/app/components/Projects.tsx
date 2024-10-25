"use client"
import Image from 'next/image';
import React, { useEffect } from 'react';
import CBPLApp from '../assets/CBPL_app.png';
import CBPLAdmin from '../assets/CBPL_admin.png';
import Readease from '../assets/ReadEase.png';
import Newsease from '../assets/Newsease.png';
import { gsap, Power3 } from 'gsap';

const Projects = () => {
    useEffect(() => {
        const projectElems = document.querySelectorAll('.project-container');
        const eventListeners: { elem: Element; handleMouseLeave: EventListener; handleMouseMove: EventListener }[] = [];

        projectElems.forEach((elem) => {
            let rotate = 0;
            let diffrot = 0;

            const handleMouseLeave: EventListener = () => {
                const img = elem.querySelector('img') as HTMLImageElement;
                if (img) {
                    gsap.to(img, {
                        opacity: 0,
                        ease: Power3.easeOut,
                        duration: 0.5,
                    });
                }
            };

            const handleMouseMove: EventListener = (event: Event) => {
                const dets = event as MouseEvent;
                const img = elem.querySelector('img') as HTMLImageElement;

                // Check if hovering over the empty area
                const target = dets.target as HTMLElement;
                if (img && !target.closest('.text-section') && !target.closest('.icon-container')) {
                    const diff = dets.clientY - elem.getBoundingClientRect().top;
                    diffrot = dets.clientX - rotate;
                    rotate = dets.clientX;

                    gsap.to(img, {
                        opacity: 1,
                        ease: Power3.easeOut,
                        top: diff,
                        left: dets.clientX,
                        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
                    });
                } else {
                    gsap.to(img, {
                        opacity: 0,
                        ease: Power3.easeOut,
                        duration: 0.5,
                    });
                }
            };

            elem.addEventListener('mouseleave', handleMouseLeave);
            elem.addEventListener('mousemove', handleMouseMove);

            eventListeners.push({ elem, handleMouseLeave, handleMouseMove });
        });

        return () => {
            eventListeners.forEach(({ elem, handleMouseLeave, handleMouseMove }) => {
                elem.removeEventListener('mouseleave', handleMouseLeave);
                elem.removeEventListener('mousemove', handleMouseMove);
            });
        };
    }, []);

    return (
        <div className="bg-black text-white    w-full">
            <div className="flex flex-col border-t  border-gray-600 border-b my-1">
                {/* First Project */}
                <div className="project-container flex items-center justify-between  ">
                    <div className="relative ">
                        <Image
                            src={CBPLApp}
                            width={500}
                            height={500}
                            alt=""
                            className="absolute rounded-2xl opacity-0 lg:w-[550px] lg:h-[400px] w-[200px] h-[150px] pointer-events-none z-[60] transform -translate-x-1/2 -translate-y-1/2"
                        />
                        <div className="text-section lg:px-20 px-5 lg:py-8 py-5">
                            <div className='flex justify-between'>
                                <h1 className="text-uppercase text-[20px] lg:text-7xl opacity-70">Chairbord App</h1>
                            <div className=" icon-container flex gap-5 lg:hidden  ">
                        <a
                            className="bg-white w-8 h-8 flex opacity-70 justify-center items-center rounded-full"
                            href="https://play.google.com/store/apps/details?id=com.chairbord&pcampaignid=web_share"
                            target="_blank"
                        >
                            <i className="ri-google-play-fill  text-xl text-black font-thin bg-transparent"></i>
                        </a>
                        <a
                            className="bg-white w-8 h-8 flex opacity-70 justify-center items-center rounded-full"
                            href="https://github.com/Vikas62502/Chairbord"
                            target="_blank"
                        >
                            <i className="ri-github-fill text-xl text-black font-thin bg-transparent"></i>
                        </a>
                    </div>
                            </div>
                            <p className="lg:text-sm text-xs opacity-50 lg:w-[600px] mt-2 text-justify">I designed Figma prototypes for the CBPL agent panel app with a user-centered approach, enhancing the user journey. Developed the front end using TypeScript, React Native, and Tailwind CSS, boosting engagement. Utilized Photoshop and Flaticon for design assets. Created a React Native app for 1,000+ agents in North India, streamlining FASTag generation and toll transactions.</p>
                            <div className='mt-4 flex gap-5 flex-wrap'>
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-6 h-6'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-6 h-6'
                            />
                            <Image
                            src="https://cdn.worldvectorlogo.com/logos/react-native-1.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-6 h-6'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-6 h-6'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-6 h-6'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-6 h-6'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-6 h-6'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-6 h-6'
                            />
                            
                            </div>
                           
                        </div>
                    </div>
                    <div className=" icon-container lg:flex gap-5 hidden  lg:px-20 px-5 lg:py-8 py-6">
                        <a
                            className="bg-white w-16 h-16 flex opacity-70 justify-center items-center rounded-full"
                            href="https://play.google.com/store/apps/details?id=com.chairbord&pcampaignid=web_share"
                            target="_blank"
                        >
                            <i className="ri-google-play-fill lg:text-4xl text-4xl text-black font-thin bg-transparent"></i>
                        </a>
                        <a
                            className="bg-white w-16 h-16 flex opacity-70 justify-center items-center rounded-full"
                            href="https://github.com/Vikas62502/Chairbord"
                            target="_blank"
                        >
                            <i className="ri-github-fill lg:text-4xl text-4xl text-black font-thin bg-transparent"></i>
                        </a>
                    </div>
                </div>
                {/* Second Project */}
                <div className="project-container flex items-center justify-between border-t border-gray-600">
                    <div className="relative ">
                        <Image
                            src={Newsease}
                            width={500}
                            height={500}
                            alt=""
                            className="absolute rounded-2xl opacity-0 lg:w-[550px] lg:h-[400px] w-[200px] h-[150px] pointer-events-none z-[60] transform -translate-x-1/2 -translate-y-1/2"
                        />
                        <div className="text-section lg:px-20 px-5 lg:py-8 py-5">
                            <div className='flex justify-between'>
                                <h1 className="text-uppercase text-[20px] lg:text-7xl opacity-70">News Ease</h1>
                            <div className=" icon-container flex gap-5 lg:hidden  ">
                        
                        <a
                            className="bg-white w-8 h-8 flex opacity-70 justify-center items-center rounded-full"
                            href="https://github.com/Mohitmk3009/Newsease"
                            target="_blank"
                        >
                            <i className="ri-github-fill text-xl text-black font-thin bg-transparent"></i>
                        </a>
                    </div>
                            </div>
                            <p className="lg:text-sm text-xs opacity-50 lg:w-[600px] mt-2 text-justify">I created a news website using NewsAPI.org to deliver real-time global news across categories like sports, technology, and entertainment. The site features a sleek, intuitive design for seamless browsing, keeping users engaged and informed with timely updates from reliable sources.</p>
                            <div className='mt-4 flex gap-5 flex-wrap'>
                                
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-6 h-6'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-6 h-6'
                            /><Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-6 h-6'
                            /><Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-6 h-6'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-6 h-6'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-6 h-6'
                            />
                         
                            
                            </div>
                           
                        </div>
                    </div>
                    <div className=" icon-container lg:flex gap-5 hidden  lg:px-20 px-5 lg:py-8 py-6">
                        
                        <a
                            className="bg-white w-16 h-16 flex opacity-70 justify-center items-center rounded-full"
                            href="https://github.com/Mohitmk3009/Newsease"
                            target="_blank"
                        >
                            <i className="ri-github-fill lg:text-4xl text-4xl text-black font-thin bg-transparent"></i>
                        </a>
                    </div>
                </div>
                

                {/* Third Project */}
                <div className="project-container flex items-center justify-between border-t border-gray-600">
                    <div className="relative ">
                        <Image
                            src={CBPLAdmin}
                            width={500}
                            height={500}
                            alt=""
                            className="absolute rounded-2xl opacity-0 lg:w-[550px] lg:h-[400px] w-[200px] h-[150px] pointer-events-none z-[60] transform -translate-x-1/2 -translate-y-1/2"
                        />
                        <div className="text-section lg:px-20 px-5 lg:py-8 py-5">
                            <div className='flex justify-between'>
                                <h1 className="text-uppercase text-[20px] lg:text-7xl opacity-70">Chairbord Admin</h1>
                            <div className=" icon-container flex gap-5 lg:hidden  ">
                        <a
                            className="bg-white w-8 h-8 flex opacity-70 justify-center items-center rounded-full"
                            href="https://admin.chairbord.in/"
                            target="_blank"
                        >
                            <i className="ri-links-fill  text-xl text-black font-thin bg-transparent"></i>
                        </a>
                        <a
                            className="bg-white w-8 h-8 flex opacity-70 justify-center items-center rounded-full"
                            href="https://github.com/Vikas62502/cbpl-admin-web"
                            target="_blank"
                        >
                            <i className="ri-github-fill text-xl text-black font-thin bg-transparent"></i>
                        </a>
                    </div>
                            </div>
                            <p className="lg:text-sm text-xs opacity-50 lg:w-[600px] mt-2 text-justify">I designed Figma interfaces for the CBPL admin panel website with a focus on user-friendly interactions. Developed the front end using TypeScript, Next.js, and Tailwind CSS, reducing load time by 2 seconds. Utilized Photoshop for design assets and Flaticon for icons. The panel allows administrators to manage users, agents, inventory, and tags, with added analysis features for enhanced usability and functionality.</p>
                            <div className='mt-4 flex gap-5 flex-wrap'>
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-6 h-6'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-6 h-6'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-6 h-6'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-6 h-6'
                            /><Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-6 h-6'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-6 h-6'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-6 h-6'
                            />
                             <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-6 h-6'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-6 h-6'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-6 h-6'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-6 h-6'
                            />
                            
                            </div>
                           
                        </div>
                    </div>
                    <div className=" icon-container lg:flex gap-5 hidden  lg:px-20 px-5 lg:py-8 py-6">
                        <a
                            className="bg-white w-16 h-16 flex opacity-70 justify-center items-center rounded-full"
                            href="https://admin.chairbord.in/"
                            target="_blank"
                        >
                            <i className="ri-links-fill lg:text-4xl text-4xl text-black font-thin bg-transparent"></i>
                        </a>
                        <a
                            className="bg-white w-16 h-16 flex opacity-70 justify-center items-center rounded-full"
                            href="https://github.com/Vikas62502/cbpl-admin-web"
                            target="_blank"
                        >
                            <i className="ri-github-fill lg:text-4xl text-4xl text-black font-thin bg-transparent"></i>
                        </a>
                    </div>
                </div>
                


                {/* Fourth Project */}
                <div className="project-container flex items-center justify-between border-t border-gray-600">
                    <div className="relative ">
                        <Image
                            src={Readease}
                            width={500}
                            height={500}
                            alt=""
                            className="absolute rounded-2xl opacity-0 lg:w-[550px] lg:h-[400px] w-[200px] h-[150px] pointer-events-none z-[60] transform -translate-x-1/2 -translate-y-1/2"
                        />
                        <div className="text-section lg:px-20 px-5 lg:py-8 py-5">
                            <div className='flex justify-between'>
                                <h1 className="text-uppercase text-[20px] lg:text-7xl opacity-70">Read Ease</h1>
                            <div className=" icon-container flex gap-5 lg:hidden  ">
                        
                        <a
                            className="bg-white w-8 h-8 flex opacity-70 justify-center items-center rounded-full"
                            href="https://github.com/Mohitmk3009/ReadEase"
                            target="_blank"
                        >
                            <i className="ri-github-fill text-xl text-black font-thin bg-transparent"></i>
                        </a>
                    </div>
                            </div>
                            <p className="lg:text-sm text-xs opacity-50 lg:w-[600px] mt-2 text-justify"> I designed user-friendly interfaces in Figma for an online bookstore, emphasizing seamless book browsing and interaction. Developed a cloud-hosted platform using PHP and SQL to manage data securely and support smooth transactions. The platform enables users to buy, read, donate, and listen to audiobooks, and create blogs, offering a comprehensive and engaging experience.</p>
                            <div className='mt-4 flex gap-5 flex-wrap'>
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-6 h-6'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-6 h-6'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-6 h-6'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-6 h-6'
                            /><Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-6 h-6'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-6 h-6'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-6 h-6'
                            />
                            
                            
                            </div>
                           
                        </div>
                    </div>
                    <div className=" icon-container lg:flex gap-5 hidden  lg:px-20 px-5 lg:py-8 py-6">
                        
                        <a
                            className="bg-white w-16 h-16 flex opacity-70 justify-center items-center rounded-full"
                            href="https://github.com/Mohitmk3009/ReadEase"
                            target="_blank"
                        >
                            <i className="ri-github-fill lg:text-4xl text-4xl text-black font-thin bg-transparent"></i>
                        </a>
                    </div>
                </div>
                

            </div>
        </div>
    );
};

export default Projects;
