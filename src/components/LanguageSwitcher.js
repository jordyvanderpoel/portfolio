import React from 'react';

function LanguageSwitcher({i18n}) {
	const languages = [
		{language: 'Nederlands', short: 'nl', flag: 'nl'},
		{language: 'English', short: 'en', flag: 'gb'},
	]

	return (
		<div>
			{
				languages.map((language, i) => (
					i18n.language === language.short ?
						'' :
						<div onClick={() => {i18n.setLanguage(language.short)}} key={i} style={{cursor: 'pointer'}}>
							<span className={"fi fi-" + language.flag}></span>
							&nbsp;
							{language.language}
						</div>
				))
			}
		</div>
	)
}

export default LanguageSwitcher;