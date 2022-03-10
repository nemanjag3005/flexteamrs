import React from "react";
import Navbar from "../Navbar";
import 'animate.css';
import Image from "next/image";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Services = ({ isOpen, toggle }) => {
  return (
    <div className="bg-secondary bg-repeat-y flex justify-center">
      <div className="max-w-7xl flex w-full flex-col">
        <Navbar toggle={toggle} isOpen={isOpen} />
        <div className="px-6 w-full py-4">
          <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="animate__animated animate__fadeInUp">
          <h1 className="uppercase md:text-7xl text-5xl mb-6 italic font-bold text-primary text-shadow">
            Naši Paketi
          </h1>
          <p className="text-gray-200 text-lg max-w-lg">
            Clanarina naseg tima je: * 30e (3600rsd) - Standard vip✅ (mesec
            dana od dana uplate)👑 * 100e(11700)- Admin premium✅ (pristup i
            pregled nasih tiketa na koje mi stavljamo pare od kojih je svaki
            ispracen jakim ulogom)
          </p>
          </div>
          <div className="ml-auto mr-auto hidden md:block">
            <Image src='/flex_icon_large.png' width='170px' height='195px' >
              </Image>
          </div>
          </div>
          <div className="hidden md:block py-12">
            <div className="flex flex-col mt-2">
              <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div className="inline-block min-w-full overflow-hidden align-middle shadow-md rounded-lg">
                  <table className="min-w-full border-2 border-primary rounded-lg shadow-lg">
                    <thead >
                      <tr >
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-400 uppercase border-b border-primary-metallic bg-hero3">
                          Paketi
                        </th>
                        <th className="px-6 py-3 text-xl font-medium text-shadow leading-4 tracking-wider text-center text-primary-metallic uppercase border-b border-primary-metallic bg-hero3">
                          Standard Vip
                        </th>
                        <th className="px-6 py-3 text-xl font-bold text-shadow leading-4 tracking-wider text-center text-platinum uppercase border-b border-primary-metallic bg-hero3">
                          Admin Premium
                        </th>
                      </tr>
                    </thead>

                    <tbody className="bg-transparent">
                      <tr>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-primary-metallic">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-md font-medium leading-5  text-gray-200">
                                Cena
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-primary-metallic">
                          <h1 className="text-4xl text-shadow  text-center text-primary-metallic ">
                            30€{" "}
                            <span className="text-lg text-shadow-none text-gray-400">
                              /mesečno
                            </span>
                          </h1>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-primary-metallic">
                          <h1 className="text-4xl text-shadow text-center text-primary-metallic ">
                            100€{" "}
                            <span className="text-lg text-shadow-none text-gray-400">
                              /mesečno
                            </span>
                          </h1>
                        </td>
                      </tr>
                      <tr className="bg-hero3">
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-primary-metallic">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-xl italic font-medium text-shadow leading-5 text-gray-200">
                                Šta Dobijaš?
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-primary-metallic"></td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-primary-metallic"></td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-zinc-600">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-md font-medium leading-5 text-gray-200">
                                Garantovan Profit
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-zinc-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 stroke-green-500 mx-auto"
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
                          </svg>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-zinc-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 stroke-green-500 mx-auto"
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
                          </svg>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-zinc-600">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-md font-medium leading-5 text-gray-200">
                                Dnevni tiketi
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-zinc-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 stroke-green-500 mx-auto"
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
                          </svg>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-zinc-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 stroke-green-500 mx-auto"
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
                          </svg>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-zinc-600">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-md font-medium leading-5 text-gray-200">
                                Dostupnost 24h
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-zinc-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 stroke-green-500 mx-auto"
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
                          </svg>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-zinc-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 stroke-green-500 mx-auto"
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
                          </svg>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-zinc-600">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-md font-medium leading-5 text-gray-200">
                                Free Tiketi Sigurnosti
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-zinc-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 stroke-green-500 mx-auto"
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
                          </svg>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-zinc-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 stroke-green-500 mx-auto"
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
                          </svg>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-primary-metallic">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-md font-medium leading-5 text-gray-200">
                                Uvid u Naše Tikete
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-primary-metallic">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 stroke-zinc-400 mx-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M20 12H4"
                            />
                          </svg>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-primary-metallic">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 stroke-green-500 mx-auto"
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
                          </svg>
                        </td>
                      </tr>
                      <tr className="bg-hero3">
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-primary-metallic">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-xl italic text-shadow font-medium leading-5 text-gray-200">
                                Kako?
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-primary-metallic"></td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-primary-metallic"></td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-no-wrap">
                          <div className="flex items-center">
                            <div className="ml-4"></div>
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap">
                          <p className="text-gray-200 max-w-lg text-md ">
                            📈Standard vip📈 je grupa koja se nalazi na telegram
                            aplikaciji u kojoj se svakoga dana salje najbolji i
                            najsigurniji moguci tiket odabran za pravljenje
                            najveceg profita tog dana. Najcesce su u pitanju
                            singlovi kvota 1.6 - 2.3✅ naravno izmedju ostalog i
                            dublovi. Najbitnije sto je na vama je da se
                            zargonski receno samo pretvorite u “robota” i sve
                            sto se posalje samo automatski odigrate , naravno
                            ispraceno sa procentualnim ulogom koji smo mi
                            prethodno poslali u grupi . Vremenom gledate kako se
                            mesec sve vise priblizava kraju tako ce vasa banka
                            rasti iz dana u dan to je CINJENICA✅👑. Jer sve ovo
                            sto mi prezentujemo pretstavlja REALNU pricu i
                            ispravnost a ne za razliku od ostalih “pricanje
                            bajki” … Prilikom prvog susreta sa ubacivanjem u
                            nasu grupu nakon vase uplate pre svakog igranja
                            kliknite na pinovanu poruku gde se nalazi lista
                            pravila obaveznih za pridrzavanje ukoliko zelis da
                            ti garantujem profit. Uzivajte u igri vas FLEX
                            TEAM.✅👑🌎
                          </p>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap ">
                          <p className="text-gray-200 max-w-lg text-md">
                            🌎Admin premium🌎 - Placanjem pristupa ovoj grupi
                            automatski si sebi obezbedio uvid u apsolutno sve
                            sto cu odigrati datog meseca kao i u to koliko cu
                            novca uloziti na odredjeni tiket. Svaki put kada ja
                            igram dobices 5,6 h pre utakmice sliku tog tiketa sa
                            slikom moje uplate na njemu. Uzivaj i gledaj kako
                            najbolji svih vremena gradi svoj profit apsolutno
                            svaki mesec bez izuzetaka. Vaš FLEX TEAM📈
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="py-12 space-y-6 md:hidden">
            <div className="border-2 border-primary-metallic rounded-lg">
              <h1 className="text-4xl uppercase italic px-4 py-2 bg-primary-metallic w-full text-gray-200 text-shadow">
                Standard Vip
              </h1>
              <div className="py-6 px-4">
                <h1 className="text-4xl text-primary-metallic ">
                  30€ <span className="text-lg text-gray-400">/mesečno</span>
                </h1>
                <p className="text-gray-400 text-md mt-2">
                  Članarina važi mesec dana od dana uplate.
                </p>
                <h1 className="text-gray-200 italic text-3xl mt-4 text-shadow w-full border-primary-metallic border-t-2 pt-4">
                  Šta dobijaš?
                </h1>
                <div className="w-full flex mt-6 justify-between items-center">
                  <h1 className="text-lg text-gray-200">Dnevni Tiketi</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 stroke-gray-200"
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
                  </svg>
                </div>
                <div className="w-full flex my-3 justify-between items-center">
                  <h1 className="text-lg text-gray-200">Garantovan Profit</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 stroke-gray-200"
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
                  </svg>
                </div>
                <h1 className="text-gray-200 italic text-3xl mt-4 text-shadow w-full border-primary-metallic border-t-2 pt-4">
                  Kako?
                </h1>
                <p className="text-gray-200 text-md mt-4">
                  📈Standard vip📈 je grupa koja se nalazi na telegram
                  aplikaciji u kojoj se svakoga dana salje najbolji i
                  najsigurniji moguci tiket odabran za pravljenje najveceg
                  profita tog dana. Najcesce su u pitanju singlovi kvota 1.6 -
                  2.3✅ naravno izmedju ostalog i dublovi. Najbitnije sto je na
                  vama je da se zargonski receno samo pretvorite u “robota” i
                  sve sto se posalje samo automatski odigrate , naravno
                  ispraceno sa procentualnim ulogom koji smo mi prethodno
                  poslali u grupi . Vremenom gledate kako se mesec sve vise
                  priblizava kraju tako ce vasa banka rasti iz dana u dan to je
                  CINJENICA✅👑. Jer sve ovo sto mi prezentujemo pretstavlja
                  REALNU pricu i ispravnost a ne za razliku od ostalih “pricanje
                  bajki” … Prilikom prvog susreta sa ubacivanjem u nasu grupu
                  nakon vase uplate pre svakog igranja kliknite na pinovanu
                  poruku gde se nalazi lista pravila obaveznih za pridrzavanje
                  ukoliko zelis da ti garantujem profit. Uzivajte u igri vas
                  FLEX TEAM.✅👑🌎
                </p>
              </div>
            </div>
            <div className="border-2 border-platinum rounded-lg">
              <h1 className="text-4xl uppercase italic px-4 py-2 bg-platinum w-full text-gray-200 text-shadow">
                Admin Premium
              </h1>
              <div className="py-6 px-4">
                <h1 className="text-4xl text-primary-metallic ">
                  100€ <span className="text-lg text-gray-400">/mesečno</span>
                </h1>
                <p className="text-gray-400 text-md mt-2">
                  Članarina važi mesec dana od dana uplate.
                </p>
                <h1 className="text-gray-200 italic text-3xl mt-4 text-shadow w-full border-primary-metallic border-t-2 pt-4">
                  Šta dobijaš?
                </h1>
                <div className="w-full flex mt-6 justify-between items-center">
                  <h1 className="text-lg text-gray-200">Dnevni Tiketi</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 stroke-gray-200"
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
                  </svg>
                </div>
                <div className="w-full flex my-3 justify-between items-center">
                  <h1 className="text-lg text-gray-200">Garantovan Profit</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 stroke-gray-200"
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
                  </svg>
                </div>
                <h1 className="text-gray-200 italic text-3xl mt-4 text-shadow w-full border-primary-metallic border-t-2 pt-4">
                  Kako?
                </h1>
                <p className="text-gray-200 text-md mt-4">
                  🌎Admin premium🌎 - Placanjem pristupa ovoj grupi automatski
                  si sebi obezbedio uvid u apsolutno sve sto cu odigrati datog
                  meseca kao i u to koliko cu novca uloziti na odredjeni tiket.
                  Svaki put kada ja igram dobices 5,6 h pre utakmice sliku tog
                  tiketa sa slikom moje uplate na njemu. Uzivaj i gledaj kako
                  najbolji svih vremena gradi svoj profit apsolutno svaki mesec
                  bez izuzetaka. Vaš FLEX TEAM📈
                </p>
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl text-primary text-shadow italic md:mt-8 font-bold mb-12">
            PRETPLATI SE
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 md:space-x-12 w-full md:space-y-0 mb-16 space-y-6">
          <AnimationOnScroll animateIn="animate__fadeInUp" offset={200} animateOnce={true}>
            <div>
              <h1 className="text-4xl text-primary-metallic font-bold text-shadow italic">
                <span className="text-7xl text-primary-metallic text-shadow">
                  1.
                </span>{" "}
                UPLATA
              </h1>
              <p className="text-md mt-2 text-gray-200">
                Uplati iznos članarine za izabrati paket na račun /račun/ i
                pošalji sliku uplatnice na *nalog*.
              </p>
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" delay={200} offset={150} animateOnce={true}>
            <div>
              <h1 className="text-4xl text-primary-metallic font-bold text-shadow italic">
                <span className="text-7xl text-primary-metallic text-shadow">
                  2.
                </span>{" "}
                UČLANJENJE
              </h1>
              <p className="text-md mt-2 text-gray-200">
                Učlanjuješ se tako što nakon uplate prvo preuzimaš aplikaciju
                Telegram nakon čega bivaš ubačen u grupu koja odgovara tvom
                paketu!
              </p>
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" delay={400} offset={200} animateOnce={true}>
            <div>
              <h1 className="text-4xl text-primary-metallic font-bold text-shadow italic">
                <span className="text-7xl text-primary-metallic text-shadow">
                  3.
                </span>{" "}
                IGRA
              </h1>
              <p className="text-md mt-2 text-gray-200">
                Unutar grupe u Telegramu biće objavljivani Tiketi na dnevnom
                nivou. Tikete igraš po principu prepiši i igraj. Sva uputstva,
                analiza kao i ulog biće objavljeni!
              </p>
            </div>
            </AnimationOnScroll>
          </div>
          <h1 className="text-5xl md:text-7xl text-primary text-shadow italic font-bold md:mb-20 md:mt-24 mb-12">
            ČESTO POSTAVLJANA PITANJA...
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 md:space-y-0 items-center w-full mb-16 space-y-6">
            <div className="md:max-w-md">
              <h1 className="text-3xl text-gray-200 font-bold text-shadow ">
                Šta je to unit?
              </h1>
              <p className="text-md mt-2 text-gray-300">
                U flex teamu unit dobijate kada ukupni budzet koji ste odvojili
                za kladjenje ( ulaganje ) podelite sa 50 . Primer ukoliko ste
                odvojili 10.000 rsd vas 1 unit bice 10.000 : 50 = 200rsd . Znaci
                kada ispod tiketa koji se igra napisemo ulog 7/10 - Broj 7
                predstavlja broj unita koji cete uloziti na taj tiket. Znaci
                ukoliko vam je unit 200 rsd na taj tiket ulozicete
                7x200=1400rsd.
              </p>
            </div>
            <div className="md:max-w-md">
              <h1 className="text-3xl text-gray-200 font-bold text-shadow ">
                Koliko mogu zaraditi za mesec dana?
              </h1>
              <p className="text-md mt-2 text-gray-300">
                Sve zavisi od vaseg ukupnog budzeta kojim raspolazete koji cete
                kasnije podeliti i dobiti vas unit. Pocetak ovog meseca je za
                slepe pratioce svakog naseg tiketa i uloga za 2,3 dana uzeo
                citavih +17 unita. Za 2,3 dana bi ste zaradili ukoliko vam je
                budzet 10.000 rsd tacnije 1 unit 200. Svaki tiket se najcesce
                igra sa 5-8 unit-a.Profit cist bi vam bio sa najmanje rizicnim
                ulogom za 2,3 dana 3400 rsd. Tacnije 1150 dinara ZA DAN. Ne
                zaboravite ne radite nista i sve je legalno.I to sa budzetom
                10.000 rsd da imate 20.000 rsd (180e ukupnog budzeta) uzimali bi
                ste 20e za dan - ne radeci apsolutno nista.I sa minimalnim
                rizikom kojim rizikujete samo 4% od ukupnog budzeta.
              </p>
            </div>
            <div className="md:max-w-md">
              <h1 className="text-3xl text-gray-200 font-bold text-shadow ">
                Da li postoji mogucnost izgubiti novac?
              </h1>
              <p className="text-md mt-2 text-gray-300">
                Pracenjem unita koji vam mi odredimo i dajemo i igranjem svakog
                tiketa koji posaljemo apsolutno ne postoji nikakva sansa da ne
                profitirate i to jako dobro na mesecnom nivou naravno.Ali kada
                se pravite pametni i all in - ujete , Ili preskacete tikete,
                povezujete ih , dodajete svoje parove na nase tikete za takve
                poteze ne odgovaramo.Pojedini retki dan moze zavrsiti u minusu
                ali mesec je od pocetka flex teama uvek u dobrom profitu.
              </p>
            </div>
            <div className="md:max-w-md">
              <h1 className="text-3xl text-gray-200 font-bold text-shadow ">
                Koliko je koeficijent prolaznosti?
              </h1>
              <p className="text-md mt-2 text-gray-300">
                Prolazni tiketi su svakoga meseca nekih 85-95% zavisi od meseca
                do meseca naravno. Ali sistem unit-a i progress u nasem timu je
                toliko jak da i sa prolaznoscu 70% bi mogli iskidati u profitu.
                Kladite se pametno.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
