import Image from 'next/image'
import React from 'react'

const AboutMe = () => {
    return (
        <div id="about" className="flex lg:flex-row flex-col items-center lg:gap-12 gap-5 text-white w-full lg:px-20 lg:pt-10 lg:pb-28 pb-10 px-5 justify-center  bg-black">
            <Image src="https://github.com/Mohitmk3009.png"
                alt="Mohit Kumar"
                width={600}
                height={600}
                className="md:w-[300px] md:h-[300px] w-[200px] h-[200px] rounded-full object-cover border-2 border-white" />
            <div id="textabout" className="lg:w-[50%] w-[95%] text-center lg:text-left">
                <h5 className="uppercase lg:text-3xl text-2xl font-extrabold opacity-60 mb-2">(About me)</h5>
                <p className="lg:leading-8 leading-6 mb-8 lg:text-xl text-justify">
                I&#39;m Mohit Kumar, a UI/UX Designer and Front-End Developer with a passion for crafting seamless digital experiences. I love bringing ideas to life, making sure every pixel serves a purpose while creating designs that are both functional and visually captivating. When I&#39;m not immersed in design or code, you&#39;ll find me diving into the world of video games, exploring captivating stories in movies and series, or getting lost in a good book. My goal is to blend creativity and technology to build experiences that people love and remember.
                </p>
                <a href="mailto:mohitkumar300902@gmail.com" className="px-6 py-3 border border-white rounded-full text-white text-xs no-underline hover:bg-white hover:text-black">Let's talk</a>
            </div>
        </div>

    )
}

export default AboutMe
