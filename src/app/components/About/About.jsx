"use client";

import React, { useEffect, useState } from "react";
import styles from "./About.module.css";
import { AboutAccordeonSVG } from "@/app/assets/svg/AboutAccordeonSVG";
import { motion } from "motion/react";

const sectionData = [
  {
    id: 1,
    header: "Надежность и безопасность",
    text: "Высокая степень защиты данных благодаря использованию Keycloak",
  },
  {
    id: 2,
    header: "Универсальность",
    text: "Поддержка различных методов аутентификации, включая ЕСИА и PayControl",
  },
  {
    id: 3,
    header: "Гибкость",
    text: "Адаптация под любые сценарии аутентификации и\u00A0авторизации",
  },
  {
    id: 4,
    header: "Удобство",
    text: "Интуитивно понятный интерфейс для управления доступом",
  },
];

const activeStyles = {
  border: "1px solid var(--color-gray)",
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(32px)",
};

const inactiveStyles = {
  border: "unset",
  background: "unset",
  backdropFilter: "unset",
};

export const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll(".aboutListItem");
      const middleY = window.innerHeight / 2;

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top <= middleY && rect.bottom >= middleY) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={styles.about} id="About">
      <div className={styles.backgroundContainer}></div>
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>
          <span className={styles.subheader}>Что такое</span>
          <br />
          CommIT
          <span className={styles.headerAccent}> Identity</span>
        </h1>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.aboutBlock}>
          <p className={styles.aboutText}>
            CommIT Identity&nbsp;&mdash; это надёжная и&nbsp;безопасная система
            управления авторизацией и&nbsp;аутентификацией, обеспечивающая
            централизованный контроль доступа пользователей. Платформа
            адаптируется под требования вашего бизнеса, повышая уровень
            безопасности и&nbsp;упрощая управление.
          </p>
          <div className={styles.accordeonContainer}>
            <AboutAccordeonSVG />
          </div>
        </div>
        <ul className={styles.aboutList}>
          {sectionData.map((item, index) => (
            <motion.li
              key={item.id}
              initial={false}
              animate={activeIndex === index ? activeStyles : inactiveStyles}
              className={`${styles.AboutListItem} aboutListItem`}
            >
              <h3 className={styles.itemHeader}>{item.header}</h3>
              <p className={styles.itemText}>{item.text}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
