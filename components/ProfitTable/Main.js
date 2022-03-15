import React from "react";
import Navbar from "../Navbar";
import { useRef, useState } from "react";
import MonthsData2022 from "./MonthsData2022";
import Accordion from "./Accordion";
import MonthsData2021 from "./MonthsData2021";
import "animate.css";
import Image from "next/image";

const Main = ({ toggle, isOpen }) => {
  const [year, setYear] = useState(2022);
  const data2022 = MonthsData2022;
  const data2021 = MonthsData2021;
  return (
    <div className="bg-secondary bg-repeat flex justify-center">
      <div className="max-w-7xl w-full flex flex-col py-2">
        <Navbar toggle={toggle} isOpen={isOpen} />
        <div className="px-3">
          <div className="px-3 mb-8 flex rounded-xl bg-gradient-to-b from-transparent to-pale flex-col justify-center py-4">
            <div className="grid grid-cols-1 w-full md:grid-cols-2 mb-4">
              <div className="mx-auto animate__animated animate__fadeInUp">
                <h1 className="text-5xl md:text-7xl italic text-shadow text-primary font-bold">
                  PROFIT TABELA
                </h1>
                <h1 className="text-2xl md:text-4xl text-gray-200 italic text-shadow mt-2 mb-6">
                  Rezultati ne Lažu - <br /> Uvid u sve naše tikete
                </h1>
                <p className="text-lg md:max-w-xl mb-8 text-gray-200">
                  Za razliku od drugih tipstera, mi vam naše rezultate
                  predstavljamo bez laži. Profit tabela prikazuje svaki odigran
                  tiket kao i rezultat za svaki dan, mesec i godinu. <br />
                  Od početka nam je cilj bio da budemo 100% transparentni i da
                  sve pokazujemo onako kako jeste. Zbog toga sada imamo ogromnu
                  zajednicu koja ima poverenja u nas. <br/> Vaš Flex Team.
                </p>
              </div>

              <div className="ml-auto mr-auto hidden md:block">
                <Image
                  src="/flex_icon_large.png"
                  width="170px"
                  height="195px"
                ></Image>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center">
              <h1 className="text-shadow mb-4 text-gray-200 text-2xl mx-auto italic text-center border-b-2 border-gray-200">
                {year}. Godina
              </h1>
              <div className="flex mx-auto shadow-lg mb-4">
                <button
                  onClick={() => setYear(year - 1)}
                  className=" group px-1 border-primary"
                >
                  <div className="rounded-full border-2 border-primary group-hover:-translate-x-0.5 transition ease-in-out duration-150">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 stroke-primary "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </div>
                </button>
                <button
                  onClick={() => setYear(2021)}
                  className="text-primary hover:text-primary-metallic text-lg py-1 px-2 border-t-2 border-l-2 rounded-l-lg border-b-2 border-primary"
                >
                  2021.
                </button>
                <button
                  onClick={() => setYear(2022)}
                  className="text-primary hover:text-primary-metallic text-lg py-1 rounded-r-lg px-2 border-2  border-primary "
                >
                  2022.
                </button>
                <button
                  onClick={() => setYear(year + 1)}
                  className="group rounded-r-lg px-1 "
                >
                  <div className="rounded-full border-2 border-primary group-hover:translate-x-0.5 transition ease-in-out duration-150">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 stroke-primary "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              </div>
              <div className="w-full py-4 grid grid-cols-1 md:max-w-lg md:mx-auto">
                {year == 2022 ? (
                  <>
                    {data2022.map((data2022, index) => (
                      <Accordion
                        key={index}
                        mesec={data2022.mesec}
                        profit={data2022.profit}
                        dani={data2022.dani}
                      />
                    ))}{" "}
                  </>
                ) : year == 2021 ? (
                  <>
                    {data2021.map((data2021, index) => (
                      <Accordion
                        key={index}
                        mesec={data2021.mesec}
                        profit={data2021.profit}
                        dani={data2021.dani}
                      />
                    ))}
                  </>
                ) : (
                  <h1 className="text-2xl text-center text-gray-200 italic">
                    Nema podataka za ovu godinu.
                  </h1>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
