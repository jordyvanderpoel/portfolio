import Project from '../components/portfolio/Project';
import Technology from '../components/about-me/Technology';

import profileImage from '../img/profile-lg.jpeg';
import { technologies, projects } from '../Data';

import { Link } from 'react-router-dom';

function AboutMe({i18n}) {
	return (
		<div>
			<section className="about-me-section p-3 p-lg-5 theme-bg-light">
				<div className="container">
					<div className="profile-teaser media flex-column flex-lg-row">
						<div className="media-body">
							<h2 className="name font-weight-bold mb-1">
								{i18n.translation('name')}
							</h2>
							<div className="tagline mb-3">
								{i18n.translation('title')}
							</div>
							<div className="bio mb-4">
								{i18n.translation('aboutMeLong')}
								&nbsp;
								{i18n.translation('haveALook')}
								&nbsp;
								<Link to="/projects" className="link-on-bg">
									{i18n.translation('projectPortfolio').toLowerCase()}
								</Link>
								&nbsp;
								{i18n.translation('and')}
								&nbsp;
								<Link to="/resume" className="link-on-bg">
									{i18n.translation('onlineResume')}
								</Link>!
							</div>
							<div className="mb-4">
								<Link to="/portfolio" className="btn btn-primary mr-2 mb-3">
									<i className="fas fa-arrow-alt-circle-right mr-2"></i>
									<span className="d-none d-md-inline">{i18n.translation('view')}</span> {i18n.translation('portfolio')}
								</Link>
								<Link to="/resume" className="btn btn-secondary mb-3">
									<i className="fas fa-file-alt mr-2"></i>
									<span className="d-none d-md-inline">{i18n.translation('view')}</span> {i18n.translation('resume')}
								</Link>
							</div>
						</div>
						<img className="profile-image mb-3 mb-lg-0 ml-lg-5 mr-md-0" src={profileImage} alt="" />
					</div>
				</div>
			</section>

			<section className="overview-section p-3 p-lg-5">
				<div className="container">
					<h2 className="section-title font-weight-bold mb-3">
						{i18n.translation('whatIDo')}
					</h2>
					<div className="section-intro mb-5">
						{i18n.translation('whatIDoLong')}
						&nbsp;
						{i18n.translation('checkOutMy')}
						&nbsp;
						<Link to="/resume" className="link-on-bg">
							{i18n.translation('onlineResume')}
						</Link>
						&nbsp;
						{i18n.translation('and')}
						&nbsp;
						<Link to="/portfolio" className="link-on-bg">
							{i18n.translation('projectPortfolio')}
						</Link>.
					</div>
					<div className="row">
						{
							technologies.map((tech, i) => <Technology text={tech.text} icons={tech.icons} key={i} />)
						}
					</div>
				</div>
			</section>

			<div className="container">
				<hr/>
			</div>

			<section className="featured-section p-3 p-lg-5">
				<div className="container">
					<h2 className="section-title font-weight-bold mb-5">
						{i18n.translation('featuredProjects')}
					</h2>
					<div className="row">
						{
							projects.filter(p => p.featured).map((project, i) => <Project project={project} i18n={i18n} key={i} />)
						}
					</div>
					
					<div className="text-center py-3">
						<Link to="/portfolio" className="btn btn-primary">
							<i className="fas fa-arrow-alt-circle-right mr-2"></i>
							{i18n.translation('viewPortfolio')}
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export default AboutMe;