function Project({project}) {
	return (
		<div className="col-md-6 mb-5">
			<div className="card project-card">
				<div className="row no-gutters">
					<div className="col-lg-4 card-img-holder">
						<img src={project.image} className="card-img" />
					</div>
					<div className="col-lg-8">
						<div className="card-body">
							<h5 className="card-title">
								<a href="/project-dd" className="theme-link">
									{ project.title }
								</a>
							</h5>
							<p className="card-text">
								{ project.description }
							</p>
							<p className="card-text">
								<small className="text-muted">
									{ project.client }
								</small>
							</p>
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
	);
}

export default Project;