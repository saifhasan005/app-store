import React from 'react';
import heroImg from '../../assets/images/hero.png';

const Banner = () => {
    return (
        <div className='min-h-[80vh]'>
            <h2 className='text-center font-bold text-3xl sm:text-4xl md:text-5xl pt-[60px] sm:pt-[80px]'>
                We Build <br />
                <span className='text-purple-500 font-bold'>Productive </span>Apps
            </h2>

            <p className='pt-[20px] sm:pt-[30px] text-center font-semibold text-gray-500 max-w-2xl mx-auto text-sm sm:text-base'>
                At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center pt-[25px] mb-[40px] sm:mb-[50px]'>
                <button className='btn w-full sm:w-auto'>Play Store</button>
                <button className='btn w-full sm:w-auto'>App Store</button>
            </div>

            <img src={heroImg} className='mx-auto w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl' alt="Hero" />
        </div>
    );
};

export default Banner;