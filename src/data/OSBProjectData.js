// Import images
import Image1 from '../images/OSB-1.png';
import Image2 from '../images/OSB-2.png';
import Image3 from '../images/OSB-3.png';
import Image4 from '../images/OSB-4.png';
import Image5 from '../images/OSB-5.png';
import ImageCode from '../images/OSB-code.png';
import WeLightImage1 from '../images/WeLight.png';
import Image6 from '../images/ui-project-2.jpg';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';
import EcoHomeCover from "../images/EcoHomeCover.png";

export const OSBProjectData = {
	name: 'OSB',
	ProjectHeader: {
		title: 'Ocean State Bioactives Website - Under Development',
		publishDate: 'Coming soon',
		tags: 'UI / Frontend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Kabul Project Management UI',
			img: Image1,
		},
		{
			id: 2,
			title: 'Kabul Project Management UI',
			img: Image2,
		},
		{
			id: 3,
			title: 'Kabul Project Management UI',
			img: Image3,
		},
		{
			id: 4,
			title: 'Kabul Project Management UI',
			img: Image4,
		},
		{
			id: 5,
			title: 'Kabul Project Management UI',
			img: Image5,
		},
		{
			id: 6,
			title: 'Kabul Project Management UI',
			img: ImageCode,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About',
		CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: 'Ocean State Bioactives'
			},
			{
				id: 2,
				title: 'Services',
				details: 'Frontend Development',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://osb-react-ts-project.vercel.app/',
			},
			{
				id: 4,
				title: 'Coworkers',
				details: <><br />Rui - Lead UI Designer,<br />Vic - UI Designer</>,
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'A team of design students from the Rhode Island School of Design (RISD) is collaborating with a chemistry professor from the University of Rhode Island to create a new brand. In this UI/UX design project, our team aims to deliver a comprehensive digital experience that captures the essence of the professor\'s brand and effectively communicates it to its target audience.',		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'React.js',
					'Tailwind CSS',
					'Figma',
					'WebFlow',
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					"Ocean State Bioactives is a brand created by Professor Ma at the University of Rhode Island that specializes in producing advanced ingredients. One of the unique features of the brand is its use of raw materials sourced from maple leaves, which are abundant in Rhode Island."
				},
			{
				id: 2,
				details:
					'By incorporating this local element into the brand\'s identity, Ocean State Bioactives is closely linked to the state and its natural resources. In this UI/UX design project, we aim to showcase the brand\'s connection to Rhode Island through a visually engaging and user-friendly digital experience.',
			},
			{
				id: 3,
				details:
					'Our goal is to create a visually engaging and user-friendly website that showcases the brand\'s advanced ingredients and its connection to Rhode Island, ultimately attracting the attention of business partners in the cosmetics industry.',
			},
			{
				id: 4,
				details:
					'In our design approach, we avoided using fancy elements and instead focused on creating a clean and simple aesthetic that reflects the brand\'s commitment to nature.',
			},
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
				name:'WeLight',
				title: 'WeLight Tech',
				img: WeLightImage1,
			},
			{
				id: 'r2',
				name:'EcoHome',
				title: 'EcoHome',
				img: EcoHomeCover,
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
