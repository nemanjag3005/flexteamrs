import React from "react";
import Link from "next/link";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

const Join = () => {
  return (
    <div className="bg-secondary bg-repeat px-4 py-12 border-t-2 border-gray-800 flex justify-center">
      <div className="flex justify-center px-4 flex-col w-full max-w-7xl">
        <div className="flex md:my-8 flex-col justify-center">
          <div>
            <h1 className="z-0 md:mx-auto pointer-events-none mb-2 font-['Airbnb Cereal App'] font-bold opacity-10 text-transparent bg-clip-text bg-gradient-to-r from-primary-metallic to-primary-metallic md:text-8xl text-8xl md:tracking-widestest tracking-mobile-widestest">
              FLEX
            </h1>
            <h1 className="z-0 md:mx-auto pointer-events-none -mb-44 font-['Airbnb Cereal App'] font-bold opacity-10 text-transparent bg-clip-text bg-gradient-to-r from-primary-metallic to-primary-metallic md:text-8xl text-8xl md:tracking-widestest tracking-mobile-widestest">
              TEAM
            </h1>
            <h1 className="text-5xl max-w-3xl md:mx-auto md:text-7xl uppercase text-shadow text-primary italic font-bold mb-6 ">
              Uđi u Flex Team I Promeni Sebi Život.
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 md:w-4/6 py-8 space-y-6 md:space-y-0 md:space-x-4">
              <AnimationOnScroll
                animateIn="animate__fadeInUp"
                animateOnce={true}
              >
                <Link href="paketi">
                  <div className="flex items-center cursor-pointer flex-col border-2 border-green-700 shadow-xl ease-in-out transform transition duration-300 hover:scale-105">
                    <div className="bg-green-700 py-2 w-full text-center">
                      <h1 className="text-shadow italic uppercase text-3xl text-gray-200">
                        JAKE UPLATE
                      </h1>
                    </div>
                    <div className="w-full bg-zinc-800 h-full flex items-center justify-start flex-col py-8 px-4">
                      <h1 className="text-primary-metallic border-b-2 border-gray-200 pb-2 mb-4 text-3xl italic text-shadow">
                        30€
                        <span className="text-gray-200 text-xl italic text-shadow">
                          {" "}
                          / mesečno
                        </span>
                      </h1>
                      <ul className="space-y-4 mt-4">
                        <li className="mb-2">
                          <span className="text-gray-200  text-2xl italic text-shadow flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>{" "}
                            80 Tiketa Mesečno
                          </span>
                        </li>
                        <li className="mb-2">
                          <span className="text-gray-200 flex items-center text-2xl italic text-shadow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>{" "}
                            Tiketi Najuspešnijih Igrača
                          </span>
                        </li>
                        <li className="mb-2">
                          <span className="text-gray-200 flex items-center text-2xl italic text-shadow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>{" "}
                            Podrška
                          </span>
                        </li>
                        <li className="mb-2">
                          <span className="text-gray-200 flex items-center text-2xl italic text-shadow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>{" "}
                            Tiketi jakih uplata
                          </span>
                        </li>
                        <li className="mb-2">
                          <span className="text-gray-200 flex items-center text-2xl italic text-shadow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>{" "}
                            Uvid u Moje Tikete
                          </span>
                        </li>
                        <li className="mb-2">
                          <span className="text-gray-200 flex items-center text-2xl italic text-shadow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>{" "}
                            Preporuka na Ulog
                          </span>
                        </li>
                        <li className="mb-2 md:block hidden">
                          <span className="text-gray-200 flex items-center text-2xl italic text-shadow">
                            <br />
                          </span>
                        </li>
                        {/* <li className="mb-2 md:block hidden">
                          <span className="text-gray-200 flex items-center text-2xl italic text-shadow">
                            <br />
                          </span>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </Link>
              </AnimationOnScroll>
              {/* <AnimationOnScroll
                animateIn="animate__fadeInUp"
                animateOnce={true}
                delay={200}
              >
                <Link href="paketi">
                  <div className="flex items-center cursor-pointer flex-col border-2 border-primary-metallic shadow-xl ease-in-out transform transition duration-300 hover:scale-105">
                    <div className="bg-gold py-2 w-full text-center">
                      <h1 className="text-shadow italic uppercase text-3xl text-gray-200">
                        Standard Vip
                      </h1>
                    </div>
                    <div className="w-full bg-zinc-800 h-full flex items-center justify-start flex-col py-8 px-4">
                      <h1 className="text-primary-metallic border-b-2 border-gray-200 pb-2 mb-4 text-3xl italic text-shadow">
                        30€
                        <span className="text-gray-200 text-xl italic text-shadow">
                          {" "}
                          / mesečno
                        </span>
                      </h1>
                      <ul className="space-y-4 mt-4">
                        <li className="mb-2">
                          <span className="text-gray-200  text-2xl italic text-shadow flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>{" "}
                            Dnevni Tiketi
                          </span>
                        </li>
                        <li className="mb-2">
                          <span className="text-gray-200 flex items-center text-2xl italic text-shadow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>{" "}
                            Najbolji Dnevni Odabir
                          </span>
                        </li>
                        <li className="mb-2">
                          <span className="text-gray-200 flex items-center text-2xl italic text-shadow">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>{" "}
                            Podrška i Saveti 24h
                          </span>
                        </li>
                        <li className="mb-2">
                          <span className="text-gray-200 flex items-center text-2xl italic text-shadow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>{" "}
                            24 Meseca u Profitu
                          </span>
                        </li>
                        <li className="mb-2">
                          <span className="text-gray-200 flex items-center text-2xl italic text-shadow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>{" "}
                            Profit + 20% - 70%
                          </span>
                        </li>
                        <li className="mb-2">
                          <span className="text-gray-200 flex items-center text-2xl italic text-shadow">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>{" "}
                            Uvid u Moje Tikete
                          </span>
                        </li>
                        <li className="mb-2">
                          <span className="text-gray-200 flex items-center text-2xl italic text-shadow">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>{" "}
                            Svaki Mesec u Plusu
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Link>
              </AnimationOnScroll> */}
              <AnimationOnScroll
                animateIn="animate__fadeInUp"
                delay={300}
                animateOnce={true}
              >
                <Link href="paketi">
                  <div className="flex cursor-pointer items-center flex-col border-2 border-platinum shadow-xl ease-in-out transform transition duration-300 hover:scale-105">
                    <div className="bg-gradient-to-r via-platinum from-[#01FFFF] to-[#00ECFA] w-full py-2 text-center">
                      <h1 className="text-shadow uppercase italic text-3xl text-gray-200">
                        Admin Premium
                      </h1>
                    </div>
                    <div className="w-full bg-zinc-800 flex items-center justify-start flex-col py-8 px-4">
                      <h1 className="text-primary-metallic text-3xl mb-4 border-b-2 border-gray-200 pb-2 italic text-shadow">
                        100€
                        <span className="text-gray-200 text-xl italic text-shadow">
                          {" "}
                          / mesečno
                        </span>
                      </h1>
                      <ul className="space-y-4 mt-4">
                        <li className="mb-2">
                          <span className="text-gray-200  text-2xl italic text-shadow flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>{" "}
                            15-20 Tiketa Mesečno
                          </span>
                        </li>
                        <li className="mb-2">
                          <span className="text-gray-200 flex items-center text-2xl italic text-shadow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>{" "}
                            Jaka Igra
                          </span>
                        </li>
                        <li className="mb-2">
                          <span className="text-gray-200 flex items-center text-2xl italic text-shadow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>{" "}
                            Ozbiljni Ulozi
                          </span>
                        </li>
                        <li className="mb-2">
                          <span className="text-gray-200 flex items-center text-2xl italic text-shadow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>{" "}
                            Minimum 200€ za Igru
                          </span>
                        </li>
                        <li className="mb-2">
                          <span className="text-gray-200 flex items-center text-2xl italic text-shadow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>{" "}
                            Profit + 30% - 100%
                          </span>
                        </li>
                        <li className="mb-2">
                          <span className="text-gray-200 flex items-center text-2xl italic text-shadow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>{" "}
                            Uvid u Moje Tikete
                          </span>
                        </li>
                        <li className="mb-2">
                          <span className="text-gray-200 flex items-center text-2xl italic text-shadow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>{" "}
                            Svaki Mesec u Plusu
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Link>
              </AnimationOnScroll>
            </div>
            <div className=" mb-20 mt-6">
              <Link href="/paketi">
                <button className="text-gray-200 font-bold italic mt-4 shadow-xl px-4 py-2 text-2xl md:text-4xl rounded-full hover:-translate-y-2 transform ease-in-out duration-300 bg-gradient-to-b from-primary-metallic">
                  <h1 className="text-transparent bg-clip-text uppercase bg-gradient-to-b from-gray-200 to-gray-400 hover:from-gray-200 hover:to-gray-300">
                    Kako se učlaniti?
                  </h1>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
