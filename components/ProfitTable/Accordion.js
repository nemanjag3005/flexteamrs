import React from "react";
import { useRef, useState } from "react";
import "animate.css";

const Accordion = ({ mesec, profit, dani }) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("transform duration-700 ease");
  const contentSpace = useRef(null);

  const toggleAccordion = () => {
    setActive(!active);
    // @ts-ignore
    setHeight(active ? "0px" : `${contentSpace.current.scrollHeight}px`);
    setRotate(
      active
        ? "transform duration-700 ease"
        : "transform duration-700 ease rotate-180"
    );
  };
  return (
    <div className="flex animate__animated animate__fadeInUp animate__faster flex-col mb-1 bg-hero3 shadow-lg border-2 border-primary-metallic rounded-md">
      <button
        className="py-5 shadow px-4 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
        onClick={() => toggleAccordion()}
      >
        <h1 className="inline-block w-32 text-left text-shadow text-2xl italic text-gray-200">
          {mesec}{" "}</h1>

          <span className={profit[0] == '+' ? "bg-green-600 shadow-xl rounded-full px-2 py-1 text-md text-shadow-none text-gray-50 not-italic" : "bg-red-600 shadow-xl rounded-full px-2 py-1 text-md text-shadow-none text-gray-50 not-italic"}>{profit} Profit</span>
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${rotate} inline-block h-6 w-6 stroke-gray-200`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-auto transition-max-height duration-700 ease-in-out"
      >
        <div className="py-4 px-4">
          <div className="flex flex-col">
            <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-3 py-3 text-xs font-medium leading-4 text-left text-gray-200 uppercase border-b border-gray-200">
                      Dan
                    </th>
                    <th className="px-3 py-3 text-xs font-medium leading-4 text-left text-gray-200 uppercase border-b border-gray-200">
                      Kvota
                    </th>
                    <th className="px-3 py-3 text-xs font-medium leading-4 text-left text-gray-200 uppercase border-b border-gray-200">
                      Ulog
                    </th>
                    <th className="px-3 py-3 text-xs font-medium leading-4 text-left text-gray-200 uppercase border-b border-gray-200">
                      Profit
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {dani.map((dani) => (
                    <tr key={dani}>
                      <td className="px-3 py-1 whitespace-no-wrap border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="text-sm font-medium leading-5 text-gray-200">
                            {dani.dan}
                          </div>
                        </div>
                      </td>

                      <td className="px-3 py-1 whitespace-no-wrap border-b border-gray-200">
                        <div className="text-sm leading-5 text-primary">
                          {dani.kvota}{" "}
                          {dani.prosao ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className={`h-4 w-4 inline mb-[0.2rem] stroke-green-600`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 inline mb-[0.2rem] stroke-red-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          )}
                        </div>
                      </td>

                      <td className="px-3 py-1 whitespace-no-wrap border-b border-gray-200">
                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                          {dani.ulog}
                        </span>
                      </td>

                      <td className="px-3 py-1 text-sm leading-5 text-primary whitespace-no-wrap border-b border-gray-200">
                        <span
                          className={`inline-flex px-2 text-xs font-semibold leading-5 text-gray-200 ${
                            dani.prosao ? "bg-green-600" : "bg-red-600"
                          } rounded-full`}
                        >
                          {dani.profit}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
