
import React from 'react';

function Contact({i18n}) {
	return (
		<div>
			<section className="cta-section theme-bg-light py-5">
				<div className="container text-center single-col-max-width">
					<h2 className="heading">{i18n.translation('contact')}</h2>
					<div className="intro">
						<p>
							{i18n.translation('interested')}
							&nbsp;
							{i18n.translation('sendEmail')}
							&nbsp;
							<a href="mailto:jordyvanderpoel@gmail.nl" className="link-on-bg">
								jordyvanderpoel@gmail.com
							</a>.
						</p>
						<p>
							{i18n.translation('getConnected')}
						</p>
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
		</div>
	);
}

export default Contact;