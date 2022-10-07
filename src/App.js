import "/node_modules/flag-icons/css/flag-icons.min.css";

import Cookies from "js-cookie";
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

import * as translations from './i18n';

function App() {
	const [language, setLanguage] = useState(Cookies.get('language') ?? 'en');
	const [darkmode, setDarkmode] = useState(Cookies.get('dark-mode') === 'true' ?? false);

	const i18n = {
		language: language,
		setLanguage: (lang) => {
			Cookies.set('language', lang, { expires: 365 });
			setLanguage(lang);
		},
		translation: (key) => {
			return translations[language][key] ?? ''
		}
	};

	const switchDarkmode = (state) => {
		Cookies.set('dark-mode', state, { expires: 365 })
		setDarkmode(state);

		if(state)
			document.body.classList.add('dark-mode');
		else
			document.body.classList.remove('dark-mode');
	}

	if (Cookies.get('dark-mode') === 'true') {
		document.body.classList.add('dark-mode');
	}

	return (
		<Router>
			<div className="App">
				<Sidebar i18n={i18n} darkmode={darkmode} setDarkmode={switchDarkmode} />

				<div className="main-wrapper">
					<Routes>
						<Route exact path='/' element={<AboutMe i18n={i18n} />}></Route>
						<Route exact path='/portfolio' element={<Portfolio i18n={i18n} />}></Route>
						<Route exact path='/resume' element={<Resume i18n={i18n} />}></Route>
						<Route exact path='/contact' element={<Contact i18n={i18n} />}></Route>
					</Routes>

					<Footer i18n={i18n} />
				</div>
			</div>
		</Router>
	);
}

export default App;
