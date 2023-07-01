import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { FiArrowDownCircle } from 'react-icons/fi';
import testGIF from '../../images/gif/test.gif';
import { motion } from 'framer-motion';
import {useCallback} from "react";
import {useApp} from "../../context/AppContext";

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
			greeting = "Hi, I am George";
			selfIntro = "A Front-end Developer & Design Enthusiast";
			checkResume = "Check my Resume";
			break;
		case LANGUAGE.CN:
			greeting = "欢迎";
			selfIntro = "专注网络开发和交互设计";
			checkResume = "我的简历";
			break;
		default:
			greeting = "Hi, I am George";
			selfIntro = "A Front-end Developer & Design Enthusiast";
			checkResume = "Check my Resume";
			break;
	}

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col sm:justify-around items-center sm:flex-row mt-12 md:mt-2"
		>
			<div className="w-full md:w-1/3 text-left">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
				>
					{greeting}
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
				>
					{selfIntro}
				</motion.p>
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
						href="/files/Resume-YihaoGeorgeXu-0701.pdf"
						target="_blank"
						className="font-general-medium flex justify-center items-center w-64 sm:w-96 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
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
				className="w-full sm:w-1/3 text-right float-right mt-8 sm:mt-0"
			>
					<img
						className="w-full rounded-lg cursor-pointer"
						onClick={executeScroll}
						src={
							activeTheme === 'dark' ? testGIF : testGIF
						}
						alt="Developer"
					/>
			</motion.div>
		</motion.section>
	);
};

export default AppBanner;
