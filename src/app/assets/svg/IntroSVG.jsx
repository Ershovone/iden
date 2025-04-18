import * as React from 'react';
import { motion } from 'motion/react';

export const IntroSVG = () => (
	<svg
		width='855'
		height='630'
		viewBox='0 0 555 680'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<g opacity='0.78'>
			<motion.path
				initial={{ scale: 1, rotate: 0, x: 0, y: 0 }}
				animate={{
					scale: [1, 1.1, 1],
					rotate: [0, 5, -5, 0],
					x: [0, -10, 10, 0],
					y: [0, -10, 10, 0],
				}}
				transition={{
					duration: 6,
					repeat: Infinity,
					repeatType: 'mirror',
					ease: 'easeInOut',
				}}
				d='M513.517 212.537C512.525 229.877 468.425 282.269 299.954 353.113C224.821 387.822 213.365 379.415 219.35 369.897C201.225 355.08 54.9057 463.828 54.9057 463.828C64.1398 422.557 142.851 372.309 181.052 352.343C205.374 337.326 275.031 303.574 359.083 288.698C443.135 273.823 497.06 231.726 513.517 212.537Z'
				fill='white'
				fillOpacity='0.36'
				stroke='black'
				strokeWidth='0.592329'
			/>
			<motion.path
				initial={{ scale: 1, rotate: 0, x: 0, y: 0 }}
				animate={{
					scale: [1, 1.1, 1],
					rotate: [0, 5, -5, 0],
					x: [0, -10, 10, 0],
					y: [0, -10, 10, 0],
				}}
				transition={{
					duration: 6,
					repeat: Infinity,
					repeatType: 'mirror',
					ease: 'easeInOut',
				}}
				d='M528.145 87.8662C530.193 152.463 486.303 301.835 294.367 382.547C209.353 430.342 193.819 385.723 199.323 356.328C174.461 279.991 16.6255 529 16.6255 529C20.1273 382.917 106.583 280.229 149.373 247.146C176.183 217.347 254.705 167.074 354.307 204.363C453.909 241.653 511.7 142.236 528.145 87.8662Z'
				fill='#6C0650'
				stroke='black'
				strokeWidth='0.592329'
			/>
			<motion.path
				initial={{ scale: 1, rotate: 0, x: 0, y: 0 }}
				animate={{
					scale: [1, 1.1, 1],
					rotate: [0, 5, -5, 0],
					x: [0, -10, 10, 0],
					y: [0, -10, 10, 0],
				}}
				transition={{
					duration: 6,
					repeat: Infinity,
					repeatType: 'loop',
					ease: 'easeInOut',
				}}
				d='M542.171 12.21C543.639 64.2639 504.457 186.083 335.987 256.927C261.306 298.024 247.928 262.49 252.896 238.611C231.51 177.766 92.0526 383.37 92.0526 383.37C95.8534 265.41 172.072 179.984 209.707 152.016C233.333 127.176 302.342 84.2727 389.368 111.385C476.394 138.497 527.498 56.5649 542.171 12.21Z'
				fill='#001F66'
				stroke='black'
				strokeWidth='0.592329'
			/>
		</g>
	</svg>
);
