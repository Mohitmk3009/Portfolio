"use client"
import Image from 'next/image';
import React, { useEffect } from 'react';
import CBPLApp from '../assets/CBPL_app.png';
import CBPLAdmin from '../assets/CBPL_admin.png';
import Readease from '../assets/ReadEase.png';
import { gsap, Power3 } from 'gsap'; // Ensure you have gsap installed

const Projects = () => {
    useEffect(() => {
        const elems = document.querySelectorAll('.elem');
        const eventListeners: { elem: Element; handleMouseLeave: EventListener; handleMouseMove: EventListener }[] = [];

        elems.forEach((elem) => {
            let rotate = 0;
            let diffrot = 0;

            const handleMouseLeave: EventListener = () => {
                const img = elem.querySelector('img') as HTMLImageElement; // Typecast to HTMLImageElement
                if (img) {
                    gsap.to(img, {
                        opacity: 0,
                        ease: Power3.easeOut,
                        duration: 0.5,
                    });
                }
            };

            const handleMouseMove: EventListener = (event: Event) => {
                const dets = event as MouseEvent; // Cast to MouseEvent
                const img = elem.querySelector('img') as HTMLImageElement; // Typecast to HTMLImageElement
                if (img) {
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
                }
            };

            // Add event listeners
            elem.addEventListener('mouseleave', handleMouseLeave);
            elem.addEventListener('mousemove', handleMouseMove);

            // Store event listeners in the array for cleanup
            eventListeners.push({ elem, handleMouseLeave, handleMouseMove });
        });

        // Cleanup event listeners on component unmount
        return () => {
            eventListeners.forEach(({ elem, handleMouseLeave, handleMouseMove }) => {
                elem.removeEventListener('mouseleave', handleMouseLeave);
                elem.removeEventListener('mousemove', handleMouseMove);
            });
        };
    }, []);


    return (
        <div className="bg-black text-white pt-[30px] mt-[-20px] pb-10 lg:mb-28 mb-36 w-full ">
            <div className="flex flex-col border-t border-gray-600 border-b">
                <a className="relative elem flex items-center cursor-pointer justify-between  w-full lg:px-20 px-5 lg:py-10 py-6 border-t border-gray-600" href="https://play.google.com/store/apps/details?id=com.chairbord&pcampaignid=web_share" target='_blank'>
                    <Image src={CBPLApp} width={500} height={500} alt="" className="absolute rounded-2xl opacity-0 lg:w-[550px] lg:h-[400px] w-[200px] h-[150px] pointer-events-none z-[60] transform -translate-x-1/2 -translate-y-1/2" />
                    <h1 className="text-uppercase text-[20px] lg:text-7xl opacity-70">Chairbord-APP</h1>
                    <h5>2024</h5>
                </a>
                <a className="relative elem flex items-center cursor-pointer justify-between w-full lg:px-20 px-5 lg:py-10 py-6 border-t border-gray-600" href="https://admin.chairbord.in/" target='_blank'>
                    <Image src={CBPLAdmin} width={500} height={500} alt="" className="absolute rounded-2xl opacity-0 pointer-events-none  lg:w-[550px] lg:h-[400px] w-[200px] h-[150px] z-[60] transform -translate-x-1/2 -translate-y-1/2" />
                    <h1 className="text-uppercase text-[20px] lg:text-7xl opacity-70">Chairbord-Admin</h1>
                    <h5>2024</h5>
                </a><a className="relative elem flex items-center cursor-pointer justify-between w-full lg:px-20 px-5 lg:py-10 py-6 border-t border-gray-600" href="https://github.com/Mohitmk3009/ReadEase" target='_blank'>
                    <Image src={Readease} width={500} height={500} alt="" className="absolute rounded-2xl opacity-0 pointer-events-none lg:w-[550px] lg:h-[400px] w-[200px] h-[150px] z-[60] transform -translate-x-1/2 -translate-y-1/2" />
                    <h1 className="text-uppercase text-[20px] lg:text-7xl opacity-70">ReadEase: Online book store</h1>
                    <h5>2023</h5>
                </a>
            </div>
        </div>

    );
};

export default Projects;
