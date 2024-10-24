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
                            <p className="lg:text-sm text-xs opacity-50 lg:w-[600px] mt-2 text-justify">I designed FIGMA prototypes for the CBPL agent panel app, focusing on user-centered design and enhancing the user journey. I developed the front end using TypeScript, React Native, and Tailwind CSS, which resulted in improved user engagement metrics. Additionally, I utilized Photoshop for image editing and design assets, and Flaticon for icons and illustrations. I developed a React Native application used by over 1,000 agents in North India for FASTag processing, facilitating the generation of FASTag for customers and streamlining toll transactions for vehicles.</p>
                            <div className='mt-4 flex gap-5 flex-wrap'>
                            <Image
                            src="https://cdn.worldvectorlogo.com/logos/react-native-1.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-8 h-8'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-8 h-8'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-8 h-8'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-8 h-8'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-8 h-8'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-8 h-8'
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
                            <p className="lg:text-sm text-xs opacity-50 lg:w-[600px] mt-2 text-justify">I created a comprehensive news website utilizing the NewsAPI.org to provide the latest news from around the globe. The site features a variety of categories including sports, technology, entertainment, and more, ensuring users have access to the most current events in their areas of interest. With a sleek and intuitive interface, the platform offers seamless browsing and quick access to top stories, keeping users informed and engaged with real-time updates from trusted sources.</p>
                            <div className='mt-4 flex gap-5 flex-wrap'>
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-8 h-8'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-8 h-8'
                            /><Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-8 h-8'
                            /><Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-8 h-8'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-8 h-8'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-8 h-8'
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
                            <p className="lg:text-sm text-xs opacity-50 lg:w-[600px] mt-2 text-justify">I created FIGMA designs for the CBPL admin panel website, focusing on user-friendly interfaces and interaction design principles. I developed the front end using TypeScript, Next.js, and Tailwind CSS, optimizing load time by 2 seconds. Additionally, I utilized Photoshop for image editing and design assets, and Flaticon for icons and illustrations. The admin panel allows administrators to create users and agents, manage inventory and tags, and perform analysis, enhancing overall functionality and usability.</p>
                            <div className='mt-4 flex gap-5 flex-wrap'>
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-8 h-8'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-8 h-8'
                            /><Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-8 h-8'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-8 h-8'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-8 h-8'
                            />
                             <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-8 h-8'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-8 h-8'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-8 h-8'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-8 h-8'
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
                            <p className="lg:text-sm text-xs opacity-50 lg:w-[600px] mt-2 text-justify"> I designed intuitive user interfaces with FIGMA, focusing on seamless user experiences for browsing and interacting with book content. I developed a cloud-hosted web-based platform for an online bookstore using PHP and SQL, enabling secure data management and smooth transaction processes. Additionally, I built the backend functionality using PHP and SQL to ensure secure data management and smooth transaction processes. The platform allows users to buy, read, donate, and listen to audiobooks, as well as create blogs, offering a comprehensive and engaging experience.</p>
                            <div className='mt-4 flex gap-5 flex-wrap'>
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-8 h-8'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-8 h-8'
                            /><Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-8 h-8'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-8 h-8'
                            />
                            <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
                            width={10}
                            height={10}
                            alt=''
                            className='lg:w-10  lg:h-10 w-8 h-8'
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
