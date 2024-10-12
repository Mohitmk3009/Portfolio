"use client"
import React, { useEffect } from 'react';
// import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';
import Image from 'next/image';
// Import LocomotiveScroll styles (uncomment when using in your project)
// import 'locomotive-scroll/src/locomotive-scroll.scss';

const HeroSection = () => {
    useEffect(() => {
        // Initialize LocomotiveScroll after the component is mounted
        // const scroll = new LocomotiveScroll({
        //   el: document.querySelector("#main"),
        //   smooth: true,
        // });

        // Call the animation function
        firstPageAnim();

        // return () => {
        //   // Destroy the scroll instance on unmount to prevent memory leaks
        //   if (scroll) scroll.destroy();
        // };
    }, []);

    // Animation using gsap
    const firstPageAnim = () => {
        const tl = gsap.timeline();

        tl.from("#nav", {
            y: "-10",
            opacity: 0,
            duration: 1.5,
            ease: "expo.inOut", // Use string format for ease
        })
            .to(".boundingelem", {
                y: 0,
                ease: "expo.inOut",
                duration: 2,
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
        <div id="hero" className="relative flex flex-col items-center justify-center  " >
            {/* <div className="absolute inset-0  flex items-center justify-center">
                <div className="w-[600px] h-[600px] z-20 bg-slate-500 rounded-full opacity-100"></div> 
                
            </div> */}
            <Image
                src="https://github.com/Mohitmk3009.png" // Update with your image path
                alt="Mohit Kumar"
                width={600}
                height={600}
                layout="intrinsic" 
                className="absolute boundingelem z-30 w-[600px] h-[600px] mt-[-120px] rounded-full items-center justify-center object-cover border-4 opacity-30 border-white"
            />
            
            <div id="heading" className='z-0 relative'>
                <div className="bounding">
                    <h1 className="boundingelem">Mohit</h1>
                </div>
                <div className="blocktext">
                    <div className="bounding">
                        <h1 className="boundingelem" id="secondh1">
                            Kumar
                        </h1>
                    </div>
                    <div className="bounding">
                        <h5 className="boundingelem">UI/UX Designer and Front-end Developer</h5>
                    </div>
                </div>
            </div>
            
            <div id="chhotiheadings" >
                <div className="bounding">
                    <h5 className="boundingelem">&quot;Crafting seamless digital experiences through innovative front-end development and thoughtful UI/UX design</h5>
                </div>
                <div className="bounding">
                    <h5 className="boundingelem">—Hi, I’m Mohit Kumar.&quot;</h5>
                </div>
            </div>
            {/* <div id="herofooter">
                <a href="#">
                    previously worked at yml <i className="ri-arrow-right-up-line"></i>
                </a>
                <a href="#">
                    protopie ambassador <i className="ri-arrow-right-up-line"></i>
                </a>
                <div id="iconset">
                    <div className="circle">
                        <i className="ri-arrow-down-line"></i>
                    </div>
                    <div className="circle">
                        <i className="ri-arrow-down-line"></i>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default HeroSection;



//     return (
//         <div id="hero" className="relative flex flex-col items-center justify-center h-screen text-white bg-gray-800">
//             <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-72 h-72 bg-blue-500 rounded-full opacity-30"></div> {/* Circle background */}
//             </div>
//             <div className="relative z-10 text-center">
//                 <h1 className="boundingelem text-5xl font-bold">Mohit</h1>
//                 <h1 className="boundingelem text-5xl font-bold">Kumar</h1>
//                 <h5 className="boundingelem text-xl">UI/UX Designer and Front-end Developer</h5>
//             </div>
//             <div id="chhotiheadings" className="relative z-10 text-center mt-4">
//                 <h5 className="boundingelem text-lg">"Crafting seamless digital experiences through innovative front-end development and thoughtful UI/UX design"</h5>
//                 <h5 className="boundingelem text-lg">—Hi, I’m Mohit Kumar.</h5>
//             </div>
//             <div id="herofooter" className="relative z-10 text-center mt-8">
//                 <a href="#" className="block text-lg hover:underline">Previously worked at YML <i className="ri-arrow-right-up-line"></i></a>
//                 <a href="#" className="block text-lg hover:underline">Protopie Ambassador <i className="ri-arrow-right-up-line"></i></a>
//                 <div id="iconset" className="flex justify-center mt-4">
//                     <div className="circle w-10 h-10 flex items-center justify-center rounded-full bg-gray-600 mr-2">
//                         <i className="ri-arrow-down-line"></i>
//                     </div>
//                     <div className="circle w-10 h-10 flex items-center justify-center rounded-full bg-gray-600">
//                         <i className="ri-arrow-down-line"></i>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeroSection;
