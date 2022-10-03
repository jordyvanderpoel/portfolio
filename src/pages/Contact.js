function Contact() {
	return (
		<div>
			<section className="cta-section theme-bg-light py-5">
				<div className="container text-center single-col-max-width">
					<h2 className="heading">Contact</h2>
					<div className="intro">
						<p>Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email to <a href="mailto:jordy@webdevelapper.nl" className="link-on-bg">jordy@webdevelapper.nl</a>.</p>
						<p>Want to get connected? Follow me on the social channels below.</p>
						<ul className="list-inline mb-0">
							<li className="list-inline-item mb-3">
								<a className="twitter link-on-bg" href="https://twitter.com/jordyvdpoel" target="_blank" rel="noreferrer">
									<i className="fab fa-twitter fa-fw fa-lg"></i>
								</a>
							</li>
							<li className="list-inline-item mb-3">
								<a className="linkedin link-on-bg" href="https://linkedin.com/in/jordyvanderpoel" target="_blank" rel="noreferrer">
									<i className="fab fa-linkedin-in fa-fw fa-lg"></i>
								</a>
							</li>
							<li className="list-inline-item mb-3">
								<a className="github link-on-bg" href="https://github.com/jordyvanderpoel" target="_blank" rel="noreferrer">
									<i className="fab fa-github-alt fa-fw fa-lg"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="contact-section px-3 py-5 p-md-5">
				<div className="container">
					<h3 className="text-center mb-3">Get In Touch</h3>
					<div className="text-center mb-3" id="contact-result"></div>
					<form id="contact-form" className="contact-form col-lg-8 mx-lg-auto" method="post" action="send.php">
						<div className="form-row">
							<div className="form-group col-md-6">
								<label className="sr-only" for="cname">Name</label>
								<input type="text" className="form-control" id="cname" name="name" placeholder="Name" minlength="2" required="" aria-required="true" />
							</div>
							<div className="form-group col-md-6">
								<label className="sr-only" for="cemail">Email</label>
								<input type="email" className="form-control" id="cemail" name="email" placeholder="Email" required="" aria-required="true" />
							</div>
							<div className="form-group col-12">
								<label className="sr-only" for="csubject">Subject</label>
								<input type="text" className="form-control" id="csubject" name="subject" placeholder="What's your question about?" required="" aria-required="true" />
							</div>
							<div className="form-group col-12">
								<label className="sr-only" for="cmessage">Your message</label>
								<textarea className="form-control" id="cmessage" name="message" placeholder="Enter your message" rows="10" required="" aria-required="true"></textarea>
							</div>
							<div className="form-group col-12">
								<button type="submit" className="btn btn-block btn-primary py-2" id="contact-button">Send Now</button>
							</div>
							<input type="hidden" name="recaptcha_response" id="recaptchaResponse" />
						</div>
					</form>
				</div>
			</section>
		</div>
	);
}

export default Contact;