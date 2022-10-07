import React from 'react';

function Footer({i18n}) {
	return (
		<footer className="footer text-center py-4">
			<small className="copyright">
				&copy; 2022 - Jordy van der Poel
			</small>
			<div className="text-center">
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
		</footer>
	);
}

export default Footer;