import React from "react";
import Link from "next/link";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';

const NewsSection = () => {
  return (
    <div className="bg-hero3 border-t-2 border-gray-200 pb-24 relative flex justify-center">
      <div className="w-full max-w-7xl relative ">
      <h1 className="absolute z-0 pointer-events-none font-['Airbnb Cereal App'] font-bold opacity-20 text-transparent bg-clip-text bg-gradient-to-r md:tracking-widestest md:left-[20%] from-primary-metallic md:text-9xl to-transparent text-8xl tracking-mobile-widestest top-[8%] left-36 ">
        FLEX
      </h1>
      <h1 className="absolute z-0 pointer-events-none font-['Airbnb Cereal App'] font-bold opacity-20 text-transparent bg-clip-text bg-gradient-to-r md:tracking-widestest from-transparent md:text-9xl to-primary text-8xl tracking-mobile-widestest top-[28%] left-2 ">
        TEAM
      </h1>
      <h1 className="absolute z-0 pointer-events-none font-['Airbnb Cereal App'] font-bold opacity-20 text-transparent bg-clip-text bg-gradient-to-r md:tracking-widestest md:left-[50%] from-transparent md:text-9xl to-primary text-8xl tracking-mobile-widestest top-[65%] left-2 ">
        FLEX
      </h1>
      <h1 className="absolute z-0 pointer-events-none font-['Airbnb Cereal App'] font-bold opacity-20 text-transparent bg-clip-text bg-gradient-to-r md:tracking-widestest md:left-[70%] from-primary-metallic md:text-9xl to-transparent text-8xl tracking-mobile-widestest top-[90%] left-36 ">
        TEAM
      </h1>
      <div className="relative text-center pointer-events-none md:-mt-48 -mt-32">
        <img src="/brush-stroke.svg" className=" pointer-events-none -rotate-3 mx-auto md:w-5/12 w-96"></img>
        <h1 className="text-transparent pointer-events-none bg-clip-text bg-gradient-to-b from-gray-700 text-shadow-lg md:text-6xl lg:text-7xl to-gray-900 text-5xl -rotate-3 font-bold absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
          NOVOSTI
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-10 gap-y-8 mb-12 px-8">
        <div className="flex justify-center flex-col w-full">
        <AnimationOnScroll animateIn="animate__fadeInUp" delay={200} animateOnce={true}>
          <a href="https://www.instagram.com/flex_team_n1/" target='_blank' rel="noreferrer" className="group relative flex ">
            <div className=" absolute rounded-xl top-0 bg-hero3 left-0 w-full h-full p-5 hidden group-hover:flex items-center justify-center z-20 ">
            <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 24 24"
          className="fill-gray-200 w-8 h-8 mr-2"
        >
          {" "}
          <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
        </svg>
              <p className="font-bold text-xl text-gray-300">Instagram</p>
            </div>
            <img
              src="/flex.png"
              className="rounded-xl ease-in-out transform transition duration-300 hover:scale-105 shadow-md border-2 md:border-gray-200 md:h-54 z-30 border-primary h-48 w-full object-cover group-hover:opacity-25"
            ></img>
          </a>
          <h1 className="text-gray-200 text-2xl md:text-3xl text-center mt-4">
            FLEX TEAM{" "}
            <span className="text-primary italic text-shadow">INSTAGRAM</span>
          </h1>
          </AnimationOnScroll>
        </div>

        <div>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
          <a href="https://www.youtube.com/watch?v=79pwXIqngAI" target='_blank' rel="noreferrer" className="group  relative flex">
            <div className=" absolute rounded-xl top-0 bg-hero3 left-0 w-full h-full p-5 hidden group-hover:flex items-center justify-center z-20">
            <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 30 30"
          className="fill-gray-200 w-8 h-8 mr-2"
        >
          {" "}
          <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
        </svg>
              <p className="font-bold text-xl text-gray-300">Youtube</p>
            </div>
            <img
              src="https://img.youtube.com/vi/79pwXIqngAI/maxresdefault.jpg"
              className="rounded-xl shadow-md border-2 z-30 ease-in-out transform transition duration-300 hover:scale-105 border-primary h-48 md:h-80 w-full object-cover group-hover:opacity-25"
            ></img>
          </a>
          <h1 className="text-gray-200 text-2xl md:text-4xl text-center mt-4">
            FLEX TEAM{" "}
            <span className="text-primary italic text-shadow">YOUTUBE</span>
          </h1>
          </AnimationOnScroll>
        </div>
        
        <div className="flex justify-center flex-col w-full">
        <AnimationOnScroll animateIn="animate__fadeInUp" delay={200} animateOnce={true}>
          <Link href='/tiketi'>
          <p className="group relative flex cursor-pointer">
            <div className=" absolute rounded-xl top-0 left-0 bg-hero3 w-full h-full p-5 hidden group-hover:flex items-center justify-center z-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 stroke-gray-200 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              <p className="font-bold text-xl text-gray-300">Tiketi</p>
            </div>
            <img
              src="/Tiket.png"
              className="rounded-xl ease-in-out transform transition duration-300 hover:scale-105 shadow-md border-2 z-30 md:border-gray-200 border-primary h-48 md:h-54 w-full object-cover group-hover:opacity-25"
            ></img>
          </p>
          </Link>
          <h1 className="text-gray-200 text-2xl md:text-3xl text-center mt-4">
            FLEX TEAM{" "}
            <span className="text-primary italic text-shadow">TIKETI</span>
          </h1>
          </AnimationOnScroll>
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
