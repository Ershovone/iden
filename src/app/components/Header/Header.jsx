'use client';

import styles from './Header.module.css';
import '../../styles/global.css';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useWindowWidth } from '@/app/hooks/useWindowWidth';

const resizeWidth = 920;

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const windowWidth = useWindowWidth();

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return windowWidth > resizeWidth ? (
		<header className={styles.header}>
			<div className={styles.container}>
				<motion.nav className={styles.nav}>
					<a href='#Intro' className={styles.intro}>
						<img
							src='images/CommIT_logo.svg'
							alt='Компания Commit'
							className={styles.logo}
						></img>
					</a>
					<a href='#About' className={styles.navItem}>
						О системе
					</a>
					<a href='#Safety' className={styles.navItem}>
						Безопасность
					</a>
					<a href='#ImportSubstitution' className={styles.navItem}>
						Импортозамещение
					</a>
					<a href='#Features' className={styles.navItem}>
						Функционал
					</a>
				</motion.nav>
				<a href='https://keycloak.dbo-commit.ru/realms/identity/account/' className={styles.demoLink} target="_blank">
					<img
						src='images/Demo-office_icon.png'
						alt='Ссылка на продукт'
						className={styles.demoIcon}
					/>
					Демо кабинет
				</a>
			</div>
		</header>
	) : (
		<header className={styles.headerMobile}>
			<div
				className={`${
					isMenuOpen ? styles.containerMobileOpen : styles.containerMobile
				}`}
			>
				<img
					src='images/CommIT_logo.svg'
					alt='Компания Commit'
					className={styles.logoMobile}
				/>
				<div className={styles.burger} onClick={toggleMenu}>
					<img src='images/burger.svg' alt='Кнопка меню' />
				</div>
			</div>
			{isMenuOpen && (
				<motion.nav
					className={styles.navMobile}
					key='modal'
					initial={{ y: -5, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: 5, opacity: 0 }}
				>
					<div className={styles.navContainer}>
						<a href='#About' className={styles.navItem} onClick={toggleMenu}>
							О системе
						</a>
						<a href='#Safety' className={styles.navItem} onClick={toggleMenu}>
							Безопасность
						</a>
						<a
							href='#ImportSubstitution'
							className={styles.navItem}
							onClick={toggleMenu}
						>
							Импортозамещение
						</a>
						<a href='#Features' className={styles.navItem} onClick={toggleMenu}>
							Функционал
						</a>
					</div>
					<div className={styles.linkContainer}>
						<a href='#ContactUs' className={styles.bidLink}>
							Оставить заявку
						</a>
						<a href='' className={styles.demoLinkMobile}>
							<img
								src='images/Demo-office_icon.png'
								alt='Ссылка на продукт'
								className={styles.demoIcon}
							/>
							Перейти в демо-кабинет
						</a>
					</div>
				</motion.nav>
			)}
		</header>
	);
};
