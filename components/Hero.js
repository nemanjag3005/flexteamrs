import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";
import Navbar from "./Navbar";

const Hero = ({ isOpen, toggle }) => {
  return (
    <div className="bg-hero1  bg-no-repeat bg-fixed bg-cover">
      <Navbar toggle={toggle} isOpen={isOpen}/>
      <div className="grid">
        <div className="flex py-4 px-4 flex-col items-center justify-center text-4xl text-primary mt-8">
          <div className="w-full px-4 mb-12">
          <div className="pt-[56.25%] flex relative">
            <ReactPlayer
              width="100%"
              height="100%"
              style={{ position: "absolute", top: "0", left: "0" }}
              url="https://www.youtube.com/watch?v=79pwXIqngAI"
              controls
            />
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
