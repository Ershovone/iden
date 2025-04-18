import { FeaturesAccordeonSVG } from "@/app/assets/svg/FeaturesAccordeonSVG";
import styles from "./Features.module.css";
import { FeaturesAccordeonMobileSVG } from "@/app/assets/svg/FeaturesAccordeonMobileSVG";
import { FeaturesMobileSVG } from "@/app/assets/svg/FeaturesMobileSVG";

const Features = () => {
  return (
    <section className={styles.featuresSection} id="Features">
      <div className={styles.backgroundSVG} />
      <div className={styles.headerContainer}>
        <h2 className={styles.title}>Ключевые функции</h2>
        <h2 className={styles.subtitle}>
          CommIT <span className={styles.highlight}>Identity</span>
        </h2>
      </div>
      <div className={styles.featuresGrid}>
        <div className={styles.featureCard}>
          <img
            className={styles.icon}
            src="/images/Authentication_icon.svg"
            alt="Аутентификация"
          />
          <div className={styles.textContainer}>
            <h3>Аутентификация</h3>
            <p>
              Поддержка входа по логину/паролю, двухфакторной аутентификации,
              ЭЦП, ЕСИА, PayControl
            </p>
          </div>
        </div>
        <div className={styles.featureCard}>
          <img
            className={styles.icon}
            src="/images/Registration_users_icon.svg"
            alt="Регистрация пользователей"
          />
          <h3>
            Регистрация <br /> пользователей
          </h3>
          <p>
            Удобный интерфейс регистрации пользователей с&nbsp;интеграцией
            внешних систем и&nbsp;баз данных
          </p>
        </div>
        <div className={styles.featureCard}>
          <img
            className={styles.icon}
            src="/images/Recovery_icon.svg"
            alt="Восстановление данных"
          />
          <h3>
            Восстановление <br /> данных
          </h3>
          <p>
            Восстановление логина и&nbsp;пароля с&nbsp;соблюдением всех
            требований безопасности для минимизации рисков несанкционированного
            доступа
          </p>
        </div>
        <div className={styles.featureCard}>
          <img
            className={styles.icon}
            src="/images/Administration_icon.svg"
            alt="Администрирование доступа"
          />
          <h3>
            Администрирование <br /> доступа
          </h3>
          <p>
            Гибкая настройка различных авторизационных и&nbsp;аутентификационных
            сценариев в&nbsp;зависимости от&nbsp;роли и&nbsp;уровня доступа
            пользователя
          </p>
        </div>
        <div className={styles.featureCard}>
          <img
            className={styles.icon}
            src="/images/Integrations_icon.svg"
            alt="Интеграции"
          />
          <h3>Интеграции</h3>
          <p>
            Совместимость с&nbsp;корпоративными и&nbsp;государственными
            системами, дающая широкие возможности интеграции в&nbsp;уже
            существующие решения и&nbsp;продукты
          </p>
        </div>
        <div className={styles.accordeonSVG}>
          <FeaturesAccordeonSVG />
        </div>
      </div>
      <FeaturesMobileSVG className={styles.mobileSVG} />
      <div className={styles.mobileAccardionSVG}>
        <FeaturesAccordeonMobileSVG />
      </div>
    </section>
  );
};

export default Features;
