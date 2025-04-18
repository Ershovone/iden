import styles from "./TryDemo.module.css";

export const TryDemo = () => {
  return (
    <section className={styles.demoSection}>
      <div className={styles.backgroundSvg}> </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Попробуйте CommIT Identity</h2>
        <h2 className={styles.subtitle}>
          в режиме <span className={styles.highlight}>демо-кабинета</span>
        </h2>
      </div>
      <div className={styles.mainConteiner}>
        <div className={styles.mainWrapper}>
          <h3 className={styles.desciption}>
            Убедитесь в возможностях платформы лично! Демо-кабинет CommIT
            Identity позволяет:
          </h3>
          <ul className={styles.featuresList}>
            <li>Исследовать основные функции системы в реальных сценариях</li>
            <li>
              Настроить и протестировать авторизационные потоки для вашего
              бизнеса
            </li>
            <li>
              Получить персонализированную консультацию от наших специалистов
            </li>
          </ul>
          <p className={styles.callToAction}>
            Начните знакомство с системой <br /> <a href="#">прямо сейчас!</a>
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="/images/Demo-office_screen.png"
            alt="Демо-кабинет"
            className={styles.laptopImage}
          />
          <img
            src="/images/Recovery_icon.png"
            alt="Демо-кабинет"
            className={styles.mobileImage}
          />
        </div>
      </div>
      <a
        href="https://keycloak.dbo-commit.ru/realms/identity/account/"
        className={styles.demoButton}
        target="_blank"
      >
        <img
          className={styles.group}
          src="/images/Demo-office_icon.png"
          alt="Перейти в Демо"
        />
        Перейти в Демо-кабинет
      </a>
    </section>
  );
};
