import React from 'react';

interface ScrollTextProps {
    title: string; // Define the type for title
}

const ScrollText: React.FC<ScrollTextProps> = ({ title }) => {
    return (
        <div className="bg-black mt-[-140px] py-[10px]">
            <div id="scroller" className="flex-nowrap overflow-x-auto overflow-y-hidden relative z-50">
                <div id="scroller-in" className="flex flex-nowrap lg:gap-40 gap-30">
                    {Array(10).fill(null).map((_, index) => (
                        <h4 key={index} className="inline-block lg:text-[120px] text-[80px] lg:font-black font-normal">
                            {title}
                        </h4>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ScrollText;
