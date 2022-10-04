import projectDD from './img/project/DD3.jpg';
import projectHS from './img/project/HS1.jpg';
import projectMLS from './img/project/MLS1.jpg';
import projectPD from './img/project/PD2.png';
import projectTC from './img/project/TC1.jpg';

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
		image: projectDD,
		title: 'DutchDevices Portal',
		description: 'An intuitive interface to represent data from various IoT-devices.',
		client: 'Dutch Devices',
		featured: true
	},
	{
		image: projectTC, 
		title: 'TripCloud',
		description: 'TripCloud helps you keeping track of your trips and generates a overview for you.',
		client: 'Personal Project',
		featured: true
	},
	{
		image: projectHS,
		title: 'Resit registration tool',
		description: 'A webapplication for students to register for resit-exams.',
		client: 'Greijdanus College Zwolle',
		featured: true
	},
	{
		image: projectPD,
		title: 'Availability management application',
		description: 'A web application for fire fighters to register their availability.',
		client: 'Fire Department Hasselt',
		featured: false
	},
	{
		image: projectMLS,
		title: 'Website design',
		description: 'A website with sleek design to display the school\'s identity.',
		client: 'Maarten Lutherschool Genemuiden',
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
			title: 'Full-stack developer',
			company: 'Dutch Devices',
			link: 'https://dutchdevices.nl',
			time: '2019 - Present',
			description: 'Dutch Devices creates innovative solutions using IoT-devices to collect valuable data.',
			tasks: [
				'Creating an intuitive Angular portal to visualize data from various IoT-devices.',
				'Designing, implementing and maintaining an efficient and scalable database.',
				'Development of a RESTful API in PHP, using the CodeIgniter framework.',
				'Developing a multi-platform Xamarin.Forms app.'
			]
		},
		{
			title: 'Back-end web developer',
			company: 'Mamble_easy web',
			link: 'https://mamble.nl',
			time: '2016 - Present',
			description: 'Mamble_easy web is the all-in-one CMS. We design and build your website, you manage its content. Managing your website without technical knowledge, it\'s a piece of cake.',
			tasks: [
				'Implementing plain HTML designs into our PHP-based CMS.',
				'Designing and developing a new, simplified underlying structure in PHP, using the CodeIgniter framework.'
			]
		}
	],
	projects: [
		{
			title: 'Intranet web application',
			link: null,
			company: 'Strandreddingsbrigade Westenschouwen',
			description: 'An interactive web application, build to be the central platform for all tools used by the lifeguards, including activity registration, availability indicator and planning tools.',
			technologies: null,
		},
		{
			title: 'Work-trip registration application',
			link: 'https://tripcloud.nl',
			company: null,
			description: 'Figuring out your work-related trips at the end of the month can be a challanging task. This web application helps you keeping track of your trips and generates a overview for you.',
			technologies: 'ReactJS (front-end) and Node.JS (back-end)',
		},
		{
			title: 'Availability management application',
			link: 'https://piketdiensten.nl',
			company: 'Fire Department Hasselt',
			description: 'This web application provides the members of the voluntary fire deptartment the ability to indicate their availability. Using this data, it creates a schedule to ensure the availability of the crew.',
			technologies: 'HTML5, CSS, Bootstrap (front-end) and PHP CodeIgniter (back-end)',
		},
		{
			title: 'Resit registration and evalution system',
			link: 'https://herkansingssysteem.nl',
			company: 'Greijdanus College Zwolle',
			description: 'A web application for students to register for resit-exams. It gives teachers and supervisors the ability to reject if the student did not comply to the requirements.',
			technologies: 'AngularJS (front-end) and SlimPHP (back-end)',
		}
	],
	skills: {
		technical: [
			'JavaScript | Angular | React',
			'PHP',
			'Python',
			'Node.js',
			'MySQL',
			'Object-oriented design',
			'Design and implementation of database structures',
		],
		professional: [
			'Effective communication',
			'Eager to learn',
			'Strong problem solver'
		],
	},
	education: [
		{
			title: 'MSc in Embedded Systems',
			institute: 'University of Twente',
			time: '2021-now'
		},
		{
			title: 'BSc in Computer Science',
			institute: 'Eindhoven University of Technology',
			time: '2016-2021'
		},
		{
			title: 'Atheneum',
			institute: 'Greijdanus College Zwolle',
			time: '2009-2016'
		},
	],
	languages: [
		{
			language: 'Dutch',
			level: 'Native'
		},
		{
			language: 'English',
			level: 'Professional'
		},
	],
	interests: [
		'Lifeguarding',
		'Cycling & Mountainbiking'
	],
};

export { projects, technologies, resume };