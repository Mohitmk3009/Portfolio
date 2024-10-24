"use client";
import React, { useState } from 'react';
import styles from './App.module.css';
import TiltCard, { TiltCardProps } from './TiltCard';

// Replace these with actual image URLs
const nextImageUrl = 'https://training-uploads.internshala.com/certificates/COC-14205CA8-0E9F-BE13-59FC-215DC6EE6B38.jpg?t=1729789223';
const turboImageUrl = 'https://udemy-certificate.s3.amazonaws.com/image/UC-f8c140c5-afc0-4bfb-8558-81bf1a50e402.jpg?v=1692713226000'; // Replace with actual image URL
const vercelImageUrl = 'https://udemy-certificate.s3.amazonaws.com/image/UC-a1043de0-33c6-438c-bf76-b358437a1c33.jpg?v=1694695947000'; // Replace with actual image URL

function degToRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

function Slider(props: React.ComponentProps<'input'>) {
  return <input type="range" {...props} />;
}

function SliderContainer({ title, children }: React.PropsWithChildren<{ title?: string }>) {
  return (
    <div className={styles.sliderContainer}>
      <label>{title}</label>
      <div className={styles.sliderChildrenWrapper}>{children}</div>
    </div>
  );
}

const nextCardProps: TiltCardProps = {
  image: nextImageUrl, // Updated to use image
  title: 'UI/UX Design',
  subTitle: 'I completed a UI/UX design course through Internshala, where I developed skills in user research, wireframing, prototyping, and user testing. Through real-world projects, I learned to create user-centered designs that enhance the overall user experience.',
  paragraph: (
    <p className='text-[#18B7F1]'>
      Internshala
    </p>
  ),
  buttonText: 'Get Started',
  href: 'https://trainings.internshala.com/certificate/preview/ui-ux-design/coc/dashbaord/',
  accentColor: '#18B7F1',
};

const turboCardProps: TiltCardProps = {
  image: turboImageUrl, // Updated to use image
  title: 'Mastering Data Structures & Algorithms using C and C++',
  subTitle: 'I completed the "Mastering Data Structures & Algorithms using C and C++" course through Udemy, which provided in-depth knowledge and hands-on experience in implementing efficient algorithms and data structures using these languages.',

  paragraph: (
    <p className='text-[#A336EF]'>
      Udemy
    </p>
  ),
  buttonText: 'Try in Next.js 13',
  href: 'https://www.udemy.com/certificate/UC-f8c140c5-afc0-4bfb-8558-81bf1a50e402/',
  accentColor: '#ba1ee4',
};

const vercelCardProps: TiltCardProps = {
  image: vercelImageUrl, // Updated to use image
  title: 'Complete A.I. & Machine Learning, Data Science Bootcamp',
  subTitle: 'I completed an A.I. & Machine Learning, Data Science Bootcamp through Udemy, where I gained practical skills in developing intelligent systems and data analysis. This hands-on training equipped me to apply advanced techniques in real-world, data-driven projects.',
  paragraph: <p className='text-[#A336EF]'>
  Udemy
</p>,
  buttonText: 'Deploy Now',
  href: 'https://www.udemy.com/certificate/UC-a1043de0-33c6-438c-bf76-b358437a1c33/',
  accentColor: '#ffffff',
};

export default function Certificate() {
  const [angle, setAngle] = useState(0);
  const [directionAngle, setDirectionAngle] = useState(0);
  const [showTestView, setShouldEnableTestView] = useState(false);
  const [showBlob, setShowBlob] = useState(true);

  // (hypotenuse = 1)
  const x = Math.cos(degToRad(directionAngle));
  const y = Math.sin(degToRad(directionAngle));

  const tiltCards = [nextCardProps, turboCardProps, vercelCardProps].map((props) => (
    <TiltCard
      key={props.title}
      {...props}
      showBlob={showBlob}
      testValues={
        showTestView
          ? {
              rotateX: x,
              rotateY: y,
              rotateAngle: angle,
            }
          : undefined
      }
    />
  ));

  return (

    <div className='lg:mx-20 mx-5 lg:flex justify-center flex-col items-center gap-5 '>
      <div className={styles.yetAnotherWrapper}>
        <div className={styles.tiltCardsWrapper}>{tiltCards}</div>

        
      </div>
    </div>
  );
}
