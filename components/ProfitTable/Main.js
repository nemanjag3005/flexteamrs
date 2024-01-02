import React from "react";
import Navbar from "../Navbar";
import { useRef, useState } from "react";
import APMonthsData2022 from "./Data/APMonthsData2022";
import Accordion from "./Accordion";
import APMonthsData2021 from "./Data/APMonthsData2021";
import JUMonthsData2022 from "./Data/JUMonthsData2022";
import APMonthsData2023 from "./Data/APMonthsData2023";
import JUMonthsData2023 from "./Data/JUMonthsData2023";
import JUMonthsData2024 from "./Data/JUMonthsData2024";
import APMonthsData2024 from "./Data/APMonthsData2024";
import "animate.css";
import Image from "next/image";

const Main = ({ toggle, isOpen }) => {
  const [year, setYear] = useState(2022);
  const [divizija, setDivizija] = useState("jake-uplate");
  const APdata2022 = APMonthsData2022;
  const APdata2021 = APMonthsData2021;
  const JUdata2022 = JUMonthsData2022;
  const APdata2023 = APMonthsData2023;
  const JUdata2023 = JUMonthsData2023;
  const APdata2024 = APMonthsData2024;
  const JUdata2024 = JUMonthsData2024;
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
                  zajednicu koja ima poverenja u nas. <br /> Vaš Flex Team.
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
              <div className="flex mx-auto shadow-lg mb-10">
                <button
                  onClick={() => setDivizija("jake-uplate")}
                  className={` hover:text-primary-metallic text-xl py-2 px-4 bg-zinc-900 border-t-2 border-l-2 rounded-l-lg border-b-2 border-primary ${divizija === "jake-uplate"
                      ? "text-primary-metallic"
                      : "text-gray-200"
                    }`}
                >
                  JAKE UPLATE
                </button>
                <button
                  onClick={() => setDivizija("admin-premium")}
                  className={` hover:text-primary-metallic bg-zinc-900 text-xl py-2 rounded-r-lg px-4 border-2  border-primary ${divizija === "admin-premium"
                      ? "text-primary-metallic"
                      : "text-gray-200"
                    }`}
                >
                  ADMIN PREMIUM
                </button>
              </div>
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
                    {divizija === "admin-premium"
                      ? APdata2022.map((data2022, index) => (
                        <Accordion
                          key={index}
                          mesec={data2022.mesec}
                          profit={data2022.profit}
                          dani={data2022.dani}
                        />
                      ))
                      : JUdata2022.map((data2022, index) => (
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
                    {divizija === "admin-premium" ? (
                      APdata2021.map((data2021, index) => (
                        <Accordion
                          key={index}
                          mesec={data2021.mesec}
                          profit={data2021.profit}
                          dani={data2021.dani}
                        />
                      ))
                    ) : (
                      <></>
                    )}
                  </>
                ) : year == 2023 ? (
                  <>
                    {divizija === "admin-premium"
                      ? APdata2023.map((data2022, index) => (
                        <Accordion
                          key={index}
                          mesec={data2022.mesec}
                          profit={data2022.profit}
                          dani={data2022.dani}
                        />
                      ))
                      : JUdata2023.map((data2022, index) => (
                        <Accordion
                          key={index}
                          mesec={data2022.mesec}
                          profit={data2022.profit}
                          dani={data2022.dani}
                        />
                      ))}{" "}
                  </>
                ) : year == 2024 ? (
                  <>
                    {divizija === "admin-premium"
                      ? APdata2024.map((data2022, index) => (
                        <Accordion
                          key={index}
                          mesec={data2022.mesec}
                          profit={data2022.profit}
                          dani={data2022.dani}
                        />
                      ))
                      : JUdata2024.map((data2022, index) => (
                        <Accordion
                          key={index}
                          mesec={data2022.mesec}
                          profit={data2022.profit}
                          dani={data2022.dani}
                        />
                      ))}{" "}
                  </>
                ) : (
                  <h1 className="text-2xl text-center text-gray-200 italic">
                    Nema podataka za ovu godinu.
                  </h1>
                )}
              </div>
            </div>
          </div>
          <div className="md:mx-6 flex flex-row justify-center items-start mt-20">
            <span className="text-primary text-2xl mt-0">*</span>
            <p className="text-xs text-center md:max-w-5xl mb-8 text-gray-200 pt-3">
              Profit tabela na našem sajtu odnosi se na admin premium grupu, kao
              i na grupu jakih uplata, na dovhat ruke imate čiste rezultate
              svake naše grupe.
              <br />
              Profit tabele na našoj sceni su u jako maloj meri zastupljene kod
              većine organizacija... Što je zaista tužno videti. Isto kao što je
              tužno videti da gomila njih prodaje narodu tikete koje ni sami ne
              isprate sa ulogom - a kada isprate to bude sa 5000 dinara.
              <br />
              Ne želim da omalovažavam nikoga, ali to je zaista smešno i tužno u
              isto vreme . Međutim širenjem svesti o ispravnijoj priči
              pokazivanjem profit, tabele pojavilo se i dosta organizacija koje
              je trenutno imaju. Ali još jedna tužna stvar je to što su one u
              98% slučajeva pune lažnih prolaza i uspeha... Očigledno je da
              danas ljudi lako prodaju obraz i za 20e članarine...
              <br />
              Ono što sam želeo da kažem je PAZITE SE lažnih PROFIT TABELA
              određenih pojedinaca.
              <br />
              Ono što definitivno mogu da kažem za sebe je da to u Flex Team-u
              nećete nikada videti, a razlog za to je što je moja politika od
              kad postojim da svaki tiket ikada poslat u grupi i svaka poruka tu
              ostaju ZAUVEK. - Dakle u Flex Teamu sve što se ikada pošalje i što
              je poslato i pre 7 meseci možete pogledati listanjem grupe. IZ tog
              razloga šanse za bilo kakvu korekciju profit tabele NISU MOGUĆE.
              SAMO SUROVA ISTINA I REALNOST i to je ono što će nas uvek
              izdvajati. - Dok u isto vreme sve organizacije, čak i poznatije,
              nastoje ka tome da sve što su poslali jedan dan, već sledeći dan
              brišu iz grupe i vidokruga ljudi . TOGA NEMA U FLEX TEAMU!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
