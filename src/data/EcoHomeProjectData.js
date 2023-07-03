// Import images
import Image1 from '../images/EcoHome-1.png';
import Image2 from '../images/EcoHome-2.png';
import Image3 from '../images/EcoHome-3.png';
import Image4 from '../images/EcoHome-4.png';
import Image5 from '../images/EcoHome-5.png';
import Image6 from '../images/EcoHome-6.png';
import WeLightImage1 from '../images/WeLight.png';
import WeLight01 from '../images/WeLight2.png';
import OSBImage1 from '../images/OSB-1.png';

// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';
import OSBCover from "../images/OSB-1.png";

export const EcoHomeProjectData = {
	name: 'EcoHome',
	ProjectHeader: {
		title: 'EcoHome',
		publishDate: 'Feb 21, 2021',
		tags: 'UI/UX Design',
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
			img: Image6,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Project',
		CompanyInfo: [
			{
				id: 1,
				title: 'Target Users',
				details: 'Residents w/ National Grid Account'
			},
			{
				id: 2,
				title: 'Stakeholders',
				details: 'Electric Appliance Companies',
			},
			// {
			// 	id: 3,
			// 	title: 'Website',
			// 	details: 'https://company.com',
			// },
			// {
			// 	id: 4,
			// 	title: 'Phone',
			// 	details: '555 8888 888',
			// },
			{
				id: 5,
				title: 'CoWorkers',
				details: <><br />Hermione - Designer</>,
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'A team of design students from the Rhode Island School of Design (RISD) is collaborating with a chemistry professor from the University of Rhode Island to create a new brand. In this UI/UX design project, our team aims to deliver a comprehensive digital experience that captures the essence of the professor\'s brand and effectively communicates it to its target audience.',		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Adobe Photoshop',
					'Adobe XD',
				],
			},
		],
		ProjectDetailsHeading: 'Overview',
		ProjectDetails: [
			{
				id: 1,
				details:
					"My colleague and I have chosen to design an energy-related app as our course project at RISD."
				},
			{
				id: 2,
				details:
					'Our goal is to design an intuitive energy monitoring interface while incorporating social elements to create a more engaging and attractive app.',
			},
			{
				id: 3,
				details:
					<div>User Story A<br/>
					 One day , Tom came to home early and found he received a very expensive month bill. He checked the meter outside the house and found that the water heater had been broken.\nTom contacted with water-heater company and was recommended a new APP from National Grid and Providence Water which would prevent this problem in the future.<br/>
						The new APP can monitor the real time electricity and water usages in a household and send warning message as soon as possible. Two weeks later, Tom picked up his phone and received a notification. Tom immediately contacted the repairman. Luckily, the repairman quickly found the leak location and repaired it.</div>,
			},
			{
				id: 4,
				details:
					<div>User Story B<br/>
						Lauren comes home from work and starts a Tiktok live broadcast during which she shows her viewers how she cooks herself a light meal.<br/>
						During the live, there were negative voice in the comment section judging the way she did the dishes wasted too much water.<br/>
						She lost a lot of followers that night. As an environmental influencer, Lauren feels guilty to set a bad example of energy conservation for her audience.<br/>
						In a couple of days, her friend sent a link of a new app from national grid and Providence Water to her, saying the app can help her to document and therefore take action to improve on her energy usage.
					</div>,
			},
			{
				id: 9,
				details:
					<div className={"w-full grid grid-cols-2"}>
						<iframe width={'100%'} height="315" src="https://www.youtube.com/embed/msG6ZHoaZ9Y"
								title="YouTube video player" frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen></iframe>
						<div className={"flex flex-col px-3"}>
							<div style={{flex:1}} />
							<div className={"font-thin text-sm"}>AR Proposal</div>
							<p className={"font-thin text-sm py-2"}>
								In our recent UI/UX design project, we have conceptualized the use of augmented reality (AR) glasses for energy monitoring. The proposed solution offers real-time and aggregate data on energy usage for each electrical appliance in a user-friendly, visual format. </p>
						</div>
					</div>,
			},
			{
				id: 10,
				details:
					<div>By integrating AR technology with energy consumption data, users can gain immediate and intuitive insights into their power usage patterns, allowing them to manage their energy consumption more effectively. The AR glasses overlay this information directly onto the physical appliances, creating an immersive, interactive, and educational user experience.

						The goal of the project is not only to modernize the way we approach energy consumption but also to promote energy efficiency and sustainability. The project showcases the potential of AR technology in transforming everyday experiences and promoting better energy usage habits.
					</div>,
			},
		],
		// ProjectMoreDetailsHeading: 'Overview',
		// ProjectMoreDetails: [],
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
				img: OSBCover,
			},
			{
				id: 'r2',
				name:'WeLight',
				title: 'WeLight Tech',
				img: WeLight01,
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
