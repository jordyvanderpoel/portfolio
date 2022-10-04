
import Project from '../components/portfolio/Project';

import { projects } from '../Data';

import { Link } from 'react-router-dom';

function Portfolio() {
	return (
		<div>
			<section className="cta-section theme-bg-light py-5">
				<div className="container text-center single-col-max-width">
					<h2 className="heading">
						Portfolio
					</h2>
					<div className="intro">
						<p>
							Have a look at my earlier works! I'm taking on freelance work at the moment. Want some help building your website of web application?
						</p>
					</div>
					<Link to="/contact" className="btn btn-primary">
						<i className="fas fa-paper-plane mr-2"></i>
						Hire Me
					</Link>
				</div>
			</section>
			<section className="projects-list px-3 py-5 p-md-5">
				<div className="container">
					<div className="project-cards row">
						{
							projects.map(p => <Project project={p} />)
						}
					</div>
				</div>
			</section>
		</div>
	);
}

export default Portfolio;