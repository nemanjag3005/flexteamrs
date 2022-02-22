import Link from "next/link";
import React from "react";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div
      className={`h-full w-4/5 bg-gray-800 z-40 fixed top-0 left-0 shadow-xl transition ease-in-out duration-300 ${
        isOpen == true ? "block translate-x-0" : "hidden -translate-x-full"
      }`}
    >
      <nav className="bg-black border-b border-w-4xl px-4 py-4 md:py-6 border-primary transition duration-500">
        <div className="container flex flex-nowrap justify-between items-center mx-auto max-w-6xl">
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            onClick={toggle}
            className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-200 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Close main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div className="flex h-full w-full items-left justify-start flex-col">
        <ul className="space-y-4 px-4 py-4 mt-32">
          <li>
            <Link href="onama">
              <span className="text-gray-200 flex py-2 cursor-pointer px-4 rounded hover:text-primary hover:bg-gray-500 border-gray-500 text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                O Nama
              </span>
            </Link>
          </li>
          <li>
            <Link href="onama">
              <span className="text-gray-200 flex py-2 cursor-pointer px-4 rounded hover:text-primary hover:bg-gray-500 border-gray-500 text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
                Profit Tabela
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
