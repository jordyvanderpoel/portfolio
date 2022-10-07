import profileImage from '../img/profile.jpeg';
import Menu from './Menu';
import LanguageSwitcher from './LanguageSwitcher';

import { Link } from 'react-router-dom'

function Sidebar({i18n, darkmode, setDarkmode}) {
	return (
		<header className="header text-center">
			<div className="force-overflow">
				<h1 className="blog-name pt-lg-4 mb-0">
					<Link to="/">
						Jordy van der Poel
					</Link>
				</h1>	
				<nav className="navbar navbar-expand-lg navbar-dark" >
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
				
					<div id="navigation" className="collapse navbar-collapse flex-column" >
						<div className="profile-section pt-3 pt-lg-0">
							<img className="profile-image mb-3 rounded-circle mx-auto" src={profileImage} alt="This is me!" />
								
							<div className="bio mb-3">
								{i18n.translation('sidebarIntro')}
							</div>
							<ul className="social-list list-inline py-2 mx-auto">
								<li className="list-inline-item">
									<a href="https://www.twitter.com/jordyvdpoel" target="_BLANK" rel="noreferrer">
										<i className="fab fa-twitter fa-fw"></i>
									</a>
								</li>
								<li className="list-inline-item">
									<a href="https://www.linkedin.com/in/jordyvanderpoel/" target="_BLANK" rel="noreferrer">
										<i className="fab fa-linkedin-in fa-fw"></i>
									</a>
								</li>
								<li className="list-inline-item">
									<a href="https://github.com/jordyvanderpoel" target="_BLANK" rel="noreferrer">
										<i className="fab fa-github-alt fa-fw"></i>
									</a>
								</li>
							</ul>
							<hr /> 
						</div>
						<Menu i18n={i18n} />
						<div className="my-2">
							<Link className="btn btn-primary" to="/contact">
								<i className="fas fa-paper-plane mr-2"></i>
								{i18n.translation('contact')}
							</Link>
						</div>
						<div className="dark-mode-toggle text-center w-100">
							<hr className="mb-2"/>
							<h4 className="toggle-name mb-3 ">
								<i className="fas fa-adjust mr-1"></i>
								{i18n.translation('darkMode')}
							</h4>
							<input className="toggle" id="darkmode" type="checkbox" onChange={(e) => {setDarkmode(e.currentTarget.checked)}} defaultChecked={darkmode} />
							<label className="toggle-btn mx-auto mb-0" htmlFor="darkmode"></label>	
						</div>
						<div className="text-center">
							<hr className="mb-2"/>
							<LanguageSwitcher i18n={i18n} />
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
}

export default Sidebar;