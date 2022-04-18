import React from "react";
import Navbar from "../Navbar";
import "animate.css";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";

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
                Članarina našeg tima je: <br />{" "}
                <span className="font-bold">30e (3600rsd)</span> - Standard
                vip✅ (mesec dana od dana uplate) <br />{" "}
                <span className="font-bold">100e (11700rsd)</span> - Admin
                premium✅ (pristup i pregled naših tiketa na koje mi stavljamo
                pare od kojih je svaki ispraćen jakim ulogom)
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
          <div className="hidden md:block py-12">
            <div className="flex flex-col mt-2">
              <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div className="inline-block min-w-full overflow-hidden align-middle shadow-md rounded-lg">
                  <table className="min-w-full table-fixed border-2 border-primary rounded-lg shadow-lg">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-400 uppercase border-b border-primary-metallic bg-hero3">
                          Paketi
                        </th>
                        <th className="px-6 py-3 text-xl font-medium text-shadow leading-4 tracking-wider text-center text-green-600 uppercase border-b border-primary-metallic bg-hero3">
                          JAKE UPLATE
                        </th>
                        <th className="px-6 py-3 text-xl font-medium text-shadow leading-4 tracking-wider text-center text-primary-metallic uppercase border-b border-primary-metallic bg-hero3">
                          Standard Vip
                        </th>
                        <th className="px-6 py-3 text-xl font-medium text-shadow leading-4 tracking-wider text-center text-platinum uppercase border-b border-primary-metallic bg-hero3 mr-auto">
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
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-r border-primary-metallic">
                          <h1 className="text-4xl text-shadow  text-center text-primary-metallic ">
                            15€{" "}
                            <span className="text-lg text-shadow-none text-gray-400">
                              /mesečno
                            </span>
                          </h1>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-r border-primary-metallic">
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

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-primary-metallic"></td>
                      </tr>

                      <tr>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-zinc-600">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-md font-medium leading-5 text-gray-200">
                                Tiketa Mesečno
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-r border-r-primary-metallic border-zinc-600">
                          <h1 className="text-primary text-center text-xl">
                            70-110
                          </h1>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-r border-r-primary-metallic border-zinc-600">
                          <h1 className="text-primary text-center text-xl">
                            Svaki Dan
                          </h1>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-zinc-600">
                          <h1 className="text-primary text-center text-xl">
                            15-20
                          </h1>
                        </td>
                      </tr>
                      <tr></tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-zinc-600">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-md font-medium leading-5 text-gray-200">
                                Podrška
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-r border-r-primary-metallic border-zinc-600">
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
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-r border-r-primary-metallic border-zinc-600">
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
                                Tiketi Najuspešnijih
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-r border-r-primary-metallic border-zinc-600">
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
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-r border-r-primary-metallic border-zinc-600">
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
                        <td className="px-6 py-4 whitespace-no-wrap border-b  border-zinc-600">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-md font-medium leading-5 text-gray-200">
                                Saveti
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-r border-r-primary-metallic border-zinc-600">
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
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-r border-r-primary-metallic border-zinc-600">
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
                        <td className="px-6 py-4 whitespace-no-wrap border-b  border-zinc-600">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-md font-medium leading-5 text-gray-200">
                                Garantovan Profit
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-r border-r-primary-metallic border-zinc-600">
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
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-r border-r-primary-metallic border-zinc-600">
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
                                Svaki Mesec u Plusu
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-r border-r-primary-metallic border-zinc-600">
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
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-r border-r-primary-metallic border-zinc-600">
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
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-r border-r-primary-metallic border-primary-metallic">
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
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-r border-r-primary-metallic border-primary-metallic">
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

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-primary-metallic"></td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-no-wrap">
                          <div className="flex items-center">
                            <div className="ml-4"></div>
                          </div>
                        </td>

                        <td className="px-6 py-4 flex whitespace-no-wrap ">
                          <p className="text-gray-200 max-w-lg text-md ">
                          💸Jake uplate grupa💸 je grupa koja svakodnevno šalje informacije koje samo flex team poseduje o najuspešnijim igračima kladionice širom Srbije. Svakodnevno se šalje prosecno 3 do 6 tiketa sa različitih uplatnih mesta u lokalima u kojima su jaki igrači uplatili svoje tikete. Ova metoda se pokazala kao jako uspešna, pošto Vam šaljemo slike tiketa na koje su određeni ljudi imali toliku dozu sigurnosti, da su stavili od 500 do 10 000 evra. Kvote koje gađaju su najčešće zaista zavidne ~1.9-4.0 a politika i money menadžment ove grupe je da pratite apsolutno svaki tiket koji pošaljem konstantnim (identičnim) ulogom.
                          </p>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-r border-l border-primary-metallic">
                          <p className="text-gray-200 max-w-lg text-md">
                            📈Standard vip📈 je grupa koja se nalazi na telegram
                            aplikaciji u kojoj se svakoga dana šalje najbolji i
                            najsigurniji mogući tiket odabran za pravljenje
                            najvećeg profita tog dana. Najčešće su u pitanju
                            singlovi kvota 1.6-2.3✅ naravno između ostalog i
                            dublovi. Najbitnije što je na vama samo da se
                            zavalite u stolicu i sve što se pošalje samo
                            odigrate , naravno svaki tiket treba ispratiti
                            procentualnim ulogom koji smo mi prethodno poslali u
                            grupi. Kako se mesec privodi kraju tako će i vaša
                            banka rasti iz dana u dan to je ČINJENICA✅👑 Takođ
                            pre svakog igranja kliknite na pinovanu poruku gde
                            se nalazi lista pravila obaveznih za pridržavanje
                            ukoliko želiš da ti garantujem profit. Uživajte u
                            igri. Vaš FLEX TEAM.✅👑🌎
                          </p>
                        </td>
                        <td className="px-6 py-4 flex whitespace-no-wrap ">
                          <p className="text-gray-200 max-w-lg text-md">
                            🌎Admin premium🌎 - Plaćanjem pristupa ovoj grupi
                            automatski si sebi obezbedio uvid u apsolutno sve
                            sto ću odigrati datog meseca kao i u to koliko ću
                            novca uložiti na određeni tiket. Ali ne, moj budžet
                            za klađenje na mesečnom nivou nije 10, 20, 50...
                            hiljada dinara, već 300+ hiljada dinara, apsolutno
                            svaki mesec, bez izuzetaka. Svaki put kada ja igram
                            dobićes 5-6h pre utakmice sliku tog tiketa sa slikom
                            moje uplate na njemu. Uživaj i gledaj kako najbolji
                            svih vremena gradi svoj profit apsolutno svaki mesec
                            bez izuzetaka. Vaš FLEX TEAM📈
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
            <div className="border-2 border-green-700 rounded-lg">
              <h1 className="text-4xl uppercase italic px-4 py-2 bg-green-700 w-full text-gray-200 text-shadow">
                  JAKE UPLATE
              </h1>
              <div className="py-6 px-4">
                <h1 className="text-4xl text-primary-metallic ">
                  15€ <span className="text-lg text-gray-400">/mesečno</span>
                </h1>

                <h1 className="text-gray-200 italic text-3xl mt-4 text-shadow w-full border-primary-metallic border-t-2 pt-4">
                  Šta dobijaš?
                </h1>
                <div className="w-full flex mt-6 justify-between items-center">
                  <h1 className="text-lg text-gray-200">Mesečno Tiketa</h1>
                  <h1 className="text-xl text-gray-200">80</h1>
                </div>
                <div className="w-full flex my-3 justify-between items-center">
                  <h1 className="text-lg text-gray-200">Podrška</h1>
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
                  <h1 className="text-lg text-gray-200">Tiketi Najuspešnijih</h1>
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
                  <h1 className="text-lg text-gray-200">Saveti</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 stroke-zinc-400"
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
                </div>
                <div className="w-full flex my-3 justify-between items-center">
                  <h1 className="text-lg text-gray-200">Garantovan Profit</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 stroke-zinc-400"
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
                </div>
                <div className="w-full flex my-3 justify-between items-center">
                  <h1 className="text-lg text-gray-200">Svaki Mesec u Plusu</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 stroke-zinc-400"
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
                </div>
                <div className="w-full flex my-3 justify-between items-center">
                  <h1 className="text-lg text-gray-200">Uvid u Naše Tikete</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 stroke-zinc-400"
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
                </div>
                <h1 className="text-gray-200 italic text-3xl mt-4 text-shadow w-full border-primary-metallic border-t-2 pt-4">
                  Kako?
                </h1>
                <p className="text-gray-200 text-md mt-4">
                  💸Jake uplate grupa💸 je grupa koja svakodnevno šalje informacije koje samo flex team poseduje o najuspešnijim igračima kladionice širom Srbije. Svakodnevno se šalje prosecno 3 do 6 tiketa sa različitih uplatnih mesta u lokalima u kojima su jaki igrači uplatili svoje tikete. Ova metoda se pokazala kao jako uspešna, pošto Vam šaljemo slike tiketa na koje su određeni ljudi imali toliku dozu sigurnosti, da su stavili od 500 do 10 000 evra. Kvote koje gađaju su najčešće zaista zavidne ~1.9-4.0 a politika i money menadžment ove grupe je da pratite apsolutno svaki tiket koji pošaljem konstantnim (identičnim) ulogom.
                </p>
              </div>
            </div>
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
                  <h1 className="text-lg text-gray-200">Mesečno Tiketa</h1>
                  <h1 className="text-lg text-gray-200">Svaki Dan</h1>
                </div>
                <div className="w-full flex my-3 justify-between items-center">
                  <h1 className="text-lg text-gray-200">Podrška</h1>
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
                  <h1 className="text-lg text-gray-200">Tiketi Najuspešnijih</h1>
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
                  <h1 className="text-lg text-gray-200">Saveti</h1>
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
                    className="h-8 w-8 stroke-zinc-400"
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
                </div>
                <div className="w-full flex my-3 justify-between items-center">
                  <h1 className="text-lg text-gray-200">Svaki Mesec u Plusu</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 stroke-zinc-400"
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
                </div>
                <div className="w-full flex my-3 justify-between items-center">
                  <h1 className="text-lg text-gray-200">Uvid u Naše Tikete</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 stroke-zinc-400"
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
                </div>
                <h1 className="text-gray-200 italic text-3xl mt-4 text-shadow w-full border-primary-metallic border-t-2 pt-4">
                  Kako?
                </h1>
                <p className="text-gray-200 text-md mt-4">
                  📈Standard vip📈 je grupa koja se nalazi na telegram
                  aplikaciji u kojoj se svakoga dana šalje najbolji i
                  najsigurniji mogući tiket odabran za pravljenje najvećeg
                  profita tog dana. Najčešće su u pitanju singlovi kvota
                  1.6-2.3✅ naravno između ostalog i dublovi. Najbitnije što je
                  na vama samo da se zavalite u stolicu i sve što se pošalje
                  samo odigrate , naravno svaki tiket treba ispratiti
                  procentualnim ulogom koji smo mi prethodno poslali u grupi.
                  Kako se mesec privodi kraju tako će i vaša banka rasti iz dana
                  u dan to je ČINJENICA✅👑 Takođ pre svakog igranja kliknite na
                  pinovanu poruku gde se nalazi lista pravila obaveznih za
                  pridržavanje ukoliko želiš da ti garantujem profit. Uživajte u
                  igri. Vaš FLEX TEAM.✅👑🌎
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
                  <h1 className="text-lg text-gray-200">Mesečno Tiketa</h1>
                  <h1 className="text-lg text-gray-200">15-20</h1>
                </div>
                <div className="w-full flex my-3 justify-between items-center">
                  <h1 className="text-lg text-gray-200">Podrška</h1>
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
                  <h1 className="text-lg text-gray-200">Tiketi Najuspešnijih</h1>
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
                  <h1 className="text-lg text-gray-200">Saveti</h1>
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
                <div className="w-full flex my-3 justify-between items-center">
                  <h1 className="text-lg text-gray-200">Svaki Mesec u Plusu</h1>
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
                  <h1 className="text-lg text-gray-200">Uvid u Naše Tikete</h1>
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
                  🌎Admin premium🌎 - Plaćanjem pristupa ovoj grupi automatski
                  si sebi obezbedio uvid u apsolutno sve sto ću odigrati datog
                  meseca kao i u to koliko ću novca uložiti na određeni tiket.
                  Ali ne, moj budžet za klađenje na mesečnom nivou nije 10, 20,
                  50... hiljada dinara, već 300+ hiljada dinara, apsolutno svaki
                  mesec, bez izuzetaka. Svaki put kada ja igram dobićes 5-6h pre
                  utakmice sliku tog tiketa sa slikom moje uplate na njemu.
                  Uživaj i gledaj kako najbolji svih vremena gradi svoj profit
                  apsolutno svaki mesec bez izuzetaka. Vaš FLEX TEAM📈
                </p>
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl text-primary text-shadow italic md:mt-8 font-bold mb-12">
            PRETPLATI SE
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 md:space-x-12 w-full md:space-y-0 mb-16 space-y-6">
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              offset={200}
              animateOnce={true}
            >
              <div>
                <h1 className="text-4xl text-primary-metallic font-bold text-shadow italic">
                  <span className="text-7xl text-primary-metallic text-shadow">
                    1.
                  </span>{" "}
                  UPLATA
                </h1>
                <p className="text-md mt-2 text-gray-200">
                Za sve načine uplate članarine, kao i dodatne informacije iskljucivo se vrše putem poruke našem instagram profilu <a  href="https://www.instagram.com/flex_team_n1/" target='_blank' rel="noreferrer">@flex_team_n1</a>.
                </p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              delay={200}
              offset={150}
              animateOnce={true}
            >
              <div>
                <h1 className="text-4xl text-primary-metallic font-bold text-shadow italic">
                  <span className="text-7xl text-primary-metallic text-shadow">
                    2.
                  </span>{" "}
                  UČLANJENJE
                </h1>
                <p className="text-md mt-2 text-gray-200">
                Nakon što uplatiš na jedan od nacina koji izabereš, prinosiš sliku uplate takodje u poruci našem instagram profilu nakon čega čekas povratnu poruku, i dalja uputstva.
                </p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              delay={400}
              offset={200}
              animateOnce={true}
            >
              <div>
                <h1 className="text-4xl text-primary-metallic font-bold text-shadow italic">
                  <span className="text-7xl text-primary-metallic text-shadow">
                    3.
                  </span>{" "}
                  IGRA
                </h1>
                <p className="text-md mt-2 text-gray-200">
                Sva uputstva o igri, i pravilima kojima se morati pridržavati, ukoliko želite da budem odgovoran za Vaš profit dobijate u grupi u koju ste ubačeni.

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
                U Flex Teamu unit dobijate kada ukupni budžet koji ste odvojili
                za klađenje(ulaganje) podelite sa 50. Primer ukoliko ste
                odvojili 10.000 rsd vas 1 unit biće 10.000:50=200rsd. Znači kada
                ispod tiketa koji se igra napišemo ulog 7/10 - Broj 7
                predstavlja broj unita koji ćete uložiti na taj tiket. Znači
                ukoliko vam je unit 200 rsd na taj tiket uložićete
                7x200=1400rsd.
              </p>
            </div>
            <div className="md:max-w-md">
              <h1 className="text-3xl text-gray-200 font-bold text-shadow ">
                Koliko mogu zaraditi za mesec dana?
              </h1>
              <p className="text-md mt-2 text-gray-300">
                Sve zavisi od vašeg ukupnog budžeta kojim raspolažete. Početak
                ovog meseca je za ljude koji su ispratili svaki naš tiket i ulog
                za 2,3 dana doneo čitavih +17 unita. Ukoliko vam je budžet
                10.000 rsd tačnije 1 unit 200, za 2-3 dana biste zaradili
                3400rsd. Tačnije 1150 dinara DNEVNO. Ne zaboravite ne radite
                ništa i sve je legalno.I to sa budžetom od 10.000 rsd. Da imate
                20.000 rsd (180e ukupnog budzeta) uzimali biste 20e za dan - ne
                radeći apsolutno ništa.I sve to sa minimalnim rizikom kojim
                rizikujete samo 4% od ukupnog budzeta.
              </p>
            </div>
            {/* <div className="md:max-w-md">
              <h1 className="text-3xl text-gray-200 font-bold text-shadow ">
                Da li postoji mogucnost izgubiti novac?
              </h1>
              <p className="text-md mt-2 text-gray-300">
                Praćenjem unita koji vam mi odredimo i dajemo i igranjem svakog
                tiketa koji pošaljemo apsolutno ne postoji nikakva šansa da
                izgubite na mesečnom nivou. Ali ako se pravite pametni i all
                in-ujete , Ili preskačete tikete, povezujete ih , dodajete svoje
                parove na naše tikete  za takve poteze ne odgovaramo.Retko se
                može desiti da se dan završi u minusu ali na kraju meseca ste
                uvek u profitu.
              </p>
            </div> */}
            <div className="md:max-w-md">
              <h1 className="text-3xl text-gray-200 font-bold text-shadow ">
                Koliki je koeficijent prolaznosti?
              </h1>
              <p className="text-md mt-2 text-gray-300">
                Prolazni tiketi su svakog meseca nekih 70-85% zavisi od meseca
                do meseca naravno. Ali sistem unit-a i progress u našem timu je
                toliko jak da bi i sa prolaznošću 60% mogli da pokidate profit i
                zaradite nenormalno mnogo. Kladite se pametno.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
