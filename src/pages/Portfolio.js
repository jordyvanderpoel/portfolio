import React from 'react';
import { Link } from 'react-router-dom';

import Project from '../components/portfolio/Project';

import { projects } from '../Data';

function Portfolio({i18n}) {
	return (
		<div>
			<section className="cta-section theme-bg-light py-5">
				<div className="container text-center single-col-max-width">
					<h2 className="heading">
						{i18n.translation('portfolio')}
					</h2>
					<div className="intro">
						<p>
							{i18n.translation('earlierWorks')}
							&nbsp;
							{i18n.translation('takingOnWork')}
							&nbsp;
							{i18n.translation('wantHelp')}
						</p>
					</div>
					<Link to="/contact" className="btn btn-primary">
						<i className="fas fa-paper-plane mr-2"></i>
						{i18n.translation('hireMe')}
					</Link>
					<div className="intro mt-2">
						<p className="mb-0">
							{i18n.translation('likeProjects')}
						</p>
					</div>
				</div>
			</section>
			<section className="projects-list px-3 py-5 p-md-5">
				<div className="container">
					<div className="project-cards row">
						{
							projects.map((project, i) => <Project project={project} i18n={i18n} key={i} />)
						}
					</div>
				</div>
			</section>
		</div>
	);
}

export default Portfolio;