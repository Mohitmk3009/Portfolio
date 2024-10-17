"use client"
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

const HeroSection = () => {
    useEffect(() => {
        firstPageAnim();
    }, []);

    const firstPageAnim = () => {
        const tl = gsap.timeline();
        tl.from("#nav", {
            y: "-10",
            opacity: 0,
            duration: 1.5,
            ease: "expo.inOut",
        })
        .to(".boundingelem", {
            y: 0,
            ease: "expo.inOut",
            duration: 1,
            delay: -1,
            stagger: 0.2,
        })
        .from("#herofooter", {
            y: -10,
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: "expo.inOut",
        });
    };

    return (
        <div id="hero" className="relative flex flex-col items-center justify-center w-full h-full bg-black lg:px-20 px-5 mt-20 mb-10 overflow-hidden">
            
            <Image
                src="https://github.com/Mohitmk3009.png"
                alt="Mohit Kumar"
                width={600}
                height={600}
                layout="intrinsic" 
                className="absolute z-30 md:w-[600px] md:h-[600px] w-[250px] h-[250px] md:mt-[-180px] mt-[-250px] rounded-full object-cover border-4 border-white opacity-20"
            />
        
            <div id="heading" className="relative z-10 lg:mt-[-10px] justify-center lg:pt-4 mt-[0px]">
                <div className="bounding w-fit overflow-hidden">
                    <h1 className="boundingelem text-white opacity-80 leading-none lg:text-[250px] text-[60px]  font-extrabold uppercase">
                        Mohit
                    </h1>
                </div>
                <div className="blocktext flex flex-col items-end w-fit">
                    <div className="bounding w-fit overflow-hidden">
                        <h1 id="secondh1" className="boundingelem text-white opacity-80 leading-none lg:text-[250px] text-[60px]  font-extrabold uppercase ml-[90px] lg:ml-[400px]">
                            Kumar
                        </h1>
                    </div>
                    <div className="bounding w-full  overflow-hidden  mt-20 lg:mt-0">
                        <h5 className="boundingelem text-white uppercase md:text-lg text-sm font-medium lg:text-right text-center">
                            UI/UX Designer and Front-end Developer
                        </h5>
                    </div>
                </div>
            </div>
        <div className='lg:flex lg:justify-between w-full'>
        {/* Contact and Resume Section */}
            <div id="contact-resume" className="relative z-10 flex   lg:ml-[-280px] lg:gap-10 gap-5 justify-center items-center w-full px-5 mt-5 lg:mt-20  ">
                {/* Get in Touch Button */}
                <a
                    href="mailto:mohitkumar300902@gmail.com" // Replace with your email
                    className="bg-white text-black py-2 lg:px-14 px-8 rounded-full lg:text-lg font-medium hover:bg-gray-300 transition"
                >
                    Let&apos;s Talk
                </a>
                {/* Or use phone contact */}
                {/* <a
                    href="tel:+1234567890" // Replace with your phone number
                    className="bg-white text-black py-2 px-6 rounded-full text-lg font-medium hover:bg-gray-300 transition"
                >
                    Call Me
                </a> */}
                
                {/* Download CV Button */}
                <a
                   href="/Mohit_Kumar_CV.pdf" // Replace with your CV file path
                    download="Mohit_Kumar_CV.pdf"
                    className="bg-white text-black py-2 px-4 lg:px-10 rounded-full lg:text-lg font-medium hover:bg-gray-300 transition"
                >
                    Download CV
                </a>
            </div>
            <div id="chhotiheadings" className="lg:flex hidden flex-col items-end lg:justify-end justify-center lg:text-right text-justify w-full   mt-[30px] lg:mt-[60px]">
                <div className="bounding w-fit overflow-hidden">
                    <h5 className="boundingelem text-white uppercase lg:text-lg text-[10px] mt-[0.5vw]">
                        &quot;Crafting seamless digital experiences through <br/> innovative front-end development and thoughtful UI/UX design&quot;
                    </h5>
                </div>
                <div className="bounding w-fit overflow-hidden">
                    <h5 className="boundingelem text-white uppercase lg:text-lg text-[10px] mt-[0.5vw]">
                        - Hi, I’m Mohit Kumar.
                    </h5>
                </div>
            </div>
            <div id="chhotiheadings" className="flex flex-col lg:hidden items-end lg:justify-end justify-center lg:text-right text-justify w-full  mt-[30px] lg:mt-[60px]">
                <div className="bounding w-fit overflow-hidden">
                    <h5 className="boundingelem text-white uppercase lg:text-lg text-xs ">
                        &quot;Crafting seamless digital experiences through innovative front-end development and thoughtful UI/UX design&quot;
                    </h5>
                </div>
                <div className="bounding w-fit overflow-hidden">
                    <h5 className="boundingelem text-white uppercase lg:text-lg text-xs ">
                        - Hi, I’m Mohit Kumar.
                    </h5>
                </div>
            </div>
</div>
        </div>
    );
};

export default HeroSection;
