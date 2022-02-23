import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = ({ isOpen, toggle }) => {
  return (
    <nav className=" bg-transparent">
      <div className="container px-4 py-4  md:py-6 flex flex-nowrap  justify-between items-center mx-auto max-w-6xl">
        <Link href="/">
          <div className="px-6 py-6 rounded-lg">
            <div className="relative group rounded-lg">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-100 to-gold-900 rounded-lg filter blur opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button className="relative px-2 py-1 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                <Image
                  className="rounded-lg"
                  src="/flex1.png"
                  width="56px"
                  height="65px"
                  
                ></Image>
              </button>
            </div>
          </div>
        </Link>
        <button
          onClick={toggle}
          type="button"
          className="inline-flex items-center p-2 text-sm rounded-lg md:hidden  focus:outline-none focus:ring-2 text-gray-200 focus:ring-gray-600"
        >
          <svg
            className=" w-8 h-8"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden md:block w-full md:w-auto">
          <ul className="flex flex-col my-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm ">
            <li>
              <Link href="onama">
                <span className="block py-2 cursor-pointer text-gray-200 px-4 hover:text-primary-metallic text-2xl ">
                  O Nama
                </span>
              </Link>
            </li>
            <li>
              <Link href="profit-tabela">
                <span className="block py-2 cursor-pointer text-gray-200 px-4 hover:text-primary-metallic text-2xl">
                  Tabela Profita
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
