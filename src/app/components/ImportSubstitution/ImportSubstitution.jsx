import styles from './ImportSubstitution.module.css';

export const ImportSubstitution = () => {
	return (
		<section className={styles.importSubstitution} id='ImportSubstitution'>
			<div className={styles.svgContainer}></div>
			<div className={styles.mainContainer}>
				<h2 className={styles.sectionHeader}>
					<span className={styles.setcionSubheader}>Сделано в России</span>
					<br />
					для <span className={styles.headerAccentBlue}>полной</span>
					<span className={styles.headerAccentRed}> уверенности</span>
				</h2>
				<article className={styles.sectionArticle}>
					<p className={styles.mainText}>
						CommIT Identity построена на базе проверенного open-source решения
						Keycloak. Мы предлагаем:
					</p>
					<ul className={styles.list}>
						<li className={styles.listItem}>
							Полную независимость от санкционных рисков
						</li>
						<li className={styles.listItem}>
							Локальную разработку и поддержку
						</li>
						<li className={styles.listItem}>
							Прозрачность и гибкость настройки благодаря открытому коду
						</li>
					</ul>
					<p className={styles.mainText}>
						Это решение отвечает требованиям импортозамещения и подходит для
						бизнеса любого масштаба.
					</p>
				</article>
			</div>
		</section>
	);
};
