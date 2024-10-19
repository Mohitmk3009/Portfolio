import React from 'react'
import 'remixicon/fonts/remixicon.css';


const Social = () => {
    return (
        <div id="page14" className="relative h-full w-full bg-black">
            <a className="group page14-inner flex relative items-center justify-between hover:text-black lg:px-20 px-5 lg:py-10 py-6 w-full text-white border-t border-b border-white/30 border-b-white/20 font-[100]" href="https://github.com/Mohitmk3009" target='_blank'>
                <h1 className="lg:text-6xl text-2xl relative z-[9999] font-semibold bg-transparent ">Github</h1>
                <i className="ri-github-fill lg:text-7xl text-4xl font-thin relative z-[9999] bg-transparent"></i>
                <div className="center14 h-0 w-full bg-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease group-hover:h-full"></div>
            </a>

            <a className="group page14-inner flex relative items-center justify-between hover:text-black lg:px-20 px-5 lg:py-10 py-6 w-full text-white border-t border-b border-white/30 border-b-white/20 font-[100]" href="https://www.linkedin.com/in/mohit-kumar-b161a322a/" target='_blank'>
                <h1 className="lg:text-6xl text-2xl font-semibold relative z-[9999] bg-transparent">LinkedIn</h1>
                <i className="ri-linkedin-box-fill lg:text-7xl text-4xl  font-thin relative z-[9999] bg-transparent"></i>
                <div className="center14 h-0 w-full bg-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease group-hover:h-full"></div>
            </a>

            <a className="group page14-inner flex relative items-center justify-between hover:text-black lg:px-20 px-5 lg:py-10 py-6 w-full text-white border-t border-b border-white/30 border-b-white/20 font-[100]" href="https://www.instagram.com/mohit__3009?igsh=dTV2YXMwcGltZG43" target='_blank'>
                <h1 className="lg:text-6xl text-2xl font-semibold relative z-[9999] bg-transparent ">Instagram</h1>
                <i className="ri-instagram-fill lg:text-7xl text-4xl font-thin relative z-[9999] bg-transparent"></i>
                <div className="center14 h-0 w-full bg-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease group-hover:h-full"></div>
            </a>
        </div>

    )
}

export default Social
