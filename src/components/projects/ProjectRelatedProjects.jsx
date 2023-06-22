import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import {Link} from "react-router-dom";

const ProjectRelatedProjects = () => {
	const { singleProjectData } = useContext(SingleProjectContext);
	// function forceUpdate() {
	// 	window.location.reload();
	// }

	return (
		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
				{singleProjectData.RelatedProject.title}
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
				{singleProjectData.RelatedProject.Projects.map((project) => {
					return (
						<Link to={`/projects/${project.name}`} key={project.id}>
							<div className="hover-zoom">
								<img
									src={project.img}
									className="w-64 h-full object-contain overflow-hidden"
									alt={project.title}
									key={project.id}
									loading={"lazy"}
								/>
								<p
									className="text-center mt-2"
								>{project.title}</p>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectRelatedProjects;
