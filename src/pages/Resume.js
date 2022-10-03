import resumeProfile from '../img/resume-profile.jpeg'

function Resume() {
	return (
		<div>
			<section className="cta-section theme-bg-light py-5">
				<div className="container text-center single-col-max-width">
					<h2 className="heading mb-3">Online Resume</h2>
					<a className="btn btn-primary" href="/resume_Jordy_van_der_Poel.pdf" target="_blank">
						<i className="fas fa-file-pdf mr-2"></i>Download PDF Version
					</a>
				</div>
			</section>
			<div className="container px-3 px-lg-5">
				<article className="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg">
					<div className="resume-header">
						<div className="row align-items-center">
							<div className="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
								<h2 className="resume-name mb-0 text-uppercase">Jordy van der Poel</h2>
								<div className="resume-tagline mb-3 mb-md-0">Full-stack web developer</div>
							</div>
							<div className="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
								<ul className="list-unstyled mb-0">
									<li className="mb-2"><i className="fas fa-phone-square fa-fw fa-lg mr-2 "></i><a className="resume-link" href="tel:0610228468">(+31) 6 10 22 84 68</a></li>
									<li className="mb-2"><i className="fas fa-envelope-square fa-fw fa-lg mr-2"></i><a className="resume-link" href="mailto:jordy@webdevelapper.nl">jordy@webdevelapper.nl</a></li>
									<li className="mb-2"><i className="fas fa-globe fa-fw fa-lg mr-2"></i><a className="resume-link" href="https://www.jordyvanderpoel.nl/resume">www.jordyvanderpoel.nl</a></li>
									<li className="mb-0"><i className="fas fa-map-marker-alt fa-fw fa-lg mr-2"></i>Hasselt (ov.)</li>
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
									Results-driven computer science student with a passion for helping others.
									5+ years of experience in full-stack web development and excited to learn new strategies and technologies.
								</p>
							</div>
						</div>
					</div>
					<hr />
					<div className="resume-body">
						<div className="row">
							<div className="resume-main col-12 col-lg-8 col-xl-9 pr-0 pr-lg-5">
								<section className="work-section py-3">
									<h3 className="text-uppercase resume-section-heading mb-4">Work Experiences</h3>
									<div className="item mb-3">
										<div className="item-heading row align-items-center mb-2">
											<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
												Full-stack developer
											</h4>
											<div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
												<a href="https://dutchdevices.nl" className="link-on-bg" target="_blank" rel="noreferrer">
													Dutch Devices
												</a> | 2019 - Present
											</div>
										</div>
										<div className="item-content">
											<p>
												<i>Dutch Devices creates innovative solutions using IoT-devices to collect valuable data.</i>
											</p>
											<ul className="resume-list">
												<li>Creating an intuitive Angular portal to visualize data from various IoT-devices.</li>
												<li>Designing, implementing and maintaining an efficient and scalable database.</li>
												<li>Development of a RESTful API in PHP, using the CodeIgniter framework.</li>
												<li>Developing a multi-platform Xamarin.Forms app.</li>
											</ul>
										</div>
									</div>
									<div className="item mb-3">
										<div className="item-heading row align-items-center mb-2">
											<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
												Back-end web developer
											</h4>
											<div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
												<a href="https://mamble.nl" className="link-on-bg" target="_blank" rel="noreferrer">
													Mamble_easy web
												</a> | 2016 - Present
											</div>
										</div>
										<div className="item-content">
											<p>
												<i>Mamble_easy web is the all-in-one CMS. We design and build your website, you manage its content. Managing your website without technical knowledge, it's a piece of cake.</i>
											</p>
											<ul className="resume-list">
												<li>Implementing plain HTML designs into our PHP-based CMS.</li>
												<li>Designing and developing a new, simplified underlying structure in PHP, using the CodeIgniter framework.</li>
											</ul>
										</div>
									</div>
								</section>
								<section className="project-section py-3">
									<h3 className="text-uppercase resume-section-heading mb-4">Projects</h3>
									<div className="item">
										<div className="item-heading row align-items-center mb-2">
											<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
												Intranet web application
											</h4>
											<div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
												Strandreddingsbrigade Westerschouwen
											</div>
										</div>
										<div className="item-content">
											<p>
												An interactive web application, build to be the central platform for all tools used by the lifeguards, including activity registration, availability indicator and planning tools.
											</p>
										</div>
									</div>
									<div className="item">
										<div className="item-heading row align-items-center mb-2">
											<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
												<a href="https://tripcloud.nl" className="link-on-bg" target="_blank" rel="noreferrer">
													Work-trip registration application
												</a>
											</h4>
										</div>
										<div className="item-content">
											<p>
												Figuring out your work-related trips at the end of the month can be a challanging task.
												This web application helps you keeping track of your trips and generates a overview for you.
											</p>
											<p>
												<i><b>Technologies:</b> ReactJS (front-end) and Node.JS (back-end)</i>
											</p>
										</div>
									</div>
									<div className="item">
										<div className="item-heading row align-items-center mb-2">
											<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
												<a href="https://piketdiensten.nl" className="link-on-bg" target="_blank" rel="noreferrer">
													Availability management application
												</a>
											</h4>
											<div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
												Fire Department Hasselt
											</div>
										</div>
										<div className="item-content">
											<p>
												This web application provides the members of the voluntary fire deptartment the ability to indicate their availability.
												Using this data, it creates a schedule to ensure the availability of the crew.
											</p>
											<p>
												<i><b>Technologies:</b> HTML5, CSS, Bootstrap (front-end) and PHP CodeIgniter (back-end)</i>
											</p>
										</div>
									</div>
									<div className="item">
										<div className="item-heading row align-items-center mb-2">
											<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
												<a href="https://herkansingssysteem.nl" className="link-on-bg" target="_blank" rel="noreferrer">
													Resit registration and evalution system
												</a>
											</h4>
											<div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
												Greijdanus College Zwolle
											</div>
										</div>
										<div className="item-content">
											<p>
												A web application for students to register for resit-exams.
												It gives teachers and supervisors the ability to reject if the student did not comply to the requirements.
											</p>
											<p>
												<i><b>Technologies:</b> AngularJS (front-end) and SlimPHP (back-end)</i>
											</p>
										</div>
									</div>
								</section>
							</div>
							<aside className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
								<section className="skills-section py-3">
									<h3 className="text-uppercase resume-section-heading mb-4">Skills</h3>
									<div className="item">
										<h4 className="item-title">Technical</h4>
										<ul className="list-unstyled resume-skills-list">
											<li className="mb-2">JavaScript | Angular | React</li>
											<li className="mb-2">PHP | Python</li>
											<li className="mb-2">Node.js</li>
											<li className="mb-2">Xamarin</li>
											<li className="mb-2">MySQL</li>
											<li className="mb-2">Object-oriented design</li>
											<li className="mb-2">Design and implement database structures</li>
										</ul>
									</div>
									<div className="item">
										<h4 className="item-title">Professional</h4>
										<ul className="list-unstyled resume-skills-list">
											<li className="mb-2">Effective communication</li>
											<li className="mb-2">Eager to learn</li>
											<li className="mb-2">Strong problem solver</li>
										</ul>
									</div>
								</section>
								<section className="education-section py-3">
									<h3 className="text-uppercase resume-section-heading mb-4">Education</h3>
									<ul className="list-unstyled resume-education-list">
										<li className="mb-3">
											<div className="resume-degree font-weight-bold">BSc in Computer Science</div>
											<div className="resume-degree-org text-muted">Eindhoven University of Technology</div>
											<div className="resume-degree-time text-muted">2016 - Present</div>
										</li>
										<li>
											<div className="resume-degree font-weight-bold">Atheneum</div>
											<div className="resume-degree-org text-muted">Greijdanus College Zwolle</div>
											<div className="resume-degree-time text-muted">2009 - 2016</div>
										</li>
									</ul>
								</section>
								<section className="skills-section py-3">
									<h3 className="text-uppercase resume-section-heading mb-4">Languages</h3>
									<ul className="list-unstyled resume-lang-list">
										<li className="mb-2">Dutch <span className="text-muted">(Native)</span></li>
										<li>English <span className="text-muted">(Professional)</span></li>
									</ul>
								</section>
								<section className="skills-section py-3">
									<h3 className="text-uppercase resume-section-heading mb-4">Interests</h3>
									<ul className="list-unstyled resume-interests-list mb-0">
										<li className="mb-2">Lifeguarding</li>
										<li className="mb-2">Cycling &amp; Mountainbiking</li>
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