import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <img
            src="/images/CommIT_logo.svg"
            alt="CommIT Logo"
            className={styles.logo}
          />
          <div className={styles.copyright}>
            <p className={styles.copyrightDescription}>
              © ООО «Коммит», 2025
              <br />
              Политика обработки персональных данных
            </p>
          </div>
        </div>
        <div className={styles.section}>
          <a href="#" className={styles.heading}>
            Контакты
          </a>
          <a href="tel:+74952270230" className={styles.description}>
            +7 (495) 227-02-30
          </a>
          <a href="mailto:info@commit.tech" className={styles.description}>
            info@commit.tech
          </a>
          <a
            href="https://commit.tech"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.description}
          >
            commit.tech
          </a>
        </div>
        <div className={styles.section}>
          <a href="#" className={styles.heading}>
            Компания
          </a>
          <p className={styles.description}>ООО «Коммит»</p>
          <p className={styles.description}>ИНН 7100392920</p>
          <p className={styles.description}>ОГРН 1237100008023</p>
        </div>
        <div className={styles.section}>
          <a href="#" className={styles.heading}>
            Адрес
          </a>
          <p className={styles.description}>
            300000, Тульская обл., <br />
            г. Тула, ул. Макса Смирнова, 2,
            <br />
            офис 3
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
