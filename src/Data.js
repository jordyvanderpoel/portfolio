import * as imgs from './img';
const images = imgs.default;

const technologies = [
	{
		text: 'HTML & CSS',
		icons: ['fa-html5','fa-css3-alt']
	},
	{
		text: 'PHP',
		icons: ['fa-php']
	},
	{
		text: 'JavaScript, Angular & React',
		icons: ['fa-js-square','fa-angular','fa-react']
	},
	{
		text: 'Git',
		icons: ['fa-git-alt']
	},
	{
		text: 'Bootstrap',
		icons: ['fa-bootstrap']
	},
	{
		text: 'Laravel',
		icons: ['fa-laravel']
	},
	{
		text: 'Node.js',
		icons: ['fa-node-js']
	},
	{
		text: 'npm & composer',
		icons: ['fa-npm']
	},
];

const projects = [
	{
		images: [
			images.projects['SRB1.jpg'],
			images.screenshots['SRBi1.png'],
			images.screenshots['SRBi2.png'],
			images.screenshots['SRBi3.png'],
			images.screenshots['SRBi4.png'],
			images.screenshots['SRBi5.png']
		],
		title: {
			nl: 'Intranet SRB',
			en: 'Intranet SRB',
		},
		description: {
			nl: 'Een interactive web applicatie, gebouwd om te dienen als centrale platform voor de digitale hulpmiddelen van de lifeguards.',
			en: 'An interactive web application, build to be the central platform for all tools used by the lifeguards.',
		},
		client: {
			nl: 'Strandreddingsbrigade Westerschouwen',
			en: 'Strandreddingsbrigade Westerschouwen',
		},
		featured: true
	},
	{
		images: [
			images.projects['DD3.jpg'],
			images.screenshots['DD6.png']
		],
		title: {
			nl: 'DutchDevices Portal',
			en: 'DutchDevices Portal',
		},
		description: {
			nl: 'Een intuïtieve omgeving om data van verschillende IoT-appraten te presenteren.',
			en: 'An intuitive interface to represent data from various IoT-devices.',
		},
		client: {
			nl: 'Dutch Devices',
			en: 'Dutch Devices',
		},
		featured: true
	},
	{
		images: [
			images.projects['TC1.jpg'],
			images.screenshots['TC2.png'],
			images.screenshots['TC4.png']
		],
		title: {
			nl: 'TripCloud',
			en: 'TripCloud',
		},
		description: {
			nl: 'TripCloud helpt je om je ritten bij te houden en inzichtelijk te maken.',
			en: 'TripCloud helps you keeping track of your trips and generates a overview for you.',
		},
		client: {
			nl: 'Eigen Project',
			en: 'Personal Project',
		},
		featured: true
	},
	{
		images: [
			images.projects['HS1.jpg'],
			images.screenshots['HS1.png']
		],
		title: {
			nl: 'Herkansingsregistratie',
			en: 'Resit registration tool',
		},
		description: {
			nl: 'Een web applicatie waarmee studenten zich kunnen aanmelden voor herkansingstoetsen.',
			en: 'A webapplication for students to register for resit-exams.',
		},
		client: {
			nl: 'Greijdanus College Zwolle',
			en: 'Greijdanus College Zwolle',
		},
		featured: false
	},
	{
		images: [
			images.projects['PD2.png'],
			images.screenshots['PD3.png']
		],
		title: {
			nl: 'Beschikbaarheidsbeheer applicatie',
			en: 'Availability management application',
		},
		description: {
			nl: 'Een webapplicatie waarin de leden van de brandweer hun beschikbaarheid kunnen aangeven.',
			en: 'A web application for fire fighters to register their availability.',
		},
		client: {
			nl: 'Brandweer Hasselt',
			en: 'Fire Department Hasselt',
		},
		featured: false
	},
	{
		images: [
			images.projects['MLS1.jpg'],
			images.screenshots['MLS3.png']
		],
		title: {
			nl: 'Website design',
			en: 'Website design',
		},
		description: {
			nl: 'Een website met strak ontwerp om de identiteit van de school weer te geven.',
			en: 'A website with sleek design to display the school\'s identity.',
		},
		client: {
			nl: 'Maarten Lutherschool Genemuiden',
			en: 'Maarten Lutherschool Genemuiden',
		},
		featured: true
	},
];

const resume = {
	contact: [
		{
			icon: 'fa-phone-square',
			value: '(+31) 6 10 22 84 68',
			link: 'tel:0610228468'
		},
		{
			icon: 'fa-envelope-square',
			value: 'jordyvanderpoel@gmail.com',
			link: 'mailto:jordyvanderpoel@gmail.com'
		},
		{
			icon: 'fa-globe',
			value: 'www.jordyvanderpoel.nl',
			link: 'https://www.jordyvanderpoel.nl/resume'
		},
		{
			icon: 'fa-map-marker-alt',
			value: 'Enschede',
			link: null
		}
	],
	work: [
		{
			title: 'Full-stack developer (Freelance)',
			company: 'Dutch Devices',
			link: 'https://dutchdevices.nl',
			time: {
				nl: '2019 - Heden',
				en: '2019 - Present',
			},
			description: {
				nl: 'Dutch Devices ontwikkelt innovative oplossingen om middels IoT-devices waardevolle data te verzamelen.',
				en: 'Dutch Devices creates innovative solutions using IoT-devices to collect valuable data.',
			},
			tasks: {
				nl: [
					'Creëeren van een intuitief Angular portal om data van verschillende IoT-devices te visualiseren.',
					'Ontwerp, implementatie en onderhoud van een efficiënte en schaalbare database.',
					'Ontwikkeling van een RESTful API in PHP, met gebruik van het CodeIgniter framework.',
					'Ontwikkeling van een multi-platform Xamarin.Forms app.'
				],
				en: [
					'Creating an intuitive Angular portal to visualize data from various IoT-devices.',
					'Designing, implementing and maintaining an efficient and scalable database.',
					'Development of a RESTful API in PHP, using the CodeIgniter framework.',
					'Developing a multi-platform Xamarin.Forms app.'
				],
			}
		},
		{
			title: 'Back-end web developer (Freelance)',
			company: 'Mamble_easy web',
			link: 'https://mamble.nl',
			time: {
				nl: '2016 - Heden',
				en: '2016 - Present',
			},
			description: {
				nl: 'Mamble_easy web is hét eenvoudige CMS. Wij ontwerpen en ontwikkelen jouw website, jij beheert de inhoud. Jouw website beheren zonder technische kennis, het is een eitje.',
				en: 'Mamble_easy web is the all-in-one CMS. We design and build your website, you manage its content. Managing your website without technical knowledge, it\'s a piece of cake.',
			},
			tasks: {
				nl: [
					'Implementatie van HTML ontwerpen in onze PHP-based CMS.',
					'Ontwerp en ontwikkeling van een vernieuwde en gemoduleerde onderliggende structuur in PHP, using the CodeIgniter framework.'
				],
				en: [
					'Implementing plain HTML designs into our PHP-based CMS.',
					'Designing and developing a new, simplified underlying structure in PHP, using the CodeIgniter framework.'
				]
			}
		}
	],
	projects: [
		{
			title: {
				nl: 'Intranet webapplicatie',
				en: 'Intranet web application',
			},
			link: null,
			company: {
				nl: 'Strandreddingsbrigade Westerschouwen',
				en: 'Strandreddingsbrigade Westerschouwen',
			},
			description: {
				nl: 'Een interactive web applicatie, gebouwd om te dienen als centrale platform voor de digitale hulpmiddelen van de lifeguards, inclusief o.a. inzetregistratie, beschikbaarheidsindicator en planningtools.',
				en: 'An interactive web application, build to be the central platform for all tools used by the lifeguards, including activity registration, availability indicator and planning tools.',
			},
			technologies: {
				nl: null,
				en: null,
			}
		},
		{
			title: {
				nl: 'Werkritten registratie applicatie',
				en: 'Work-trip registration application',
			},
			link: 'https://tripcloud.nl',
			company: {
				nl: null,
				en: null,
			},
			description: {
				nl: 'Het uitzoeken van werk-gerelateerde ritten aan het eind van de maand kan een uitdagende taak zijn. Deze webapplicatie helpt jou om je ritten bij te houden en genereert een overzicht voor je.',
				en: 'Figuring out your work-related trips at the end of the month can be a challanging task. This web application helps you keeping track of your trips and generates a overview for you.',
			},
			technologies: {
				nl: 'ReactJS (front-end) en Node.JS (back-end)',
				en: 'ReactJS (front-end) and Node.JS (back-end)',
			}
		},
		{
			title: {
				nl: 'Beschikbaarheidsbeheer applicatie',
				en: 'Availability management application',
			},
			link: 'https://piketdiensten.nl',
			company: {
				nl: 'Brandweer Hasselt',
				en: 'Fire Department Hasselt',
			},
			description: {
				nl: 'Deze webapplicatie geeft leden van de vrijwillige brandweer de mogelijkheid om hun beschikbaarheid aan te geven. Met deze gegevens worden diensten ingevuld om beschikbaarheid van de ploeg te garanderen.',
				en: 'This web application provides the members of the voluntary fire deptartment the ability to indicate their availability. Using this data, it creates a schedule to ensure the availability of the crew.',
			},
			technologies: {
				nl: 'HTML5, CSS, Bootstrap (front-end) en PHP CodeIgniter (back-end)',
				en: 'HTML5, CSS, Bootstrap (front-end) and PHP CodeIgniter (back-end)',
			}
		},
		{
			title: {
				nl: 'Herkansingsregistratie',
				en: 'Resit registration and evalution system',
			},
			link: 'https://herkansingssysteem.nl',
			company: {
				nl: 'Greijdanus College Zwolle',
				en: 'Greijdanus College Zwolle',
			},
			description: {
				nl: 'Een webapplicatie waarin studenten kunnen registreren voor herkansingstoetsen. Het geeft leraren en rectoren de mogelijkheid het verzoek af te wijzen als studenten niet aan de gestelde eisen voldoen.',
				en: 'A web application for students to register for resit-exams. It gives teachers and supervisors the ability to reject if the student did not comply to the requirements.',
			},
			technologies: {
				nl: 'AngularJS (front-end) en SlimPHP (back-end)',
				en: 'AngularJS (front-end) and SlimPHP (back-end)',
			}
		}
	],
	skills: {
		technical: {
			nl: [
				'JavaScript | Angular | React',
				'PHP',
				'Python',
				'Node.js',
				'MySQL',
				'Objectgeoriënteerd programmeren',
				'Ontwerpen en implementatie van databasestructuren',
			],
			en: [
				'JavaScript | Angular | React',
				'PHP',
				'Python',
				'Node.js',
				'MySQL',
				'Object-oriented design',
				'Design and implementation of database structures',
			],
		},
		professional: {
			nl: [
				'Effectieve communicatie',
				'Leergierig',
				'Sterke probleemoplosser'
			],
			en: [
				'Effective communication',
				'Eager to learn',
				'Strong problem solver'
			],
		}
	},
	education: [
		{
			title: 'MSc in Embedded Systems',
			institute: 'University of Twente',
			time: {
				nl: '2021-heden',
				en: '2021-now',
			}
		},
		{
			title: 'BSc in Computer Science',
			institute: 'Eindhoven University of Technology',
			time: {
				nl: '2016-2021',
				en: '2016-2021',
			}
		},
		{
			title: 'Atheneum',
			institute: 'Greijdanus College Zwolle',
			time: {
				nl: '2009-2016',
				en: '2009-2016',
			}
		},
	],
	languages: {
		nl: [
			{
				language: 'Nederlands',
				level: 'Moedertaal'
			},
			{
				language: 'Engels',
				level: 'Professioneel'
			},
		],
		en: [
			{
				language: 'Dutch',
				level: 'Native'
			},
			{
				language: 'English',
				level: 'Professional'
			},
		],
	},
	interests: {
		nl: [
			'Lifeguarding',
			'Wielrennen & Mountainbiken'
		],
		en: [
			'Lifeguarding',
			'Cycling & Mountainbiking'
		],
	},
};

export { projects, technologies, resume };