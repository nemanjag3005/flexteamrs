import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";
import Navbar from "../Navbar";

const Hero = ({ isOpen, toggle }) => {
  return (
    <div className="bg-hero1  bg-no-repeat bg-cover relative overflow-hidden">
      <h1 className="absolute z-0 font-['Airbnb Cereal App'] font-bold opacity-20 text-transparent bg-clip-text bg-gradient-to-r from-primary-metallic to-transparent text-8xl tracking-widest top-[15%] left-36 ">
        FLEX
      </h1>
      <h1 className="absolute z-0 font-['Airbnb Cereal App'] font-bold opacity-20 text-transparent bg-clip-text bg-gradient-to-r from-transparent to-primary text-8xl tracking-widest top-[45%] left-2 ">
        TEAM
      </h1>
      <Navbar toggle={toggle} isOpen={isOpen}/>
      <div className="grid">
        <div className="flex py-4 px-4 flex-col items-center justify-center text-5xl text-primary mt-8">
          <div className="w-full px-4 mb-12">
          <div className=" rounded-lg">
            <div className="relative group rounded-lg">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-100 to-gold-900 rounded-lg filter blur opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
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
          <h1 className="font-bold italic tracking-tight  text-shadow">
            PODIGNI SVOJE ULOGE
          </h1>
          <p className="text-gray-200 py-4 text-lg mb-12">
            Rezultati ne lažu! Ovo je vaša prilika da radite sa najboljima u
            poslu i da se upustite u akciju. Pretplatite se na Flex Team.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
