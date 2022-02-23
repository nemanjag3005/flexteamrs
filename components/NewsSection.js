import React from "react";

const NewsSection = () => {
  return (
    <div className="bg-hero3 border-t-2 border-gray-200 pb-24 ">
      <div className="relative text-center -mt-32">
        <img src="/brush-stroke.svg" className=" -rotate-3 w-96"></img>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-gray-700 text-shadow-lg to-gray-900 text-5xl -rotate-3 font-bold absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
          NOVOSTI
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 mb-12 px-8">
        <div>
          <a href="#" className="group relative">
            <div className=" absolute rounded-xl top-0 left-0 w-full h-full p-5 hidden group-hover:flex flex-col items-center justify-center z-20">
              <p className="font-bold text-xl text-gray-300">Instagram</p>
            </div>
            <img
              src="/bg.jpg"
              className="rounded-xl shadow-md border-2 border-primary h-48 w-full object-cover group-hover:opacity-25"
            ></img>
          </a>
          <h1 className="text-gray-200 text-2xl text-center mt-4">
            FLEX TEAM{" "}
            <span className="text-primary italic text-shadow">INSTAGRAM</span>
          </h1>
        </div>
        <div>
          <a href="#" className="group relative">
            <div className=" absolute rounded-xl top-0 left-0 w-full h-full p-5 hidden group-hover:flex flex-col items-center justify-center z-20">
              <p className="font-bold text-xl text-gray-300">Youtube</p>
            </div>
            <img
              src="/bg.jpg"
              className="rounded-xl shadow-md border-2 border-primary h-48 w-full object-cover group-hover:opacity-25"
            ></img>
          </a>
          <h1 className="text-gray-200 text-2xl text-center mt-4">
            FLEX TEAM{" "}
            <span className="text-primary italic text-shadow">YOUTUBE</span>
          </h1>
        </div>
        <div>
          <a href="#" className="group relative">
            <div className=" absolute rounded-xl top-0 left-0 w-full h-full p-5 hidden group-hover:flex flex-col items-center justify-center z-20">
              <p className="font-bold text-xl text-gray-300">Tiketi</p>
            </div>
            <img
              src="/bg.jpg"
              className="rounded-xl shadow-md border-2 border-primary h-48 w-full object-cover group-hover:opacity-25"
            ></img>
          </a>
          <h1 className="text-gray-200 text-2xl text-center mt-4">
            FLEX TEAM{" "}
            <span className="text-primary italic text-shadow">TIKETI</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
