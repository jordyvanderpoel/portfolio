import MenuItem from './MenuItem';

function Menu({i18n}) {
	return (
		<ul className="navbar-nav flex-column text-left">
			<MenuItem path="/" icon="fa-user" title="aboutMe" i18n={i18n} />
			<MenuItem path="/portfolio" icon="fa-laptop-code" title="portfolio"  i18n={i18n} />
			<MenuItem path="/resume" icon="fa-file-alt" title="resume"  i18n={i18n} />
		</ul>
	);
}

export default Menu;