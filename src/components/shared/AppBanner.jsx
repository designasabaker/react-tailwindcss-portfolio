import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { FiArrowDownCircle } from 'react-icons/fi';
// import testGIF from '../../images/gif/test.gif';
import { motion } from 'framer-motion';
import {useCallback} from "react";
import {useApp} from "../../context/AppContext";
import ImageGallery from "../Home/ImageGallery";
import logos from "../../images/logo/index";
import techLogos from "../../images/techs/index";
import TypeWriter from "../test/TypeWriter";
import './app-banner.css'

const AppBanner = () => {
	const {lang, LANGUAGE} = useApp();
	const [activeTheme] = useThemeSwitcher();
	const executeScroll = useCallback(() => {
		const element = document.getElementById("homeProjects");
		if (element) {
			element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
		}
	}, []);

	let greeting, selfIntro, checkResume = '';
	switch(lang){
		case LANGUAGE.EN:
			greeting = ["Welcome !","I'm George Yihao Xu"];
			selfIntro = "A Web Developer & Design Enthusiast";
			checkResume = "Check my Resume";
			break;
		case LANGUAGE.CN:
			greeting = ["欢迎", "我是许易豪 ：）"];
			selfIntro = "专注网络开发和交互设计";
			checkResume = "我的简历";
			break;
		default:
			greeting = "Hi, I am George";
			selfIntro = "A Web Developer & Design Enthusiast";
			checkResume = "Check my Resume";
			break;
	}

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="app-banner-container"
		>
			{/* intro */}
			<div className="w-full text-left">
				{/* school logos */}
				<div className={"flex flex-row gap-1 py-3 justify-start"}>
					{logos.map((logo, index) => {
						return (
							<motion.div
								initial={{ opacity: 0, y: 30 }}  // initial state: hidden and slightly above the final position
								animate={{ opacity: 1, y: 0 }}  // final state: fully visible and at final position
								transition={{ delay: index * 0.8 }}  // adjust delay to your liking
								key={index}
							>
								<a href={logo.url} target="_blank" key={index} title={logo.title}>
									<img src={logo.ico} key={index} alt="logo" style={{width:60}}/>
								</a>
							</motion.div>)})}
				</div>
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="py-1 m-0 font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
				>
					<TypeWriter textContents={greeting} typeTimeGap={100}/>
					{/*{greeting}*/}
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="py-1 m-0 font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
				>
					{selfIntro}
				</motion.p>
				{/* tech logos */}
				<div style={{
					display: "flex",
					gap: 5,
					flexWrap: "wrap",
					maxWidth: 300,
					paddingTop: 15,
				}}>
					{techLogos.map((logo, index) => {
						return (
							<motion.div
								initial={{ opacity: 0, y: 10 }}  // initial state: hidden and slightly above the final position
								animate={{ opacity: 1, y: 0 }}  // final state: fully visible and at final position
								transition={{ delay: index * 0.2 }}  // adjust delay to your liking
								key={index}
							>
								{logo?.url ? (
									<a href={logo?.url} target={"_blank"} title={logo?.title || ''}>
										<img src={logo?.ico || logo} key={index} alt={`techLogo: ${logo?.title || ''}`}
											 style={{width: 18, height: 18}}/>
									</a>
								) : (
									<img src={logo?.ico || logo} key={index} alt={`techLogo: ${logo?.title || ''}`}
										 style={{width: 18, height: 18}}/>
								)}
							</motion.div>
						)})}
				</div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex justify-center sm:block"
				>
					<a
						// download="GeorgeResume.pdf"
						href="/files/Yihao_George_Xu_Resume.pdf"
						target="_blank"
						className="font-general-medium flex justify-center items-center w-64 sm:w-96 mt-12 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
						aria-label="Download Resume"
					>
						<FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							{checkResume}
						</span>
					</a>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="w-full text-right float-right mt-0"
			>
				{/* slides */}
				<ImageGallery />
			</motion.div>
		</motion.section>
	);
};

export default AppBanner;
