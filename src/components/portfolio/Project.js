import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import reactImageSize from 'react-image-size';

function Project({project, i18n}) {
	const [maxImageHeight, setMaxImageHeight] = useState(null);
	const [showModal, setShowModal] = useState(false);

	const handleCloseModal = () => setShowModal(false);
	const handleShowModal = () => setShowModal(true);

	project.images.forEach((img) => {
		reactImageSize(img)
			.then(({ width, height }) => {
				const scaledHeight = height / (width / 468);

				if(scaledHeight > maxImageHeight) setMaxImageHeight(scaledHeight);
			})
			.catch((errorMessage) => {
				console.error("An error occured determining image dimensions: ", errorMessage);
				setMaxImageHeight(null);
			});
	});

	return (
		<>
			<div className="col-md-6 mb-5">
				<div className="card project-card">
					<div className="row no-gutters">
						<div className="col-lg-4 card-img-holder">
							<img src={project.images[0]} className="card-img" alt={"Project " + project.title[i18n.language]}/>
						</div>
						<div className="col-lg-8">
							<div className="card-body">
								<h5 className="card-title">
									<span className="theme-link" onClick={handleShowModal}>
										{ project.title[i18n.language] }
									</span>
								</h5>
								<p className="card-text">
									{ project.description[i18n.language] }
								</p>
								<p className="card-text">
									<small className="text-muted">
										{ project.client[i18n.language] }
									</small>
								</p>
							</div>
						</div>
					</div>
					<div className="link-mask" onClick={handleShowModal}>
						<div className="link-mask-text">
							<span className="btn btn-secondary">
								<i className="fas fa-eye mr-2"></i>
								{i18n.translation('viewProject')}
							</span>
						</div>
					</div>
				</div>
			</div>

			<Modal show={showModal} onHide={handleCloseModal}>
				<Modal.Body>
					<h3 style={{ width:'100%', textAlign:'center' }}>
						{ project.title[i18n.language] }
					</h3>
					<Carousel className="mb-3 mt-3" style={{height: maxImageHeight != null ? maxImageHeight + "px" : null}}>
						{
							project.images.map((img, i) =>
								<Carousel.Item key={i}>
									<a href={img} target="_BLANK" rel="noreferrer">
										<img className="d-block w-100" src={img} alt="" />
									</a>
								</Carousel.Item>
							)
						}
					</Carousel>
					{ project.description[i18n.language] }
				</Modal.Body>
			</Modal>
		</>
	);
}

export default Project;