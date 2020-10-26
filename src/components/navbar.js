import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/nav.scss'


const Nav = (props) => {

    return (
			<nav>
				<ul>
					<Link to='/' className='link'>
						<li>
							<h1>it's all gouda(home)</h1>
						</li>
					</Link>
					<Link to='/theteam' className='link'>
						<li>meet the team</li>
					</Link>
					<Link to='/about' className='link'>
						<li>about the app</li>
					</Link>
				</ul>
			</nav>
		);
}


export default Nav