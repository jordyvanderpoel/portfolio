import MenuItem from './MenuItem';

function Menu() {
	return (
		<ul className="navbar-nav flex-column text-left">
			<MenuItem path="/" icon="fa-user" title="About Me" />
			<MenuItem path="/portfolio" icon="fa-laptop-code" title="Portfolio" />
			<MenuItem path="/resume" icon="fa-file-alt" title="Resume" />
			<MenuItem path="/contact" icon="fa-envelope-open-text" title="Contact" />
		</ul>
	);
}

export default Menu;