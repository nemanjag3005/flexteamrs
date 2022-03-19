import Link from "next/link";
import React from "react";
import Ticket from "./Ticket";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

const TicketSection = () => {
  return (
    <div className="bg-hero2 bg-no-repeat bg-cover px-4 border-t-2 border-gray-800 pb-16 flex justify-center relative">
      <div className="w-full max-w-7xl md:mb-20 relative">
        <h1 className="absolute z-0 pointer-events-none font-['Airbnb Cereal App'] font-bold opacity-30 text-transparent bg-clip-text bg-gradient-to-r md:text-10xl md:tracking-widestest from-transparent to-primary text-8xl tracking-mobile-widestest md:top-[10%] top-[15%] md:left-[40%] left-[2%] ">
          FLEX
        </h1>
        <h1 className="absolute z-0 pointer-events-none font-['Airbnb Cereal App'] font-bold opacity-30 text-transparent bg-clip-text bg-gradient-to-r md:text-10xl md:tracking-widestest from-primary to-transparent text-8xl tracking-mobile-widestest md:top-[45%] md:left-[80%] top-[35%] left-[40%] ">
          TEAM
        </h1>
        <h1 className="absolute z-0 pointer-events-none font-['Airbnb Cereal App'] font-bold opacity-20 text-transparent md:hidden block bg-clip-text bg-gradient-to-r from-transparent to-primary-metallic text-8xl tracking-mobile-widestest top-[60%] left-2 ">
          FLEX
        </h1>
        <h1 className="absolute z-0 pointer-events-none font-['Airbnb Cereal App'] font-bold opacity-20 text-transparent md:hidden block bg-clip-text bg-gradient-to-r from-primary to-transparent text-8xl tracking-mobile-widestest top-[75%] left-36 ">
          TEAM
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-24 ">
        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
          <div className="grid gap-4 grid-cols-2">
            <div className="-rotate-6 space-y-3">
              <Ticket variant={"white"} id={"119782926"} naslov={"Srbija - Portugal"} igra={"Ukupno Golova   UG 3+"} uplata={"150,000.00"} dobitak={"270,000.00"} kvota={"1.80"}/>
              <Ticket variant={"black"} id={"922015-1009125 1904"} naslov={"Brondby - Sonderjyske"} igra={"KONAČAN ISHOD - 1"} uplata={"395,000.00"} dobitak={"659,650.00"} kvota={"1.67"}/>
              <Link href='/tiketi'>
              <h1 className="text-gray-200 tik pb-1 group ml-2 md:text-3xl underline-offset-4 cursor-pointer italic font-bold text-lg">
                VIDI SVE <span className="whitespace-nowrap"> TIKETE<svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline ml-1 align-top md:h-9 md:w-9 group-hover:translate-x-1 ease-in-out transition duration-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  />
                </svg>
                </span>
              </h1>
              </Link>
            </div>
            <div className="-rotate-6 space-y-3">
              <Ticket variant={"black"} id={"922016-1780298 7742"} naslov={"Fiorentina - Juventus"} igra={"DUPLA ŠANSA - X2"} uplata={"350,000.00"} dobitak={"532,000.00"} kvota={"1.52"}/>
              <Ticket variant={"white"} id={""} naslov={"Mallorca - Real Madrid"} igra={"Real Madrid će pobediti na meču - ki 2"} uplata={"112,000.00"} dobitak={"168,000.00"} kvota={"1.50"}/>
            </div>
            </div>
          </AnimationOnScroll>
          <div className="px-4 py-4 flex items-center justify-center flex-col mt-12">
            <AnimationOnScroll
              animateIn="animate__fadeInRight"
              animateOnce={true}
            >
              <h1 className="text-primary italic font-bold text-5xl md:text-7xl text-shadow">
                TOP TIKETI OVE GODINE
              </h1>
              <p className="text-gray-200 mt-6 md:text-xl">
              Od Flex Team-a možete da očekujete samo najbolje tikete i tipove iz sveta sportskog kladjenja,
              koji će Vam, ukoliko poštujete sva pravila, doneti velike mesečne profite. Ova dva pravila su jasna i jednostavna i na tebi je da ih se držiš. <br/>
              <span className='text-primary'>1.</span> Samo se žargonski rečeno &quot;pretvori u robota&quot; kada je u pitanju igranje tiketa i prepisuj tikete od provereno najboljih. <br/>
              <span className='text-primary'>2.</span> Poštuj uloge u procentima u odnosu na tvoj budžet koji ti kažem. <br/>
Neka moji prethodni rezultati i ostvareni profit govore umesto mene.

              </p>
            </AnimationOnScroll>
            <Link href="/profit-tabela">
              <button className="text-gray-200 font-bold italic mt-10 shadow-xl px-4 py-2 text-2xl md:text-4xl rounded-full hover:-translate-y-2 transform ease-in-out duration-300 bg-gradient-to-b from-primary-metallic">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-400 hover:from-gray-200 hover:to-gray-300">
                  PROFIT TABELA
                </h1>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSection;
