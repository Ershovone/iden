"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import styles from "./Safety.module.css";

const sectionData = [
  {
    id: 1,
    svg: "../images/Recovery_icon.svg",
    alt: "Иконка безопасности",
    header: "Надежная аутентификация и\u00A0авторизация",
    text: "Использование проверенных протоколов (OAuth\u00A02.0, OpenID\u00A0Connect, SAML) обеспечивает безопасный доступ к\u00A0ресурсам и\u00A0контроль над\u00A0пользовательскими сессиями",
  },
  {
    id: 2,
    svg: "../images/Multi-factor-authentication.svg",
    alt: "Многофакторная аутентификация",
    header: "Многофакторная аутентификация (MFA)",
    text: "Дополнительный уровень защиты предотвращает несанкционированный доступ, требуя подтверждения личности с\u00A0использованием нескольких факторов",
  },
  {
    id: 3,
    svg: "../images/High-fault-tolerance.svg",
    alt: "Высокая отказоустойчивость",
    header: "Высокая отказоустойчивость",
    text: "Кластеризация, резервное копирование и\u00A0автоматическое переключение между серверами гарантируют непрерывную работу системы даже\u00A0при\u00A0возникновении сбоев",
  },
  {
    id: 4,
    svg: "../images/Data-encryption.svg",
    alt: "Шифрование данных",
    header: "Шифрование данных",
    text: "Современные методы шифрования применяются как\u00A0при\u00A0передаче, так\u00A0и\u00A0при\u00A0хранении данных, что\u00A0обеспечивает защиту конфиденциальной информации от\u00A0перехвата и\u00A0несанкционированного доступа",
  },
  {
    id: 5,
    svg: "../images/Regular-update.svg",
    alt: "Иконка безопасности",
    header: "Регулярные обновления и соответствие требованиям",
    text: "Система постоянно обновляется с\u00A0учётом новых угроз, а\u00A0также соответствует современным стандартам кибербезопасности и\u00A0требованиям российского законодательства",
  },
];

export const Safety = () => {
  return (
    <section className={styles.safety} id="Safety">
      <div className={styles.backgroundSvg}></div>
      <div className={styles.topContainer}>
        <div className={styles.textContainer}>
          <h2 className={styles.sectionHeader}>
            <span className={styles.sectionSubheader}>
              Безопасность <br />
            </span>
            на первом <span className={styles.sectionHeaderAccent}>месте</span>
          </h2>
          <p className={styles.mainText}>
            Мы&nbsp;гарантируем высокий уровень защиты ваших данных благодаря
            использованию передовых решений в&nbsp;области безопасности и
            отказоустойчивости.
          </p>
        </div>
        <div className={styles.lockSvg}></div>
      </div>

      <div className={styles.myLocalWrapper}>
        <Swiper
          modules={[Scrollbar, Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 16,
            },
            480: {
              slidesPerView: 1.9,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: -30,
            },
          }}
          scrollbar={{
            hide: false,
            draggable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className={styles.swiperContainer}
        >
          {sectionData.map((item) => (
            <SwiperSlide key={item.id} className={styles.swiperSlide}>
              <article className={styles.safetyArticle}>
                <img
                  src={item.svg}
                  alt={item.alt}
                  className={styles.articleImg}
                />
                <div className={styles.articleTextContainer}>
                  <h4 className={styles.articleHeader}>{item.header}</h4>
                  <p className={styles.articleText}>{item.text}</p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.buttonArrangement}>
          <div className="swiper-button-prev">
            <img src="/images/prev.svg" alt="Предыдущий" />
          </div>
          <div className="swiper-button-next">
            <img src="/images/next.svg" alt="Следующий" />
          </div>
        </div>
      </div>
    </section>
  );
};
