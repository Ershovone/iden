"use client";

import { IntroSVG } from "@/app/assets/svg/IntroSVG";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./Intro.module.css";

const clientsSVG = [
  {
    id: 1,
    src: "images/OTP_logo.svg",
    name: "ОТП-Банк",
  },
  {
    id: 2,
    src: "images/MKB_logo.svg",
    name: "МКБ",
  },
  {
    id: 3,
    src: "images/OTP_logo.svg",
    name: "ОТП-Банк",
  },
  {
    id: 4,
    src: "images/MKB_logo.svg",
    name: "МКБ",
  },
];

const extendedClients = [...clientsSVG, ...clientsSVG, ...clientsSVG];

export const Intro = () => {
  return (
    <section className={styles.intro} id="Intro">
      <div className={styles.svgContainer}>
        <IntroSVG />
      </div>
      <div className={styles.mainContainer}>
        <img
          className={styles.logo}
          src="images/CommIT_Identity_logo.png"
          alt="Логотип компании"
        />
        <div className={styles.info}>
          <p className={styles.infoText}>
            Надёжная система централизованного управления процессами авторизации
            и&nbsp;аутентификации, созданная для безопасного и&nbsp;удобного
            доступа к IT-сервисам
          </p>
        </div>
      </div>
      <div className={styles.linkContainer}>
        <a className={styles.bidLink} href="#ContactUs">
          Оставить заявку
        </a>
        <a className={styles.knowMoreLink} href="#About">
          Узнать больше
        </a>
      </div>
      <div className={styles.clientsContainer}>
        <Swiper
          modules={[FreeMode, Autoplay]}
          slidesPerView="auto"
          spaceBetween={170}
          freeMode={{
            enabled: true,
            momentum: true,
            momentumRatio: 0.2,
          }}
          speed={5000}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            stopOnLastSlide: false,
          }}
          allowTouchMove={true}
          loop={true}
          className={styles.clientsSwiper}
          breakpoints={{
            320: {
              spaceBetween: 47,
            },
            920: {
              spaceBetween: 70,
            },
            1200: {
              spaceBetween: 170,
            },
          }}
        >
          {extendedClients.map((item, index) => (
            <SwiperSlide
              key={`${item.id}-${index}`}
              className={styles.clientSlide}
            >
              <img
                className={styles.clientImg}
                src={item.src}
                alt={item.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
