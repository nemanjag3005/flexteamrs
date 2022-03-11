import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { useState } from "react";
import "animate.css";

const Biography = ({ isOpen, toggle }) => {

  return (
    <div className="bg-secondary  bg-no-repeat bg-local bg-cover pb-2 min-h-screen">
      <Navbar toggle={toggle} isOpen={isOpen} />
      <div className="w-full flex items-center justify-center">
        <div
          className="mx-5 max-w-7xl
       p-4 rounded-xl bg-gradient-to-b mb-12 from-transparent to-pale"
        >
          <div className="grid gap-x-10 gap-y-4 grid-cols-1 md:grid-cols-2  items-center">
            <div className="md:hidden flex justify-center">
              <img
                src="/laske.png"
                className="w-11/12 h-auto className=w-auto rounded-sl border-4 object-contain z-10"
              />
            </div>
            <div>
            <h1 className="text-primary animate__animated animate__fadeInUp text-center mb-12 italic font-bold text-5xl md:text-7xl text-shadow">
              O NAMA
            </h1>
            <p className="text-center text-gray-200">
              <span className="text-primary">Flex Team</span> se smatra jednim
              od{" "}
              <span className="text-primary">elitnih sportskih stranica</span>{" "}
              ove ere, koji je postavio brojne rekorde u analizi sportskih
              dogadjaja. Danas je{" "}
              <span className="text-primary">Flex Team organizacija</span> koja
              pruza mocne clanske pakete za sve one koji zele da zarade od
              sporta. Poznat sam kao Matija Lazic, jedan od najtraženijih i
              najuspešnijih sportskih tipstera na Balkanu. Izgradio sam izuzetnu
              karijeru i ugled u poslednjih godinu dana i stekao bogatstvo. Moja
              imovina vredi više od pola miliona i dolazi sa načinom života koji
              se samo može zamisliti. Dozvolite mi da vam pomognem u izgradnji
              života i karijere iz snova svojim znanjem i veštinama u industriji
              sportskih klađenja.
              <br />
              <br />
              <span className="text-primary">
                Ovo je vaša prilika da radite sa najboljima u poslu i na akciji!
              </span>
              <br />
              <br />
              Ako upravo sada citate about us sekciju mozete primetiti da je nas
              sajt izgradjen da nas podigne na
              <span className="text-primary"> najvisi nivo u nasem poslu.</span>
              <br />
              <br />
              Sve to zahteva mnogo posla, ali mi smo od početka bili tu za vas i
              tako će i ostati. Od nule smo izgradili imperiju i ne nameravamo
              da stanemo. U ovom poslu ne postoji niko bolji od nas!
              <br />
              <br />
              <br />
              Voli vas ceo <span className="text-primary">Flex Team!</span>
            </p>
            </div>
            <div className="hidden md:block ml-auto group relative flex justify-center w-11/12">
              <div className="absolute h-full rounded-sl border-4 bg-gradient-to-b from-transparent to-black inset-x-0 bottom-0 z-20 grid grid-flow-col items-end  transition-opacity opacity-0 group-hover:opacity-100 duration-500">
                <div className="mb-5 mx-10 grid grid-flow-col items-end justify-around">
                  <a
                    href="https://www.youtube.com/channel/UCb7QLFUbYwQ-84aMo7WCvNQ/featured"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      width="42"
                      height="30"
                      viewBox="0 0 42 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.8764 29.6236H20.8347C20.7055 29.6236 7.78261 29.5986 4.52219 28.7131C2.72932 28.2301 1.32917 26.8292 0.847193 25.0361C0.260898 21.7285 -0.0222213 18.3743 0.00136003 15.0152C-0.0137876 11.6507 0.276993 8.2917 0.87011 4.9798C1.36533 3.18503 2.75934 1.77761 4.54928 1.26522C7.72011 0.431885 20.2868 0.431885 20.8201 0.431885H20.8639C20.9951 0.431885 33.9514 0.456885 37.1784 1.3423C38.9676 1.82774 40.3649 3.22584 40.8493 5.01522C41.4542 8.3351 41.7382 11.7055 41.6972 15.0798C41.7118 18.4403 41.4203 21.7951 40.8264 25.1027C40.3382 26.8936 38.9371 28.2915 37.1451 28.7756C33.9784 29.6152 21.4097 29.6236 20.8764 29.6236ZM16.7097 8.77564L16.6993 21.2756L27.5576 15.0256L16.7097 8.77564Z"
                        fill="#ECC770"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/flex_team_1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.8672 30.0834C11.7672 30.0834 11.2839 30.0618 9.68385 29.9918C8.43614 29.9507 7.20458 29.6971 6.04219 29.2418C4.03104 28.4591 2.44076 26.8682 1.65885 24.8568C1.22103 23.6902 0.984884 22.4576 0.960521 21.2118C0.867188 19.6151 0.867188 19.0918 0.867188 15.0234C0.867188 10.9118 0.888854 10.4318 0.960521 8.8401C0.985417 7.59597 1.22156 6.36512 1.65885 5.2001C2.43991 3.18599 4.03277 1.59372 6.04719 0.813438C7.21159 0.373775 8.44276 0.137011 9.68719 0.113438C11.2789 0.0234375 11.8022 0.0234375 15.8672 0.0234375C20.0005 0.0234375 20.4755 0.0451042 22.0505 0.113438C23.2982 0.137215 24.5326 0.373954 25.7005 0.813438C27.7144 1.59461 29.3069 3.18656 30.0889 5.2001C30.5341 6.38209 30.7715 7.63219 30.7905 8.8951C30.8839 10.4918 30.8839 11.0134 30.8839 15.0801C30.8839 19.1468 30.8605 19.6801 30.7905 21.2584C30.7657 22.5054 30.529 23.7391 30.0905 24.9068C29.3066 26.9196 27.714 28.5111 25.7005 29.2934C24.5343 29.7304 23.3024 29.9665 22.0572 29.9918C20.4655 30.0834 19.9439 30.0834 15.8672 30.0834ZM15.8105 2.66177C11.7339 2.66177 11.3105 2.68177 9.71885 2.75344C8.76883 2.76602 7.82799 2.94134 6.93719 3.27177C5.62178 3.77512 4.5809 4.81176 4.07219 6.1251C3.73921 7.0256 3.56387 7.97674 3.55385 8.93677C3.46552 10.5518 3.46552 10.9751 3.46552 15.0234C3.46552 19.0234 3.48052 19.5084 3.55385 21.1134C3.56877 22.0638 3.74401 23.0048 4.07219 23.8968C4.58165 25.2093 5.62234 26.2451 6.93719 26.7484C7.82738 27.0811 8.76861 27.2565 9.71885 27.2668C11.3322 27.3601 11.7572 27.3601 15.8105 27.3601C19.8989 27.3601 20.3222 27.3401 21.9005 27.2668C22.8512 27.2552 23.7927 27.0799 24.6839 26.7484C25.9913 26.2407 27.0254 25.2073 27.5339 23.9001C27.8662 22.9989 28.0415 22.0473 28.0522 21.0868H28.0705C28.1422 19.4934 28.1422 19.0684 28.1422 14.9968C28.1422 10.9251 28.1239 10.4968 28.0522 8.9051C28.0372 7.95586 27.862 7.01596 27.5339 6.1251C27.0266 4.81606 25.9923 3.78059 24.6839 3.27177C23.7929 2.93967 22.8513 2.76431 21.9005 2.75344C20.2889 2.66177 19.8672 2.66177 15.8105 2.66177ZM15.8672 22.7218C12.7505 22.7238 9.93955 20.848 8.74529 17.9692C7.55103 15.0904 8.2087 11.7757 10.4116 9.57087C12.6144 7.36609 15.9286 6.70556 18.8085 7.89732C21.6883 9.08909 23.5665 11.8984 23.5672 15.0151C23.5626 19.2669 20.119 22.7135 15.8672 22.7218ZM15.8672 10.0118C13.1058 10.0118 10.8672 12.2503 10.8672 15.0118C10.8672 17.7732 13.1058 20.0118 15.8672 20.0118C18.6286 20.0118 20.8672 17.7732 20.8672 15.0118C20.8608 12.253 18.6259 10.0182 15.8672 10.0118ZM23.8672 8.82344C22.8762 8.81976 22.0754 8.01442 22.0772 7.02345C22.079 6.03249 22.8829 5.23012 23.8738 5.23012C24.8648 5.23012 25.6687 6.03247 25.6705 7.02344C25.671 7.50154 25.481 7.96014 25.1426 8.2979C24.8042 8.63566 24.3453 8.82477 23.8672 8.82344Z"
                        fill="#ECC770"
                      />
                    </svg>
                  </a>

                  <a
                    href="https://www.paypal.com/paypalme/LASKE1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      width="26"
                      height="31"
                      viewBox="0 0 26 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.8609 30.0301H7.65419C7.44045 30.0422 7.23435 29.9488 7.10252 29.7801C6.96891 29.6089 6.91437 29.3889 6.95252 29.1751C7.01919 28.7734 7.10252 28.2434 7.20752 27.5701C7.26586 27.2001 7.32919 26.7984 7.39752 26.3584C7.60586 25.0251 7.74752 24.1301 7.84252 23.5451C7.8803 23.3106 7.9253 23.0329 7.97752 22.7118V22.6784C8.06308 22.1462 8.16752 21.4995 8.29086 20.7384L8.45752 19.7068V19.6984C8.57752 18.9573 8.67197 18.3679 8.74086 17.9301C8.74852 17.7501 8.83054 17.5814 8.96735 17.4641C9.10416 17.3469 9.28348 17.2917 9.46252 17.3118H11.9959C13.2112 17.3248 14.4244 17.2064 15.6142 16.9584C17.4056 16.6009 19.0674 15.7666 20.4242 14.5434C21.613 13.4013 22.5055 11.9866 23.0242 10.4218C23.2774 9.6948 23.4735 8.94921 23.6109 8.19176C23.6225 8.12176 23.6359 8.08176 23.6525 8.06843C23.6625 8.05557 23.6779 8.04816 23.6942 8.04842H23.7109C23.7474 8.06378 23.7821 8.08336 23.8142 8.10676C24.6887 8.76918 25.2738 9.74355 25.4475 10.8268C25.6447 11.9599 25.6221 13.1205 25.3809 14.2451C25.0652 16.4216 23.9644 18.4074 22.2859 19.8284C20.4316 21.15 18.1849 21.8055 15.9109 21.6884H15.1792C14.9068 21.6861 14.6432 21.7847 14.4392 21.9651C14.2276 22.1487 14.0867 22.4004 14.0409 22.6768L13.9725 23.0001L13.0509 28.7968L13.0159 29.0484C12.9682 29.3277 12.8215 29.5804 12.6025 29.7601C12.3964 29.9374 12.1327 30.0334 11.8609 30.0301ZM5.89752 26.6968H0.955856C0.720039 26.7017 0.494393 26.6008 0.340856 26.4218C0.180827 26.2459 0.1102 26.0063 0.14919 25.7718L4.03419 1.12176C4.08305 0.805502 4.24756 0.51864 4.49586 0.316759C4.73568 0.109949 5.04252 -0.00259889 5.35919 4.55626e-05H15.3825C15.932 0.021746 16.4783 0.0948432 17.0142 0.218426C17.6529 0.339301 18.2794 0.517809 18.8859 0.751759C19.9897 1.14209 20.9469 1.86242 21.6275 2.81509C22.2729 3.78755 22.6034 4.93502 22.5742 6.10176C22.5459 7.45485 22.2861 8.7931 21.8059 10.0584C21.0403 12.5162 19.1627 14.4703 16.7375 15.3334C15.3762 15.7944 13.9497 16.0335 12.5125 16.0418C12.4959 16.0518 11.7792 16.0534 11.0125 16.0534L9.51252 16.0418C8.52304 15.9408 7.63834 16.6593 7.53419 17.6484C7.51252 17.7384 7.00586 20.8934 6.10919 26.5301C6.10923 26.5835 6.08529 26.6342 6.04396 26.6681C6.00263 26.702 5.94827 26.7156 5.89586 26.7051L5.89752 26.6968Z"
                        fill="#ECC770"
                      />
                    </svg>
                  </a>

                  <a
                    href="https://www.facebook.com/Flex-team-103887124911715/?hc_ref=ARRO1ZVDsBvAZdPh1v4IablAKgL_Dn-kSAVk-7zHJ4HALDxsXcdKM8jQAF4kS8XaFP0&__xts__[0]=68.ARAA3DumI0GqOIAcbRmM-ZvpC8zMVAacs_ZKl8h1TE4M2OJz3xCE76CYyo8hlyqNfdePP1NKi3E5EjDI59URpgIp22N5uWjmIu4kN9lUKFkx42_zdBYjy98kchE4w_DN12KJ8XvCCjJjCHNS7XXB8VqVEuD83bt0tpVVE0KXk7UNe_Tyg28fW4FkWbpIkyqTsT5snDbJBULykU9Ryo0JW_G-benYRsHmBGjL4dSJ9NmFit31LO-8yR2RArf0F9E3ezrBTCn0ZCK9-nidbr2dtfG7P8gfVExghkM-8QytGn5ZWzlA53QzVAy9wsLYyvk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      width="31"
                      height="30"
                      viewBox="0 0 31 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.867188 15.0182C0.868933 22.3973 6.23479 28.6802 13.5227 29.8367V19.3532H9.71719V15.0182H13.5272V11.7182C13.3569 10.1545 13.891 8.59609 14.9846 7.4656C16.0783 6.33511 17.6182 5.74972 19.1867 5.8682C20.3125 5.88638 21.4355 5.98665 22.5467 6.1682V9.8567H20.6507C19.998 9.77121 19.3417 9.98679 18.8668 10.4427C18.392 10.8986 18.1498 11.5455 18.2087 12.2012V15.0182H22.3652L21.7007 19.3547H18.2087V29.8367C26.0904 28.5911 31.6173 21.3929 30.7854 13.4568C29.9536 5.52076 23.0541 -0.374903 15.0854 0.0409708C7.11673 0.456845 0.868454 7.03867 0.867188 15.0182Z"
                        fill="#ECC770"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <img
                src="/laske.png"
                className="w-auto h-auto rounded-sl border-4 object-contain z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
