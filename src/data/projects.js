// Import images
import WebImage1 from '../images/web-project-1.jpg';
import WeLightImage from '../images/WeLight.png';
import MobileImage1 from '../images/mobile-project-1.jpg';
import MobileImage2 from '../images/mobile-project-2.jpg';
import UIImage1 from '../images/ui-project-1.jpg';
import UIImage2 from '../images/ui-project-2.jpg';

export const projectsData = [
	{
		id: 1,
		name: 'WeLight',
		title: 'WeLight Tech Platform',
		category: 'Web Application',
		img: WeLightImage,
		ProjectHeader: {
			title: 'WeLight Tech Platform',
			publishDate: 'Apr 15, 2023',
			tags: 'UI / Frontend',
		},
	},
	{
		id: 2,
		name: 'OSB',
		title: 'OSB Website',
		category: 'Web Application',
		img: MobileImage2,
		ProjectHeader: {
			title: 'OSB Website',
			publishDate: 'Apr 15, 2023',
			tags: 'UI / Frontend',
		},
	},
	{
		id: 3,
		title: 'Project Management UI',
		category: 'UI/UX Design',
		img: UIImage1,
	},
	{
		id: 4,
		title: 'Cloud Storage Platform',
		category: 'UI/UX Design',
		img: UIImage2,
	},
	{
		id: 5,
		title: 'React Social App',
		category: 'Mobile Application',
		img: MobileImage1,
	},
	{
		id: 6,
		title: 'Apple Design System',
		category: 'Web Application',
		img: WebImage1,
	},
];
