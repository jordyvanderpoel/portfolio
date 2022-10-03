import {
	useLocation,
	Link
} from 'react-router-dom'

function MenuItem({path, icon, title}) {
	const location = useLocation();

	return (
		<li className={"nav-item" + (location.pathname === path ? ' active' : '')}>
			<Link to={path} className="nav-link">
				<i className={"fas fa-fw mr-2 " + icon}></i>
				{title}
				{ location.pathname === path ? <span className="sr-only">(current)</span> : '' }
			</Link>
		</li>
	);
}

export default MenuItem;