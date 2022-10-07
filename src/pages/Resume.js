import { resume } from '../Data';

import resumeProfile from '../img/resume-profile.jpeg'

function Resume({i18n}) {
	return (
		<div>
			<section className="cta-section theme-bg-light py-5">
				<div className="container text-center single-col-max-width">
					<h2 className="heading mb-3">Online Resume</h2>
					<a className="btn btn-primary" href={"/Resume_Jordy van der Poel_" + i18n.language.toUpperCase() + ".pdf"} target="_blank" rel="noreferrer">
						<i className="fas fa-file-pdf mr-2"></i>	
						{i18n.translation('downloadPDF')}
					</a>
				</div>
			</section>
			<div className="container px-3 px-lg-5">
				<article className="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg">
					<div className="resume-header">
						<div className="row align-items-center">
							<div className="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
								<h2 className="resume-name mb-0 text-uppercase">
									{i18n.translation('name')}
								</h2>
								<div className="resume-tagline mb-3 mb-md-0">
									{i18n.translation('title')}
								</div>
							</div>
							<div className="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
								<ul className="list-unstyled mb-0">
									{
										resume.contact.map((contact, i) => <Contact contact={contact} key={i} /> )
									}
								</ul>
							</div>
						</div>					
					</div>
					<hr />
					<div className="resume-intro py-3">
						<div className="media flex-column flex-md-row align-items-center">
							<img className="resume-profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded-circle mx-auto" src={resumeProfile} alt="This is me" />
							<div className="media-body text-left">
								<p className="mb-0">
									{i18n.translation('resumeSummary1')}
									<br />
									{i18n.translation('resumeSummary2')}
								</p>
							</div>
						</div>
					</div>
					<hr />
					<div className="resume-body">
						<div className="row">
							<div className="resume-main col-12 col-lg-8 col-xl-9 pr-0 pr-lg-5">
								<section className="work-section py-3">
									<h3 className="text-uppercase resume-section-heading mb-4">
										{i18n.translation('workExperiences')}
									</h3>
									{
										resume.work.map((work, i) => <Work work={work} i18n={i18n} key={i} /> )
									}
								</section>
								<section className="project-section py-3">
									<h3 className="text-uppercase resume-section-heading mb-4">
										{i18n.translation('projects')}
									</h3>
									{
										resume.projects.map((project, i) => <Project project={project} i18n={i18n} key={i} /> )
									}
								</section>
							</div>
							<aside className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
								<section className="skills-section py-3">
									<h3 className="text-uppercase resume-section-heading mb-4">
										{i18n.translation('skills')}
									</h3>
									<div className="item">
										<h4 className="item-title">
											{i18n.translation('technical')}
										</h4>
										<ul className="list-unstyled resume-skills-list">
											{
												resume.skills.technical[i18n.language].map((skill, i) => <li className="mb-2" key={i}>{ skill }</li>)
											}
										</ul>
									</div>
									<div className="item">
										<h4 className="item-title">
											{i18n.translation('professional')}
										</h4>
										<ul className="list-unstyled resume-skills-list">
											{
												resume.skills.professional[i18n.language].map((skill, i) => <li className="mb-2" key={i}>{ skill }</li>)
											}
										</ul>
									</div>
								</section>
								<section className="education-section py-3">
									<h3 className="text-uppercase resume-section-heading mb-4">
										{i18n.translation('education')}
									</h3>
									<ul className="list-unstyled resume-education-list">
										{
											resume.education.map((education, i) => <Education education={education} i18n={i18n} key={i} />)
										}
									</ul>
								</section>
								<section className="skills-section py-3">
									<h3 className="text-uppercase resume-section-heading mb-4">
										{i18n.translation('languages')}
									</h3>
									<ul className="list-unstyled resume-lang-list">
										{
											resume.languages[i18n.language].map((language, i) => <li className="mb-2" key={i}>{language.language} <span className="text-muted">({language.level})</span></li>)
										}
									</ul>
								</section>
								<section className="skills-section py-3">
									<h3 className="text-uppercase resume-section-heading mb-4">
										{i18n.translation('interests')}
									</h3>
									<ul className="list-unstyled resume-interests-list mb-0">
										{
											resume.interests[i18n.language].map((interest, i) => <li className="mb-2" key={i}>{ interest }</li>)
										}
									</ul>
								</section>
							</aside>
						</div>
					</div>
					<hr />
					<div className="resume-footer text-center">
						<ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
							<li className="list-inline-item mb-lg-0 mr-3">
								<a className="resume-link" href="https://github.com/jordyvanderpoel" target="_blank" rel="noreferrer">
									<i className="fab fa-github-square fa-2x mr-2" data-fa-transform="down-4"></i>
									<span className="d-none d-lg-inline-block text-muted">
										github.com/jordyvanderpoel
									</span>
								</a>
							</li>
							<li className="list-inline-item mb-lg-0 mr-3">
								<a className="resume-link" href="https://linkedin.com/in/jordyvanderpoel" target="_blank" rel="noreferrer">
									<i className="fab fa-linkedin fa-2x mr-2" data-fa-transform="down-4"></i>
									<span className="d-none d-lg-inline-block text-muted">
										linkedin.com/in/jordyvanderpoel
									</span>
								</a>
							</li>
							<li className="list-inline-item mb-lg-0 mr-lg-3">
								<a className="resume-link" href="https://twitter.com/jordyvdpoel" target="_blank" rel="noreferrer">
									<i className="fab fa-twitter-square fa-2x mr-2" data-fa-transform="down-4"></i>
									<span className="d-none d-lg-inline-block text-muted">
										@jordyvdpoel
									</span>
								</a>
							</li>
						</ul>
					</div>
				</article>
			</div>
		</div>
	);
}

export default Resume;

function Contact({contact}) {
	return (
		<li className="mb-2">
			<i className={"fas fa-fw fa-lg mr-2 " + contact.icon}></i>
			{
				contact.link ?
					<a className="resume-link" href={contact.link} target="_BLANK" rel="noreferrer">
						{ contact.value }
					</a>
					:
					contact.value
			}
		</li>
	);
}

function Work({work, i18n}) {
	return (
		<div className="item mb-3">
			<div className="item-heading row align-items-center mb-2">
				<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
					{work.title}
				</h4>
				<div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
					{
						work.link ?
							<a href={work.link} className="link-on-bg" target="_blank" rel="noreferrer">
								{work.company}
							</a>
							:
							work.company
					}
					&nbsp;|&nbsp;{work.time[i18n.language]}
				</div>
			</div>
			<div className="item-content">
				<p>
					<i>
						{work.description[i18n.language]}
					</i>
				</p>
				<ul className="resume-list">
					{
						work.tasks[i18n.language].map((task, i) => <li key={i}>{task}</li>)
					}
				</ul>
			</div>
		</div>
	)
}

function Project({project, i18n}) {
	return (
		<div className="item">
			<div className="item-heading row align-items-center mb-2">
				<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
					{
						project.link ?
							<a href={project.link} className="link-on-bg" target="_blank" rel="noreferrer">
								{project.title[i18n.language]}
							</a>
							:
							project.title[i18n.language]
					}
				</h4>
				<div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
					{ project.company[i18n.language] }
				</div>
			</div>
			<div className="item-content">
				<p>
					{ project.description[i18n.language] }
				</p>
				{
					project.technologies[i18n.language] ?
						<p>
							<i>
								<b>{i18n.translation('technologies')}:</b>&nbsp;
								{ project.technologies[i18n.language] }
							</i>
						</p>
						:
						''
				}
			</div>
		</div>
	);
}

function Education({education, i18n}) {
	return (
		<li className="mb-3">
			<div className="resume-degree font-weight-bold">
				{education.title}
			</div>
			<div className="resume-degree-org text-muted">
				{education.institute}
			</div>
			<div className="resume-degree-time text-muted">
				{education.time[i18n.language]}
			</div>
		</li>
	);
}