import React from "react";
import Navbar from "../Navbar";
import { useRef, useState } from "react";
import MonthsData2022 from "./MonthsData2022";
import Accordion from "./Accordion";
import MonthsData2021 from "./MonthsData2021";

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
          <div className="grid grid-cols-1 w-full">
          <div className="mx-auto">
          <h1 className="text-5xl md:text-7xl italic text-shadow text-primary font-bold">
            PROFIT TABELA
          </h1>
          <h1 className="text-2xl md:text-4xl text-gray-200 italic text-shadow mt-2 mb-6">
            - &quot;Rezultati ne lažu&quot;
          </h1>
          <p className="text-lg md:max-w-xl mb-8 text-gray-200">
            Istina Vam je na dohvat ruke. Za razliku od drugih tipstera, mi vam
            naše rezultate direktno pokazujemo. Profit tabela prikazuje svaki
            odigran tiket kao i rezultat za svaki dan, mesec i godinu. <br />{" "}
            Vaš Flex Team.
          </p>
          </div>
          <div className="w-full flex flex-col justify-center">
          <h1 className="text-shadow mb-1 text-gray-200 text-2xl mx-auto italic text-center border-b-2 border-gray-200">
            {year}. Godina
          </h1>
          <div className="w-full py-4 grid grid-cols-1 md:max-w-xl md:mx-auto">
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
          <div className="flex mx-auto shadow-lg mb-6">
            <button
              onClick={() => setYear(year - 1)}
              className="border-2 group rounded-l-lg px-1 border-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 stroke-primary group-hover:-translate-x-0.5 transition ease-in-out duration-150"
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
            </button>
            <button
              onClick={() => setYear(2021)}
              className="text-primary hover:text-primary-metallic text-lg py-1 px-2 border-t-2 border-b-2 border-primary"
            >
              2021.
            </button>
            <button
              onClick={() => setYear(2022)}
              className="text-primary hover:text-primary-metallic text-lg py-1 px-2 border-t-2 border-b-2 border-primary border-l-2"
            >
              2022.
            </button>
            <button
              onClick={() => setYear(year + 1)}
              className="border-2 group rounded-r-lg px-1 border-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 stroke-primary group-hover:translate-x-0.5 transition ease-in-out duration-150"
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
            </button>
          </div>
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
