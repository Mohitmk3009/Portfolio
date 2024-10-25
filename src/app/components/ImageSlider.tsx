import React, { useState } from 'react';
// import Image from 'next/image';

// const ImageSlider = ({ images }) => {
    const ImageSlider = () => {

    // const [currentIndex, setCurrentIndex] = useState(0);

    // const handleNext = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    // };

    // const handlePrev = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    // };

    return (
        <div className="relative w-full overflow-hidden">
            {/* <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div key={index} className="min-w-full">
                        <Image src={image.src} alt={image.alt} width={400} height={100} className="rounded-xl" draggable="false" />
                    </div>
                ))}
            </div>
            <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded">
                &lt;
            </button>
            <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded">
                &gt;
            </button> */}
        </div>
    );
};

export default ImageSlider;
