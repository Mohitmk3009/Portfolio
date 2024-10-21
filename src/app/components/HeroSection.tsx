"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

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
        <div
            id="hero"
            className="relative flex flex-col items-center justify-center w-full h-full bg-black lg:px-20 px-5 lg:mt-20 mt-20 lg:mb-10 overflow-hidden"
        >
            <Image
                src="https://github.com/Mohitmk3009.png"
                alt="Mohit Kumar"
                width={600}
                height={600}
                layout="intrinsic"
                className="absolute z-30 md:w-[600px] md:h-[600px] w-[250px] h-[250px] md:mt-[-180px] mt-[-250px] rounded-full object-cover border-4 border-white opacity-20"
            />

            <div
                id="heading"
                className="relative z-10 lg:mt-[-10px] justify-center lg:pt-4 mt-[-40px]"
            >
                <div className="bounding w-fit overflow-hidden">
                    <h1 className="boundingelem text-white opacity-80 leading-none lg:text-[250px] text-[60px]  font-extrabold uppercase">
                        Mohit
                    </h1>
                </div>
                <div className="blocktext flex flex-col items-start w-fit">
                    <div className="bounding w-fit overflow-hidden">
                        <h1
                            id="secondh1"
                            className="boundingelem text-white opacity-80 leading-none lg:text-[250px] text-[60px]  font-extrabold uppercase ml-[90px] lg:ml-[400px]"
                        >
                            Kumar
                        </h1>
                    </div>
                    <div className="bounding w-full overflow-hidden mt-0 lg:mt-0 lg:ml-[416px] ml-[95px] text-center opacity-80">
                        {/* Fixed-width container to prevent layout shift */}
                        <h5 className="boundingelem text-white  lg:text-2xl text-sm font-extrabold lg:text-center  flex">
                            <span className="mr-2">I AM</span> {/* Static text "I am" */}
                            <span
                                className="inline-block uppercase font-extrabold"
                                style={{
                                    display: "inline-block",
                                    overflow: "hidden",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                <TypeAnimation
                                    sequence={[
                                        "UI/UX DESIGNER", // First role
                                        2000,
                                        "FRONTEND DEVELOPER", // Second role
                                        2000,
                                        "APP DEVELOPER", // Third role
                                        2000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                    style={{ display: "inline-block" }}
                                />
                            </span>
                        </h5>
                    </div>
                </div>
            </div>

            <div className="lg:flex lg:justify-between w-full">
                <div
                    id="chhotiheadings"
                    className="flex flex-col lg:hidden items-end lg:justify-end justify-center lg:text-right text-justify w-full  mt-16 lg:mt-[60px]"
                >
                    <div className="bounding w-fit overflow-hidden">
                        <h5 className="boundingelem text-white uppercase lg:text-lg text-[11px] mt-[0.5vw]">
                            &quot;Crafting seamless digital experiences through innovative
                            front-end development and thoughtful UI/UX design&quot;
                        </h5>
                    </div>
                    <div className="bounding w-fit overflow-hidden">
                        <h5 className="boundingelem text-white uppercase lg:text-lg text-[12px] mt-[0.5vw]">
                            - Hi, I’m Mohit Kumar.
                        </h5>
                    </div>
                </div>
                <div
                    id="contact-resume"
                    className="relative z-10 flex lg:ml-[-280px] lg:gap-10 gap-5 justify-center items-center w-full px-5 mt-6 lg:mt-20"
                >
                    <Link
                        href="#contactme"
                        className="bg-white text-black py-2 lg:px-12 px-6 rounded-full lg:text-lg font-medium hover:bg-gray-300 transition"
                    >
                        Contact Me
                    </Link>

                    <a
                        href="/Mohit_Kumar_CV.pdf"
                        download="Mohit_Kumar_CV.pdf"
                        className="bg-white text-black py-2 px-4 lg:px-10 rounded-full lg:text-lg font-medium hover:bg-gray-300 transition"
                    >
                        Download CV
                    </a>
                </div>

                <div
                    id="chhotiheadings"
                    className="lg:flex hidden flex-col items-end lg:justify-end justify-center lg:text-right text-justify w-full mt-[30px] lg:mt-[60px]"
                >
                    <div className="bounding w-fit overflow-hidden">
                        <h5 className="boundingelem text-white uppercase lg:text-lg text-[10px] mt-[0.5vw]">
                            &quot;Crafting seamless digital experiences through <br /> innovative front-end development and thoughtful UI/UX design&quot;
                        </h5>
                    </div>
                    <div className="bounding w-fit overflow-hidden">
                        <h5 className="boundingelem text-white uppercase lg:text-lg text-[10px] mt-[0.5vw]">
                            - Hi, I’m Mohit Kumar.
                        </h5>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default HeroSection;
