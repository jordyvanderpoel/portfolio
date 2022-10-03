import profileImage from '../img/profile-lg.jpeg';

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
						<div className="item col-6 col-lg-3">
							<div className="item-inner">
								<div className="item-icon">
									<i className="fab fa-html5 mr-2"></i>
									<i className="fab fa-css3-alt mr-2"></i>
								</div>
								<h3 className="item-title">
									HTML &amp; CSS
								</h3>
								<div className="item-desc"></div>
							</div>
						</div>
						<div className="item col-6 col-lg-3">
							<div className="item-inner">
								<div className="item-icon">
									<i className="fab fa-php"></i>
								</div>
								<h3 className="item-title">
									PHP
								</h3>
								<div className="item-desc"></div>
							</div>
						</div>
						<div className="item col-6 col-lg-3">
							<div className="item-inner">
								<div className="item-icon">
									<i className="fab fa-js-square mr-2"></i>
									<i className="fab fa-angular mr-2"></i>
									<i className="fab fa-react mr-2"></i>
								</div>
								<h3 className="item-title">
									Vanilla JavaScript,<br/>Angular &amp; React
								</h3>
								<div className="item-desc"></div>
							</div>
						</div>
						<div className="item col-6 col-lg-3">
							<div className="item-inner">
								<div className="item-icon">
									<i className="fab fa-git-alt"></i>
								</div>
								<h3 className="item-title">
									Git
								</h3>
								<div className="item-desc"></div>
							</div>
						</div>
						<div className="item col-6 col-lg-3">
							<div className="item-inner">
								<div className="item-icon">
									<i className="fab fa-bootstrap"></i>
								</div>
								<h3 className="item-title">
									Bootstrap
								</h3>
								<div className="item-desc"></div>
							</div>
						</div>
						<div className="item col-6 col-lg-3">
							<div className="item-inner">
								<div className="item-icon"><i className="fab fa-laravel"></i></div>
								<h3 className="item-title">Laravel</h3>
								<div className="item-desc"></div>
							</div>
						</div>
						<div className="item col-6 col-lg-3">
							<div className="item-inner">
								<div className="item-icon"><i className="fab fa-node-js"></i></div>
								<h3 className="item-title">Node.js</h3>
								<div className="item-desc"></div>
							</div>
						</div>
						<div className="item col-6 col-lg-3">
							<div className="item-inner">
								<div className="item-icon"><i className="fab fa-npm"></i></div>
								<h3 className="item-title">npm &amp; composer</h3>
								<div className="item-desc"></div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className="container">
				<hr/>
			</div>

			<section className="testimonials-section p-3 p-lg-5">
				<div className="container">
					<h2 className="section-title font-weight-bold mb-5">
						Testimonials
					</h2>
					<div className="testimonial-carousel owl-carousel owl-theme">
						<div className="item">
							<div className="quote-holder">
								<blockquote className="quote-content">
									De website is precies gemaakt naar onze verwachtingen. Er is tussendoor steeds een goede communicatie via de mail geweest. Ook kregen wij steeds vlot een reactie teruggekoppeld. Prima keus!
								</blockquote>
								<i className="fas fa-quote-left"></i>
							</div>
							<div className="source-holder">
								<div className="meta">
									<div className="name">C. Weijmer</div>
									<div className="info">Maarten Lutherschool Genemuiden</div>
								</div>
							</div>
						</div>
						
						<div className="item">
							<div className="quote-holder">
								<blockquote className="quote-content">
									Een oplossing die me aardig wat tijd, ergernis en saai werk scheelt. Compliment!
								</blockquote>
								<i className="fas fa-quote-left"></i>
							</div>
							<div className="source-holder">
								<div className="meta">
									<div className="name">J. van der Poel</div>
									<div className="info">Voorzitter College van Bestuur, Scholengroep IJsselrijk</div>
								</div>
							</div>
						</div>
						
						<div className="item">
							<div className="quote-holder">
								<blockquote className="quote-content">
									Vraag het Jordy en hij maakt het... Ik hoop nog vaak van je talent gebruik te kunnen maken!
								</blockquote>
								<i className="fas fa-quote-left"></i>
							</div>
							<div className="source-holder">
								<div className="meta">
									<div className="info">Ploegleider, Brandweer Hasselt</div>
								</div>
							</div>
						</div>
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
						<div className="col-md-6 mb-5">
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
						<div className="col-md-6 mb-5">
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
						<div className="col-md-6 mb-5">
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
					<div className="text-center py-3"><a href="/portfolio" className="btn btn-primary"><i className="fas fa-arrow-alt-circle-right mr-2"></i>View Portfolio</a></div>
					
				</div>
			</section>
		</div>
	);
}

export default AboutMe;