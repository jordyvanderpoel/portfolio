function Technology({text, icons}) {
	return (
		<div className="item col-6 col-lg-3">
			<div className="item-inner">
				<div className="item-icon">
					{
						icons.map(i => <i className={"fab mr-2 " + i}></i>)
					}
				</div>
				<h3 className="item-title">
					{ text }
				</h3>
				<div className="item-desc"></div>
			</div>
		</div>
	);
}

export default Technology;