import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";
import Navbar from "../Navbar";
import Link from "next/link";

const Hero = ({ isOpen, toggle }) => {
  return (
    <div className="bg-hero1  bg-no-repeat bg-cover relative overflow-hidden flex justify-center">
      <div className="w-full max-w-7xl md:mb-20 relative">
      <h1 className="absolute z-0 font-['Airbnb Cereal App'] font-bold opacity-20 text-transparent bg-clip-text bg-gradient-to-r from-primary-metallic to-transparent md:text-10xl text-8xl md:tracking-widestest tracking-widest top-[15%] left-[40%] ">
        FLEX
      </h1>
      <h1 className="absolute z-0 font-['Airbnb Cereal App'] font-bold opacity-20 text-transparent bg-clip-text bg-gradient-to-r from-transparent to-primary text-8xl md:tracking-widestest md:left-[0%] md:text-10xl md:top-[75%] tracking-widest top-[45%] left-[2%] ">
        TEAM
      </h1>
      <Navbar toggle={toggle} isOpen={isOpen} />
      <div className="grid grid-cols-1 md:grid-cols-3 md:space-x-10 py-4 text-5xl md:text-7xl text-primary mt-8 px-6 md:mr-12">
        
          <div className="w-full mb-12 md:hidden block">
            <div className="pt-[56.25%] flex bg-black relative shadow-lg">
              <ReactPlayer
                width="100%"
                height="100%"
                style={{ position: "absolute", top: "0", left: "0" }}
                url="https://www.youtube.com/watch?v=D7QAtvTpIbI"
                controls
              />
            </div>
          </div>
          <div className="flex items-center justify-center flex-col">
          <h1 className="font-bold italic tracking-tight text-shadow">
            PODIGNI SVOJE ULOGE
          </h1>
          <p className="text-gray-200 py-4 text-lg md:text-xl">
            Rezultati ne lažu! Ovo je vaša prilika da radite sa najboljima u
            poslu i da se upustite u akciju. Pretplatite se na Flex Team.
          </p>
          <button className="text-gray-200 mb-12 font-bold italic shadow-xl md:mr-auto px-4 mt-4 py-2 text-2xl md:text-4xl md:px-6 rounded-full hover:-translate-y-2 transform ease-in-out duration-300 bg-gradient-to-b from-[#D6A756]">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-600 hover:from-gray-200 hover:to-gray-400">PRETPLATI SE</h1>
          </button>
          
          </div>
          <div className="w-full hidden md:block col-span-2 max-w-3xl">
            <div className="pt-[56.25%] flex bg-black relative shadow-lg">
              <ReactPlayer
                width="100%"
                height="100%"
                style={{ position: "absolute", top: "0", left: "0" }}
                url="https://www.youtube.com/watch?v=D7QAtvTpIbI"
                controls
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
