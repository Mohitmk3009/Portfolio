import React from 'react';
import styles from './TiltCard.module.css';
import useTiltStyle from './use-tilt-style';

type AdditionalProps = {
  testValues?: {
    rotateX?: number;
    rotateY?: number;
    rotateAngle?: number;
  };
  showBlob?: boolean;
};

export type TiltCardProps = AdditionalProps & {
  href?: string;
  image: string; // Updated to accept an image link
  title: string;
  subTitle?: string;
  paragraph: React.ReactNode;
  buttonText: string;
  accentColor?: string;
};

export default function TiltCard({
  href,
  image, // Updated prop
  title,
  subTitle,
  paragraph,
  accentColor = '#ffffff',
  testValues,
  showBlob = true,
}: TiltCardProps) {
  const rootRef = React.useRef<HTMLAnchorElement>(null);
  const rootStyle = useTiltStyle(rootRef, accentColor);

  if (testValues) {
    const { rotateX, rotateY, rotateAngle } = testValues;
    rootStyle.transform = `scale3d(1.01, 1.01, 1.01) rotate3d(${rotateX}, ${rotateY}, 0, ${rotateAngle}deg)`;
  }

  const additionalBlobStyles: React.CSSProperties = {
    background: `radial-gradient(circle, ${accentColor} 0, rgba(161, 252, 70, 0) 71%)`,
  };

  return (
    <a ref={rootRef} className='relative flex flex-col justify-start items-center lg:w-[400px] w-auto lg:mx-10  p-5 shadow-custom-shadow transition-transform duration-300 ease-out will-change-transform rounded-3xl cursor-pointer text-center overflow-hidden' style={rootStyle} >
      {showBlob && !testValues && (
        <div
          className={styles.blob}
          style={additionalBlobStyles}
          aria-hidden={true}
        />
      )}

      <div className="relative w-auto h-auto flex flex-col justify-center items-center rounded-xl overflow-hidden">
        {/* Image */}
        <img src={image} alt={title} className="object-cover w-full h-auto rounded-xl" />

        {/* Link Icon on top of the image */}
        <a
          className="absolute top-2 right-2 bg-black w-10 h-10 flex opacity-60 justify-center items-center rounded-full"
          href={href}
          target="_blank"
        >
          <i className="ri-links-fill lg:text-2xl text-xl text-white font-thin bg-transparent"></i>
        </a>
      </div>

      {/* Text Content */}
      <div className="text-justify mt-4 flex flex-col gap-2">
        <h2 className="lg:text-3xl   font-semibold">{title}</h2>
        {subTitle && <span className="lg:text-sm text-xs text-gray-400">{subTitle}</span>}
        <p className="text-gray-500  text-sm">{paragraph}</p>
      </div>

      <div className={styles.glow} aria-hidden={true} />
    </a>
  );
}
