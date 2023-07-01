import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';
import { SingleProjectProvider } from '../context/SingleProjectContext';
import { motion } from 'framer-motion';
import {Link, useParams} from 'react-router-dom';
import Button from "../components/reusable/Button";

import MoreProjectsBtn from "../components/projects/MoreProjectsBtn";
import {BackToProjects} from "../components/projects/BackToProjects";

const ProjectSingle = () => {
	let { projectName } = useParams();
	
	return (
		<motion.div
			initial={{ opacity: 0, left: -100 }}
			animate={{ opacity: 1, left: 0 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
			<SingleProjectProvider projectName={projectName}>
				<ProjectHeader />
				<ProjectGallery />
				<ProjectInfo />
				<ProjectRelatedProjects />
				<MoreProjectsBtn />
				<BackToProjects />
			</SingleProjectProvider>
		</motion.div>
	);
};

export default ProjectSingle;
