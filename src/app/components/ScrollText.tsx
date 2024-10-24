import React from 'react';

interface ScrollTextProps {
    title: string; // Define the type for title
}

const ScrollText: React.FC<ScrollTextProps> = ({ title }) => {
    return (
        <div className="  lg:py-14 py-5 bg-black">
            <div id="scroller" className="flex-nowrap whitespace-nowrap overflow-x-auto overflow-y-hidden relative z-10">
                <div id="scroller-in" className="flex flex-nowrap lg:gap-40 gap-30">
                    {Array(10).fill(null).map((_, index) => (
                        <h4 key={index} className=" lg:text-[120px] text-[80px] w-full lg:font-black font-normal">
                            {title}
                        </h4>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ScrollText;
