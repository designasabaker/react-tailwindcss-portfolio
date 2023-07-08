import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import ClickableImage from "./ClickableImage";
import { motion } from 'framer-motion';

const ProjectGallery = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
		<div className="grid grid-cols-1 overflow-hidden sm:grid-cols-3 gap-3 px-1 sm:px-0 sm:gap-10 mt-12 ">
			{singleProjectData.ProjectImages.map((project, index) => {
				return (
					<motion.div
						key={project.id}
						initial={{ opacity: 0.5 }}
						animate={{ opacity: 1 }}
						delay={index * 0.2}
						transition={{
							ease: 'easeInOut',
							duration: 0.7,
							delay: 0.15,
						}}>
						<ClickableImage key={project.id} id={project.id} src={project.img} alt={project.title} />
					</motion.div>
				);
			})}
		</div>
	);
}

export default ProjectGallery;
