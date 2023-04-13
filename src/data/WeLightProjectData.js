// Import images
import Image1 from '../images/WeLight.png';
import Image2 from '../images/WeLight2.png';
import Image3 from '../images/WeLight3.png';
import ImageLogin from '../images/WeLight-02.png';
import ImageProfile from '../images/WeLight-04.png';
import ImagePlan from '../images/WeLight-01.png';
import ImageCode from '../images/WeLight-code.png';

// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';
import Image5 from "../images/OSB-5.png";

export const WeLightProjectData = {
	name: 'WeLight',
	ProjectHeader: {
		title: 'WeLight Tech Platform',
		publishDate: 'Apr 15, 2023',
		tags: 'UI / Frontend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Kabul Project Management UI',
			img: Image2,
		},
		{
			id: 2,
			title: 'devices preview 2',
			img: Image1,
		},
		{
			id: 3,
			title: 'Kabul Project Management UI',
			img: Image3,
		},
		{
			id: 4,
			title: 'Kabul Project Management UI',
			img: ImageLogin,
		},
		{
			id: 5,
			title: 'devices preview 2',
			img: ImageProfile,
		},
		{
			id: 6,
			title: 'Kabul Project Management UI',
			img: ImageCode,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: 'WeLight Tech',
			},
			{
				id: 2,
				title: 'Services',
				details: 'UI Design & Frontend Development',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://welightpreview.vercel.app/',
			},
			// {
			// 	id: 4,
			// 	title: 'Phone',
			// 	details: '',
			// },
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'My mission is to build a modern, user-friendly webpage that provides high-quality advice and resources for further education. I aim to create a comprehensive platform that helps users make informed decisions about their education and career goals.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'React.js',
					'Next.js',
					'TailwindCSS',
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
				'During my time at WeLight, an education startup brand, I held a dual role as a UI designer and front-end developer, responsible for improving the user interface of the company\'s web applications. I utilized Tailwind CSS, a popular utility-first CSS framework, to develop new components and update existing ones, with the aim of enhancing the overall look and feel of the platform.'
			},
			{
				id: 2,
				details:
				'In addition, I played a crucial role in implementing the logic for several pages, using hooks to create interactive and dynamic user interfaces. By utilizing hooks, I was able to build reusable code that facilitated more efficient development and improved the performance of the platform.'
			},
			{
				id: 3,
				details:
				'As a front-end developer, I implemented the UI design and ensured that it functioned properly across various web browsers and devices. I leveraged a range of front-end technologies, including JavaScript, CSS, and HTML, to build out the platform\'s user interface and integrate the necessary logic and functionality.'
			},
			{
				id: 4,
				details:
				'Overall, my contributions at WeLight were instrumental in delivering an enhanced user experience, and my use of hooks for animation helped to streamline development and create a dynamic, engaging platform.'			},
		],
		SocialSharingHeading: '',
		SocialSharing: [
			// {
			// 	id: 1,
			// 	name: 'Twitter',
			// 	icon: <FiTwitter />,
			// 	url: 'https://twitter.com/realstoman',
			// },
			// {
			// 	id: 2,
			// 	name: 'Instagram',
			// 	icon: <FiInstagram />,
			// 	url: 'https://instagram.com/realstoman',
			// },
			// {
			// 	id: 3,
			// 	name: 'Facebook',
			// 	icon: <FiFacebook />,
			// 	url: 'https://facebook.com/',
			// },
			// {
			// 	id: 4,
			// 	name: 'LinkedIn',
			// 	icon: <FiLinkedin />,
			// 	url: 'https://linkedin.com/',
			// },
			// {
			// 	id: 5,
			// 	name: 'Youtube',
			// 	icon: <FiYoutube />,
			// 	url: 'https://www.youtube.com/c/StomanStudio',
			// },
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 'r1',
				name: 'OSB',
				title: 'OSB Website',
				img: ImageLogin,
			},
			{
				id: 'r2',
				name:'EcoHome',
				title: 'EcoHome',
				img: Image5,
			},
			// {
			// 	id: 3,
			// 	title: 'UI Design',
			// 	img: Image6,
			// },
			// {
			// 	id: 4,
			// 	title: 'Kabul Mobile App UI',
			// 	img: Image3,
			// },
		],
	},
};
