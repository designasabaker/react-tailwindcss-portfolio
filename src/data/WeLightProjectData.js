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
import ClickableImage from "../components/projects/ClickableImage";
import {LANGUAGE} from "../context/AppContext";

import {importAll} from "../utils";

console.log('notionImg4', notionImg4)

const WELIGHT_LIVE_URL = 'https://welightpreview.vercel.app';
const profileImagesObject = importAll(require.context('../images/Projects/welight/profile', false, /\.(png|jpe?g|svg)$/));
const sortedProfileImages = Object.entries(profileImagesObject)
	.sort((a, b) => {
		const numA = parseInt(a[0].match(/\d+/)[0], 10);  // Extract the number from the filename of 'a'
		const numB = parseInt(b[0].match(/\d+/)[0], 10);  // Extract the number from the filename of 'b'
		return numA - numB;  // Sort based on the extracted numbers
	})
	.map(entry => entry[1])
	.map(img => img.default);  // Get the sorted image paths

console.log('sortedProfileImages', sortedProfileImages)
const profileImagesJSX =sortedProfileImages.map((imgPath, index) => {
	return(
		<div key={index}>
			<div className={"w-full py-2 grid grid-cols-2"}>
				<ClickableImage
					src={imgPath} alt={"feedback"}
					className={"max-w-md max-h-lg object-contain px-6 pt-6"}
					style={{maxWidth: "450px"}}
				/>
				<div className={"flex flex-col px-3"}>
					<div style={{flex:1}} />
					{/*<div className={"font-bold text-md"}>Iteration II</div>*/}
					<p className={"font-thin text-sm py-2"}>
					</p>
				</div>
			</div>
		</div>
	)
});
console.log('profileImagesJSX', profileImagesJSX)

export const WeLightProjectData = {
	id: 1,
	name: 'WeLight',
	ProjectHeader:{
		title: 'WeLight Tech Platform',
		publishDate: 'Coming soon',
		tags: 'UI / Frontend',

		[LANGUAGE.EN]: {
			title: 'WeLight Tech Platform',
			publishDate: 'Coming soon',
			tags: 'UI / Frontend',
		},
		[LANGUAGE.CN]: {
			title: 'WeLight Tech 教育平台',
			publishDate: '开发中',
			tags: 'UI / 前端',
		}
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
			{
				id: 6,
				title: 'Research Work (Under Development)',
				details: 'https://myaiapp.vercel.app/'
			}
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
				details:{
					[LANGUAGE.EN]: 'During my time at WeLight, an education startup brand, I held a dual role as a UI designer and front-end developer, responsible for improving the user interface of the company\'s web applications. I utilized Tailwind CSS, a popular utility-first CSS framework, to develop new components and update existing ones, with the aim of enhancing the overall look and feel of the platform.',
					[LANGUAGE.CN]: '在我在WeLight工作的期间，这是一家教育初创品牌，我担任了UI设计师和前端开发者的双重角色，负责改善公司网页应用的用户界面。我使用了Tailwind CSS，这是一个非常受欢迎的实用主义首选的CSS框架，以开发新的组件和更新现有的组件，目的是提升平台整体的视觉效果和用户体验感。'
				}
				//'During my time at WeLight, an education startup brand, I held a dual role as a UI designer and front-end developer, responsible for improving the user interface of the company\'s web applications. I utilized Tailwind CSS, a popular utility-first CSS framework, to develop new components and update existing ones, with the aim of enhancing the overall look and feel of the platform.',
			},
			{
				id: 1.1,
				details:{
					[LANGUAGE.EN]:
						<div className={"w-full grid grid-cols-2"}>
								<ClickableImage
									src={logoOptionsImg} alt={"logo options"}
									className={"object-contain px-6 pt-6"}
									style={{maxHeight: "300px"}}/>
								{/*<img src={logoOptionsImg} alt={"logo options"}*/}
								{/*	 className={"object-contain px-6 pt-6"}*/}
								{/*	 style={{maxHeight: "300px"}}*/}
								{/*/>*/}
								<div className={"flex flex-col px-6 "}>
									<div style={{flex:1}} />
									<div className={"font-thin text-sm"}>Logo Design</div>
									<p className={"font-thin text-sm py-2"}>I spearheaded the logo design, creating multiple versions for team discussions.</p>
								</div>
						</div>,
					[LANGUAGE.CN]:
						<div className={"w-full grid grid-cols-2"}>
								<ClickableImage
									src={logoOptionsImg} alt={"logo options"}
									className={"object-contain px-6 pt-6"}
									style={{maxHeight: "300px"}}/>
								{/*<img src={logoOptionsImg} alt={"logo options"}*/}
								{/*	 className={"object-contain px-6 pt-6"}*/}
								{/*	 style={{maxHeight: "300px"}}*/}
								{/*/>*/}
								<div className={"flex flex-col px-6 "}>
									<div style={{flex:1}} />
									<div className={"font-thin text-sm"}>Logo 设计</div>
									<p className={"font-thin text-sm py-2"}>我主导了标志设计，创建了多个版本以供团队讨论。</p>
								</div>
						</div>,
				}
			},
			{
				id: 2,
				details:{
					[LANGUAGE.EN]: 'In addition, I played a crucial role in implementing the logic for several pages, using hooks to create interactive and dynamic user interfaces. By utilizing hooks, I was able to build reusable code that facilitated more efficient development and improved the performance of the platform.',
					[LANGUAGE.CN]: '此外，我在实现几个页面的逻辑方面发挥了至关重要的作用，使用钩子创建交互式和动态用户界面。通过利用钩子，我能够构建可重用的代码，从而促进更高效的开发并提高平台的性能。'
				}
			},
			{
				id: 2.1,
				details:
					<div className={"w-full grid grid-cols-2"}>
						<ClickableImage
							src={meetingDiscussionImg} alt={"logo options"}
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
				details:{
					[LANGUAGE.EN]: 'As a front-end developer, I implemented the UI design and ensured that it functioned properly across various web browsers and devices. I leveraged a range of front-end technologies, including JavaScript, CSS, and HTML, to build out the platform\'s user interface and integrate the necessary logic and functionality.',
					[LANGUAGE.CN]: '作为前端开发人员，我实现了UI设计，并确保它在各种Web浏览器和设备上正常运行。我利用了一系列前端技术，包括JavaScript，CSS和HTML，来构建平台的用户界面并集成必要的逻辑和功能。'
				}
			},
			{
				id: 3.1,
				details:{
					[LANGUAGE.EN]:
						<div className={"w-full grid grid-cols-2"}>
							<ClickableImage
								src={notionImg1} alt={"feedback"}
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
					[LANGUAGE.CN]:
						<div className={"w-full grid grid-cols-2"}>
							<ClickableImage
								src={notionImg1} alt={"feedback"}
								className={"max-w-md max-h-lg object-contain px-6 pt-6"}
								style={{maxWidth: "450px"}}
							/>
							<div className={"flex flex-col px-3"}>
								<div style={{flex:1}} />
								<div className={"font-thin text-sm"}>迭代 I</div>
								<p className={"font-thin text-sm py-2"}>
									当我首次接手这个项目时，风格相当混乱，融合了 material-ui 和 tailwindcss。此外，网页的样式也很粗糙，使用了 daisyui 的默认样式。我进行了修改，使得当用户关注登陆或注册时，会触发相应的动画效果
								</p>
							</div>
						</div>,
				}

			},
			{
				id: 3.2,
				details:{
					[LANGUAGE.EN]:
						<div className={"w-full grid grid-cols-2"}>
							<ClickableImage
								src={notionImg3} alt={"feedback"}
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
					[LANGUAGE.CN]:
						<div className={"w-full grid grid-cols-2"}>
							<ClickableImage
								src={notionImg3} alt={"feedback"}
								className={"max-w-md max-h-lg object-contain px-6 pt-6"}
								style={{maxWidth: "450px"}}
							/>
							<div className={"flex flex-col px-3"}>
								<div style={{flex:1}} />
								<div className={"font-thin text-sm"}>迭代 II</div>
								<p className={"font-thin text-sm py-2"}>
									我根据我的第一个版本修改了逻辑，将登录和注册分开成不同的页面。同时，我添加了一个画廊来展示我的同事和我们团队的才华。
								</p>
							</div>
						</div>,
				}

			},
			{
				id: 3.3,
				details:{
					[LANGUAGE.EN]:
						<>
							<div className={"w-full grid grid-cols-2"}>
								<ClickableImage
									src={notionImg4} alt={"feedback"}
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
							</div>
						</>,
					[LANGUAGE.CN]:
						<div className={"w-full grid grid-cols-2"}>
							<ClickableImage
								src={notionImg4} alt={"feedback"}
								className={"max-w-md max-h-lg object-contain px-6 pt-6"}
								style={{maxWidth: "450px"}}
							/>
							<div className={"flex flex-col px-3"}>
								<div style={{flex:1}} />
								{/*<div className={"font-bold text-md"}>Iteration II</div>*/}
								<p className={"font-thin text-sm py-2"}>
									同时，我也负责设计和开发个人资料页面。用户在此页面输入他们的个人信息，并在提交后，后端返回一个用于显示过去案例研究的JSON文件。
								</p>
							</div>
						</div>,
				}

			},
			{
				id: 3.4,
				details:{
					[LANGUAGE.EN]:
						<>
							<div className={"w-full grid grid-cols-2 py-3"}>
								<ClickableImage
									src={sortedProfileImages[1]} alt={"feedback"}
									className={"max-w-md max-h-lg object-contain px-6 pt-6"}
									style={{maxWidth: "450px"}}
								/>
								<div className={"flex flex-col px-3"}>
									<div style={{flex:1}} />
									{/*<div className={"font-bold text-md"}>Iteration II</div>*/}
									<p className={"font-thin text-sm py-2"}>

									</p>
								</div>
							</div>
							<div className={"w-full grid grid-cols-2"}>
								<ClickableImage
									src={sortedProfileImages[4]} alt={"feedback"}
									className={"max-w-md max-h-lg object-contain px-6 pt-6"}
									style={{maxWidth: "450px"}}
								/>
								<div className={"flex flex-col px-3"}>
									<div style={{flex:1}} />
									{/*<div className={"font-bold text-md"}>Iteration II</div>*/}
									<p className={"font-thin text-sm py-2"}>
										After the user submits their information, the backend returns a JSON file that is used to display past case studies.
									</p>
								</div>
							</div>
						</>,
				}

			},
			{
				id: 4,
				details:{
					[LANGUAGE.EN]: 'Overall, my contributions at WeLight were instrumental in delivering an enhanced user experience, and my use of hooks for animation helped to streamline development and create a dynamic, engaging platform.',
					[LANGUAGE.CN]: '总的来说，我在WeLight的贡献对于提供增强的用户体验至关重要，我对动画的使用有助于简化开发并创建一个动态，引人入胜的平台。'
				}
			},

			{
				id: 4.1,
				details:{
					[LANGUAGE.EN]:
						<div className={"w-full grid grid-cols-2"}>
							<ClickableImage
								src={feedbackImg} alt={"feedback"}
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
					[LANGUAGE.CN]:
						<div className={"w-full grid grid-cols-2"}>
							<ClickableImage
								src={feedbackImg} alt={"feedback"}
								className={"max-w-md max-h-lg object-contain px-6 pt-6"}
								style={{maxHeight: "300px"}}
							/>
							<div className={"flex flex-col px-3"}>
								<div style={{flex:1}} />
								<div className={"font-thin text-sm"}>反馈</div>
								<p className={"font-thin text-sm py-2"}>
									在我们的展示之后，我们收到了观众和评委的反馈。每个人都对我们的项目表示出信心。</p>
							</div>
						</div>,
				}
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
