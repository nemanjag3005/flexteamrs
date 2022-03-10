import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-hero2 bg-cover flex items-center justify-center flex-col border-t-2 border-primary relative">
      <div className="flex flex-wrap justify-center md:justify-between w-full max-w-4xl  items-center md:py-12 py-4 px-8">
        <div className="p-4 mb-6">
          <Image src="/flex1.png" height="130px" width="111px"></Image>
        </div>
        <div className="flex justify-center space-x-6 md:space-x-14">
          <div>
            <h1 className="text-primary md:text-xl md:mb-6 text-md mb-3">Kontakt</h1>
            <ul className="text-gray-200 text-sm md:text-lg space-y-2">
              <li className="cursor-pointer hover:text-primary">
                <a href="mailto:flexteamtips@gmail.com">
                  flexteamtips@gmail.com
                </a>
              </li>

              <li className="cursor-pointer hover:text-primary">
                {" "}
                <a
                  href="https://www.instagram.com/flex_team_1/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>

              <li className="cursor-pointer hover:text-primary">
                {" "}
                <a
                  href="https://www.youtube.com/channel/UCb7QLFUbYwQ-84aMo7WCvNQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  Youtube{" "}
                </a>
              </li>

              <li className="cursor-pointer hover:text-primary">
                <a href="#" target="_blank" rel="noreferrer">
                  Paypal{" "}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-primary md:text-xl md:mb-6 mb-3">O Nama</h1>
            <ul className="text-gray-200 text-sm  md:text-lg space-y-2">
              <li className="cursor-pointer hover:text-primary">
                <Link href="/onama" >Naša Priča</Link>
              </li>
              <li className="cursor-pointer hover:text-primary">
                <Link href="/profit-tabela">Profit</Link>
              </li>
              <li className="cursor-pointer hover:text-primary"><Link href="/tiketi">Tiketi</Link></li>
              <li className="cursor-pointer hover:text-primary"><Link href="/paketi">Pridruži nam se</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-4 px-8 text-gray-200 max-w-4xl text-xs md:text-sm text-center">
        Dozvolite mi da vam pomognem u izgradnji života i karijere iz snova
        svojim znanjem i veštinama u industriji sportskih klađenja. Rezultati ne
        lažu! Ovo je vaša prilika da radite sa najboljima u poslu i da se
        upustite u akciju. Uclanite se u flex Team
      </div>
      <div className="py-4 px-8 flex w-full items-center justify-center space-x-12 text-gray-200">
        <div>
          <a
            href="https://www.instagram.com/flex_team_1/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 24 24"
              className="fill-gray-200 w-8 h-8 hover:fill-primary cursor-pointer"
            >
              {" "}
              <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
            </svg>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/channel/UCb7QLFUbYwQ-84aMo7WCvNQ"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 30 30"
              className="fill-gray-200 w-8 h-8 hover:fill-primary cursor-pointer"
            >
              {" "}
              <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="py-4 px-8 text-gray-200 text-xs md:text-sm md:pb-12 text-center">
        © 2022 Flex Team. All rights reserved.
      </div>
      </div>
    
  );
};

export default Footer;
