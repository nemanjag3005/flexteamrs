import Navbar from "../components/Navbar";
import React, { useState } from "react";
import "animate.css";

const Tickets = ({ isOpen, toggle }) => {
  const ticketFileNames = [
    "4th.png",
    "2nd.png",
    "3rd.png",
    "5th.png",
    "6th.png",
    "7th.png",
    "9th.png",
    "8th.png",
    "1st.png",
  ];

  const trial = ["Tiket N1 1-1.png"];

  const [ticketState, setTicketState] = useState("");
  const [ticketOpen, setTicketOpen] = useState(false);

  return (
    <div className="bg-secondary bg-repeat-y md:bg-no-repeat md:bg-cover bg-local pb-4">
      <Navbar toggle={toggle} isOpen={isOpen} />
      <div className="w-full flex items-center justify-center">
        <div
          className="mx-5 max-w-7xl
            p-4 rounded-xl bg-gradient-to-b mb-12 from-transparent to-pale px-10 md:px-24"
        >
          <div className="grid grid-flow-row grid-cols-1 md:grid-cols-4 sm:grid-cols-2  gap-8 md:gap-x-28 md:gap-y-14 w-full">
            {" "}
            {/* GRID */}
            {ticketFileNames.map((stringMapped, index) => {
              return (
                <>
                  <div
                    className="border-3 overflow-hidden animate__animated animate__fadeInUp border-primary"
                    onClick={() => {
                      setTicketState(stringMapped);
                      setTicketOpen(true);
                    }}
                    key={index}
                  >
                    <div className="group relative flex">
                      <div className=" absolute bg-hero3 top-0 left-0 w-full h-full p-5 hidden group-hover:flex items-center justify-center z-20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 stroke-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                          />
                        </svg>
                      </div>
                      <img
                        src={"/tickets/" + stringMapped}
                        className="w-full ease-in-out transform transition duration-300 hover:scale-105 cursor-pointer z-30 group-hover:opacity-25"
                      />
                    </div>
                  </div>
                </>
              );
            })}
            <div
              className={`fixed bg-fixed z-40 left-0 top-0 h-full w-full overflow-auto bg-transbl grid items-center justify-center place-items-center ${
                ticketOpen ? "block" : "hidden"
              }`}
            >
              {" "}
              {/* MODAL */}
              <div>
                <div className="w-[70%] mx-auto animate__animated animate__fadeInUp animate__faster md:w-xl mt-auto container relative">
                  <img
                    src={"/tickets/" + ticketState}
                    className="rounded-sl w-full z-50"
                  />

                  <span
                    className="cursor-pointer absolute top-3 right-5 z-60 text-4xl text-white"
                    onClick={() => setTicketOpen(false)}
                  >
                    {" "}
                    &times;{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
