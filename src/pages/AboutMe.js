import Project from '../components/portfolio/Project';
import Technology from '../components/about-me/Technology';

import profileImage from '../img/profile-lg.jpeg';
import { technologies, projects } from '../Data';

import { Link } from 'react-router-dom';

function AboutMe() {
	return (
		<div>
			<section className="about-me-section p-3 p-lg-5 theme-bg-light">
				<div className="container">
					<div className="profile-teaser media flex-column flex-lg-row">
						<div className="media-body">
							<h2 className="name font-weight-bold mb-1">
								Jordy van der Poel
							</h2>
							<div className="tagline mb-3">
								Full-stack web developer
								</div>
							<div className="bio mb-4">
								I'm a software engineer specialised in frontend and backend development for complex scalable web applications. Want to know how I may help your project? Have a look at my project <a className="link-on-bg" href="/projects">portfolio</a> and <a className="link-on-bg" href="/resume">online resume</a>!
							</div>
							<div className="mb-4">
								<a className="btn btn-primary mr-2 mb-3" href="/portfolio">
									<i className="fas fa-arrow-alt-circle-right mr-2"></i>
									<span className="d-none d-md-inline">View</span> Portfolio
								</a>
								<a className="btn btn-secondary mb-3" href="/resume">
									<i className="fas fa-file-alt mr-2"></i>
									<span className="d-none d-md-inline">View</span> Resume
								</a>
							</div>
						</div>
						<img className="profile-image mb-3 mb-lg-0 ml-lg-5 mr-md-0" src={profileImage} alt="" />
					</div>
				</div>
			</section>

			<section className="overview-section p-3 p-lg-5">
				<div className="container">
					<h2 className="section-title font-weight-bold mb-3">
						What I do
					</h2>
					<div className="section-intro mb-5">
						I have more than 5 years of experience in developing customized solutions for several clients. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my <a href="/resume"  className="link-on-bg">online resume</a> and <a href="/portfolio" className="link-on-bg">project portfolio</a>.
					</div>
					<div className="row">
						{
							technologies.map(t => <Technology text={t.text} icons={t.icons} />)
						}
					</div>
				</div>
			</section>

			<div className="container">
				<hr/>
			</div>

			<section className="featured-section p-3 p-lg-5">
				<div className="container">
					<h2 className="section-title font-weight-bold mb-5">Featured Projects</h2>
					<div className="row">
						{
							projects.filter(p => p.featured).map(p => <Project project={p} />)
						}
					</div>
					
					<div className="text-center py-3">
						<Link to="/portfolio" className="btn btn-primary">
							<i className="fas fa-arrow-alt-circle-right mr-2"></i>
							View Portfolio
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export default AboutMe;