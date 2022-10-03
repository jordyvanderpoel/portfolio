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
					<a className="btn btn-primary" href="/contact" target="_blank"><i className="fas fa-paper-plane mr-2"></i>Hire Me</a>
				</div>
			</section>
			<section className="projects-list px-3 py-5 p-md-5">
				<div className="container">
					<div className="text-center">
						<ul id="filters" className="filters mb-5 mx-auto pl-0">
							<li className="type active mb-3 mb-lg-0" data-filter="*">All</li>
							<li className="type  mb-3 mb-lg-0" data-filter=".webapp">Web App</li>
							<li className="type  mb-3 mb-lg-0" data-filter=".frontend">Frontend</li>
							<li className="type  mb-3 mb-lg-0" data-filter=".backend">Backend</li>
						</ul>
					</div>
					
					<div className="project-cards row isotope">
						<div className="isotope-item col-md-6 mb-5 webapp frontend backend">
							<div className="card project-card">
								<div className="row no-gutters">
									<div className="col-lg-4 card-img-holder">
										<img src="/assets/images/project/DD3.jpg" className="card-img" alt="image" />
									</div>
									<div className="col-lg-8">
										<div className="card-body">
											<h5 className="card-title"><a href="/project-dd" className="theme-link">DutchDevices Portal</a></h5>
											<p className="card-text">An intuitive interface to represent data from various IoT-devices.</p>
											<p className="card-text"><small className="text-muted">Client: Dutch Devices</small></p>
										</div>
									</div>
								</div>
								<div className="link-mask">
									<a className="link-mask-link" href="/project-dd"></a>
									<div className="link-mask-text">
										<a className="btn btn-secondary" href="/project-dd">
											<i className="fas fa-eye mr-2"></i>View Project
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="isotope-item col-md-6 mb-5 webapp frontend backend">
							<div className="card project-card">
								<div className="row no-gutters">
									<div className="col-lg-4 card-img-holder">
										<img src="/assets/images/project/TC1.jpg" className="card-img" alt="image" />
									</div>
									<div className="col-lg-8">
										<div className="card-body">
											<h5 className="card-title"><a href="/project-tc" className="theme-link">TripCloud</a></h5>
											<p className="card-text">TripCloud helps you keeping track of your trips and generates a overview for you.</p>
											<p className="card-text"><small className="text-muted">Personal Project</small></p>
										</div>
									</div>
								</div>
								<div className="link-mask">
									<a className="link-mask-link" href="/project-tc"></a>
									<div className="link-mask-text">
										<a className="btn btn-secondary" href="/project-tc">
											<i className="fas fa-eye mr-2"></i>View Project
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="isotope-item col-md-6 mb-5 webapp backend">
							<div className="card project-card">
								<div className="row no-gutters">
									<div className="col-lg-4 card-img-holder">
										<img src="/assets/images/project/HS1.jpg" className="card-img" alt="image" />
									</div>
									<div className="col-lg-8">
										<div className="card-body">
											<h5 className="card-title"><a href="/project-hs" className="theme-link">Resit registration tool</a></h5>
											<p className="card-text">A webapplication for students to register for resit-exams.</p>
											<p className="card-text"><small className="text-muted">Client: Greijdanus College Zwolle</small></p>
										</div>
									</div>
								</div>
								<div className="link-mask">
									<a className="link-mask-link" href="/project-hs"></a>
									<div className="link-mask-text">
										<a className="btn btn-secondary" href="/project-hs">
											<i className="fas fa-eye mr-2"></i>View Project
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="isotope-item col-md-6 mb-5 webapp backend">
							<div className="card project-card">
								<div className="row no-gutters">
									<div className="col-lg-4 card-img-holder">
										<img src="/assets/images/project/PD2.png" className="card-img" alt="image" />
									</div>
									<div className="col-lg-8">
										<div className="card-body">
											<h5 className="card-title"><a href="/project-pd" className="theme-link">Availability management application</a></h5>
											<p className="card-text">
												A web application for fire fighters to register their availability.
											</p>
											<p className="card-text"><small className="text-muted">Client: Fire Department Hasselt</small></p>
										</div>
									</div>
								</div>
								<div className="link-mask">
									<a className="link-mask-link" href="/project-pd"></a>
									<div className="link-mask-text">
										<a className="btn btn-secondary" href="/project-pd">
											<i className="fas fa-eye mr-2"></i>View Project
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="isotope-item col-md-6 mb-5 frontend">
							<div className="card project-card">
								<div className="row no-gutters">
									<div className="col-lg-4 card-img-holder">
										<img src="/assets/images/project/MLS1.jpg" className="card-img" alt="image" />
									</div>
									<div className="col-lg-8">
										<div className="card-body">
											<h5 className="card-title"><a href="/project-mls" className="theme-link">Website design</a></h5>
											<p className="card-text">A website with sleek design to display the school's identity.</p>
											<p className="card-text"><small className="text-muted">Client: Maarten Lutherschool Genemuiden</small></p>
										</div>
									</div>
								</div>
								<div className="link-mask">
									<a className="link-mask-link" href="/project-mls"></a>
									<div className="link-mask-text">
										<a className="btn btn-secondary" href="/project-mls">
											<i className="fas fa-eye mr-2"></i>View Project
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Portfolio;