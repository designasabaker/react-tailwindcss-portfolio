// Import images
import Image1 from '../images/WeLight.png';
import Image2 from '../images/WeLight2.png';
import Image3 from '../images/WeLight3.png';
import ImageLogin from '../images/WeLight-02.png';
import ImageProfile from '../images/WeLight-04.png';
import ImagePlan from '../images/WeLight-01.png';
import ImageCode from '../images/WeLight-code.png';
import OSBCover from '../images/OSB-1.png';
import EcoHomeCover from '../images/EcoHomeCover.png';

import feedbackImg from '../images/Projects/welight/feedback.jpg';
import figma1Img from '../images/Projects/welight/figma1.jpg';
import logoOptionsImg from '../images/Projects/welight/logo-options.png';
import meetingDiscussionImg from '../images/Projects/welight/meeting-discussingBP.png';
import notionImg1 from '../images/Projects/welight/notion1.jpg';
import notionImg2 from '../images/Projects/welight/notion2.jpg';
import notionImg3 from '../images/Projects/welight/notion3.jpg';
import notionImg4 from '../images/Projects/welight/notion4.jpg';

import style from './WeLightProjectStyle.module.scss'
import CheckLiveWebBtn from "../components/projects/CheckLiveWebBtn";

const WELIGHT_LIVE_URL = 'https://welightpreview.vercel.app';

export const WeLightProjectData = {
	name: 'WeLight',
	ProjectHeader: {
		title: 'WeLight Tech Platform - Under Development',
		publishDate: 'Coming soon',
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
		ClientHeading: 'About',
		CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: 'WeLight Tech',
			},
			{
				id: 2,
				title: 'Role',
				details: <><br/><b className={"font-bold"}>Design Lead / Frontend Developer (React)</b></>,
			},
			{
				id: 3,
				title: 'Website',
				details: WELIGHT_LIVE_URL,
			},
			{
				id: 5,
				title: 'CoWorkers',
				details: <><br />Jack - Product Manager/Founder<br />Dri - Front-end Developer,<br />Jin - Back-end Developer<br />Steven - Back-end Developer, <br />Jack - Product Manager/Founder</>,
			},
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
					'Figma',
					'Python Flask',
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
				id: 1.1,
				details:
					<div className={"w-full flex flex-row justify-center"}>
						<img src={logoOptionsImg} alt={"logo options"}
							 className={"object-contain px-6 pt-6"}
							 style={{maxHeight: "300px"}}
						/>
						<div className={"flex flex-col px-6 "}>
							<div style={{flex:1}} />
							<div className={"font-thin text-sm"}>Logo Design</div>
							<p className={"font-thin text-sm py-2"}>I spearheaded the logo design, creating multiple versions for team discussions.</p>
						</div>
					</div>,
			},
			{
				id: 2,
				details:
				'In addition, I played a crucial role in implementing the logic for several pages, using hooks to create interactive and dynamic user interfaces. By utilizing hooks, I was able to build reusable code that facilitated more efficient development and improved the performance of the platform.'
			},
			{
				id: 2.1,
				details:
					<div className={"w-full flex flex-row justify-center"}>
						<img src={meetingDiscussionImg} alt={"logo options"}
							 className={"max-w-md max-h-lg object-contain px-6 pt-6"}
							 style={{
								 maxHeight: "300px"
							 }}/>
						<div className={"flex flex-col px-6"}>
							<div style={{flex:1}} />
							<div className={"font-thin text-sm"}>Dev Meeting</div>
							<p className={"font-thin text-sm py-2"}>
								Our team comprises both designers and developers. We often collaborate remotely to discuss web design.</p>
						</div>
					</div>,
			},
			{
				id: 3,
				details:
				'As a front-end developer, I implemented the UI design and ensured that it functioned properly across various web browsers and devices. I leveraged a range of front-end technologies, including JavaScript, CSS, and HTML, to build out the platform\'s user interface and integrate the necessary logic and functionality.'
			},
			{
				id: 3.1,
				details:
					<div className={"w-full flex flex-row justify-center"}>
						<img src={notionImg1} alt={"feedback"}
							 className={"max-w-md max-h-lg object-contain px-6 pt-6"}
							 style={{maxWidth: "450px"}}
						/>
						<div className={"flex flex-col px-3"}>
							<div style={{flex:1}} />
							<div className={"font-thin text-sm"}>Iteration I</div>
							<p className={"font-thin text-sm py-2"}>When I first took over the project, the style was quite chaotic, incorporating both material-ui and tailwindcss. Moreover, the web page style was rough, using the default style of daisyui. I made modifications so that when users focus on login or sign up, corresponding animations will be triggered.
								</p>
						</div>
					</div>,
			},
			{
				id: 3.2,
				details:
					<div className={"w-full flex flex-row"}>
						<img src={notionImg3} alt={"feedback"}
							 className={"max-w-md max-h-lg object-contain px-6 pt-6"}
							 style={{maxWidth: "450px"}}
						/>
						<div className={"flex flex-col px-3"}>
							<div style={{flex:1}} />
							<div className={"font-thin text-sm"}>Iteration II</div>
							<p className={"font-thin text-sm py-2"}>
								I modified the logic based on my first version, separating the login and signup into different pages. At the same time, I added a gallery to showcase the flair of my colleagues and our team.
							</p>
						</div>
					</div>,
			},
			{
				id: 3.3,
				details:
					<div className={"w-full flex flex-row"}>
						<img src={notionImg4} alt={"feedback"}
							 className={"max-w-md max-h-lg object-contain px-6 pt-6"}
							 style={{maxWidth: "450px"}}
						/>
						<div className={"flex flex-col px-3"}>
							<div style={{flex:1}} />
							{/*<div className={"font-bold text-md"}>Iteration II</div>*/}
							<p className={"font-thin text-sm py-2"}>
								Meanwhile, I was also responsible for designing and developing the profile page. Users input their personal information on this page, and after submission, the backend returns a JSON file used to display past case studies.
							</p>
						</div>
					</div>,
			},
			{
				id: 4,
				details:
				'Overall, my contributions at WeLight were instrumental in delivering an enhanced user experience, and my use of hooks for animation helped to streamline development and create a dynamic, engaging platform.'
			},
			{
				id: 4.1,
				details:
					<div className={"w-full flex flex-row"}>
						<img src={feedbackImg} alt={"feedback"}
							 className={"max-w-md max-h-lg object-contain px-6 pt-6"}
							 style={{maxHeight: "300px"}}
						/>
						<div className={"flex flex-col px-3"}>
							<div style={{flex:1}} />
							<div className={"font-thin text-sm"}>Feedback</div>
							<p className={"font-thin text-sm py-2"}>
								After our pitch, we received feedback from the audience and judges. Everyone expressed confidence in our project.</p>
						</div>
					</div>,
			},
			{
				id:100,
				details:
				<CheckLiveWebBtn LIVE_URL={WELIGHT_LIVE_URL} />
			}
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
				img: OSBCover,
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
