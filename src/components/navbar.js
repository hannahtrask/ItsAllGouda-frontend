import React from "react";
import { Link } from "react-router-dom";
import "../scss/nav.scss";
import { motion } from 'framer-motion';

const Nav = () => {
  return (
		<nav>
			<ul>
				<Link to='/' className='link'>
					<img
						className='adorable'
						src='https://i.ibb.co/3BZ31wW/littlecheese.gif'
						alt='GOUDAA'
						border='0'
					/>
				</Link>
				<Link to='/theteam' className='link'>
					<motion.li
						whileHover={{ scale: 1.3, originX: 0, color: '#4ecdc4' }}
						transition={{ type: 'spring', stiffness: 300 }}>
						meet the team
					</motion.li>
				</Link>
				<Link to='/about' className='link'>
					<motion.li
						whileHover={{ scale: 1.3, originX: 0, color: '#4ecdc4' }}
						transition={{ type: 'spring', stiffness: 300 }}>
						about the app
					</motion.li>
				</Link>
				<Link to='/create' className='link'>
					<motion.li
						whileHover={{ scale: 1.3, originX: 0, color: '#4ecdc4' }}
						transition={{ type: 'spring', stiffness: 300 }}>
						create new food
					</motion.li>
				</Link>
			</ul>
		</nav>
	);
};

export default Nav;
