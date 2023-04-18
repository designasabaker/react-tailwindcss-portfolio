import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';
import { SingleProjectProvider } from '../context/SingleProjectContext';
import { motion } from 'framer-motion';
import {Link, useParams} from 'react-router-dom';
import Button from "../components/reusable/Button";

const ProjectSingle = () => {
	let { projectName } = useParams();
	
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
			<SingleProjectProvider projectName={projectName}>
				<ProjectHeader />
				<ProjectGallery />
				<ProjectInfo />
				<ProjectRelatedProjects />
				<div className="mt-8 sm:mt-16 flex justify-center">
					<Link
						to="/react-tailwindcss-portfolio/projects"
						className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
						aria-label="More Projects"
					>
						<Button title="More Projects" />
					</Link>
				</div>
			</SingleProjectProvider>
		</motion.div>
	);
};

export default ProjectSingle;
